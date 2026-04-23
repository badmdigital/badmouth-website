import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/brand-guide/:path*", "/research/:path*"],
};

export default function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Referrer-Policy", "same-origin");
  return response;
}
