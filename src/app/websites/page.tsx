import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Website Systems | Badmouth Digital",
  description:
    "A website that catches leads, follows up automatically, and tells you exactly where every job came from. That's Step 1.",
};

export default function WebsitesPage() {
  return (
    <SiteShell currentPage="websites">
      {/* SECTION 1 — HERO */}
      <section className="section section--hero surface-base noise-bg">
        <div className="grid-page grid-align-center">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow">Step 1 — Build the Foundation</p>
            <h1 className="t-display t-display--hero">
              YOUR WEBSITE<br />
              SHOULD BOOK JOBS.<br />
              <span style={{ color: "var(--color-brand)" }}>NOT JUST LOOK PRETTY.</span>
            </h1>
            <p className="t-body t-body--lg" style={{ maxWidth: "55ch" }}>
              You already have a website. It looks fine. But it doesn&apos;t follow up on leads. It doesn&apos;t track where they came from. It doesn&apos;t text back missed calls. It doesn&apos;t request reviews.
            </p>
            <p
              className="t-body t-body--md"
              style={{ maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              It&apos;s a brochure. And brochures don&apos;t book jobs.
            </p>
            <Link href="/contact" className="btn btn--primary btn--lg">Start Your System →</Link>
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

      {/* SECTION 2 — PROBLEM */}
      <section className="section section--split section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow">The Real Problem</p>
            <h2 className="t-display t-display--section">
              GREAT WEBSITE.<br />
              <span className="t-accent t-crt-shake">ZERO SYSTEM.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              You&apos;re getting leads. Some of them, anyway. But here&apos;s what&apos;s happening to most of them:
            </p>
          </div>
          <div className="col-right-5">
            <div className="card stack-3" style={{ borderLeft: "3px solid var(--color-brand)" }}>
              <p className="t-body t-body--sm">Phone rings on a job. Goes to voicemail. Nobody follows up.</p>
              <p className="t-body t-body--sm">Form gets submitted. Sits in your inbox. Gets buried.</p>
              <p className="t-body t-body--sm">Lead visits your site twice. You never know.</p>
              <p className="t-body t-body--sm">Customer finishes a job. No review request goes out.</p>
              <p className="t-body t-body--sm">You can&apos;t tell which ad, which page, which source brought in which job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — REFRAME */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <p className="t-eyebrow">What You Actually Need</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              NOT JUST A WEBSITE.<br />
              <span className="t-accent t-flicker">A SYSTEM THAT CATCHES AND CONVERTS.</span>
            </h2>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "60ch" }}>
              A website system catches every lead that shows up, follows up automatically, tracks everything, and connects to the tools you&apos;re already using. It runs without you touching it.
            </p>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "60ch", color: "var(--color-text-primary)", fontWeight: 600 }}
            >
              This is Step 1 for a reason. Nothing else works without it.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION 4 — WHAT'S INCLUDED */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-6">
            <p className="t-eyebrow">What&apos;s Inside</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              WHAT YOUR <span className="t-accent t-flicker">WEBSITE SYSTEM</span> INCLUDES.
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <div className="card stack-3">
                <h3 className="t-display t-display--card">LEAD CAPTURE</h3>
                <p className="t-body t-body--sm">Forms, phone tracking, and CTAs built to convert — not just collect dust.</p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">MISSED CALL TEXTBACK</h3>
                <p className="t-body t-body--sm">Someone calls and you can&apos;t answer? They get a text. Automatically. Before they call your competitor.</p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">CRM CONNECTION</h3>
                <p className="t-body t-body--sm">Every lead lands in your CRM with source, page, and status. No spreadsheets. No guessing.</p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">REVIEW AUTOMATION</h3>
                <p className="t-body t-body--sm">After a job, your system requests reviews. On autopilot. So your Google profile stays fed.</p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">GOOGLE PROFILE LINK</h3>
                <p className="t-body t-body--sm">Your site connects to your Google Business Profile. Consistent info. Linked presence. Better rankings.</p>
              </div>
              <div className="card stack-3">
                <h3 className="t-display t-display--card">SOURCE TRACKING</h3>
                <p className="t-body t-body--sm">Know where every lead came from. Which page. Which ad. Which source. No more guessing what works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PACKAGES */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-6">
            <p className="t-eyebrow">Packages</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              PICK YOUR <span className="t-accent t-flicker">STARTING POINT.</span>
            </h2>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              {/* Foundation */}
              <div className="card stack-4" style={{ borderTop: "3px solid var(--color-brand)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>Package 1</p>
                <h3 className="t-display t-display--card">FOUNDATION</h3>
                <p className="t-display t-display--subsection t-accent">$3,500</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  The essentials.
                </p>
                <ul className="t-body t-body--sm" style={{ paddingLeft: "1.2em" }}>
                  <li>5-page website</li>
                  <li>Mobile-first design</li>
                  <li>Lead capture forms</li>
                  <li>Missed call text-back</li>
                  <li>Basic CRM setup</li>
                  <li>Google Business Profile link</li>
                  <li>Source tracking</li>
                </ul>
                <Link href="/contact" className="btn btn--primary btn--sm" style={{ marginTop: "auto" }}>
                  Start Here →
                </Link>
              </div>
              {/* Growth */}
              <div
                className="card stack-4"
                style={{ borderTop: "3px solid var(--theme-accent-teal)", position: "relative" }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--theme-accent-teal)",
                    color: "var(--color-surface-base)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "4px 16px",
                  }}
                >
                  Most Popular
                </span>
                <p className="t-eyebrow" style={{ color: "var(--theme-accent-teal)" }}>Package 2</p>
                <h3 className="t-display t-display--card">GROWTH</h3>
                <p className="t-display t-display--subsection" style={{ color: "var(--theme-accent-teal)" }}>$6,000</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  Everything in Foundation, plus:
                </p>
                <ul className="t-body t-body--sm" style={{ paddingLeft: "1.2em" }}>
                  <li>Up to 10 pages</li>
                  <li>Service area pages</li>
                  <li>Advanced automations</li>
                  <li>Review request sequences</li>
                  <li>Follow-up email/text sequences</li>
                  <li>SEO-ready structure</li>
                  <li>Ad-ready landing pages</li>
                </ul>
                <Link href="/contact" className="btn btn--primary btn--sm" style={{ marginTop: "auto" }}>
                  Get Growth →
                </Link>
              </div>
              {/* Custom */}
              <div className="card stack-4" style={{ borderTop: "3px solid var(--theme-accent-yellow)" }}>
                <p className="t-eyebrow" style={{ color: "var(--theme-accent-yellow)" }}>Package 3</p>
                <h3 className="t-display t-display--card">CUSTOM BUILD</h3>
                <p className="t-display t-display--subsection" style={{ color: "var(--theme-accent-yellow)" }}>Custom</p>
                <p className="t-body t-body--sm" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  For businesses that need more.
                </p>
                <ul className="t-body t-body--sm" style={{ paddingLeft: "1.2em" }}>
                  <li>Unlimited pages</li>
                  <li>Multi-location support</li>
                  <li>Custom integrations</li>
                  <li>Advanced CRM workflows</li>
                  <li>Team dashboards</li>
                  <li>Priority support</li>
                </ul>
                <Link href="/contact" className="btn btn--outline btn--sm" style={{ marginTop: "auto" }}>
                  Let&apos;s Talk →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-full text-center">
            <p
              className="t-body t-body--sm"
              style={{ color: "var(--color-text-muted)", maxWidth: "55ch", marginInline: "auto" }}
            >
              Every package includes the system. Not just a website. Not just a design. A website that catches leads, follows up, and tracks everything. That&apos;s what makes it Step 1.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT HAPPENS NEXT */}
      <section className="section section--split section--padded surface-base">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-6">
            <p className="t-eyebrow">What Happens Next</p>
            <h2 className="t-display t-display--section">
              HERE&apos;S HOW <span className="t-accent t-flicker">IT WORKS.</span>
            </h2>
            <div className="stack-6">
              <div className="stack-2" style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-4)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>01</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  You fill out the form.
                </p>
                <p className="t-body t-body--sm">Tell us what&apos;s going on. We&apos;ll check your stuff before we talk.</p>
              </div>
              <div
                className="stack-2"
                style={{ borderLeft: "3px solid var(--theme-accent-teal)", paddingLeft: "var(--space-4)" }}
              >
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>02</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We diagnose.
                </p>
                <p className="t-body t-body--sm">We look at your site, tracking, follow-up, and lead flow. We come with answers.</p>
              </div>
              <div
                className="stack-2"
                style={{ borderLeft: "3px solid var(--theme-accent-yellow)", paddingLeft: "var(--space-4)" }}
              >
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>03</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We build it.
                </p>
                <p className="t-body t-body--sm">Your system gets built, connected, and tested. You approve before it goes live.</p>
              </div>
              <div
                className="stack-2"
                style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-4)" }}
              >
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>04</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  Launch + grow.
                </p>
                <p className="t-body t-body--sm">Your system goes live. Everything works. Then we talk about Step 2.</p>
              </div>
            </div>
          </div>
          <div className="col-right-5">
            <div className="card stack-4" style={{ borderLeft: "3px solid var(--theme-accent-teal)" }}>
              <p
                className="t-body t-body--sm"
                style={{
                  color: "var(--theme-accent-teal)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Why Step 1 First?
              </p>
              <p className="t-body t-body--sm">SEO sends people to your site. If it can&apos;t convert, they bounce.</p>
              <p className="t-body t-body--sm">Ads drive traffic. If there&apos;s no follow-up, you lose them.</p>
              <p className="t-body t-body--sm">Every dollar you spend on marketing lands on your website first. Make sure it&apos;s ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section
        className="section section--cta section--padded section--mic-drop has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              READY TO BUILD A WEBSITE THAT<br />
              <span className="mic-drop__headline">ACTUALLY BOOKS JOBS?</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              Fill out the form. We&apos;ll check your current setup and tell you exactly what&apos;s missing.
            </p>
            <Link href="/contact" className="btn btn--lg">Diagnose Your System →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — REINFORCEMENT */}
      <section className="section section--statement section--padded-sm surface-pure">
        <div className="grid-page">
          <div className="col-content text-center">
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch", color: "var(--color-text-primary)", fontWeight: 500 }}
            >
              Step 1 isn&apos;t optional. It&apos;s where everything starts. Build the foundation first.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
