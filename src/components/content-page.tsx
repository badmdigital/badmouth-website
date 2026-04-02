import Link from "next/link";

import type { ContentPage, SiteContent } from "@/lib/site-content";

type ContentPageProps = {
  page: ContentPage;
  site: SiteContent;
};

export function ContentPageTemplate({ page, site }: ContentPageProps) {
  return (
    <div className="scanlines noise crt-vignette relative flex min-h-screen flex-col overflow-hidden px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between py-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-bad-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {site.brand.name}
        </Link>

        <nav className="hidden gap-5 md:flex">
          {site.navigation.header.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.25em] text-bad-white/55 transition-colors hover:text-bad-red"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center py-12">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <section className="max-w-3xl">
            <p
              className="mb-5 text-xs uppercase tracking-[0.4em] text-bad-red"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {page.hero.eyebrow}
            </p>

            <h1
              className="mb-6 text-5xl leading-none tracking-tight text-bad-white uppercase sm:text-6xl md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {page.hero.headline}
            </h1>

            <p
              className="max-w-2xl text-lg leading-relaxed text-bad-white/72 sm:text-xl"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {page.hero.subheadline}
            </p>
          </section>

          <aside className="border border-bad-red/25 bg-bad-red/5 p-6 backdrop-blur-sm">
            <p
              className="text-xs uppercase tracking-[0.35em] text-bad-white/45"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Status
            </p>
            <p
              className="mt-3 text-2xl uppercase text-bad-red"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {page.status}
            </p>
            <p
              className="mt-4 text-sm leading-relaxed text-bad-white/65"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              This page now exists in the content contract and is ready to move
              from planning into a dedicated built route and full page layout.
            </p>
            <Link
              href={page.cta.href}
              className="mt-6 inline-flex border-2 border-bad-red bg-bad-red px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-bad-white transition-colors hover:bg-bad-red/90"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {page.cta.label}
            </Link>
          </aside>
        </div>
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between py-8">
        <p
          className="text-xs uppercase tracking-[0.3em] text-bad-white/35"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {site.brand.tagline}
        </p>
        <p
          className="text-xs text-bad-white/20"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {site.brand.name}
        </p>
      </footer>
    </div>
  );
}
