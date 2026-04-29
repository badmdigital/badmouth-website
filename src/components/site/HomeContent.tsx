"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "SYSTEMS INSTALLED: 47",
  "REVENUE RECOVERED: $2.4M+",
  "GOOGLE REVIEWS GENERATED: 1,200+",
  "AVG RESPONSE TIME: < 90 SECONDS",
  "MISSED CALLS RECOVERED: 12,000+",
  "CLIENT RETENTION RATE: 94%",
  "ESTIMATE FOLLOW-UPS AUTOMATED: 8,400+",
  "AVG CLOSE RATE INCREASE: +22%",
  "INDUSTRIES SERVED: HVAC · ROOFING · PLUMBING · ELECTRICAL · CONCRETE · LANDSCAPING",
  "ZERO DUCT-TAPE SYSTEMS: CONFIRMED",
];

function TickerSequence() {
  return (
    <>
      {TICKER_ITEMS.map((item, i) => (
        <span key={`t-${i}`} style={{ display: "contents" }}>
          <span className="hero-ticker__item">
            <span className="hero-ticker__prefix">&gt;</span> {item}
          </span>
          {i < TICKER_ITEMS.length - 1 && (
            <span className="hero-ticker__sep">///</span>
          )}
        </span>
      ))}
    </>
  );
}

export function HomeContent() {
  const memoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = memoryRef.current;
    if (!el) return;

    let count = 0;
    const target = 64400;
    let raf = 0;

    const tick = () => {
      if (count < target) {
        count += Math.floor(Math.random() * 2500);
        if (count > target) count = target;
        el.innerText = count.toLocaleString() + " KB";
        raf = requestAnimationFrame(tick);
      }
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="section section--hero surface-base noise-bg has-scanlines"
        style={{ position: "relative", paddingBottom: "var(--space-16)" }}
      >
        <div className="grid-page grid-align-center">
          {/* Left: Copy */}
          <div
            className="col-half-left stack-4"
            style={{ position: "relative", zIndex: 5, paddingRight: "var(--space-4)" }}
          >
            <p className="t-eyebrow" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="status-dot status-dot--live"></span>
              <span className="sys-path">&gt; /sys/lead-systems/local-service-businesses</span>
            </p>
            <h1 className="t-display t-display--hero">
              WE BUILD THE SYSTEM<br />
              <span className="t-crt-shake" style={{ color: "var(--theme-accent-teal)" }}>
                YOUR LEADS
              </span>
              <br />
              <span className="t-flicker" style={{ color: "var(--color-brand)" }}>
                RUN THROUGH.
              </span>
            </h1>
            <p className="t-body t-body--lg" style={{ maxWidth: "55ch" }}>
              Leads come in. Shit falls through the cracks. We fix that.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Install Your System →
              </Link>
              <Link href="/see-the-system" className="btn btn--outline btn--lg">
                See How It Works
              </Link>
            </div>
            <p className="hero-qualifier">
              For contractors &amp; service businesses that are already getting work — not startups, not agencies.
            </p>
          </div>

          {/* Right: Browser Window */}
          <div
            className="col-half-right"
            style={{ perspective: "1200px", position: "relative", zIndex: 5, paddingLeft: "var(--space-4)" }}
          >
            <div
              className="browser-mockup"
              style={{
                transform: "rotateY(-6deg) rotateX(2deg)",
                boxShadow: "-20px 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(79, 209, 197, 0.15)",
              }}
            >
              <div className="browser-mockup__header">
                <div className="browser-controls">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                </div>
                <div className="browser-url">badmouth.digital/kernel-init</div>
              </div>

              <div className="browser-mockup__body mech-flicker">
                <div className="mech-ink-overlay"></div>

                <svg style={{ display: "none" }}>
                  <filter id="distort">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves={3} result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                  </filter>
                </svg>

                <div className="mech-container mechanical-distortion">
                  <div className="mech-bg-fx"></div>

                  <div className="mech-block mech-header-block">
                    <span className="mech-label red-accent">System Architecture</span>
                    <h1>
                      LEAD_SYSTEM
                      <br />
                      V.09
                    </h1>
                  </div>

                  <div className="mech-block mech-stat-block">
                    <div>
                      <span className="mech-label">Kernel Identity</span>
                      <div className="mech-value" style={{ fontSize: "0.9rem" }}>
                        BADMOUTH OS_CORE
                      </div>
                    </div>
                    <div className="mech-press-card yellow-accent" style={{ marginTop: "auto", padding: "12px" }}>
                      <span className="mech-label">Memory Integrity</span>
                      <div ref={memoryRef} className="mech-value" style={{ fontSize: "0.9rem" }}>
                        64,400 KB
                      </div>
                      <div className="loading-bar" style={{ marginTop: "6px" }}>
                        <div className="loading-progress"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mech-block mech-main-terminal">
                    <span className="mech-label green-accent" style={{ marginBottom: "1rem" }}>
                      Process Log
                    </span>

                    <div
                      id="log-container"
                      style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}
                    >
                      <div className="log-entry" style={{ animationDelay: "0.2s" }}>
                        &gt; C:\RUN_BADMOUTH_OS.BAT <span className="green-accent">[OK]</span>
                      </div>
                      <div className="log-entry" style={{ animationDelay: "0.8s" }}>
                        &gt; LOADING SYSTEM KERNEL... <span className="green-accent">[OK]</span>
                      </div>
                      <div className="log-entry" style={{ animationDelay: "1.4s" }}>
                        &gt; BYPASSING LEGACY PROTOCOLS... <span className="red-accent">[TERMINATED]</span>
                      </div>
                      <div className="log-entry" style={{ animationDelay: "2.0s" }}>
                        &gt; ROUTING LEAD BANDWIDTH... <span className="green-accent">[SYSTEM ACTIVE]</span>
                      </div>
                      <div className="log-entry" style={{ animationDelay: "2.6s" }}>
                        &gt; ESTABLISHING LINK TO NEURAL GRID... <span className="green-accent">[OK]</span>
                      </div>
                      <div className="log-entry" style={{ animationDelay: "3.2s" }}>
                        &gt; HANDSHAKE VERIFIED. ENCRYPTION ACTIVE.
                      </div>

                      <div
                        className="log-entry"
                        style={{ marginTop: "1rem", color: "rgba(79, 209, 197, 0.8)", animationDelay: "3.8s" }}
                      >
                        &gt; SYSTEM_GOAL: AUTOMATED LEAD GENERATION,
                        <br />
                        TRACKING, AND MANAGEMENT.
                      </div>
                      <div
                        className="log-entry"
                        style={{ marginTop: "auto", paddingTop: "1rem", animationDelay: "4.4s" }}
                      >
                        &gt; AWAITING COMMAND{" "}
                        <span className="mech-cursor" style={{ animationDelay: "4.4s" }}></span>
                      </div>
                    </div>
                  </div>

                  <div className="mech-block mech-sidebar-data">
                    <div className="mech-press-card red-accent" style={{ padding: "12px" }}>
                      <span className="mech-label">Revenue Leak</span>
                      <div className="mech-value" style={{ fontSize: "0.75rem" }}>
                        DETECTED [CRITICAL]
                      </div>
                    </div>

                    <div
                      className="mech-press-card green-accent"
                      style={{ flexGrow: 1, display: "flex", flexDirection: "column", padding: "12px" }}
                    >
                      <span className="mech-label">Network Grid Map</span>
                      <div style={{ marginTop: "10px", fontSize: "0.5rem", lineHeight: 1.4, opacity: 0.8 }}>
                        [<span style={{ color: "#fff" }}>■■■■</span>□□□□□□□□]
                        <br />
                        [<span style={{ color: "#fff" }}>■■■■■■■■</span>□□□□]
                        <br />
                        [<span style={{ color: "#fff" }}>■■■■■■■■■■■■</span>]
                        <br />
                        [<span style={{ color: "#fff" }}>■■■■■</span>□□□□□□□]
                        <br />
                        [<span style={{ color: "#fff" }}>■■■■■■■■■■</span>□□]
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          alignSelf: "flex-end",
                          fontWeight: "bold",
                          paddingTop: "0.5rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        SYS_ACTIVE
                      </div>
                    </div>

                    <div className="mech-press-card yellow-accent" style={{ padding: "12px" }}>
                      <span className="mech-label">Encryption Key</span>
                      <div
                        className="mech-value"
                        style={{ fontSize: "0.55rem", wordBreak: "break-all", opacity: 0.8 }}
                      >
                        A9-F2-55-B1-00-XE-88-12-C4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DOS Ticker */}
        <div className="hero-ticker-wrap">
          <div className="hero-ticker">
            <span className="hero-ticker__track">
              <TickerSequence />
              <span className="hero-ticker__sep">///</span>
              <TickerSequence />
            </span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-indicator__label">Scroll</span>
          <span className="scroll-indicator__chevron"></span>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM CLARIFICATION */}
      <section className="section section--split section--padded surface-sunken">
        <div className="grid-page grid-align-center">
          <div className="col-half-left stack-4" style={{ paddingRight: "var(--space-6)" }}>
            <p className="t-eyebrow"><span className="sys-path">&gt; /sys/diagnostics/problem</span></p>
            <h2 className="t-display t-display--section">
              YOU DON&apos;T NEED<br />
              <span className="t-accent t-flicker">MORE LEADS.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              You need to stop losing the ones you already get.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              You&apos;re already getting calls. People find you on Google. Your buddy&apos;s neighbor told them about you. Demand isn&apos;t the problem.
            </p>
            <p
              className="t-body t-body--md"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              But then what happens?
            </p>
          </div>
          <div className="col-half-right" style={{ paddingLeft: "var(--space-4)" }}>
            <div className="retro-box retro-box--danger" style={{ padding: "var(--space-6)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "1px solid rgba(255, 0, 51, 0.2)",
                }}
              >
                <span className="status-dot status-dot--live"></span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-brand)",
                  }}
                >
                  SYSTEM FAILURES DETECTED
                </span>
              </div>
              <div className="stack-3">
                <p className="t-body" style={{ fontSize: "0.95rem" }}>✗ Phone rings while you&apos;re crawling through an attic. Gone.</p>
                <p className="t-body" style={{ fontSize: "0.95rem" }}>✗ Form sits in an inbox nobody checks until Thursday.</p>
                <p className="t-body" style={{ fontSize: "0.95rem" }}>✗ Follow-up? Maybe. If someone remembers.</p>
                <p className="t-body" style={{ fontSize: "0.95rem" }}>✗ Reviews? Only when a customer goes out of their way.</p>
                <p className="t-body" style={{ fontSize: "0.95rem" }}>✗ Which marketing is actually working? No damn clue.</p>
              </div>
              <span className="warning-label" style={{ marginTop: "var(--space-4)", fontSize: "0.65rem" }}>
                ⚠ WARNING: REVENUE LEAK
              </span>
              <a
                href="#what-we-do"
                className="btn btn--outline btn--sm"
                style={{ marginTop: "var(--space-4)", fontSize: "0.75rem", alignSelf: "flex-start" }}
              >
                → See what a working system looks like
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — REFRAME */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow"><span className="sys-path">&gt; /sys/diagnostics/root-cause</span></p>
            <h2
              className="t-display t-display--section"
              style={{
                marginInline: "auto",
                whiteSpace: "nowrap",
                textAlign: "center",
                maxWidth: "none",
                textWrap: "unset",
              } as React.CSSProperties}
            >
              THROWING MORE LEADS AT A <span className="t-crt-shake">BROKEN SYSTEM</span>
              <br />
              <span className="t-accent t-flicker">JUST MAKES THE MESS MORE EXPENSIVE.</span>
            </h2>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "80ch" }}>
              Most agencies want to sell you ads first. More clicks. More impressions. More leads pouring into the same leaky bucket.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "80ch" }}>
              That&apos;s like turning up the water pressure on a pipe full of holes. You&apos;re not growing. You&apos;re flooding.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "80ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              Fix the system first. Then turn up the volume.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PATHWAY (Cassette Cards) */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow"><span className="sys-path">&gt; /sys/services</span></p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto", whiteSpace: "nowrap" }}>
              WE BUILD THE SYSTEM FIRST.
              <br />
              <span className="t-accent t-flicker">THEN WE FEED IT</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "60ch" }}>
              Badmouth isn&apos;t an agency. We don&apos;t run campaigns and cross our fingers. We build connected lead systems for contractors and service businesses that already have demand but keep letting it leak.
            </p>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <Link href="/foundation-install" className="cassette-card cassette-card--link cassette-card--hover-brand">
                <div className="cassette-card__header">
                  <span className="cassette-card__label" style={{ fontSize: "0.55rem", opacity: 0.7 }}>LAYER 01</span>
                  <span className="warning-label warning-label--filled" style={{ fontSize: "0.65rem", padding: "4px 8px" }}>⚡ START HERE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">THE FOUNDATION</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "4px" }}>
                    Your Lead System.
                  </p>
                  <p className="t-body t-body--sm">
                    Your website, CRM, automations, call tracking, review system, and dashboard. All connected. All actually working. We build this first because nothing else matters until it works.
                  </p>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--brand"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "33%" }}></div></div>
                </div>
              </Link>

              <Link href="/visibility" className="cassette-card cassette-card--link cassette-card--hover-teal">
                <div className="cassette-card__header">
                  <span className="cassette-card__label" style={{ fontSize: "0.55rem", opacity: 0.7 }}>LAYER 02</span>
                  <span className="warning-label warning-label--teal" style={{ fontSize: "0.65rem", padding: "4px 8px" }}>⚡ HIGH VOLTAGE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">VISIBILITY</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "4px" }}>
                    Organic Growth.
                  </p>
                  <p className="t-body t-body--sm">
                    SEO that builds over time. Service pages, area pages, local authority. Real organic growth on top of a system that actually converts the traffic.
                  </p>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--teal"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "66%" }}></div></div>
                </div>
              </Link>

              <Link href="/volume" className="cassette-card cassette-card--link cassette-card--hover-yellow">
                <div className="cassette-card__header">
                  <span className="cassette-card__label" style={{ fontSize: "0.55rem", opacity: 0.7 }}>LAYER 03</span>
                  <span className="warning-label warning-label--yellow" style={{ fontSize: "0.65rem", padding: "4px 8px" }}>💥 EXPLOSIVE</span>
                </div>
                <div className="cassette-card__body stack-3">
                  <h3 className="t-display t-display--card">VOLUME</h3>
                  <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "4px" }}>
                    Paid Ads.
                  </p>
                  <p className="t-body t-body--sm">
                    Paid ads pointed at a system that&apos;s ready for them. Google. Meta. Controlled traffic into something that can handle it. Not guesswork. Not gambling.
                  </p>
                </div>
                <div className="cassette-card__slider">
                  <span className="slider-dot slider-dot--yellow"></span>
                  <div className="slider-track"><div className="slider-fill" style={{ width: "100%" }}></div></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-full text-center">
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "60ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              Every layer builds on the one before it. Skip a layer and you&apos;re back to burning money and wondering why.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "var(--space-6)",
              }}
            >
              <Link href="/see-the-system" className="btn btn--primary">See The Full System →</Link>
              <Link href="/contact" className="btn btn--outline">Talk To Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CASE STUDIES */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow"><span className="sys-path">&gt; /sys/logs/client-results</span></p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              THEY DIDN&apos;T SPEND MORE
              <br />
              <span className="t-accent t-flicker">ON MARKETING.</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              They just stopped wasting what they already had.
            </p>
          </div>

          <CaseStudy
            color="var(--color-brand)"
            label="Roofing Contractor — $2.4M Revenue — 3 Sales Reps"
            description="Spending $4,500/mo on Google Ads. Office manager left at 5 PM. Any leads generated in the evening or on weekends sat idle for 12–48 hours, leading to a massive drop-off rate. Competitors were beating them to the punch."
            beforeRows={["60% of leads never reached", "12–48hr response time", "Manual pipeline tracking", "14 Google reviews (8 years)"]}
            afterLabel="90 Days After"
            afterColor="var(--theme-accent-teal)"
            afterRows={["85% lead contact rate", "Instant 24/7 SMS response", "Automated sales pipeline", "62 New Google reviews"]}
          />

          <CaseStudy
            color="var(--theme-accent-teal)"
            label="Plumber — Owner-Operator — Solo Shop"
            description="One guy doing everything. Response time averaged 18–24 hours. He'd been in business 8 years with 14 Google reviews because he never had a system to ask."
            beforeRows={["18–24hr response time", "No CRM — notebook", "14 Google reviews"]}
            afterLabel="60 Days After"
            afterColor="var(--theme-accent-teal)"
            afterRows={["Instant text-back", "CRM logs every lead", "25 Google reviews"]}
          />

          <CaseStudy
            color="var(--theme-accent-yellow)"
            label="Electrician — 3 Trucks — 2 Office Staff"
            description="Decent operation. Steady referral flow. But growth had flatlined. Office manager was manually calling back every form submission. Half the time, the customer had already called someone else."
            beforeRows={["4+ hour form response", "2 hrs/day on manual follow-up", "22 Google reviews"]}
            afterLabel="90 Days After"
            afterColor="var(--theme-accent-yellow)"
            afterRows={["Instant auto-response", "8+ hrs/week reclaimed", "69 Google reviews", "$18K recovered from abandoned estimates"]}
          />

          <CaseStudy
            color="var(--color-brand)"
            label="Concrete & Flatwork Contractor — 4 Crews — $1.1M Revenue"
            description="Mostly ran on referrals. Great reputation, solid work, zero internet presence. Estimates were quoted verbally — no follow-up, no tracking. Half the estimates they ran never turned into jobs, and they had no idea which half."
            beforeRows={["~45% estimate-to-job rate", "No follow-up process", "11 Google reviews (6 years)", "Zero online visibility"]}
            afterLabel="6 Months After"
            afterColor="var(--color-brand)"
            afterRows={["68% estimate-to-job rate", "Automated estimate follow-up", "54 Google reviews", "+$210K in tracked revenue"]}
          />

          <div
            className="col-full"
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: "var(--space-10)",
              marginTop: "var(--space-4)",
            }}
          >
            <p
              className="t-display t-display--section"
              style={{ marginInline: "auto", textAlign: "center", maxWidth: "22ch" }}
            >
              &ldquo;If we disappeared tomorrow, your system would still be running.
              <span className="t-accent t-flicker"> That&apos;s the whole point.</span>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OFFER FRAMING */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-5">
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
                What we build and install:
              </p>
              <div className="stack-2">
                <p className="t-body t-body--sm">✓ Website built to convert</p>
                <p className="t-body t-body--sm">✓ Service pages and area pages that rank</p>
                <p className="t-body t-body--sm">✓ CRM with a lead pipeline you&apos;ll use</p>
                <p className="t-body t-body--sm">✓ Missed call text-back (automatic)</p>
                <p className="t-body t-body--sm">✓ Email and text follow-up on autopilot</p>
                <p className="t-body t-body--sm">✓ Review system that builds reputation</p>
                <p className="t-body t-body--sm">✓ AI site assistant — 24/7</p>
                <p className="t-body t-body--sm">✓ Call tracking — every lead sourced</p>
                <p className="t-body t-body--sm">✓ Dashboard with real numbers</p>
              </div>
            </div>
          </div>
          <div className="col-right-7 stack-4">
            <p className="t-eyebrow"><span className="sys-path">&gt; /sys/install/foundation</span></p>
            <h2 className="t-display t-display--section">
              A COMPLETE <span className="t-crt-shake">LEAD SYSTEM.</span>
              <br />
              <span className="t-accent t-flicker">BUILT AND INSTALLED INSIDE YOUR BUSINESS.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              This isn&apos;t a website redesign. It&apos;s the operating system your business runs on.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              Everything talks to everything. If traffic stopped tomorrow, your system would still be running.
            </p>
            <div style={{ marginTop: "var(--space-2)" }}>
              <Link href="/foundation-install" className="btn btn--primary">Install Your System →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6B — AGENCY VS BADMOUTH */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              THIS ISN&apos;T <span className="t-accent t-flicker">WHAT YOU&apos;RE USED TO.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-2">
              <div className="card stack-3" style={{ borderTop: "3px solid var(--color-text-muted)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-text-muted)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  The Typical Agency
                </p>
                <p className="t-body t-body--sm">✗ Sells you ads before your site can convert</p>
                <p className="t-body t-body--sm">✗ Reports clicks and impressions</p>
                <p className="t-body t-body--sm">✗ Needs constant creative cycles to keep working</p>
                <p className="t-body t-body--sm">✗ Goes quiet after month one</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-brand)" }}>
                  ✗ If they leave, the marketing stops
                </p>
              </div>
              <div className="card stack-3" style={{ borderTop: "3px solid var(--theme-accent-teal)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--theme-accent-teal)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  Badmouth
                </p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)" }}>✓ Builds the system first, then drives traffic</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)" }}>✓ Tracks actual jobs, not vanity numbers</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)" }}>✓ Installs a system that runs continuously</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)" }}>✓ Monthly maintenance keeps everything running</p>
                <p className="t-body t-body--sm" style={{ color: "var(--theme-accent-teal)", fontWeight: 600 }}>
                  ✓ If we leave, the system keeps running
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
              That last line is the whole difference. We build something that works without us. Most agencies build something that only works because of them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRIMARY CTA */}
      <section
        className="section section--cta section--padded section--mic-drop has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-full text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              THIS IS FOR BUSINESSES THAT ARE
              <br />
              <span className="mic-drop__headline">DONE WINGING IT.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch", marginTop: "var(--space-2)" }}
            >
              If you&apos;re already getting work, have real services, and can handle more jobs — this was built for you.
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              We don&apos;t take everyone. We take businesses that are ready to stop duct-taping it and run inside a real system.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "var(--space-2)",
              }}
            >
              <Link href="/contact" className="btn btn--lg">
                Apply to Install Your System →
              </Link>
              <Link
                href="/contact"
                className="btn btn--lg"
                style={{
                  background: "#fff",
                  color: "var(--color-brand)",
                  borderColor: "#fff",
                  fontWeight: 700,
                }}
              >
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

      {/* SECTION 8 — OBJECTION CRUSHER */}
      <section className="section section--padded-sm surface-sunken">
        <div className="grid-page">
          <div className="col-full text-center stack-3">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--color-text-muted)",
              }}
            >
              The most common objection
            </p>
            <p
              className="t-display t-display--subsection"
              style={{
                marginInline: "auto",
                maxWidth: "none",
                whiteSpace: "nowrap",
                color: "var(--color-text-primary)",
              }}
            >
              &ldquo;We&apos;re not sure we&apos;re ready for this yet.&rdquo;
            </p>
            <p className="t-body t-body--md" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Neither were any of our clients before we ran a diagnostic. That&apos;s what the first call is. We look at your current setup, tell you exactly what&apos;s leaking, and give you a real answer — not a sales pitch.
            </p>
            <div style={{ marginTop: "var(--space-2)" }}>
              <Link href="/contact" className="btn btn--outline">Get The Diagnostic →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type CaseStudyProps = {
  color: string;
  label: string;
  description: string;
  beforeRows: string[];
  afterLabel: string;
  afterColor: string;
  afterRows: string[];
};

function CaseStudy({
  color,
  label,
  description,
  beforeRows,
  afterLabel,
  afterColor,
  afterRows,
}: CaseStudyProps) {
  return (
    <div className="col-full">
      <div className="card" style={{ borderLeft: `3px solid ${color}`, padding: "var(--space-6)" }}>
        <div className="grid-page grid-align-center" style={{ gap: "var(--space-6)" }}>
          <div className="col-left-5">
            <p className="t-eyebrow" style={{ color }}>{label}</p>
            <p className="t-body t-body--sm" style={{ marginTop: "var(--space-2)" }}>
              {description}
            </p>
          </div>
          <div className="col-right-7">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
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
                  Before
                </p>
                {beforeRows.map((r) => (
                  <p key={r} className="t-body t-body--sm">• {r}</p>
                ))}
              </div>
              <div className="stack-2">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: afterColor,
                  }}
                >
                  {afterLabel}
                </p>
                {afterRows.map((r) => (
                  <p key={r} className="t-body t-body--sm" style={{ color: "var(--color-text-primary)" }}>
                    • <strong>{r}</strong>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
