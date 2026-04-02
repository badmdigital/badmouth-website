import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    logoPath: string;
    logoAlt: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
  };
  navigation: {
    header: Array<{
      label: string;
      href: string;
    }>;
  };
  settings: {
    theme: string;
    leadCaptureMode: string;
  };
};

export type HomePageContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headlineLines: string[];
    highlightLineIndex: number;
    subheadline: string;
    supportingText: string;
    primaryCta: {
      label: string;
      href: string;
    };
    formPlaceholder: string;
    successHeadline: string;
    successBody: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};

export type ContentPage = {
  route: string;
  status: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

const contentRoot = path.join(process.cwd(), "content");

async function readJsonFile<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function getSiteContent(): Promise<SiteContent> {
  return readJsonFile<SiteContent>(path.join(contentRoot, "site.json"));
}

export async function getHomePageContent(): Promise<HomePageContent> {
  return readJsonFile<HomePageContent>(
    path.join(contentRoot, "pages", "home.json"),
  );
}

export async function getContentPageSlugs(): Promise<string[]> {
  const pagesDir = path.join(contentRoot, "pages");
  const entries = await readdir(pagesDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name.replace(/\.json$/, ""))
    .filter((slug) => slug !== "home")
    .sort();
}

export async function getContentPage(slug: string): Promise<ContentPage | null> {
  try {
    return await readJsonFile<ContentPage>(
      path.join(contentRoot, "pages", `${slug}.json`),
    );
  } catch {
    return null;
  }
}
