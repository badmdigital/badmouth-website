"use client";

import Link from "next/link";
import { useState } from "react";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  wordCount: string;
  featured: boolean;
};

const posts: Post[] = [
  {
    title: "Why Your SEO Strategy Is Garbage (And How to Fix It)",
    excerpt:
      "Stop chasing algorithms and start building an empire. Here's why your 'safe' strategy is killing your traffic.",
    category: "Nobody Finds Me",
    slug: "seo-strategy-is-garbage",
    date: "Feb 20, 2026",
    readTime: "7 min",
    wordCount: "1,842",
    featured: true,
  },
  {
    title: "Your Website Isn't Broken. Your System Is.",
    excerpt:
      "That pretty site cost you five grand and books zero jobs. Here's what's actually missing behind the scenes.",
    category: "Website Not Working",
    slug: "your-website-isnt-broken",
    date: "Feb 15, 2026",
    readTime: "5 min",
    wordCount: "1,356",
    featured: false,
  },
  {
    title: "Ad Spend or Bonfire? You Decide.",
    excerpt:
      "Are you investing or just keeping warm? How to tell if your PPC agency is taking you for a ride.",
    category: "Wasting Money on Ads",
    slug: "ad-spend-or-bonfire",
    date: "Feb 10, 2026",
    readTime: "6 min",
    wordCount: "1,580",
    featured: false,
  },
  {
    title: "The Agency Burned You. Now What?",
    excerpt:
      "You got ghosted, overcharged, and underwhelmed. Here's how to vet the next one (or do it yourself).",
    category: "Been Burned Before",
    slug: "agency-burned-you",
    date: "Feb 5, 2026",
    readTime: "5 min",
    wordCount: "1,290",
    featured: false,
  },
  {
    title: "You Don't Have a Marketing Problem",
    excerpt:
      "You have a 'what the hell is working' problem. Here's how to figure out what's actually driving your business.",
    category: "Don't Know What's Working",
    slug: "you-dont-have-a-marketing-problem",
    date: "Jan 30, 2026",
    readTime: "6 min",
    wordCount: "1,475",
    featured: false,
  },
  {
    title: "Stop Skipping Steps",
    excerpt:
      "Everybody wants to jump to ads. Here's why doing things in order is the fastest path to results.",
    category: "Website Not Working",
    slug: "stop-skipping-steps",
    date: "Jan 25, 2026",
    readTime: "4 min",
    wordCount: "1,110",
    featured: false,
  },
];

const categories = [
  "All",
  "Website Not Working",
  "Nobody Finds Me",
  "Wasting Money on Ads",
  "Don't Know What's Working",
  "Been Burned Before",
];

function badgeFor(cat: string, isFirst: boolean) {
  if (isFirst) {
    return <span className="freq-filter__badge freq-filter__badge--brand">ALL</span>;
  }
  switch (cat) {
    case "Website Not Working":
      return (
        <span className="freq-filter__badge freq-filter__badge--brand">
          ⚡ CRITICAL
        </span>
      );
    case "Nobody Finds Me":
      return (
        <span className="freq-filter__badge freq-filter__badge--teal">
          ⚡ HIGH VOLTAGE
        </span>
      );
    case "Wasting Money on Ads":
      return (
        <span className="freq-filter__badge freq-filter__badge--yellow">
          💥 EXPLOSIVE
        </span>
      );
    case "Don't Know What's Working":
      return (
        <span className="freq-filter__badge freq-filter__badge--muted">
          ⚙ DIAGNOSTIC
        </span>
      );
    case "Been Burned Before":
      return (
        <span className="freq-filter__badge freq-filter__badge--brand">
          🚩 WARNING
        </span>
      );
    default:
      return null;
  }
}

export function TransmissionsIndex() {
  const [active, setActive] = useState("All");

  return (
    <>
      {/* SECTION 1 — BROADCAST HERO */}
      <section className="broadcast-hero surface-base noise-bg">
        <div className="broadcast-hero__bg"></div>
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content stack-6">
            {/* On Air Indicator */}
            <div className="on-air-badge">
              <span className="on-air-badge__dot"></span>
              <span className="on-air-badge__text">ON AIR</span>
              <span className="on-air-badge__freq">FM 666.0</span>
            </div>

            <h1 className="t-display t-display--hero broadcast-hero__title">
              <span style={{ color: "var(--color-brand)" }}>TRANSMISSIONS</span>
            </h1>

            <p className="t-body t-body--lg" style={{ maxWidth: "55ch" }}>
              No fluff. No theory. No &ldquo;10 Ways to Boost Your Engagement.&rdquo;
              Just real marketing breakdowns for people who do real work.
            </p>

            {/* Signal Meter */}
            <div className="signal-meter">
              <div className="signal-meter__bars">
                <span className="signal-meter__bar signal-meter__bar--1"></span>
                <span className="signal-meter__bar signal-meter__bar--2"></span>
                <span className="signal-meter__bar signal-meter__bar--3"></span>
                <span className="signal-meter__bar signal-meter__bar--4"></span>
                <span className="signal-meter__bar signal-meter__bar--5"></span>
              </div>
              <span className="signal-meter__label">SIGNAL STRENGTH</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FIND YOUR FREQUENCY (Filter + Posts) */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-6">
            <p className="t-eyebrow">Browse by Problem</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              FIND YOUR <span className="t-accent t-flicker">FREQUENCY.</span>
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="col-full">
            <div className="freq-filters" id="freq-filters">
              {categories.map((cat, i) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`freq-filter${isActive ? " freq-filter--active" : ""}`}
                    data-category={cat}
                    onClick={() => setActive(cat)}
                  >
                    <span className="freq-filter__label">{cat}</span>
                    {badgeFor(cat, i === 0)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="col-full">
            <div
              className="inner-grid-2"
              style={{ gap: "var(--space-6)" }}
              id="posts-grid"
            >
              {posts.map((post) => {
                const hidden = active !== "All" && post.category !== active;
                const cardClass = `transmission-card${
                  post.featured ? " transmission-card--featured" : ""
                }${hidden ? " transmission-card--hidden" : ""}`;
                return (
                  <Link
                    key={post.slug}
                    href={`/transmissions/${post.slug}`}
                    className={cardClass}
                    data-post-category={post.category}
                  >
                    <div className="transmission-card__header">
                      <span className="transmission-card__date">{post.date}</span>
                      {post.featured ? (
                        <span className="transmission-card__badge">⚠ LATEST</span>
                      ) : (
                        <span className="transmission-card__time">
                          {post.readTime} read
                        </span>
                      )}
                    </div>
                    <h3 className="t-display t-display--card transmission-card__title">
                      {post.title}
                    </h3>
                    <p className="t-body t-body--sm">{post.excerpt}</p>
                    <div className="transmission-card__footer">
                      <div className="transmission-card__meta">
                        <span className="transmission-card__category">
                          {post.category}
                        </span>
                        <span className="transmission-card__word-count">
                          {post.wordCount} words
                        </span>
                      </div>
                      <span className="transmission-card__cta">Read →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section
        className="section section--cta section--padded section--mic-drop has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ color: "#fff", marginInline: "auto" }}
            >
              DONE READING?
              <br />
              <span className="mic-drop__headline">LET&apos;S FIX YOURS.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{
                marginInline: "auto",
                maxWidth: "50ch",
                marginTop: "var(--space-4)",
              }}
            >
              These posts give you the playbook. If you want someone to run it for you,
              that&apos;s what we do.
            </p>
            <Link href="/contact" className="btn btn--lg">
              Diagnose Your System →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
