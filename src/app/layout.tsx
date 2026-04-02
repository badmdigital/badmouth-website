import type { Metadata } from "next";

import { getHomePageContent, getSiteContent } from "@/lib/site-content";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const [site, home] = await Promise.all([
    getSiteContent(),
    getHomePageContent(),
  ]);

  return {
    title: home.seo.title || site.seo.siteTitle,
    description: home.seo.description || site.seo.siteDescription,
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
