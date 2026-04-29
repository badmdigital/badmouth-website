import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Foundation Install | Badmouth Digital",
  description:
    "Your complete lead system. Built and running in under 30 days. $3,500 to build. $297/month to keep it running.",
};

export default function FoundationInstallPage() {
  return (
    <SiteShell currentPage="foundation-install">
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
                Layer 1: The Foundation
              </p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              YOUR COMPLETE
              <br />
              <span style={{ color: "var(--color-brand)" }}>LEAD SYSTEM.</span>
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
              Built and running in under 30 days.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              This is what every other marketing move depends on. Without it, ads leak
              money, SEO drives traffic to dead ends, and you&apos;re stuck playing
              whack-a-mole every day.
            </p>
            <Link href="/see-the-system" className="btn btn--outline">
              See What&apos;s Included →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TIMELINE */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              INSTALLED IN <span className="t-accent t-flicker">UNDER 30 DAYS.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--color-brand)" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      border: "1px solid var(--color-border)",
                      padding: "2px 8px",
                    }}
                  >
                    PHASE 01
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    3–5 DAYS
                  </span>
                </div>
                <h3 className="t-display t-display--card">AUDIT &amp; MAPPING</h3>
                <p className="t-body t-body--sm">
                  We look at what you&apos;ve got, map your services, find the holes,
                  plan the build.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--theme-accent-teal)" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      border: "1px solid var(--color-border)",
                      padding: "2px 8px",
                    }}
                  >
                    PHASE 02
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    10–14 DAYS
                  </span>
                </div>
                <h3 className="t-display t-display--card">BUILD</h3>
                <p className="t-body t-body--sm">
                  Website, CRM, automations, tracking, reviews. Everything gets built
                  and wired together.
                </p>
              </div>
              <div
                className="card stack-3"
                style={{ borderTop: "3px solid var(--theme-accent-yellow)" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      border: "1px solid var(--color-border)",
                      padding: "2px 8px",
                    }}
                  >
                    PHASE 03
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    3–5 DAYS
                  </span>
                </div>
                <h3 className="t-display t-display--card">TEST &amp; LAUNCH</h3>
                <p className="t-body t-body--sm">
                  We test every automation and tracking point. Verify every lead path.
                  Flip it live.
                </p>
              </div>
            </div>
          </div>
          <div className="col-full text-center">
            <p
              className="t-body t-body--md"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              System goes live. Maintenance kicks in. You get back to work.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INVESTMENT */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <h2 className="t-display t-display--section">
              <span style={{ color: "var(--color-brand)" }}>$3,500</span> TO BUILD.
              <br />
              <span style={{ color: "var(--theme-accent-teal)" }}>$297/MONTH</span>{" "}
              <span className="t-accent t-flicker">TO KEEP IT RUNNING.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              $3,500 covers the complete build. Website, CRM, automations, tracking,
              reviews, dashboard. Everything.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              $297/month covers maintenance. Automations glitch. Tracking drifts. Things
              break. Maintenance keeps it all running tight so you don&apos;t wake up
              wondering why the leads stopped.
            </p>
            <p
              className="t-body t-body--lg"
              style={{
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              If this helps you close two extra jobs a month, it pays for itself.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              This isn&apos;t a retainer. It&apos;s the cost of your business running
              right.
            </p>
          </div>
          <div className="col-right-5">
            <div
              className="retro-box retro-box--danger"
              style={{ padding: "var(--space-6)" }}
            >
              <p
                className="t-body"
                style={{
                  color: "var(--color-brand)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.7rem",
                  marginBottom: "var(--space-4)",
                }}
              >
                What you&apos;re actually comparing this to:
              </p>
              <div className="stack-3">
                <p className="t-body t-body--sm">
                  ✗ Receptionist you can&apos;t afford — $2,500–$3,500/mo
                </p>
                <p className="t-body t-body--sm">✗ One missed $4,000 job per week</p>
                <p className="t-body t-body--sm">✗ Reviews you&apos;re not getting</p>
                <p className="t-body t-body--sm">
                  ✗ Hours chasing follow-ups instead of working
                </p>
              </div>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(255, 0, 51, 0.2)",
                  margin: "var(--space-4) 0",
                }}
              />
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
              >
                You&apos;re not buying a website. You&apos;re buying your time back and
                plugging the holes in your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">Who This Is For</p>
            <h2 className="t-display t-display--section">
              BUILT FOR BUSINESSES THAT
              <br />
              <span className="t-accent t-flicker">
                ALREADY HAVE WORK COMING IN.
              </span>
            </h2>
          </div>
          <div className="col-right-5">
            <div
              className="card stack-3"
              style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}
            >
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                ✓ You already get calls and leads (you just lose too many)
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                ✓ You know what you offer and how you price it
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                ✓ You can handle more work if it showed up
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                ✓ You&apos;re done holding it together with memory and duct tape
              </p>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid var(--color-border)",
                  margin: "var(--space-3) 0",
                }}
              />
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                If you&apos;re a startup still figuring out what you do, this isn&apos;t
                the right time. Come back when you&apos;ve got demand and need a system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GUARANTEE */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              WE DON&apos;T PROMISE YOU&apos;LL GET RICH.
              <br />
              <span className="t-accent t-flicker">
                WE PROMISE THE SYSTEM GETS BUILT.
              </span>
            </h2>
            <div
              className="stack-2"
              style={{
                maxWidth: "50ch",
                marginInline: "auto",
                textAlign: "left",
              }}
            >
              <p
                className="t-body t-body--md"
                style={{ color: "var(--color-text-primary)" }}
              >
                ✓ Fully built and installed lead system
              </p>
              <p
                className="t-body t-body--md"
                style={{ color: "var(--color-text-primary)" }}
              >
                ✓ Tested capture and routing
              </p>
              <p
                className="t-body t-body--md"
                style={{ color: "var(--color-text-primary)" }}
              >
                ✓ Verified automations that actually fire
              </p>
              <p
                className="t-body t-body--md"
                style={{ color: "var(--color-text-primary)" }}
              >
                ✓ Working dashboard you can check from your phone
              </p>
            </div>
            <p
              className="t-body t-body--md"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              If we don&apos;t deliver what we said, we fix it. No bullshit. No
              &ldquo;well, technically...&rdquo;
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
              READY TO STOP
              <br />
              <span className="mic-drop__headline">DUCT-TAPING IT?</span>
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
                Apply to Install Your System →
              </Link>
              <Link href="/contact" className="btn btn--lg btn--mic-outline">
                Got Questions? Let&apos;s Talk
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
