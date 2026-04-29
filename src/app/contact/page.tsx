import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Contact | Badmouth Digital",
  description:
    "Fill out the form. Tell us what's going on. We'll look at your stuff before we talk.",
};

export default function ContactPage() {
  return (
    <SiteShell currentPage="contact">
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
            <p className="t-eyebrow">Let&apos;s Talk</p>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              YOU&apos;VE READ ENOUGH.<br />
              <span className="t-accent t-flicker">LET&apos;S SEE WHAT&apos;S BROKEN.</span>
            </h1>
            <p className="t-body t-body--lg" style={{ marginInline: "auto", maxWidth: "55ch" }}>
              Fill out the form. Tell us what&apos;s going on. We&apos;ll look at your stuff before we talk so we can skip the small talk and get to what matters.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE FORM */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-content">
            <form className="stack-6" id="contact-form" action="#" method="POST">
              <div className="inner-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input className="form-input" type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="business">Business Name *</label>
                  <input className="form-input" type="text" id="business" name="business" required />
                </div>
              </div>
              <div className="inner-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone *</label>
                  <input className="form-input" type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input className="form-input" type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="website">
                  Website URL{" "}
                  <span style={{ color: "var(--color-text-muted)" }}>(if you have one)</span>
                </label>
                <input className="form-input" type="url" id="website" name="website" placeholder="https://" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="headache">What&apos;s your biggest headache right now? *</label>
                <textarea className="form-textarea" id="headache" name="headache" rows={4} required></textarea>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="tried">What have you tried before?</label>
                <textarea className="form-textarea" id="tried" name="tried" rows={3}></textarea>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="source">How&apos;d you find us?</label>
                <select className="form-select" id="source" name="source" defaultValue="">
                  <option value="">Select one...</option>
                  <option value="google">Google</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%" }}>
                Send It →
              </button>
            </form>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION 3 — WHAT HAPPENS AFTER */}
      <section className="section section--padded surface-base">
        <div className="grid-page grid-gap-lg">
          <div className="col-content stack-6 text-center">
            <p className="t-eyebrow">What to Expect</p>
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              HERE&apos;S WHAT HAPPENS <span className="t-accent t-flicker">NEXT.</span>
            </h2>
          </div>
          <div className="col-content">
            <div className="inner-grid-2" style={{ gap: "var(--space-8)" }}>
              <div className="stack-4" style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-4)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>01</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We read what you send.
                </p>
                <p className="t-body t-body--sm">Every word. Not a bot. Not an intern.</p>
              </div>
              <div className="stack-4" style={{ borderLeft: "3px solid var(--theme-accent-teal)", paddingLeft: "var(--space-4)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>02</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We check your stuff.
                </p>
                <p className="t-body t-body--sm">Your site. Your Google profile. Your tracking. Before we ever get on a call.</p>
              </div>
              <div className="stack-4" style={{ borderLeft: "3px solid var(--theme-accent-yellow)", paddingLeft: "var(--space-4)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>03</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We reach out within 48 hours.
                </p>
                <p className="t-body t-body--sm">With a real response. Not a canned email. Not a calendar link with no context.</p>
              </div>
              <div className="stack-4" style={{ borderLeft: "3px solid var(--color-brand)", paddingLeft: "var(--space-4)" }}>
                <p className="t-eyebrow" style={{ color: "var(--color-text-muted)" }}>04</p>
                <p className="t-body t-body--md" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  We talk.
                </p>
                <p className="t-body t-body--sm">10-15 minutes. We tell you what we found. You ask questions. We figure out if there&apos;s a fit.</p>
              </div>
            </div>
          </div>
          <div className="col-content">
            <div className="retro-box" style={{ padding: "var(--space-8)", marginTop: "var(--space-4)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "1px solid var(--color-border)",
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
                    color: "var(--theme-accent-teal)",
                  }}
                >
                  DIAGNOSTIC PROTOCOL
                </span>
              </div>
              <p
                className="t-body t-body--lg"
                style={{ color: "var(--color-text-primary)", fontWeight: 600, marginBottom: "var(--space-3)" }}
              >
                This isn&apos;t a sales call.
              </p>
              <p className="t-body t-body--md" style={{ marginBottom: 0 }}>
                It&apos;s a system diagnostic. We come with answers, not a pitch deck. If we&apos;re a fit, great. If not, we&apos;ll tell you what to do next anyway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CLOSING STATEMENT */}
      <section
        className="section section--padded surface-pure"
        style={{ borderTop: "3px solid var(--color-brand)" }}
      >
        <div className="grid-page">
          <div className="col-full text-center stack-6">
            <h2 className="t-display t-display--section" style={{ marginInline: "auto" }}>
              TWO MINUTES TO FILL OUT.<br />
              <span className="t-accent t-flicker">48 HOURS TO HEAR BACK.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "50ch", color: "var(--color-text-muted)" }}
            >
              No bullshit in between.
            </p>
            <div>
              <a href="#contact-form" className="btn btn--primary btn--lg">Fill Out The Form →</a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
