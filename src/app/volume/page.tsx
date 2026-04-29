import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Volume — Paid Ads That Work | Badmouth Digital",
  description:
    "Turn up the dial. Your system's ready for it. $1,500/month + $1,000 minimum ad spend.",
};

export default function VolumePage() {
  return (
    <SiteShell currentPage="volume">
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
                Layer 3: Volume
              </p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              TURN UP
              <br />
              <span style={{ color: "var(--theme-accent-yellow)" }}>THE DIAL.</span>
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
              Your system&apos;s ready for it.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Google Ads. Meta Ads. Targeted campaigns that send traffic into a system
              that&apos;s already catching and converting.
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
              This isn&apos;t gambling on clicks. This is feeding a machine that already
              works.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM WITH ADS ALONE */}
      <section className="section section--statement section--padded surface-sunken">
        <div className="grid-page grid-align-center">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">The Problem</p>
            <h2 className="t-display t-display--section">
              ADS DON&apos;T FIX
              <br />
              <span className="t-accent t-crt-shake">BROKEN SYSTEMS.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              &ldquo;Spend $3K/month. Get 200 clicks. 12 calls. Close 2 jobs.&rdquo;
              Sound familiar?
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              If your landing page doesn&apos;t convert, if nobody follows up fast
              enough, if you can&apos;t track what came from what — then ads are just an
              expensive way to confirm that nothing works.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Volume is Layer 3. It comes after the Foundation is built and Visibility
              is in motion.
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
                    color: "var(--theme-accent-yellow)",
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
                    color: "var(--theme-accent-yellow)",
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
                  ✓ Foundation installed
                </p>
                <p style={{ color: "var(--theme-accent-teal)" }}>
                  ✓ System catching and converting
                </p>
                <p style={{ color: "var(--theme-accent-teal)" }}>
                  ✓ Visibility building organic
                </p>
                <p
                  style={{
                    color: "var(--theme-accent-yellow)",
                    marginTop: "var(--space-3)",
                  }}
                >
                  → NOW add Volume
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
              ADS THAT FEED <span className="t-accent t-flicker">A SYSTEM.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">GOOGLE ADS</h3>
                <p className="t-body t-body--sm">
                  Search ads targeting high-intent local searches. People actively
                  looking for your services right now.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">META ADS</h3>
                <p className="t-body t-body--sm">
                  Facebook and Instagram ads for local awareness and seasonal pushes.
                  Visual campaigns that drive action.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">LANDING PAGES</h3>
                <p className="t-body t-body--sm">
                  Ad-specific pages built for conversion. Not your homepage. Not a
                  generic service page. Built to close.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">RETARGETING</h3>
                <p className="t-body t-body--sm">
                  People visit. They don&apos;t convert. They see you again. And again.
                  Until they&apos;re ready.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">AUTOMATED FOLLOW-UP</h3>
                <p className="t-body t-body--sm">
                  Every ad lead gets the same system follow-up as your other leads.
                  Nothing falls through.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
              >
                <h3 className="t-display t-display--card">ONGOING OPTIMIZATION</h3>
                <p className="t-body t-body--sm">
                  We test. Adjust. Cut waste. Improve targeting. Every dollar works
                  harder month over month.
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
                borderLeft: "3px solid var(--theme-accent-yellow)",
                padding: "var(--space-6)",
              }}
            >
              <p
                className="t-body t-body--sm"
                style={{
                  color: "var(--theme-accent-yellow)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "var(--space-3)",
                }}
              >
                Case Study — Roofing Company
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--space-6)",
                }}
              >
                <div className="stack-2">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Before (Ads Only)
                  </p>
                  <p className="t-body t-body--sm">• $8K/mo spend</p>
                  <p className="t-body t-body--sm">• 12% close rate</p>
                  <p className="t-body t-body--sm">• 3.5 hour callback</p>
                  <p className="t-body t-body--sm">• No tracking</p>
                </div>
                <div className="stack-2">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--theme-accent-yellow)",
                    }}
                  >
                    After (System + Ads)
                  </p>
                  <p
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    • <strong>Same spend</strong>
                  </p>
                  <p
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    • <strong>23% close rate</strong>
                  </p>
                  <p
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    • <strong>Under 2 min response</strong>
                  </p>
                  <p
                    className="t-body t-body--sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    • <strong>+$14,500/mo revenue</strong>
                  </p>
                </div>
              </div>
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
              <span style={{ color: "var(--theme-accent-yellow)" }}>$1,500/MONTH</span>{" "}
              MANAGEMENT.
              <br />
              <span className="t-accent t-flicker">$1,000/MONTH MIN AD SPEND.</span>
            </h2>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              That&apos;s the starting line. As your system proves out, you can scale
              the spend. We&apos;ll tell you when it makes sense.
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
              Volume is only offered after the Foundation is installed. We&apos;re not
              going to burn your money on a broken system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--yellow has-scanlines"
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
                Ready for Volume? Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
