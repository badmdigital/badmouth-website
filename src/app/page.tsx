import { ComingSoonPage } from "@/components/coming-soon-page";
import { getHomePageContent, getSiteContent } from "@/lib/site-content";

export default async function HomePage() {
  const [site, home] = await Promise.all([
    getSiteContent(),
    getHomePageContent(),
  ]);

  return <ComingSoonPage site={site} home={home} />;
}
