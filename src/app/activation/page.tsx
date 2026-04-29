import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Activation Campaigns | Badmouth Digital",
  description:
    "You've got money hiding in your business. We help you find it. Revenue activation campaigns for local service businesses.",
};

export default function ActivationPage() {
  return (
    <SiteShell currentPage="activation">
      {/* SECTION 1 — CONTEXT HEADER */}
      <section
        className="section section--hero surface-base noise-bg has-scanlines"
        style={{
          position: "relative",
          minHeight: "auto",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-12)",
        }}
      >
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginInline: "auto",
              }}
            >
              <span className="status-dot status-dot--live"></span>
              <p className="t-eyebrow" style={{ margin: 0 }}>
                Activation Campaigns
              </p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              YOU&apos;VE GOT MONEY
              <br />
              <span
                style={{
                  color: "var(--theme-accent-orange, var(--color-brand))",
                }}
              >
                HIDING IN YOUR BUSINESS.
              </span>
            </h1>
            <p
              className="t-body t-body--lg"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              We help you find it.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Past customers who haven&apos;t heard from you. Estimates that never
              closed. Seasonal services nobody&apos;s promoting. Referrals that never
              got asked for.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Revenue activation campaigns use your existing database and your system to
              extract money that&apos;s already there.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — REAL EXAMPLE */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">Real Example</p>
            <h2 className="t-display t-display--section">
              HVAC COMPANY.
              <br />
              <span
                className="t-accent t-crt-shake"
                style={{ color: "var(--color-brand)" }}
              >
                $14,400 IN 10 DAYS.
              </span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              340 past customers. One email and text campaign: &ldquo;Spring Tune-Up
              Special — 15% Off for Past Customers.&rdquo;
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              No ad spend. No landing page. No new lead gen. Just hitting the people who
              already know, like, and trust them.
            </p>
          </div>
          <div className="col-right-5">
            <div
              className="card stack-3"
              style={{
                borderLeft: "3px solid var(--color-brand)",
                padding: "var(--space-6)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-text-muted)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Campaign Results
              </p>
              <div className="stack-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="t-body t-body--sm">Contacts Reached</span>
                  <span
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)", fontWeight: 700 }}
                  >
                    340
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="t-body t-body--sm">Appointments Booked</span>
                  <span
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)", fontWeight: 700 }}
                  >
                    36
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="t-body t-body--sm">Revenue Generated</span>
                  <span
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-brand)", fontWeight: 700 }}
                  >
                    $14,400
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="t-body t-body--sm">Ad Spend</span>
                  <span
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)", fontWeight: 700 }}
                  >
                    $0
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="t-body t-body--sm">Time to Results</span>
                  <span
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)", fontWeight: 700 }}
                  >
                    10 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CAMPAIGN CATEGORIES */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              FOUR WAYS TO{" "}
              <span className="t-accent t-flicker">ACTIVATE REVENUE.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-2">
              {/* Category 1 */}
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--color-brand)" }}
              >
                <h3 className="t-display t-display--card">GET PAST CUSTOMERS BACK</h3>
                <div className="stack-2">
                  <p className="t-body t-body--sm">◉ Seasonal tune-up campaigns</p>
                  <p className="t-body t-body--sm">
                    ◉ &ldquo;We miss you&rdquo; re-engagement
                  </p>
                  <p className="t-body t-body--sm">◉ Annual maintenance reminders</p>
                  <p className="t-body t-body--sm">
                    ◉ Loyalty offers for repeat business
                  </p>
                </div>
              </div>
              {/* Category 2 */}
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--theme-accent-teal)" }}
              >
                <h3 className="t-display t-display--card">RECOVER LOST REVENUE</h3>
                <div className="stack-2">
                  <p className="t-body t-body--sm">◉ Abandoned estimate follow-up</p>
                  <p className="t-body t-body--sm">
                    ◉ &ldquo;Still interested?&rdquo; sequences
                  </p>
                  <p className="t-body t-body--sm">◉ Price-drop or financing offers</p>
                  <p className="t-body t-body--sm">◉ Re-quote expired proposals</p>
                </div>
              </div>
              {/* Category 3 */}
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">GROW WHAT YOU&apos;VE GOT</h3>
                <div className="stack-2">
                  <p className="t-body t-body--sm">◉ Referral campaigns</p>
                  <p className="t-body t-body--sm">◉ Review request pushes</p>
                  <p className="t-body t-body--sm">◉ Upsell/cross-sell sequences</p>
                  <p className="t-body t-body--sm">◉ New service announcements</p>
                </div>
              </div>
              {/* Category 4 */}
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--color-brand)" }}
              >
                <h3 className="t-display t-display--card">OWN YOUR NEIGHBORHOOD</h3>
                <div className="stack-2">
                  <p className="t-body t-body--sm">
                    ◉ Neighborhood saturation campaigns
                  </p>
                  <p className="t-body t-body--sm">
                    ◉ &ldquo;Just finished a job near you&rdquo;
                  </p>
                  <p className="t-body t-body--sm">
                    ◉ Local event sponsorship follow-up
                  </p>
                  <p className="t-body t-body--sm">◉ Seasonal awareness blasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW ACTIVATION WORKS WITH THE SYSTEM */}
      <section className="section section--statement section--padded surface-elevated">
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <p className="t-eyebrow">How It Works</p>
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              YOUR SYSTEM ALREADY HAS{" "}
              <span className="t-accent t-flicker">THE DATA.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Activation campaigns use your CRM data, past customer list, and existing
              automations. We build the campaign, load the sequences, and fire. Your
              system does the rest.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              No new tools. No third-party platform. Just your system, doing what it was
              built for.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <p className="t-eyebrow">Investment</p>
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              CAMPAIGNS START AT{" "}
              <span style={{ color: "var(--color-brand)" }}>$500.</span>
            </h2>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              One-time campaign fee. We build it, load it, and run it through your
              system. You keep the revenue.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Most campaigns pay for themselves in the first 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              READY TO ACTIVATE
              <br />
              <span className="mic-drop__headline">HIDDEN REVENUE?</span>
            </h2>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "var(--space-4)",
              }}
            >
              <Link href="/contact" className="btn btn--lg">
                Tell Us What You&apos;ve Got →
              </Link>
              <Link href="/foundation-install" className="btn btn--lg btn--mic-outline">
                Need The Foundation First?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
