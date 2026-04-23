import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { isSameOrigin } from "@/lib/csrf";
import {
  RESEARCH_COOKIE,
  RESEARCH_PASSWORD,
  cookieValueFor,
} from "@/lib/research-auth";

const MAX_PASSWORD_LEN = 128;

const AuthSchema = z.object({
  password: z.string().min(1).max(MAX_PASSWORD_LEN),
  from: z
    .string()
    .max(256)
    .regex(/^\/[a-z0-9\-_/]*$/i, "invalid redirect")
    .refine((v) => !v.startsWith("//"), "invalid redirect")
    .optional()
    .default("/research"),
  // Honeypot — must be empty. Bots auto-fill every field.
  honeypot: z.string().max(0).optional(),
});
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 10;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

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

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
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
    return new NextResponse("too many attempts", {
      status: 429,
      headers: { "Retry-After": "900" },
    });
  }

  const form = await request.formData();
  const raw = {
    password: sanitize(String(form.get("password") ?? "")),
    from: sanitize(String(form.get("from") ?? "/research")),
    honeypot: sanitize(String(form.get("honeypot") ?? "")),
  };

  const parsed = AuthSchema.safeParse(raw);
  if (!parsed.success) {
    const url = new URL("/research/login", request.url);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url, { status: 303 });
  }

  const { password, from, honeypot } = parsed.data;

  if (honeypot && honeypot.length > 0) {
    return NextResponse.redirect(new URL("/research/login", request.url), {
      status: 303,
    });
  }

  if (!safeEqual(password, RESEARCH_PASSWORD)) {
    const url = new URL("/research/login", request.url);
    url.searchParams.set("error", "1");
    url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(from, request.url), {
    status: 303,
  });
  response.cookies.set(RESEARCH_COOKIE, cookieValueFor(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
