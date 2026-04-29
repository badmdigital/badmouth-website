import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Visibility — SEO That Actually Works | Badmouth Digital",
  description:
    "Get found by more people. Let the system handle what happens next. $1,500/month.",
};

export default function VisibilityPage() {
  return (
    <SiteShell currentPage="visibility">
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
                Layer 2: Visibility
              </p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              GET FOUND BY
              <br />
              <span style={{ color: "var(--theme-accent-teal)" }}>MORE PEOPLE.</span>
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
              Let the system handle what happens next.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Most SEO is a waste of money. Blog posts nobody reads. Keywords nobody
              searches. Rankings that don&apos;t turn into calls. A monthly invoice and
              a report full of graphs that don&apos;t mean shit.
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
              Our SEO sits on top of a system that&apos;s already catching and
              converting. Every new page, every ranking we earn, feeds directly into
              your lead system.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM WITH SEO ALONE */}
      <section className="section section--statement section--padded surface-sunken">
        <div className="grid-page grid-align-center">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">The Problem</p>
            <h2 className="t-display t-display--section">
              SEO WITHOUT A SYSTEM
              <br />
              <span className="t-accent t-crt-shake">
                IS JUST EXPENSIVE BLOGGING.
              </span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              If your site doesn&apos;t convert, ranking #1 just means more people
              bounce. If follow-up doesn&apos;t trigger, leads go cold. If tracking
              doesn&apos;t work, you&apos;ll never know if you&apos;re throwing money
              into a hole.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Visibility is Layer 2. Not Layer 1. The system has to work first.
            </p>
          </div>
          <div className="col-right-5">
            <div className="retro-box" style={{ padding: "var(--space-6)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-3)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{
                    color: "var(--theme-accent-teal)",
                    fontSize: "0.85rem",
                  }}
                >
                  ⚠
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--theme-accent-teal)",
                  }}
                >
                  ORDER OF OPERATIONS
                </span>
              </div>
              <div
                className="stack-2"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              >
                <p style={{ color: "var(--theme-accent-teal)" }}>
                  ✓ Foundation installed first
                </p>
                <p style={{ color: "var(--theme-accent-teal)" }}>
                  ✓ System catching leads
                </p>
                <p style={{ color: "var(--theme-accent-teal)" }}>
                  ✓ Follow-up firing automatically
                </p>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    marginTop: "var(--space-3)",
                  }}
                >
                  → THEN add Visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU GET */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              WHAT THE VISIBILITY LAYER
              <br />
              <span className="t-accent t-flicker">BUILDS OVER TIME.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-2">
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}
              >
                <h3 className="t-display t-display--card">GOOGLE BUSINESS PROFILE</h3>
                <p className="t-body t-body--sm">
                  Full setup, weekly posting, ongoing management. Your listing stops
                  being a pin on a map and starts generating calls.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}
              >
                <h3 className="t-display t-display--card">NEW PAGES EVERY WEEK</h3>
                <p className="t-body t-body--sm">
                  One new service or area page a week. Built around what your market is
                  searching for. Every page expands your reach.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}
              >
                <h3 className="t-display t-display--card">TECHNICAL SEO</h3>
                <p className="t-body t-body--sm">
                  Internal linking, schema, local entity setup. The stuff that tells
                  Google you&apos;re the real deal in your area.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}
              >
                <h3 className="t-display t-display--card">LOCAL AUTHORITY</h3>
                <p className="t-body t-body--sm">
                  Citation cleanup, local link building. Consistent work that compounds
                  over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page">
          <div className="col-content stack-4">
            <p className="t-eyebrow">What This Looks Like</p>
            <div
              className="card"
              style={{
                borderLeft: "3px solid var(--theme-accent-teal)",
                padding: "var(--space-6)",
              }}
            >
              <p
                className="t-body t-body--sm"
                style={{
                  color: "var(--theme-accent-teal)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "var(--space-3)",
                }}
              >
                Case Study — Garage Door Company
              </p>
              <p className="t-body t-body--md">
                Foundation installed first. Then Visibility layer activated. After 6
                months: organic traffic up 340%. 22 service and area pages indexed and
                ranking. Google Maps visibility went from page 3 to consistent top 3. 38
                additional calls per month from organic alone.
              </p>
              <blockquote
                style={{
                  marginTop: "var(--space-4)",
                  paddingLeft: "var(--space-4)",
                  borderLeft: "2px solid var(--color-border)",
                  fontStyle: "italic",
                }}
              >
                <p className="t-body t-body--sm">
                  &ldquo;We stopped paying for every lead. People just started finding
                  us. That&apos;s when it clicked.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INVESTMENT */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              <span style={{ color: "var(--theme-accent-teal)" }}>$1,500/MONTH.</span>
              <br />
              <span className="t-accent t-flicker">
                90-DAY COMMITMENT TO START.
              </span>
            </h2>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Month-to-month after. Extra pages at $500/month.
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
              This only kicks in after your Foundation is installed. Driving traffic to
              a broken system is just a faster way to waste money.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--teal has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ color: "#fff", marginInline: "auto" }}
            >
              NEED THE FOUNDATION
              <br />
              <span className="mic-drop__headline">FIRST?</span>
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
              <Link href="/foundation-install" className="btn btn--lg">
                Get Your Foundation Installed →
              </Link>
              <Link href="/contact" className="btn btn--lg btn--mic-outline">
                Already Have One? Let&apos;s Talk
              </Link>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "var(--space-3)",
              }}
            >
              Takes 5 minutes. We review it in 48 hours. No pitch on the first call.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
