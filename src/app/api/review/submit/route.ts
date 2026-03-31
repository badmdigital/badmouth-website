import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";

function getGHLHeaders() {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) throw new Error("GHL_API_KEY not set");
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
  };
}

function getLocationId() {
  const id = process.env.GHL_LOCATION_ID;
  if (!id) throw new Error("GHL_LOCATION_ID not set");
  return id;
}

/* ── Helpers ──────────────────────────────────────── */

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  return { firstName: parts[0] || "", lastName: parts.slice(1).join(" ") || "" };
}

function formatSectionFeedback(
  sections: Record<string, { soundsLikeYou: string; factualIssues: string; changes: string }>
): string {
  return Object.entries(sections)
    .map(([name, fb]) => {
      const status =
        fb.soundsLikeYou === "yes" ? "Yes"
        : fb.soundsLikeYou === "almost" ? "Almost"
        : fb.soundsLikeYou === "not-quite" ? "Not quite"
        : "No response";
      const parts = [`${name.toUpperCase()}: ${status}`];
      if (fb.factualIssues) parts.push(`Factual: ${fb.factualIssues}`);
      if (fb.changes) parts.push(`Changes: ${fb.changes}`);
      return parts.join(" | ");
    })
    .join("\n");
}

function getStatusTag(status: string): string {
  switch (status) {
    case "ready": return "review-ready to launch";
    case "needs-revision": return "review-needs revision";
    case "lets-talk": return "review-wants call";
    default: return "";
  }
}

/* ── GHL API ──────────────────────────────────────── */

async function ghlFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${GHL_BASE}${path}`, { ...options, headers: getGHLHeaders() });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL] ${options.method || "GET"} ${path} failed:`, res.status, text);
    return null;
  }
  return res.json();
}

/* ── Main Handler ─────────────────────────────────── */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("[Review] Submission from:", body.brandName, body.contactEmail);

    const { firstName, lastName } = splitName(body.contactName || "");
    const feedbackText = body.sections ? formatSectionFeedback(body.sections) : "";

    // 1. Upsert contact — creates or updates by email
    const upsertData = await ghlFetch("/contacts/upsert", {
      method: "POST",
      body: JSON.stringify({
        locationId: getLocationId(),
        firstName,
        lastName,
        email: body.contactEmail || "",
        phone: body.phone || "",
        companyName: body.brandName || "",
        website: body.websiteUrl || "",
        address1: body.address || "",
        customFields: [
          { id: "BuD9ZZ1IdKlNXCvknLRB", field_value: body.type || "copy" },
          { id: "WnnezDBf5ySpXvQp35Te", field_value: body.overallStatus || "" },
          { id: "QZ4PXYaFCLGyOTzPIBhs", field_value: new Date().toISOString() },
          { id: "fIcr6nioDByA4Infohpt", field_value: body.stagingUrl || "" },
          { id: "AbjfEynMqulNSbttBeSN", field_value: body.contactRole || "" },
          { id: "5SHLuSWFJ8IbMIbpyz0E", field_value: body.businessEmail || "" },
          { id: "vtTX35qfEKQReqZgCGNl", field_value: body.businessHours || "" },
          { id: "u7ro5oNpBUk6C60N2yJs", field_value: body.services || "" },
          { id: "rAYhwYh6eKQOXe0zT0sK", field_value: body.pricing || "" },
          { id: "XmztSbIN1f1nMmPOOMJ9", field_value: body.serviceArea || "" },
          { id: "jrnYLpmqOGcSYslWTJ5f", field_value: body.idealClient || "" },
          { id: "voL8a1KPSgyOzZ8eXTWa", field_value: body.problemSolved || "" },
          { id: "RuMnjBYNynVVFX4RLr6f", field_value: body.differentiator || "" },
          { id: "IAV5aw7uBKtPiPEcLaNz", field_value: (body.toneOptions || []).join(", ") },
          { id: "ub8hbyGzxXONO3ACvv4y", field_value: body.wordsToUse || "" },
          { id: "PkV510SFLTgzif6gMtTn", field_value: body.wordsToAvoid || "" },
          { id: "hlDOaDxtOhq8cVBAp5vf", field_value: body.toneNotes || "" },
          { id: "VnLa3HNco9vwNDqKylOu", field_value: body.additionalNotes || "" },
          { id: "1dx4zQmf24mHvLjQw1Po", field_value: feedbackText },
        ],
      }),
    });

    const contactId = upsertData?.contact?.id;
    if (!contactId) {
      console.error("[GHL] Upsert response:", JSON.stringify(upsertData));
      return NextResponse.json({
        success: false,
        error: "Failed to create/update GHL contact",
        debug: { hasApiKey: !!process.env.GHL_API_KEY, hasLocationId: !!process.env.GHL_LOCATION_ID, upsertData },
      }, { status: 500 });
    }
    console.log("[GHL] Contact upserted:", contactId);

    // 2. Add tags
    const tags = ["review-copy submitted", "onboarding-intake complete"];
    const statusTag = getStatusTag(body.overallStatus);
    if (statusTag) tags.push(statusTag);

    await ghlFetch(`/contacts/${contactId}/tags`, {
      method: "POST",
      body: JSON.stringify({ tags }),
    });
    console.log("[GHL] Tags added:", tags);

    // 3. Add a formatted note with full feedback
    const noteLines = [
      `COPY REVIEW — ${new Date().toLocaleDateString()}`,
      `Brand: ${body.brandName}`,
      `Submitted by: ${body.contactName} (${body.contactRole || "N/A"})`,
      `Staging URL: ${body.stagingUrl || "N/A"}`,
      `Overall: ${body.overallStatus || "N/A"}`,
      "",
      "--- SECTION FEEDBACK ---",
      feedbackText || "No section feedback",
      "",
      body.additionalNotes ? `Notes: ${body.additionalNotes}` : "",
    ];

    await ghlFetch(`/contacts/${contactId}/notes`, {
      method: "POST",
      body: JSON.stringify({ body: noteLines.filter(Boolean).join("\n") }),
    });
    console.log("[GHL] Note added");

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Review Submit Error]", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
