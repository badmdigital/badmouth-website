---
version: alpha
name: Badmouth Digital
description: >
  Terminal/CRT aesthetic for a lead-systems company. Dark canvas,
  single red accent, industrial mono type, flickering analog residue.
  Anti-agency — nothing polished, nothing generic, nothing safe.

colors:
  # Core canvas
  background: "#0a0a0a"
  foreground: "#f0f0f0"
  surface: "#111111"
  border: "#333333"

  # Brand accents
  primary: "#ff0000"          # bad-red — CTAs, focus, pulses, critical signal
  secondary: "#4FD1C5"        # bad-teal — success, positive status, counterweight
  warning: "#FACC15"          # warning-yellow — caution, in-progress state

  # Neutrals
  muted: "#6c6c6c"
  subtle: "#1a1a1a"

  # Semantic (on-* pairs for component safety)
  on-primary: "#f0f0f0"
  on-secondary: "#0a0a0a"
  on-background: "#f0f0f0"
  on-surface: "#f0f0f0"

  # Status tokens
  success: "{colors.secondary}"
  error: "{colors.primary}"
  info: "{colors.secondary}"

color-scales:
  primary:   # bad-red tints/shades for data viz, overlays, rgba uses
    50:  "#ffe5e5"
    100: "#ffb8b8"
    300: "#ff6666"
    500: "#ff0000"
    700: "#b30000"
    900: "#4d0000"
  neutral:
    50:  "#f0f0f0"
    100: "#d4d4d4"
    300: "#8a8a8a"
    500: "#555555"
    700: "#333333"
    900: "#0a0a0a"

gradients:
  signature: "linear-gradient(135deg, #ff0000 0%, #4d0000 100%)"
  terminal-fade: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)"

typography:
  display:
    fontFamily: Anton
    fontSize: 5rem
    lineHeight: 1.0
    letterSpacing: -0.02em
    fontWeight: 400
  h1:
    fontFamily: Anton
    fontSize: 3.5rem
    lineHeight: 1.05
    letterSpacing: -0.01em
    fontWeight: 400
  h2:
    fontFamily: Anton
    fontSize: 2.5rem
    lineHeight: 1.1
    fontWeight: 400
  h3:
    fontFamily: Anton
    fontSize: 1.75rem
    lineHeight: 1.2
    fontWeight: 400
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 1.125rem
    lineHeight: 1.6
    fontWeight: 400
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    lineHeight: 1.6
    fontWeight: 400
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    lineHeight: 1.5
    fontWeight: 400
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    lineHeight: 1.4
    letterSpacing: 0.1em
    fontWeight: 500
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 500

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  2xl: 96px
  section: 160px

breakpoints:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px

layout:
  maxWidth: 1200px
  copyMaxWidth: 720px
  sectionPaddingY: 96px
  sectionPaddingYDesktop: 160px
  containerPaddingX: 32px
  containerPaddingXMobile: 16px

borders:
  thin: 1px
  base: 2px
  thick: 4px

shadows:
  # Badmouth ships flat — these exist only for interactive focus/glow moments.
  none: "none"
  focus-red: "0 0 0 2px #ff0000, 0 0 20px rgba(255,0,0,0.15)"
  glow-red: "0 0 30px rgba(255,0,0,0.05)"
  glow-teal: "0 0 15px rgba(79,209,197,0.2)"
  glow-yellow: "0 0 15px rgba(250,204,21,0.2)"

icons:
  library: "lucide"
  defaultSize: 20px
  strokeWidth: 1.5
  color: "{colors.foreground}"

components:
  # NOTE: button-primary has 3.51:1 contrast (red/#ff0000 on #f0f0f0 text).
  # Below AA normal (4.5:1), ABOVE AA-large (3:1). Buttons ship in Anton
  # 14px+ bold / label-caps — qualifies as large text. Acceptable tradeoff.
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  input:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.foreground}"
  input-placeholder:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.muted}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "24px"
  divider:
    backgroundColor: "{colors.border}"
  status-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    typography: "{typography.label-caps}"
  status-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warning}"
    typography: "{typography.label-caps}"
  status-info:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.info}"
    typography: "{typography.label-caps}"

# ── Badmouth extensions (beyond the Google spec) ───────────────────
motion:
  ease:
    out: "cubic-bezier(0.16, 1, 0.3, 1)"
    standard: "ease"
  duration:
    instant: 100ms
    fast: 200ms
    base: 300ms
    slow: 600ms
  keyframes:
    glitch: "2–4px rgb-split oscillation, 3s infinite"
    flicker: "92–97% opacity dips, 4s infinite"
    pulse-red: "red halo bloom, 1.5s infinite on hover"
    blink-cursor: "2px red bar, 1s step-end infinite"
    scanline-drift: "subtle vertical crawl, optional"

effects:
  scanlines: "2px/4px repeating horizontal lines at rgba(0,0,0,0.03) — fixed overlay, z-50"
  noise: "SVG fractal noise, 2.5% opacity, fixed overlay, z-49"
  vignette: "inset box-shadow 0 0 150px rgba(0,0,0,0.7)"
  focus-glow: "0 0 0 2px #ff0000, 0 0 20px rgba(255,0,0,0.15)"

voice:
  personality: "Direct. Confident. Anti-agency. Earns trust through specificity, not claims."
  tone: "Bold, punchy, problem-first. Short declarative statements, proof-backed."
  use: ["Build", "Install", "System", "Catch", "Feed", "Fix", "Track", "Run"]
  avoid: ["Leverage", "synergy", "holistic", "solutions", "passionate", "journey", "best-in-class", "rhetorical questions"]

imagery:
  style: "Terminal screenshots, CRT monitor photography, industrial/utilitarian, high-contrast B&W with single red accent"
  treatment: "Desaturate, add grain, crush blacks. No stock photography. No shiny gradients. No isometric illustrations."
  subjects: "Real tools, real screens, real work. Never smiling teams around laptops."
---

## Overview

**Badmouth in one sentence:** We build the lead systems local service businesses run on — website, CRM, automations, tracking, reviews, and dashboard, all connected and installed inside your business.

**Taglines:**
- Primary: *"Build the system first. Then feed it."*
- Brand anchor: *"If we disappeared tomorrow, your system would still be running."*

**Terminal as brand.** Badmouth Digital's identity is engineered around a single metaphor: the lead system is infrastructure, and infrastructure looks like a terminal. Black canvas. Mono type. Scanlines. A red cursor blinking where the next command will be entered.

The aesthetic is the positioning. Every agency site looks like Notion with better illustrations. Badmouth's looks like something is being installed, right now, in front of you. That tension — analog decay meeting operational precision — is the brand.

**Three non-negotiables:**
1. **Dark-only.** No light mode. The terminal doesn't have a light mode.
2. **One accent.** Red carries every moment of attention. Teal and yellow are status signals, not decoration.
3. **Mono by default.** Anton for headlines, JetBrains Mono for everything else. No sans-serif body copy.

## Audience (ICP)

The brand is engineered for one reader: a local service operator who has demand but can't catch it. Every design decision should feel built *for them,* not for other agencies or designers.

- **Primary ICP:** Local service business owners (home services, med-spa, contractors, trades) doing $500K–$5M, already running ads or generating leads, frustrated that leads leak.
- **Secondary ICP:** Multi-location operators and franchise owners with operational chaos across systems.
- **Tertiary ICP:** Agencies and ops consultants who want to resell/install the Badmouth system under their own brand.

**How the brand reads to them:**
- Serious. Technical. No marketing fluff. The homepage looks like a monitoring dashboard, not a pitch deck.
- Specific proof > promises. Before → after with real numbers.
- Operational language — "install," "system," "jobs caught" — not agency language.

## Colors

The palette is a 3-color system on black: a neutral foreground, a red primary, and two status colors.

- **Background (#0a0a0a):** Near-black, never true black — true black flattens the scanline overlay.
- **Foreground (#f0f0f0):** Off-white. Softer than pure white, reads warmer on dark.
- **Primary — bad-red (#ff0000):** Pure web red. The only color allowed to grab attention. Use it for the single most important action on a page, for focus states, and for critical signal (errors, urgency, interaction). Do not dilute it. If everything is red, nothing is.
- **Secondary — bad-teal (#4FD1C5):** Counterweight. Positive status, success states, the "after" in proof blocks. Never primary CTA.
- **Warning — warning-yellow (#FACC15):** In-progress, caution, "installing." Used on status chips, never on headlines.
- **Border (#333333):** Default divider. Subtle enough to disappear, strong enough to structure.

**Contrast rules:**
- Red on black (#ff0000 on #0a0a0a) = 5.25:1 — passes AA for large text; pair with `on-primary` foreground for buttons.
- Teal on black = 8.9:1 — safe anywhere.
- Never place red text on red background. Never place yellow text on white.

## Typography

**Anton** carries every headline — a single-weight, condensed, all-caps-friendly industrial face. It reads like a stencil on shipping crates. No other display font is permitted.

**JetBrains Mono** carries everything else — body, UI, labels, captions, code. Using a mono for body copy is intentional: it reinforces the terminal aesthetic and forces short, rhythmic sentences. If it doesn't fit on one line, it's probably too long.

**Rules:**
- Headlines in Anton are usually uppercase, always tight-tracked (-0.02em on display, -0.01em on h1).
- Body copy is never justified. Left-aligned, ragged right.
- Labels use `label-caps` — uppercase, 0.1em letter-spacing, 12px.
- Never mix a third typeface. No script, no serif, no Inter fallback styling.

## Layout

- Base spacing unit: **8px** (`spacing.sm`). Every margin, padding, and gap is a multiple.
- Section rhythm: **96–160px** vertical padding on major sections. Tight rhythm inside sections (16–24px), generous rhythm between them.
- Max content width: **1200px**, but most copy-heavy columns cap at **720px** for readability.
- Grid: **12-col desktop, 4-col mobile.** Break the grid deliberately — full-bleed terminal headers, asymmetric proof blocks.

## Elevation & Depth

The site is **flat.** No drop shadows, no card elevations, no Material-style z-layers. Depth is expressed through:

1. **Surface color shift** — `surface` (#111) on `background` (#0a0a0a) for cards.
2. **Border lines** — 1px `border` (#333) instead of shadow.
3. **Focus glow** — red shadow bloom only appears on interactive focus, never at rest.
4. **Vignette** — a whole-viewport inset shadow simulates the curvature of a CRT monitor.

If you reach for a drop shadow, you've misunderstood the brand.

## Shapes

**Sharp corners by default.** `rounded.none` (0px) is the baseline for buttons, inputs, and cards. Small radius (`rounded.sm` = 2px) is reserved for UI chrome that would look glitchy at true 0. Full-round (`rounded.full`) is used only for status dots and avatars.

Nothing soft, nothing friendly. Industrial hardware has hard edges.

## Components

- **button-primary** — Red background, white text, Anton or label-caps. Full-width on mobile, intrinsic on desktop. Hover triggers `pulse-red` animation. The only red button per page outside system states.
- **button-ghost** — Transparent background, foreground text, 1px border. For secondary actions. Never two ghost buttons adjacent without a visual break.
- **input** — Dark surface, no border, red focus ring + glow. Placeholder text at 40% opacity. Monospaced — data goes in, data shows up.
- **card** — Surface color on background, 1px border, 24px padding. Hover may add a subtle red border-shift (`review-card` pattern).

Variants (hover, focus, active, disabled) are separate `component` entries. Disabled = 40% opacity + no pointer events.

## Motion

Motion is **analog decay, not polish.** The site should feel like it's running on old hardware that's still working perfectly.

- **Flicker** on ambient elements (logos, horizontal rules) — 4s loop, 92–97% opacity dips.
- **Glitch** on interactive headlines occasionally — 2–4px RGB split between red and teal.
- **Blink-cursor** on form fields and step intros — a 2px red bar pulsing at 1s cadence.
- **Pulse-red** on primary button hover — 1.5s halo bloom.
- **Scanlines** are static by default; drift is optional and subtle.

Transitions use `cubic-bezier(0.16, 1, 0.3, 1)` (fast out, slow settle) at 200–300ms. No bounces. No spring physics. The terminal doesn't bounce.

## Effects

These are **part of the brand, not decoration.** Every page must ship with:

1. **Scanlines overlay** (`.scanlines`) — fixed, z-50, 2px/4px repeating horizontal lines.
2. **Noise overlay** (`.noise`) — fixed, z-49, 2.5% opacity SVG fractal noise.
3. **CRT vignette** (`.crt-vignette`) — inset shadow on the main content container.

Removing any of these removes the brand. They are tokens, not polish.

## Signature Phrases

Approved language across site, ads, email, and proposals. Use verbatim where possible — these are trademarks of voice.

**Taglines:**
- "Build the system first. Then feed it."
- "If we disappeared tomorrow, your system would still be running."
- "We build the system your leads run through."

**Hooks:**
- "You don't have a lead problem. You have a catching problem."
- "Most agencies sell you ads. We install the machine that converts them."
- "8 → 70 reviews in 60 days. Same business. Different system."

**CTAs (always verb + specific object):**
- "Install Your System"
- "Apply To Work With Us"
- "See The Foundation"
- "Book The Install Call"
- *Never:* "Learn More," "Get Started," "Contact Us," "Submit"

**Promises:**
- "We track jobs, not clicks."
- "If a number doesn't connect to revenue, we don't report it."
- "We install, not just build."

**Mechanism:** The three-layer model — **Foundation → Visibility → Volume.** Always in that order.

**Position line:** "We're a lead systems company, not an agency."

## Voice

Copy is a design token. See `brand-context/voice.md` for the full reference. The short version:

- **Sentence length:** Short. Active voice. Fragments land.
- **Headlines:** Problem-first or outcome-first. Never clever wordplay. Never rhetorical questions.
- **CTAs:** Action verb + specific object. "Install Your System" beats "Learn More" every time.
- **Proof:** Before → after with real numbers. "8 → 70 reviews in 60 days." Specificity is credibility.
- **Profanity:** Sparingly, only when it makes the line land harder. Never in proposals.

## Content Rules

**Ads (Meta, Google, TikTok):**
- Hook = problem stated plainly in the first line. No curiosity-gap clickbait.
- Proof = one specific number with context. "70 reviews in 60 days" beats "massive results."
- CTA = verb + object. Always link to a qualified application, never a generic landing page.

**Social (X, LinkedIn):**
- One idea per post. No threads longer than 5 posts.
- Opinions > observations. Specificity > generalizations.
- Never end with "what do you think?" or any rhetorical beg.

**Email:**
- Subject lines are lowercase, 40 chars max, no emojis.
- First line is the point. No "Hope you're well."
- One CTA per email, one link per CTA.

**Funnels / landing pages:**
- Hero states the problem in the operator's words.
- Proof block within the first viewport.
- Application form > contact form. Qualify before booking.
- Pricing is visible or clearly gated by call — never hidden behind "Contact for pricing."

## Imagery

- **Terminal screenshots, CRT photography, industrial tooling.** Real screens, real cables, real work.
- **Desaturated + grain.** Crush blacks, preserve highlights, add 5–10% noise.
- **Single red accent** per image — a blinking light, a cable, a UI element. Never multi-color photography.
- **No stock photography.** No smiling teams. No isometric illustrations. No shiny product 3D renders. No AI-slop gradients.

If the image looks like every other agency site, replace it.

## Assets

Canonical locations for every reusable brand asset. Never duplicate — reference these paths.

| Asset | Path |
|---|---|
| Logos (light bg) | `brand-context/assets/logos/badmouth-logo-dark.png` |
| Logos (dark bg) | `brand-context/assets/logos/badmouth-logo-light.png` |
| Icon / favicon | `brand-context/assets/logos/badmouth-icon.png` |
| Horizontal lockup | `brand-context/assets/logos/badmouth-horizontal.png` |
| Voice reference | `brand-context/voice.md` |
| Positioning | `brand-context/positioning.md` |
| ICP detail | `brand-context/icp.md` |
| Design tokens (legacy) | `brand-context/identity/design-system.json` |
| Fonts | Google Fonts — Anton, JetBrains Mono |
| Web source of truth | This file — `website/DESIGN.md` |

**Logo rules:**
- Never recolor, stretch, or add effects
- Minimum clear space = 1× icon height on all sides
- Never place on busy imagery without a solid container

## Do's and Don'ts

**Do:**
- Use red for one thing per screen
- Keep type hierarchy to 3 levels visible at once
- Ship scanlines + noise + vignette on every page
- Break the grid deliberately for emphasis
- Leave negative space — the terminal has room to breathe

**Don't:**
- Add a light mode
- Use a third typeface
- Use drop shadows or blur glass
- Use stock photography or generic illustrations
- Dilute red with pink, coral, or gradient fills
- Use emoji in UI copy
- Round corners above 8px

## TL;DR

Eight things to remember if you remember nothing else.

1. **Dark-only. One red.** Black canvas, `#ff0000` for the single most important action per screen.
2. **Anton + JetBrains Mono.** Two fonts. No exceptions.
3. **Sharp corners.** `rounded.none` is the default. Rounding = wrong.
4. **Scanlines + noise + vignette ship on every page.** They are brand, not decoration.
5. **Motion is analog decay.** Flicker, glitch, blink. Never bounce, never spring.
6. **Voice is operational.** Install, system, catch, feed. Never leverage, solutions, journey.
7. **CTAs are verb + object.** "Install Your System," not "Learn More."
8. **Proof beats promise.** Real numbers, before → after, every time.
