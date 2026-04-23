import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { isSameOrigin } from "@/lib/csrf";
import { RESEARCH_COOKIE } from "@/lib/research-auth";

const LogoutSchema = z.object({
  honeypot: z.string().max(0).optional(),
});

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 30;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

function sanitize(value: string): string {
  return value.replace(/[\x00-\x1f\x7f]/g, "").trim();
}

export async function POST(request: Request) {
  const hdrs = await headers();
  if (
    !isSameOrigin(
      hdrs.get("origin"),
      hdrs.get("host"),
      hdrs.get("x-forwarded-host"),
      request.url,
    )
  ) {
    return new NextResponse("forbidden", { status: 403 });
  }

  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  if (!rateLimit(ip)) {
    return new NextResponse("too many requests", { status: 429 });
  }

  const form = await request.formData().catch(() => null);
  const raw = {
    honeypot: form ? sanitize(String(form.get("honeypot") ?? "")) : "",
  };
  const parsed = LogoutSchema.safeParse(raw);
  if (!parsed.success || (parsed.data.honeypot && parsed.data.honeypot.length > 0)) {
    return new NextResponse("bad request", { status: 400 });
  }

  const response = NextResponse.redirect(new URL("/research/login", request.url), {
    status: 303,
  });
  response.cookies.delete(RESEARCH_COOKIE);
  return response;
}
