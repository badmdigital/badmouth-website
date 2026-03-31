import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/zI3db6maiDVNpzh0Fq5W/webhook-trigger/2828e567-ac4d-4492-b8ff-8ec0e0e6eb50";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      source: "badmouthdigital.com",
      page: "coming-soon",
      tags: ["lead - website", "lead - coming soon"],
      submitted_at: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
