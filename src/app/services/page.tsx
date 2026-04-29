import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Services | Badmouth Digital",
  description:
    "Figure out what's broken. Fix it in the right order. Website systems, local SEO, and paid ads — connected into one system that runs itself.",
};

export default function ServicesPage() {
  return (
    <SiteShell currentPage="services">
      {/* SECTION 1 — HERO */}
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
              <p className="t-eyebrow" style={{ margin: 0 }}>Our Services</p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              FIGURE OUT WHAT&apos;S BROKEN.<br />
              <span style={{ color: "#f97316" }}>FIX IT IN THE RIGHT ORDER.</span>
            </h1>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              You know something&apos;s off. You&apos;re just not sure what to fix first.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              That&apos;s what this page is for. Not to sell you something. To help you see where the problem actually is so you stop wasting money on the wrong thing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY MOST MARKETING FAILS */}
      <section className="section section--split section--padded surface-sunken">
        <div className="grid-page grid-align-center">
          <div className="col-left-8 stack-4">
            <p className="t-eyebrow">Why Most Marketing Fails</p>
            <h2 className="t-display t-display--section">
              YOU DIDN&apos;T PICK THE WRONG TACTIC.<br />
              <span className="t-accent t-crt-shake">YOU PICKED IT AT THE WRONG TIME.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              You ran ads before your website could do anything with the traffic. You paid for SEO before your pages were worth ranking. You hired an agency that jumped straight to the fun stuff and skipped the boring stuff that actually matters.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              The order you do things in matters more than what you do.
            </p>
            <p
              className="t-body t-body--md"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              Get it wrong and every dollar goes down the drain. Get it right and the whole thing compounds.
            </p>
          </div>
          <div className="col-right-4">
            <div className="retro-box retro-box--danger" style={{ padding: "var(--space-6)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-3)",
                  borderBottom: "1px solid rgba(255, 0, 51, 0.2)",
                }}
              >
                <span style={{ color: "var(--color-brand)", fontSize: "0.85rem" }}>⚠</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-brand)",
                  }}
                >
                  ORDER OF OPERATIONS
                </span>
              </div>
              <div className="stack-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                <p style={{ color: "var(--theme-accent-teal)" }}>✓ Step 1 first → Website System</p>
                <p style={{ color: "var(--theme-accent-teal)" }}>✓ Step 2 second → Local SEO</p>
                <p style={{ color: "var(--theme-accent-teal)" }}>✓ Step 3 third → Paid Ads</p>
                <p style={{ color: "var(--color-brand)", marginTop: "var(--space-3)" }}>✗ Skip steps → Waste money</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — REFRAME */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-full stack-4 text-center">
            <p className="t-eyebrow">The Real Issue</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              YOU DON&apos;T NEED MORE MARKETING.<br />
              <span className="t-accent t-flicker">YOU NEED TO DO IT IN THE RIGHT DAMN ORDER.</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "60ch" }}>
              Every business we talk to thinks they have a marketing problem.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              What they actually have is a sequence problem. They&apos;re spending money on step three before step one is done.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              That&apos;s not a strategy. That&apos;s a money fire.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE 3 STEPS (Cassette Cards) */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow">How It Works</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              THREE STEPS. <span className="t-accent t-flicker">IN ORDER.</span> THAT&apos;S IT.
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              {/* STEP 1 */}
              <Link href="/websites" className="cassette-card cassette-card--link">
                <div className="cassette-card__header">
                  <span className="cassette-card__label">STEP 01</span>
                  <span className="warning-label warning-label--filled" style={{ fontSize: "0.5rem" }}>⚡ START HERE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">BUILD THE FOUNDATION</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    Your Website System.
                  </p>
                  <p className="t-body t-body--sm">
                    A site that catches leads, follows up automatically, tracks everything, and connects to your Google profile. Nothing else works until this is solid.
                  </p>
                </div>
                <div className="cassette-card__footer" style={{ padding: "12px 20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    FROM $3,500
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-brand)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    VIEW DETAILS →
                  </span>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--brand"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "33%" }}></div></div>
                </div>
              </Link>

              {/* STEP 2 */}
              <Link href="/services/local-seo" className="cassette-card cassette-card--link">
                <div className="cassette-card__header">
                  <span className="cassette-card__label">STEP 02</span>
                  <span className="warning-label warning-label--teal" style={{ fontSize: "0.5rem" }}>⚡ HIGH VOLTAGE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">GET FOUND</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    Local SEO.
                  </p>
                  <p className="t-body t-body--sm">
                    Once your site works, we get you in front of people already looking for what you do. Maps, search, service area pages. Real visibility.
                  </p>
                </div>
                <div className="cassette-card__footer" style={{ padding: "12px 20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    $2,500 /MO
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--theme-accent-teal)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    VIEW DETAILS →
                  </span>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--teal"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "66%" }}></div></div>
                </div>
              </Link>

              {/* STEP 3 */}
              <Link href="/services/paid-ads" className="cassette-card cassette-card--link">
                <div className="cassette-card__header">
                  <span className="cassette-card__label">STEP 03</span>
                  <span className="warning-label warning-label--yellow" style={{ fontSize: "0.5rem" }}>💥 EXPLOSIVE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">TURN IT UP</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                    Paid Ads.
                  </p>
                  <p className="t-body t-body--sm">
                    When the system handles what&apos;s coming in, we crank the volume. Google. Facebook. Landing pages. Jobs on demand.
                  </p>
                </div>
                <div className="cassette-card__footer" style={{ padding: "12px 20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    $2,500 /MO + AD SPEND
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--theme-accent-yellow)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    VIEW DETAILS →
                  </span>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--yellow"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "100%" }}></div></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHERE ARE YOU RIGHT NOW? */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow">Find Your Starting Point</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              WHERE ARE <span className="t-accent t-flicker">YOU</span> RIGHT NOW?
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div className="card stack-4" style={{ borderTop: "3px solid var(--color-brand)" }}>
                <h3 className="t-display t-display--card">WEBSITE SYSTEMS</h3>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  You need this if:
                </p>
                <p className="t-body t-body--sm">
                  You don&apos;t have a website. Or you have one that doesn&apos;t catch leads, doesn&apos;t follow up, and doesn&apos;t tell you what&apos;s working.
                </p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-brand)", fontWeight: 600 }}>
                  What goes wrong without it:
                </p>
                <p className="t-body t-body--sm">
                  Everything. Ads fail. SEO has nowhere to land. Leads come and go and you never know they were there.
                </p>
                <Link href="/websites" className="btn btn--primary btn--sm" style={{ marginTop: "auto" }}>
                  See Website Systems →
                </Link>
              </div>
              <div className="card stack-4" style={{ borderTop: "3px solid var(--theme-accent-teal)" }}>
                <h3 className="t-display t-display--card">LOCAL SEO</h3>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  You need this if:
                </p>
                <p className="t-body t-body--sm">
                  Your site works but nobody can find you when they search. Your competitors show up on Google. You don&apos;t.
                </p>
                <p className="t-body t-body--sm" style={{ color: "var(--theme-accent-teal)", fontWeight: 600 }}>
                  What goes wrong without it:
                </p>
                <p className="t-body t-body--sm">
                  People looking for exactly what you do hire someone else because they found them first.
                </p>
                <Link
                  href="/services/local-seo"
                  className="btn btn--primary btn--sm"
                  style={{
                    marginTop: "auto",
                    background: "var(--theme-accent-teal)",
                    borderColor: "var(--theme-accent-teal)",
                    color: "var(--color-surface-base)",
                  }}
                >
                  See Local SEO →
                </Link>
              </div>
              <div className="card stack-4" style={{ borderTop: "3px solid var(--theme-accent-yellow)" }}>
                <h3 className="t-display t-display--card">PAID ADS</h3>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  You need this if:
                </p>
                <p className="t-body t-body--sm">
                  Your system works. Your site converts. You just need more people seeing it.
                </p>
                <p className="t-body t-body--sm" style={{ color: "var(--theme-accent-yellow)", fontWeight: 600 }}>
                  What goes wrong without it:
                </p>
                <p className="t-body t-body--sm">
                  Growth stays slow. You can&apos;t control volume. Quiet months stay quiet.
                </p>
                <Link
                  href="/services/paid-ads"
                  className="btn btn--primary btn--sm"
                  style={{
                    marginTop: "auto",
                    background: "var(--theme-accent-yellow)",
                    borderColor: "var(--theme-accent-yellow)",
                    color: "var(--color-surface-base)",
                  }}
                >
                  See Paid Ads →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — NOBODY COMES TO US FIRST */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <p className="t-eyebrow">This Happens All the Time</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              NOBODY COMES TO US <span className="t-accent t-crt-shake">FIRST.</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "60ch" }}>
              They come after the agency that ghosted. After the freelancer who built something pretty that booked nothing. After spending money on ads that went nowhere.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              They come pissed off and skeptical. And honestly, they should be.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              What they actually needed the whole time wasn&apos;t a better ad or a fancier website. It was for everything to be connected and working together. That&apos;s what we build.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WE BUILD SYSTEMS NOT MENUS */}
      <section className="section section--split section--padded surface-elevated">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">How We Work</p>
            <h2 className="t-display t-display--section">
              WE BUILD <span className="t-accent t-flicker">SYSTEMS.</span> NOT MENUS.
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              We don&apos;t hand you a list and say &ldquo;pick one.&rdquo; We figure out what&apos;s broken, tell you what to fix first, and build it.
            </p>
          </div>
          <div className="col-right-5">
            <div className="retro-box" style={{ padding: "var(--space-6)" }}>
              <p
                className="t-body"
                style={{
                  color: "var(--theme-accent-teal)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.7rem",
                  marginBottom: "var(--space-4)",
                }}
              >
                Good fit:
              </p>
              <p className="t-body t-body--sm" style={{ marginBottom: "var(--space-2)" }}>
                Service businesses that want their marketing to actually work.
              </p>
              <p className="t-body t-body--sm" style={{ marginBottom: "var(--space-6)" }}>
                Owners who are done guessing.
              </p>

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
                Not a good fit:
              </p>
              <p className="t-body t-body--sm" style={{ marginBottom: "var(--space-2)" }}>
                Shopping for the cheapest option.
              </p>
              <p className="t-body t-body--sm" style={{ marginBottom: "var(--space-2)" }}>
                Not willing to follow a process.
              </p>
              <p className="t-body t-body--sm">
                Wanting somebody to &ldquo;just handle it&rdquo; with zero involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — PRIMARY CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--orange has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              NOT SURE WHERE TO START?<br />
              <span className="mic-drop__headline">LET&apos;S FIGURE IT OUT.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              Book a system diagnostic. We&apos;ll look at your site, your Google profile, your tracking, and your lead flow. Then we&apos;ll tell you what&apos;s actually broken.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "50ch" }}>
              No pitch. No pressure. Just answers. Takes about 10 minutes.
            </p>
            <Link href="/contact" className="btn btn--lg">Diagnose Your System →</Link>
          </div>
        </div>
      </section>

      {/* REINFORCEMENT */}
      <section className="section section--statement section--padded-sm surface-pure">
        <div className="grid-page">
          <div
            className="col-content text-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-4)",
              flexWrap: "wrap",
            }}
          >
            <span className="status-dot status-dot--live"></span>
            <p
              className="t-body t-body--lg"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500, margin: 0 }}
            >
              Do it in the right order. That&apos;s the whole secret. Everybody wants to skip to step three. Don&apos;t be everybody.
            </p>
            <div className="volume-indicator">
              <div className="volume-bar volume-bar--active" style={{ height: "4px" }}></div>
              <div className="volume-bar volume-bar--active" style={{ height: "8px" }}></div>
              <div className="volume-bar volume-bar--active" style={{ height: "12px" }}></div>
              <div className="volume-bar volume-bar--danger" style={{ height: "16px" }}></div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
