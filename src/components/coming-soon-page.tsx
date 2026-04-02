"use client";

import Image from "next/image";
import { useState } from "react";

import type { HomePageContent, SiteContent } from "@/lib/site-content";

type ComingSoonPageProps = {
  home: HomePageContent;
  site: SiteContent;
};

function renderSubheadline(subheadline: string) {
  const systemsMatch = subheadline.match(/Systems\.?$/i);

  if (!systemsMatch) {
    return subheadline;
  }

  const systemsText = systemsMatch[0];
  const prefix = subheadline.slice(0, -systemsText.length).trimEnd();

  return (
    <>
      {prefix} <span className="text-bad-red font-bold">{systemsText}</span>
    </>
  );
}

export function ComingSoonPage({ home, site }: ComingSoonPageProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="scanlines noise crt-vignette relative flex min-h-screen flex-col items-center overflow-hidden px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 pt-8 sm:pt-10 flicker">
        <Image
          src={site.brand.logoPath}
          alt={site.brand.logoAlt}
          width={200}
          height={60}
          priority
          className="w-[120px] sm:w-[200px]"
        />
      </div>

      <main className="relative z-10 mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center text-center">
        <h1
          className="glitch-text mt-6 mb-10 font-heading text-6xl leading-none tracking-tighter text-bad-white uppercase sm:mt-0 sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {home.hero.headlineLines.map((line, index) => (
            <span
              key={`${line}-${index}`}
              className={
                index === home.hero.highlightLineIndex ? "text-bad-red" : ""
              }
            >
              {line}
              {index < home.hero.headlineLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>

        <p
          className="mb-4 max-w-xl text-lg leading-relaxed text-bad-white/75 sm:text-xl md:text-2xl"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {renderSubheadline(home.hero.subheadline)}
        </p>

        <p
          className="mb-10 text-sm text-bad-white/40"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {home.hero.supportingText}
        </p>

        {!submitted ? (
          <form
            id="notify"
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={home.hero.formPlaceholder}
              className="flex-1 border-2 border-bad-gray bg-bad-gray/50 px-4 py-3 text-sm text-bad-white placeholder:text-bad-white/30 transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            />
            <button
              type="submit"
              disabled={loading}
              className="pulse-hover border-2 border-bad-red bg-bad-red px-6 py-3 text-sm font-bold tracking-wider text-bad-white uppercase transition-all duration-200 hover:bg-bad-red/90 disabled:opacity-50"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {loading ? "..." : home.hero.primaryCta.label}
            </button>
          </form>
        ) : (
          <div className="w-full max-w-md border-2 border-bad-red/40 bg-bad-red/5 px-6 py-4">
            <p
              className="text-sm font-bold tracking-wider text-bad-red uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {home.hero.successHeadline}
            </p>
            <p
              className="mt-1 text-xs text-bad-white/50"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {home.hero.successBody}
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-px w-16 bg-bad-red/30" />
          <p
            className="text-xs tracking-[0.3em] text-bad-white/50 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {home.footer.tagline}
          </p>
        </div>
      </main>

      <footer className="relative z-10 pt-12 pb-6">
        <p
          className="text-xs text-bad-white/15"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {home.footer.copyright}
        </p>
      </footer>
    </div>
  );
}
