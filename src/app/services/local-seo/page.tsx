import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Local SEO | Badmouth Digital",
  description:
    "Get in front of people already looking for what you do. Google Maps. Service pages. Real local visibility.",
};

export default function LocalSeoPage() {
  return (
    <SiteShell currentPage="local-seo">
      {/* SECTION 1 — HERO */}
      <section className="section section--hero surface-base noise-bg">
        <div className="grid-page grid-align-center">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow" style={{ color: "var(--theme-accent-teal)" }}>Step 2 — Get Found</p>
            <h1 className="t-display t-display--hero">
              THEY&apos;RE SEARCHING<br />FOR YOU.<br />
              <span style={{ color: "var(--theme-accent-teal)" }}>AND FINDING YOUR COMPETITOR.</span>
            </h1>
            <p className="t-body t-body--lg" style={{ maxWidth: "55ch" }}>
              People in your area are Googling what you do right now. And they&apos;re hiring whoever shows up first. If that&apos;s not you, it doesn&apos;t matter how good your work is.
            </p>
            <p
              className="t-body t-body--md"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              You don&apos;t have a marketing problem. You have a visibility problem.
            </p>
            <Link
              href="/contact"
              className="btn btn--primary btn--lg"
              style={{
                background: "var(--theme-accent-teal)",
                borderColor: "var(--theme-accent-teal)",
                color: "var(--color-surface-base)",
              }}
            >
              Get Found →
            </Link>
          </div>
          <div className="col-right-5">
            <div
              style={{
                aspectRatio: "4/5",
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/badmouth-logo-stacked.png"
                alt="Badmouth Digital"
                style={{ width: "60%", opacity: 0.15 }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" style={{ background: "var(--theme-accent-teal)" }} />

      {/* SECTION 2 — PROBLEM */}
      <section className="section section--split section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow">Why You Don&apos;t Rank</p>
            <h2 className="t-display t-display--section">
              YOU CAN&apos;T RANK<br />
              <span className="t-accent t-crt-shake">IF YOU HAVE NOTHING TO RANK.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              You&apos;ve got a 5-page website. One home page. One about. One contact. Maybe a services page that lists everything you do in one paragraph.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              Google needs pages. Unique pages for each service. For each area. With real content. That&apos;s how you show up in Maps and in search. Not with one generic page and a prayer.
            </p>
          </div>
          <div className="col-right-5">
            <div className="card stack-3" style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}>
              <p
                className="t-body t-body--sm"
                style={{
                  color: "var(--theme-accent-teal)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                This Only Works If
              </p>
              <p className="t-body t-body--sm">Your website system is built (Step 1).</p>
              <p className="t-body t-body--sm">Your site can convert the traffic we send.</p>
              <p className="t-body t-body--sm">Your follow-up catches the leads.</p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
                If Step 1 isn&apos;t done, we start there. No arguments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT'S INCLUDED */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-6">
            <p className="t-eyebrow" style={{ color: "var(--theme-accent-teal)" }}>The Local Map Growth System</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              HERE&apos;S WHAT WE <span style={{ color: "var(--theme-accent-teal)" }}>BUILD.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div className="card stack-3">
                <h3 className="t-display t-display--card">GOOGLE PROFILE OPTIMIZATION</h3>
                <p className="t-body t-body--sm">
                  Full audit and optimization of your Google Business Profile. Categories, attributes, photos, posts, Q&amp;A. The works.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">SERVICE PAGES</h3>
                <p className="t-body t-body--sm">
                  Individual pages for each service you offer. Written for humans, structured for Google. New pages every week.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">AREA PAGES</h3>
                <p className="t-body t-body--sm">
                  Pages targeting every city, town, and neighborhood you serve. So Google knows where you work.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">ON-PAGE SEO</h3>
                <p className="t-body t-body--sm">
                  Title tags, meta descriptions, headers, schema markup. Every page optimized to rank, not just to exist.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">CITATION BUILDING</h3>
                <p className="t-body t-body--sm">
                  Consistent business info across directories. Google trusts businesses that show up the same everywhere.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">MONTHLY REPORTING</h3>
                <p className="t-body t-body--sm">
                  Rankings, traffic, calls, form fills. Real numbers. No vanity metrics. You&apos;ll know exactly what&apos;s happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION 4 — PRICING */}
      <section className="section section--statement section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-content text-center stack-6">
            <p className="t-eyebrow">Pricing</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              <span style={{ color: "var(--theme-accent-teal)" }}>$2,500</span> / MONTH
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Monthly SEO management. New pages every week. Ongoing optimization. Real reporting.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              No long-term contracts. Month-to-month. We earn your business or you walk.
            </p>
            <Link
              href="/contact"
              className="btn btn--primary btn--lg"
              style={{
                background: "var(--theme-accent-teal)",
                borderColor: "var(--theme-accent-teal)",
                color: "var(--color-surface-base)",
              }}
            >
              Request Local SEO →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--teal has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              STOP BEING<br />
              <span className="mic-drop__headline">INVISIBLE.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              People are searching for what you do right now. Let&apos;s make sure they find you.
            </p>
            <Link href="/contact" className="btn btn--lg">Get Found →</Link>
          </div>
        </div>
      </section>

      {/* REINFORCEMENT */}
      <section className="section section--statement section--padded-sm surface-pure">
        <div className="grid-page">
          <div className="col-content text-center">
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              Rankings without a converting website are useless. That&apos;s why Step 2 comes after Step 1.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
