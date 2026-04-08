import "server-only";

export type TrackingConfig = {
  gtmId?: string | null;
  ga4Id?: string | null;
  fbPixelId?: string | null;
  gettermsScript?: string | null;
  customHead?: string | null;
  customBody?: string | null;
  badmouthSlug?: string | null;
};

type TrackingConfigResponse = {
  slug?: string;
  tracking?: TrackingConfig;
};

export async function getTrackingConfig(host: string): Promise<TrackingConfig> {
  const normalizedHost = host.split(":")[0]?.trim().toLowerCase();
  if (!normalizedHost) return {};

  const commandBaseUrl =
    process.env.COMMAND_CENTER_URL || "https://control.badmouthdigital.com";

  try {
    const res = await fetch(
      `${commandBaseUrl}/api/public/tracking-config?host=${encodeURIComponent(normalizedHost)}`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) return {};

    const data = (await res.json()) as TrackingConfigResponse;
    return data.tracking || {};
  } catch {
    return {};
  }
}
