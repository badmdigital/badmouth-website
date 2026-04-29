import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Paid Ads | Badmouth Digital",
  description:
    "Google Ads. Facebook Ads. Landing pages. Retargeting. Jobs on demand — when your system is ready for it.",
};

export default function PaidAdsPage() {
  return (
    <SiteShell currentPage="paid-ads">
      {/* SECTION 1 — HERO */}
      <section className="section section--hero surface-base noise-bg">
        <div className="grid-page grid-align-center">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow" style={{ color: "var(--theme-accent-yellow)" }}>Step 3 — Turn It Up</p>
            <h1 className="t-display t-display--hero">
              YOU&apos;VE SPENT MONEY<br />ON ADS.<br />
              <span style={{ color: "var(--theme-accent-yellow)" }}>DID THEY ACTUALLY WORK?</span>
            </h1>
            <p className="t-body t-body--lg" style={{ maxWidth: "55ch" }}>
              You spent the money. Got clicks. Maybe some calls. But can you tell me exactly how many jobs came from last month&apos;s ad spend? Which campaigns? Which keywords?
            </p>
            <p
              className="t-body t-body--md"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              If you can&apos;t, you&apos;re gambling. Not advertising.
            </p>
            <Link
              href="/contact"
              className="btn btn--primary btn--lg"
              style={{
                background: "var(--theme-accent-yellow)",
                borderColor: "var(--theme-accent-yellow)",
                color: "var(--color-surface-base)",
              }}
            >
              Turn It Up →
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

      <hr className="section-divider" style={{ background: "var(--theme-accent-yellow)" }} />

      {/* SECTION 2 — PROBLEM */}
      <section className="section section--split section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow">Why Your Ads Failed</p>
            <h2 className="t-display t-display--section">
              YOUR ADS AREN&apos;T THE PROBLEM.<br />
              <span className="t-accent t-crt-shake">YOUR SYSTEM IS.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              You ran Google Ads. Or Facebook Ads. Or both. You got clicks. Maybe even some calls. But the leads vanished. The numbers didn&apos;t add up. Nobody could tell you what your cost per job was.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              Because the landing page wasn&apos;t built for conversion. The follow-up wasn&apos;t automated. The tracking wasn&apos;t set up. The ad was doing its job. Everything else wasn&apos;t.
            </p>
          </div>
          <div className="col-right-5">
            <div className="card stack-3" style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}>
              <p
                className="t-body t-body--sm"
                style={{
                  color: "var(--theme-accent-yellow)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                This Only Works When
              </p>
              <p className="t-body t-body--sm">Your website converts (Step 1).</p>
              <p className="t-body t-body--sm">Your follow-up is automated.</p>
              <p className="t-body t-body--sm">Your tracking is installed.</p>
              <p className="t-body t-body--sm">Your Google profile is optimized (Step 2).</p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
                Ads are gasoline. Make sure the engine runs first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT'S INCLUDED */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-6">
            <p className="t-eyebrow" style={{ color: "var(--theme-accent-yellow)" }}>Paid Ads Management</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              HERE&apos;S WHAT YOU <span style={{ color: "var(--theme-accent-yellow)" }}>GET.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div className="card stack-3">
                <h3 className="t-display t-display--card">CAMPAIGN CREATION</h3>
                <p className="t-body t-body--sm">
                  Google Ads. Facebook Ads. Built from scratch for your services, your area, your audience. Not templates.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">LANDING PAGES</h3>
                <p className="t-body t-body--sm">
                  Dedicated pages for each campaign. Built to convert, not to look pretty. One CTA. One job.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">CONVERSION TRACKING</h3>
                <p className="t-body t-body--sm">
                  Every call, form, click — tracked back to the exact ad and keyword. Know your cost per lead and cost per job.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">RETARGETING</h3>
                <p className="t-body t-body--sm">
                  People who visited but didn&apos;t convert see your ads again. Stay top of mind until they&apos;re ready.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">FOLLOW-UP AUTOMATION</h3>
                <p className="t-body t-body--sm">
                  Ad lead comes in? System follows up. Text, email, CRM entry. All automatic. No leads fall through.
                </p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">MONTHLY REPORTING</h3>
                <p className="t-body t-body--sm">
                  Spend, leads, cost per lead, cost per job. Real numbers. If it&apos;s not working, we tell you and fix it.
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
              <span style={{ color: "var(--theme-accent-yellow)" }}>$2,500</span> / MONTH
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Management fee. Plus your ad spend (you control the budget). Campaign creation, optimization, landing pages, tracking, and reporting — all included.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              Month-to-month. No long-term contracts. Your ads work or you walk.
            </p>
            <Link
              href="/contact"
              className="btn btn--primary btn--lg"
              style={{
                background: "var(--theme-accent-yellow)",
                borderColor: "var(--theme-accent-yellow)",
                color: "var(--color-surface-base)",
              }}
            >
              Request Paid Ads →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--yellow has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "var(--color-surface-base)", marginInline: "auto" }}>
              STOP GAMBLING.<br />
              <span className="mic-drop__headline">START INVESTING.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              When the system handles what comes in, ads become an investment with a measurable return. Not a hope and a prayer.
            </p>
            <Link href="/contact" className="btn btn--lg">Turn It Up →</Link>
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
              Ads without a system are a money fire. Build the system first. Then turn it up.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
