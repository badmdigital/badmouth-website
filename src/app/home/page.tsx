import type { Metadata } from "next";

import { HomeContent } from "@/components/site/HomeContent";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Lead Systems for Local Service Businesses | Badmouth Digital",
  description:
    "Websites & marketing systems for local service businesses. No fluff. No dashboards nobody reads. Just a system that does its job.",
};

export default function HomeRoute() {
  return (
    <SiteShell currentPage="home">
      <HomeContent />
    </SiteShell>
  );
}
