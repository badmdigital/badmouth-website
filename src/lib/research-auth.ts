export const RESEARCH_COOKIE = "bmd_research_auth";
export const RESEARCH_PASSWORD = "BadmouthDigital2026";

export function cookieValueFor(password: string): string {
  // Simple obfuscated token — matches password reversed + length.
  // Not cryptographic; the password itself is not secret-level.
  return Buffer.from(`${password}:${password.length}`).toString("base64");
}

export function isValidToken(token: string | undefined): boolean {
  if (!token) return false;
  return token === cookieValueFor(RESEARCH_PASSWORD);
}
