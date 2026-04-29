import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "About Badmouth Digital | Badmouth Digital",
  description:
    "If we disappeared tomorrow, every system we've built would still be running. That's the point.",
};

export default function AboutPage() {
  return (
    <SiteShell currentPage="about">
      {/* SECTION 1 — THE TEST */}
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginInline: "auto" }}>
              <span className="status-dot status-dot--live"></span>
              <p className="t-eyebrow" style={{ margin: 0 }}>About Badmouth</p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              IF WE DISAPPEARED<br />
              TOMORROW, YOUR SYSTEM<br />
              <span style={{ color: "var(--color-brand)" }}>WOULD STILL BE RUNNING.</span>
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
              That&apos;s the test. That&apos;s the whole point. We build systems that don&apos;t need us to keep working.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Most agencies build dependency. They hold your accounts. They own your data. They keep doing work that only works while they&apos;re doing it. If you leave, everything stops.
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
              We build the opposite. You own everything. It runs without us. We stay because you want us to — not because you have to.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY WE EXIST */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">Why We Exist</p>
            <h2 className="t-display t-display--section">
              WE GOT TIRED OF<br />
              <span className="t-accent t-crt-shake">WATCHING GOOD BUSINESSES</span><br />
              <span style={{ color: "var(--color-brand)" }}>GET SCREWED BY BAD MARKETING.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              A guy who&apos;s been fixing furnaces for 20 years shouldn&apos;t need an MBA to figure out why his marketing doesn&apos;t work. He shouldn&apos;t be paying $2,000/month to an agency that sends him a PDF full of graphs once a month.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              He needs a system that catches leads, follows up, and tells him where his money&apos;s going. That&apos;s it. That&apos;s the whole gap.
            </p>
          </div>
          <div className="col-right-5">
            <div className="retro-box" style={{ padding: "var(--space-6)" }}>
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
                What we believe
              </p>
              <div className="stack-3">
                <div style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-3)" }}>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    Systems first. Volume second.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid var(--theme-accent-teal)", paddingLeft: "var(--space-3)" }}>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    You should own everything.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid var(--theme-accent-yellow)", paddingLeft: "var(--space-3)" }}>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    If it doesn&apos;t run without us, we failed.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-3)" }}>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    Real businesses deserve real systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              BUILD THE SYSTEM FIRST.<br />
              <span className="t-accent t-flicker">THEN TURN UP THE VOLUME.</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Most marketing agencies start at Layer 3. Run ads. Drive traffic. Hope it converts. And when it doesn&apos;t? They blame the market, not the system.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              We start at Layer 1. Build the foundation. Make sure every lead gets caught, followed up, tracked, and measured. Then add SEO. Then ads. In order.
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
              It&apos;s not sexy. It&apos;s not fast. But it works. And it keeps working.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAKES US DIFFERENT */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow">What Makes Us Different</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              THREE THINGS NOBODY ELSE<br />
              <span className="t-accent t-flicker">IS DOING.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div className="card stack-3" style={{ borderTop: "3px solid var(--color-brand)" }}>
                <h3 className="t-display t-display--card">WHAT HAPPENS AFTER</h3>
                <p className="t-body t-body--sm">
                  Most agencies focus on driving traffic. We focus on what happens when it shows up. The capture. The follow-up. The tracking. The conversion. That&apos;s where the money is.
                </p>
              </div>
              <div className="card stack-3" style={{ borderTop: "3px solid var(--theme-accent-teal)" }}>
                <h3 className="t-display t-display--card">JOBS, NOT CLICKS</h3>
                <p className="t-body t-body--sm">
                  We don&apos;t report on impressions. We track leads, response times, source attribution, and revenue. If you can&apos;t tie it to a job, it doesn&apos;t mean anything.
                </p>
              </div>
              <div className="card stack-3" style={{ borderTop: "3px solid var(--theme-accent-yellow)" }}>
                <h3 className="t-display t-display--card">CONTINUOUS VS. CAMPAIGN</h3>
                <p className="t-body t-body--sm">
                  Campaigns stop when the budget runs out. Systems don&apos;t. Review requests fire after every job. Follow-ups run on every lead. Your system works 24/7, 365.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO WE WORK WITH */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">Who We Work With</p>
            <h2 className="t-display t-display--section">
              LOCAL SERVICE BUSINESSES<br />
              <span className="t-accent t-flicker">WHO ALREADY HAVE DEMAND.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              HVAC. Plumbing. Electrical. Roofing. Landscaping. Garage doors. Pest control. Concrete. Cleaning. If you answer calls, drive trucks, and fix things — you&apos;re who we built this for.
            </p>
          </div>
          <div className="col-right-5">
            <div className="card stack-3" style={{ borderLeft: "3px solid var(--color-text-muted)" }}>
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
                NOT A FIT IF:
              </p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)" }}>✗ You&apos;re a startup still finding product-market fit</p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)" }}>✗ You need brand awareness before leads</p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)" }}>✗ You want someone to &ldquo;just run ads&rdquo;</p>
              <p className="t-body t-body--sm" style={{ color: "var(--color-text-muted)" }}>✗ You&apos;re looking for the cheapest option</p>
            </div>
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
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              DONE DUCT-TAPING<br />
              <span className="mic-drop__headline">IT TOGETHER?</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              Tell us what&apos;s going on. We&apos;ll tell you what to fix first.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "var(--space-4)",
              }}
            >
              <Link href="/contact" className="btn btn--lg">Install Your System →</Link>
              <Link href="/see-the-system" className="btn btn--lg btn--mic-outline">See The System</Link>
            </div>
          </div>
        </div>
      </section>

      {/* REINFORCEMENT */}
      <section className="section section--statement section--padded-sm surface-pure">
        <div className="grid-page">
          <div className="col-content text-center">
            <p
              className="t-body t-body--lg"
              style={{
                marginInline: "auto",
                maxWidth: "55ch",
                color: "var(--color-text-primary)",
                fontWeight: 500,
              }}
            >
              If we disappeared tomorrow, your system would still be running.{" "}
              <span style={{ color: "var(--color-brand)", fontWeight: 700 }}>That&apos;s the whole point.</span>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
