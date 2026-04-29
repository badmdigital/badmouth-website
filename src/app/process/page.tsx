import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Process | Badmouth Digital",
  description:
    "Fill out a form. We check your stuff. We tell you what's broken. Then we fix it. No mystery. No runaround.",
};

type StepProps = {
  trackLabel: string;
  trackColor: string;
  headline: string;
  cardBody: string;
  fillPercent: number;
  asideHeadline: string;
  asideBody: string;
};

function ProcessStep({
  trackLabel,
  trackColor,
  headline,
  cardBody,
  fillPercent,
  asideHeadline,
  asideBody,
}: StepProps) {
  return (
    <div className="col-full">
      <div className="grid-page grid-align-center">
        <div className="col-left-5">
          <div className="card" style={{ border: "2px solid var(--color-border)", position: "relative" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--color-border)",
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
                {trackLabel}
              </span>
              <span style={{ color: trackColor, fontSize: "0.75rem" }}>●</span>
            </div>
            <h3 className="t-display t-display--card" style={{ marginBottom: "var(--space-2)" }}>
              {headline}
            </h3>
            <p className="t-body t-body--sm">{cardBody}</p>
            <div
              style={{
                marginTop: "var(--space-4)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: trackColor }}></span>
              <div
                style={{
                  flex: 1,
                  height: "3px",
                  background:
                    fillPercent === 100
                      ? "var(--color-text-primary)"
                      : `linear-gradient(to right, var(--color-text-primary) ${fillPercent}%, var(--color-border) ${fillPercent}%)`,
                  borderRadius: "2px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-right-7 stack-4">
          <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
            {asideHeadline}
          </p>
          <p className="t-body t-body--md">{asideBody}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteShell currentPage="process">
      {/* SECTION 1 — HERO */}
      <section
        className="section section--hero surface-base noise-bg"
        style={{
          minHeight: "auto",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-12)",
        }}
      >
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <p className="t-eyebrow">How It Works</p>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              NO MYSTERY.<br />
              <span style={{ color: "var(--theme-accent-purple)" }}>NO RUNAROUND.</span>
            </h1>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              You tell us what&apos;s going on. We figure out what&apos;s broken. We fix it. You grow. That&apos;s the whole thing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE 4 STEPS */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-xl">
          <ProcessStep
            trackLabel="TRACK 01"
            trackColor="var(--color-brand)"
            headline="YOU TELL US WHAT'S GOING ON"
            cardBody="Fill out the form. Takes a few minutes. Tell us what you do, what's not working, and what you've tried."
            fillPercent={25}
            asideHeadline="No sales call first. No calendar link before we know anything about you."
            asideBody="You give us the basics. We read every word. Then we go look at your stuff before we ever get on a call."
          />
          <ProcessStep
            trackLabel="TRACK 02"
            trackColor="var(--theme-accent-teal)"
            headline="WE DIAGNOSE"
            cardBody="We check your site, your Google profile, your tracking, your lead flow. We come to the call with answers, not questions."
            fillPercent={50}
            asideHeadline="We tell you what's broken. What's missing. And what to fix first."
            asideBody="No hand-waving. No buzzwords. Just a straight diagnosis. If we're a fit, we'll tell you exactly what we'd build and what it costs. If not, we'll point you in the right direction anyway."
          />
          <ProcessStep
            trackLabel="TRACK 03"
            trackColor="var(--theme-accent-yellow)"
            headline="WE BUILD IT"
            cardBody="Your system gets designed, built, connected, and tested. You see it before it goes live. No surprises."
            fillPercent={75}
            asideHeadline="You approve everything before it goes live."
            asideBody="You see the site. The automations. The tracking. The follow-up sequences. If something's off, we fix it before launch. Not after."
          />
          <ProcessStep
            trackLabel="TRACK 04"
            trackColor="var(--color-brand)"
            headline="LAUNCH + GROW"
            cardBody="Your system goes live. Leads start flowing. You see the numbers. Then we talk about what comes next."
            fillPercent={100}
            asideHeadline="Step 1 done? We talk about Step 2."
            asideBody="When your website system is handling leads and your numbers are solid, we look at local SEO or paid ads. Not before. Growth in the right order. That's the whole play."
          />
        </div>
      </section>

      {/* SECTION 3 — FAQ / COMMON CONCERNS */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-content text-center stack-6">
            <p className="t-eyebrow">Common Questions</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              YEAH, WE GET THAT <span className="t-accent t-flicker">A LOT.</span>
            </h2>
          </div>
          <div className="col-content stack-6">
            <details className="faq-item">
              <summary className="faq-summary">
                <span
                  className="t-body t-body--md"
                  style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                >
                  &ldquo;I don&apos;t even know what I need.&rdquo;
                </span>
              </summary>
              <p className="t-body t-body--sm faq-answer">
                That&apos;s literally why Step 1 is a diagnostic, not a sales pitch. We figure it out. You don&apos;t have to come with answers — just tell us what&apos;s not working.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span
                  className="t-body t-body--md"
                  style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                >
                  &ldquo;How long does it take?&rdquo;
                </span>
              </summary>
              <p className="t-body t-body--sm faq-answer">
                Foundation packages take 2-3 weeks. Growth systems take 4-6 weeks. Custom builds depend on scope. We&apos;ll give you a timeline before we start.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span
                  className="t-body t-body--md"
                  style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                >
                  &ldquo;I&apos;ve been burned by agencies before.&rdquo;
                </span>
              </summary>
              <p className="t-body t-body--sm faq-answer">
                Most of our clients have. That&apos;s usually why they found us. We don&apos;t do long-term contracts, we don&apos;t hide behind reports, and we don&apos;t ghost after launch.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span
                  className="t-body t-body--md"
                  style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                >
                  &ldquo;Do I have to sign a long contract?&rdquo;
                </span>
              </summary>
              <p className="t-body t-body--sm faq-answer">
                Nope. Project work is project-priced. Ongoing services are month-to-month. You stay because it works, not because of fine print.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span
                  className="t-body t-body--md"
                  style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                >
                  &ldquo;I just need a website.&rdquo;
                </span>
              </summary>
              <p className="t-body t-body--sm faq-answer">
                Cool. We build those. But we build them with lead capture, follow-up, tracking, and CRM connected from day one. Because a website without a system is a brochure. And brochures don&apos;t book jobs.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section
        className="section section--cta section--padded section--mic-drop section--mic-drop--purple has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2 className="t-display t-display--section" style={{ color: "#fff", marginInline: "auto" }}>
              READY TO FIND OUT<br />
              <span className="mic-drop__headline">WHAT&apos;S BROKEN?</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", marginTop: "var(--space-4)" }}
            >
              10 minutes. No obligation. No pitch. Just a straight answer about what&apos;s working and what&apos;s not.
            </p>
            <Link href="/contact" className="btn btn--lg">Diagnose Your System →</Link>
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
              You tell us. We diagnose. We build. You grow. No mystery. No magic. Just work that works.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
