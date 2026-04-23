import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const filePath = path.join(process.cwd(), "DESIGN.md");
  const content = await fs.readFile(filePath, "utf8");
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="DESIGN.md"',
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
