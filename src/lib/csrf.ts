export function isSameOrigin(
  origin: string | null,
  host: string | null,
  forwardedHost: string | null,
  requestUrl: string,
): boolean {
  if (!origin) return true;
  if (origin === "null") return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const candidates = new Set<string>();
  if (host) candidates.add(host);
  if (forwardedHost) candidates.add(forwardedHost);
  try {
    candidates.add(new URL(requestUrl).host);
  } catch {
    // ignore
  }
  return candidates.has(originHost);
}
