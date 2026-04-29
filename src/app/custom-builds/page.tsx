import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Custom Builds | Badmouth Digital",
  description:
    "When your operation is too complex for the standard system. Starting at $10,000.",
};

export default function CustomBuildsPage() {
  return (
    <SiteShell currentPage="custom-builds">
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
                Custom Builds
              </p>
            </div>
            <h1 className="t-display t-display--hero" style={{ marginInline: "auto" }}>
              WHEN YOUR OPERATION
              <br />
              IS TOO COMPLEX FOR
              <br />
              <span style={{ color: "var(--theme-accent-yellow)" }}>
                THE STANDARD SYSTEM.
              </span>
            </h1>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Multiple locations. Custom routing. Internal tools. Heavy integrations.
              Reporting across teams. Unique workflows nobody else has built for.
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
              Same methodology. Same foundation thinking. But built entirely around your
              operation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHEN THIS MAKES SENSE */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-align-center grid-gap-lg">
          <div className="col-left-7 stack-4">
            <p className="t-eyebrow">When This Makes Sense</p>
            <h2 className="t-display t-display--section">
              THIS ISN&apos;T FOR EVERYONE.
              <br />
              <span className="t-accent t-flicker">HERE&apos;S WHO IT&apos;S FOR.</span>
            </h2>
            <p className="t-body t-body--md" style={{ maxWidth: "55ch" }}>
              If you&apos;re a solo operator or a small crew, the Foundation Install is
              your move. Custom Builds are for businesses that have outgrown
              off-the-shelf solutions.
            </p>
          </div>
          <div className="col-right-5">
            <div
              className="card stack-3"
              style={{ borderLeft: "3px solid var(--theme-accent-yellow)" }}
            >
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Multiple service areas or locations
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Lead routing to different teams or techs
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Custom reporting across departments
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Complex integrations (ERP, dispatch, scheduling)
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Internal dashboards for management
              </p>
              <p
                className="t-body t-body--sm"
                style={{ color: "var(--theme-accent-yellow)" }}
              >
                ◉ Custom automation workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT A CUSTOM BUILD LOOKS LIKE */}
      <section className="section section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              SAME SYSTEM THINKING.
              <br />
              <span className="t-accent t-flicker">CUSTOM ARCHITECTURE.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              We audit your current operation, map the workflows, identify the gaps, and
              build a system designed around how your business actually runs — not how a
              template assumes it does.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="section section--statement section--padded surface-elevated">
        <div className="grid-page">
          <div className="col-content stack-4 text-center">
            <p className="t-eyebrow">Investment</p>
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              STARTING AT{" "}
              <span style={{ color: "var(--theme-accent-yellow)" }}>$10,000.</span>
            </h2>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Custom builds are scoped individually. We&apos;ll map your operation,
              define the build, and give you a fixed price before anything starts.
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
              No surprises. No scope creep billing. One price. One build.
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
              NEED SOMETHING
              <br />
              <span className="mic-drop__headline">CUSTOM?</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{
                marginInline: "auto",
                maxWidth: "50ch",
                marginTop: "var(--space-4)",
              }}
            >
              Tell us what your operation looks like. We&apos;ll tell you what we&apos;d
              build.
            </p>
            <Link
              href="/contact"
              className="btn btn--lg"
              style={{ marginTop: "var(--space-4)" }}
            >
              Let&apos;s Talk About Your Build →
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
