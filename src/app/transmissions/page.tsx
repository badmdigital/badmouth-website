import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";
import { TransmissionsIndex } from "@/components/site/TransmissionsIndex";

export const metadata: Metadata = {
  title: "Transmissions | Badmouth Digital",
  description:
    "Real marketing breakdowns for local service businesses. No fluff, no theory, no corporate jargon. Just what works and what doesn't.",
};

export default function TransmissionsPage() {
  return (
    <SiteShell currentPage="transmissions">
      <TransmissionsIndex />
    </SiteShell>
  );
}
