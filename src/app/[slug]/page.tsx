import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageTemplate } from "@/components/content-page";
import {
  getContentPage,
  getContentPageSlugs,
  getSiteContent,
} from "@/lib/site-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getContentPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function ContentPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const [site, page] = await Promise.all([
    getSiteContent(),
    getContentPage(slug),
  ]);

  if (!page) {
    notFound();
  }

  return <ContentPageTemplate site={site} page={page} />;
}
