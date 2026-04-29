import type { Metadata } from "next";
import Link from "next/link";

import { SeeTheSystemInteractive } from "@/components/site/SeeTheSystemInteractive";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "See The System | Badmouth Digital",
  description:
    "Every lead follows a path. Nothing depends on you remembering to do it.",
};

export default function SeeTheSystemPage() {
  return (
    <SiteShell currentPage="see-the-system">
      <SeeTheSystemInteractive />

      {/* SECTION 1 — HERO */}
      <section
        className="section section--hero surface-base noise-bg has-scanlines"
        style={{
          position: "relative",
          minHeight: "auto",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-16)",
        }}
      >
        <div className="grid-page grid-align-center">
          {/* Left Column: Copy */}
          <div
            className="col-half-left stack-4"
            style={{
              position: "relative",
              zIndex: 5,
              paddingRight: "var(--space-4)",
            }}
          >
            <p
              className="t-eyebrow"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span className="status-dot status-dot--live"></span>
              <span className="sys-path">&gt; /sys/pipeline/overview</span>
            </p>
            <h1 className="t-display t-display--hero">
              EVERY LEAD
              <br />
              <span
                className="t-crt-shake"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                FOLLOWS
              </span>
              <br />
              <span className="t-flicker" style={{ color: "var(--color-brand)" }}>
                A PATH.
              </span>
            </h1>
            <p
              className="t-body t-body--lg"
              style={{
                maxWidth: "52ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Nothing depends on you remembering to do it.
            </p>
            <p className="t-body t-body--md" style={{ maxWidth: "52ch" }}>
              Most contractors have a pile of disconnected tools. Website that
              doesn&apos;t track anything. CRM they signed up for and never opened.
              Call tracking from two vendors ago. None of it talks to each other.
            </p>
            <p
              className="t-body t-body--md"
              style={{
                maxWidth: "52ch",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              We wire it all into one system. Here&apos;s what each piece does and how
              it connects.
            </p>
          </div>

          {/* Right Column: System Pipeline Graphic */}
          <div
            className="col-half-right"
            style={{
              perspective: "1200px",
              position: "relative",
              zIndex: 5,
              paddingLeft: "var(--space-4)",
            }}
          >
            <div
              className="browser-mockup"
              style={{
                transform: "rotateY(-5deg) rotateX(2deg)",
                boxShadow:
                  "-20px 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(79,209,197,0.12)",
              }}
            >
              <div className="browser-mockup__header">
                <div className="browser-controls">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                </div>
                <div className="browser-url">badmouth.digital/sys-pipeline</div>
              </div>

              <div className="browser-mockup__body mech-flicker">
                <div className="mech-ink-overlay"></div>

                <div
                  className="mech-container"
                  style={{
                    padding: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    minHeight: "420px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "8px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <span
                        className="mech-label red-accent"
                        style={{ display: "block", marginBottom: "3px" }}
                      >
                        Pipeline Architecture
                      </span>
                      <div
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "1rem",
                          fontWeight: 900,
                          letterSpacing: "0.05em",
                          color: "#fff",
                          lineHeight: 1,
                        }}
                      >
                        LEAD_PATH<span className="red-accent"> V.09</span>
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "1px",
                        }}
                      >
                        <span className="mech-label" style={{ display: "block" }}>
                          Leads Processed
                        </span>
                        <div
                          className="mech-value green-accent"
                          id="sysLeadCounter"
                          style={{ fontSize: "0.85rem" }}
                        >
                          0
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "1px",
                        }}
                      >
                        <span className="mech-label" style={{ display: "block" }}>
                          Uptime
                        </span>
                        <div
                          className="mech-value"
                          id="sysUptime"
                          style={{
                            fontSize: "0.7rem",
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          00h 00m 00s
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      flex: 1,
                    }}
                  >
                    <div
                      className="sys-pipe-node sys-pipe-node--entry"
                      id="pipeNode1"
                    >
                      <div
                        className="sys-pipe-icon"
                        style={{ color: "var(--color-brand, #ff003c)" }}
                      >
                        ▶
                      </div>
                      <div className="sys-pipe-content">
                        <span className="sys-pipe-label">LEAD ARRIVES</span>
                        <span className="sys-pipe-tag red-accent">INBOUND</span>
                      </div>
                      <div className="sys-pipe-status red-accent">LIVE</div>
                    </div>

                    <div className="sys-pipe-arrow">
                      <div className="sys-pipe-arrow__line"></div>
                      <div
                        className="sys-pipe-arrow__packet"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                    </div>

                    <div className="sys-pipe-node" id="pipeNode2">
                      <div
                        className="sys-pipe-icon"
                        style={{ color: "var(--color-brand, #ff003c)" }}
                      >
                        ◎
                      </div>
                      <div className="sys-pipe-content">
                        <span className="sys-pipe-label">SERVICE PAGES</span>
                        <span
                          className="sys-pipe-tag"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          CONVERTS TRAFFIC
                        </span>
                      </div>
                      <div className="sys-pipe-status green-accent">OK</div>
                    </div>

                    <div className="sys-pipe-arrow">
                      <div className="sys-pipe-arrow__line"></div>
                      <div
                        className="sys-pipe-arrow__packet"
                        style={{ animationDelay: "0.8s" }}
                      ></div>
                    </div>

                    <div className="sys-pipe-node" id="pipeNode3">
                      <div
                        className="sys-pipe-icon"
                        style={{ color: "var(--theme-accent-teal, #4fd1c5)" }}
                      >
                        ◎
                      </div>
                      <div className="sys-pipe-content">
                        <span className="sys-pipe-label">LEAD CAPTURE</span>
                        <span
                          className="sys-pipe-tag"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          EVERY CALL. EVERY FORM.
                        </span>
                      </div>
                      <div className="sys-pipe-status green-accent">OK</div>
                    </div>

                    <div className="sys-pipe-arrow">
                      <div className="sys-pipe-arrow__line"></div>
                      <div
                        className="sys-pipe-arrow__packet"
                        style={{ animationDelay: "1.4s" }}
                      ></div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6px",
                      }}
                    >
                      <div
                        className="sys-pipe-node sys-pipe-node--sm"
                        id="pipeNode4"
                      >
                        <div
                          className="sys-pipe-icon"
                          style={{
                            color: "var(--theme-accent-yellow, #f6c90f)",
                            fontSize: "0.65rem",
                          }}
                        >
                          ◎
                        </div>
                        <div className="sys-pipe-content">
                          <span
                            className="sys-pipe-label"
                            style={{ fontSize: "0.5rem" }}
                          >
                            AUTO FOLLOW-UP
                          </span>
                          <span
                            className="sys-pipe-tag"
                            style={{
                              color: "rgba(255,255,255,0.35)",
                              fontSize: "0.42rem",
                            }}
                          >
                            SMS + EMAIL
                          </span>
                        </div>
                        <div
                          className="sys-pipe-status green-accent"
                          style={{ fontSize: "0.45rem" }}
                        >
                          RUN
                        </div>
                      </div>
                      <div
                        className="sys-pipe-node sys-pipe-node--sm"
                        id="pipeNode5"
                      >
                        <div
                          className="sys-pipe-icon"
                          style={{
                            color: "var(--color-brand, #ff003c)",
                            fontSize: "0.65rem",
                          }}
                        >
                          ◎
                        </div>
                        <div className="sys-pipe-content">
                          <span
                            className="sys-pipe-label"
                            style={{ fontSize: "0.5rem" }}
                          >
                            REVIEW ENGINE
                          </span>
                          <span
                            className="sys-pipe-tag"
                            style={{
                              color: "rgba(255,255,255,0.35)",
                              fontSize: "0.42rem",
                            }}
                          >
                            AUTO-REQUEST
                          </span>
                        </div>
                        <div
                          className="sys-pipe-status green-accent"
                          style={{ fontSize: "0.45rem" }}
                        >
                          RUN
                        </div>
                      </div>
                    </div>

                    <div className="sys-pipe-arrow">
                      <div className="sys-pipe-arrow__line"></div>
                      <div
                        className="sys-pipe-arrow__packet"
                        style={{ animationDelay: "2.0s" }}
                      ></div>
                    </div>

                    <div className="sys-pipe-node" id="pipeNode6">
                      <div
                        className="sys-pipe-icon"
                        style={{ color: "var(--theme-accent-teal, #4fd1c5)" }}
                      >
                        ◎
                      </div>
                      <div className="sys-pipe-content">
                        <span className="sys-pipe-label">
                          TRACKING + ATTRIBUTION
                        </span>
                        <span
                          className="sys-pipe-tag"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          EVERY SOURCE LOGGED
                        </span>
                      </div>
                      <div className="sys-pipe-status green-accent">OK</div>
                    </div>

                    <div className="sys-pipe-arrow">
                      <div className="sys-pipe-arrow__line"></div>
                      <div
                        className="sys-pipe-arrow__packet"
                        style={{ animationDelay: "2.6s" }}
                      ></div>
                    </div>

                    <div
                      className="sys-pipe-node sys-pipe-node--terminal"
                      id="pipeNode7"
                    >
                      <div
                        className="sys-pipe-icon"
                        style={{ color: "var(--theme-accent-teal, #4fd1c5)" }}
                      >
                        ▣
                      </div>
                      <div className="sys-pipe-content">
                        <span className="sys-pipe-label">DASHBOARD</span>
                        <span
                          className="sys-pipe-tag"
                          style={{ color: "rgba(79,209,197,0.7)" }}
                        >
                          ONE SCREEN. ALL NUMBERS.
                        </span>
                      </div>
                      <div
                        className="sys-pipe-status"
                        style={{
                          color: "var(--theme-accent-teal)",
                          fontWeight: 900,
                        }}
                      >
                        LIVE
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "8px",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.45rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      &gt; SYS_STATUS: ALL NODES ACTIVE
                    </span>
                    <span className="mech-cursor"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-indicator__label">Scroll</span>
          <span className="scroll-indicator__chevron"></span>
        </div>
      </section>

      {/* TICKER STRIP */}
      <div className="sys-ticker" aria-hidden="true">
        <div className="sys-ticker__track">
          <span>LEAD CAPTURED</span>
          <span className="sys-ticker__sep">→</span>
          <span>INSTANT TEXT-BACK SENT</span>
          <span className="sys-ticker__sep">→</span>
          <span>FOLLOW-UP QUEUED</span>
          <span className="sys-ticker__sep">→</span>
          <span>CRM UPDATED</span>
          <span className="sys-ticker__sep">→</span>
          <span>REVIEW REQUESTED</span>
          <span className="sys-ticker__sep">→</span>
          <span>SOURCE ATTRIBUTED</span>
          <span className="sys-ticker__sep">→</span>
          <span>DASHBOARD UPDATED</span>
          <span className="sys-ticker__sep">→</span>
          {/* Duplicate for seamless loop */}
          <span>LEAD CAPTURED</span>
          <span className="sys-ticker__sep">→</span>
          <span>INSTANT TEXT-BACK SENT</span>
          <span className="sys-ticker__sep">→</span>
          <span>FOLLOW-UP QUEUED</span>
          <span className="sys-ticker__sep">→</span>
          <span>CRM UPDATED</span>
          <span className="sys-ticker__sep">→</span>
          <span>REVIEW REQUESTED</span>
          <span className="sys-ticker__sep">→</span>
          <span>SOURCE ATTRIBUTED</span>
          <span className="sys-ticker__sep">→</span>
          <span>DASHBOARD UPDATED</span>
          <span className="sys-ticker__sep">→</span>
        </div>
      </div>

      {/* SECTION 2 — SYSTEM COMPONENTS */}
      <section className="section section--padded surface-sunken">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow">
              <span className="sys-path">&gt; /sys/components</span>
            </p>
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              WHAT EACH <span className="t-accent t-flicker">PIECE DOES.</span>
            </h2>
            <p
              className="t-body t-body--md"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Every component has a specific job. Every job runs automatically.
            </p>
          </div>
          <div className="col-full">
            <div className="inner-grid-3">
              <ModuleCard
                color="var(--color-brand)"
                id="MOD_01"
                title="SERVICE PAGES"
                fillPercent={78}
                description="Dedicated pages for each service, built around what people actually search. Every page has one job: turn the visitor into a lead."
              />
              <ModuleCard
                color="var(--theme-accent-yellow)"
                id="MOD_02"
                title="LOCAL PAGES"
                fillPercent={62}
                description="City and town pages that rank your business in every market you serve — not just one. Built to show up when someone searches in a specific neighborhood or zip code."
              />
              <ModuleCard
                color="var(--theme-accent-teal)"
                id="MOD_03"
                title="LEAD CAPTURE"
                fillPercent={91}
                description="Missed call? Instant text-back. Form submission? Instant notification and CRM log. Every lead caught, timestamped, tracked."
              />
              <ModuleCard
                color="var(--theme-accent-yellow)"
                id="MOD_04"
                title="MISSED CALL TEXT"
                fillPercent={100}
                description="Miss a call while you're on a job? An automated text goes back in seconds. While your competitor's voicemail picks up, you've already responded."
              />
              <ModuleCard
                color="var(--theme-accent-teal)"
                id="MOD_05"
                title="LEAD NURTURING"
                fillPercent={84}
                description="Email and text sequences that chase leads for you. New, warm, cold — the system knows the difference and handles each one."
              />
              <ModuleCard
                color="var(--color-brand)"
                id="MOD_06"
                title="REVIEW AUTOMATION"
                fillPercent={55}
                description="Automated review requests after every job. Reminders for non-responders. Negative feedback gets caught before it goes public."
              />
              <ModuleCard
                color="var(--theme-accent-teal)"
                id="MOD_07"
                title="TRACKING & ATTRIBUTION"
                fillPercent={70}
                description="Every call and form tracked to its source. You'll know exactly which marketing produced which jobs and what it cost."
              />
              <ModuleCard
                color="var(--color-brand)"
                id="MOD_08"
                title="AI SITE ASSISTANT"
                fillPercent={100}
                description="Answers questions, captures leads, routes inquiries. Works 24/7. No breaks, no sick days."
              />
              <ModuleCard
                color="var(--theme-accent-yellow)"
                id="MOD_09"
                title="DASHBOARD"
                fillPercent={88}
                description="One screen. Leads, calls, sources, reviews, response times. The numbers that matter, nothing that doesn't."
                noModColor
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT CONNECTS */}
      <section className="section section--statement section--padded surface-base">
        <div className="grid-page">
          <div className="col-content stack-6 text-center">
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              IT&apos;S NOT A STACK OF TOOLS.
              <br />
              <span
                className="t-crt-shake"
                style={{ color: "var(--theme-accent-teal)" }}
              >
                IT&apos;S ONE MACHINE
                <span className="sys-block-cursor">█</span>
              </span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "60ch" }}
            >
              Catch it. Respond. Follow up. Track it. Get the review. See the numbers.
              Every lead, same path. When it&apos;s running, nothing falls through.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT THE NUMBERS SAY */}
      <section className="section section--padded surface-elevated">
        <div className="grid-page grid-gap-lg">
          <div className="col-full text-center stack-4">
            <p className="t-eyebrow">
              <span className="sys-path">&gt; /sys/logs/results</span>
            </p>
            <h2
              className="t-display t-display--section"
              style={{ marginInline: "auto" }}
            >
              WHAT <span className="t-accent t-flicker">THE NUMBERS</span> SAY.
            </h2>
            <p
              className="t-body t-body--lg"
              style={{ marginInline: "auto", maxWidth: "55ch" }}
            >
              Same businesses. Same ad spend. Different outcome — because the system
              actually worked.
            </p>
          </div>
          <div className="col-full">
            <div className="inner-grid-2" style={{ gap: "var(--space-6)" }}>
              {/* Stat 1 */}
              <div
                className="card sys-stat-card sys-stagger"
                style={
                  {
                    "--stagger": 0,
                    "--stat-color": "var(--color-brand)",
                    borderTop: "3px solid var(--color-brand)",
                    padding: "var(--space-6)",
                    position: "relative",
                    overflow: "hidden",
                  } as React.CSSProperties
                }
              >
                <div
                  className="sys-scan-line"
                  style={
                    { "--scan-color": "var(--color-brand)" } as React.CSSProperties
                  }
                ></div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-brand)",
                  }}
                >
                  HVAC Company
                </p>
                <p
                  className="t-display t-display--card sys-count-pair"
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "2rem",
                    margin: "var(--space-2) 0",
                  }}
                  data-before="30"
                  data-after="4"
                  data-suffix="%"
                >
                  <span className="sys-count-before">30%</span>{" "}
                  <span style={{ color: "var(--color-brand)" }}>→</span>{" "}
                  <span className="sys-count-after">4%</span>
                </p>
                <p
                  className="t-body t-body--sm"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 600,
                  }}
                >
                  Missed call rate — dropped in 60 days.
                </p>
                <div className="sys-before-after-bar">
                  <div className="sys-ba-before" style={{ width: "30%" }}></div>
                  <div
                    className="sys-ba-after"
                    style={{ width: "4%", background: "var(--color-brand)" }}
                  ></div>
                </div>
                <p className="t-body t-body--sm">
                  Missed call text-back + CRM automation. Every after-hours lead was
                  getting an instant response while competitors went to voicemail.
                </p>
              </div>

              {/* Stat 2 */}
              <div
                className="card sys-stat-card sys-stagger"
                style={
                  {
                    "--stagger": 1,
                    "--stat-color": "var(--theme-accent-teal)",
                    borderTop: "3px solid var(--theme-accent-teal)",
                    padding: "var(--space-6)",
                    position: "relative",
                    overflow: "hidden",
                  } as React.CSSProperties
                }
              >
                <div
                  className="sys-scan-line"
                  style={
                    {
                      "--scan-color": "var(--theme-accent-teal)",
                    } as React.CSSProperties
                  }
                ></div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--theme-accent-teal)",
                  }}
                >
                  Plumber — Solo Shop
                </p>
                <p
                  className="t-display t-display--card"
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "2rem",
                    margin: "var(--space-2) 0",
                  }}
                >
                  18hrs <span style={{ color: "var(--theme-accent-teal)" }}>→</span>{" "}
                  Instant
                </p>
                <p
                  className="t-body t-body--sm"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 600,
                  }}
                >
                  Average lead response time — no extra staff.
                </p>
                <div className="sys-before-after-bar">
                  <div className="sys-ba-before" style={{ width: "90%" }}></div>
                  <div
                    className="sys-ba-after"
                    style={{
                      width: "2%",
                      background: "var(--theme-accent-teal)",
                    }}
                  ></div>
                </div>
                <p className="t-body t-body--sm">
                  One guy doing everything. Automated follow-up handles the first
                  response while he&apos;s on the job. He used to lose leads to
                  voicemail. Now they&apos;re in the CRM before he puts down his
                  wrench.
                </p>
              </div>

              {/* Stat 3 */}
              <div
                className="card sys-stat-card sys-stagger"
                style={
                  {
                    "--stagger": 2,
                    "--stat-color": "var(--theme-accent-yellow)",
                    borderTop: "3px solid var(--theme-accent-yellow)",
                    padding: "var(--space-6)",
                    position: "relative",
                    overflow: "hidden",
                  } as React.CSSProperties
                }
              >
                <div
                  className="sys-scan-line"
                  style={
                    {
                      "--scan-color": "var(--theme-accent-yellow)",
                    } as React.CSSProperties
                  }
                ></div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--theme-accent-yellow)",
                  }}
                >
                  Electrician — 3 Trucks
                </p>
                <p
                  className="t-display t-display--card sys-count-single"
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "2rem",
                    margin: "var(--space-2) 0",
                  }}
                  data-target="18000"
                  data-prefix="$"
                  data-suffix="K"
                >
                  <span style={{ color: "var(--theme-accent-yellow)" }}>$18K</span>
                </p>
                <p
                  className="t-body t-body--sm"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 600,
                  }}
                >
                  Recovered from abandoned estimates — in 90 days.
                </p>
                <div className="sys-before-after-bar">
                  <div className="sys-ba-before" style={{ width: "45%" }}></div>
                  <div
                    className="sys-ba-after"
                    style={{
                      width: "80%",
                      background: "var(--theme-accent-yellow)",
                    }}
                  ></div>
                </div>
                <p className="t-body t-body--sm">
                  Automated estimate follow-up sequences pinged every open quote at
                  day 2, 5, and 10. Jobs they thought were dead started booking. No
                  extra effort, no extra headcount.
                </p>
              </div>

              {/* Stat 4 */}
              <div
                className="card sys-stat-card sys-stagger"
                style={
                  {
                    "--stagger": 3,
                    "--stat-color": "var(--color-brand)",
                    borderTop: "3px solid var(--color-brand)",
                    padding: "var(--space-6)",
                    position: "relative",
                    overflow: "hidden",
                  } as React.CSSProperties
                }
              >
                <div
                  className="sys-scan-line"
                  style={
                    { "--scan-color": "var(--color-brand)" } as React.CSSProperties
                  }
                ></div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-brand)",
                  }}
                >
                  Roofer — 4 Sales Reps
                </p>
                <p
                  className="t-display t-display--card sys-count-pair"
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "2rem",
                    margin: "var(--space-2) 0",
                  }}
                  data-before="12"
                  data-after="23"
                  data-suffix="%"
                >
                  <span className="sys-count-before">12%</span>{" "}
                  <span style={{ color: "var(--color-brand)" }}>→</span>{" "}
                  <span className="sys-count-after">23%</span>
                </p>
                <p
                  className="t-body t-body--sm"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 600,
                  }}
                >
                  Close rate — same ad spend, zero new campaigns.
                </p>
                <div className="sys-before-after-bar">
                  <div className="sys-ba-before" style={{ width: "12%" }}></div>
                  <div
                    className="sys-ba-after"
                    style={{ width: "23%", background: "var(--color-brand)" }}
                  ></div>
                </div>
                <p className="t-body t-body--sm">
                  Attribution tracking revealed where the best leads were already
                  coming from. Ad budget was reallocated. Pipeline tightened. Same
                  traffic, better conversion — because the system was tracking what
                  actually worked.
                </p>
              </div>
            </div>
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
              READY TO INSTALL
              <br />
              <span className="mic-drop__headline">YOUR SYSTEM?</span>
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
                Install Your System →
              </Link>
              <Link
                href="/foundation-install"
                className="btn btn--lg btn--mic-outline"
              >
                See The Foundation Install
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

type ModuleCardProps = {
  color: string;
  id: string;
  title: string;
  fillPercent: number;
  description: string;
  noModColor?: boolean;
};

function ModuleCard({
  color,
  id,
  title,
  fillPercent,
  description,
  noModColor,
}: ModuleCardProps) {
  const cardStyle = noModColor
    ? undefined
    : ({ "--mod-color": color } as React.CSSProperties);

  return (
    <div className="card sys-mod-card stack-3" style={cardStyle}>
      <div className="sys-mod-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color, fontSize: "1.2rem" }}>◉</span>
          <h3 className="t-display t-display--card" style={{ margin: 0 }}>
            {title}
          </h3>
        </div>
        <div className="sys-mod-meta">
          <span className="sys-mod-id">[{id}]</span>
          <span className="sys-status-badge">ACTIVE</span>
        </div>
      </div>
      <p className="t-body t-body--sm">{description}</p>
      <div className="sys-mod-bar">
        <div
          className="sys-mod-bar__fill"
          style={{ width: `${fillPercent}%`, background: color }}
        ></div>
      </div>
    </div>
  );
}
