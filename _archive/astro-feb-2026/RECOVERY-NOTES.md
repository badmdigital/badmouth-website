# Astro Site Archive — Feb 2026

Recovered 2026-04-28 from `~/Downloads/Drive/Coding Projects/_Badmouth/website/`.

This is the full Badmouth Digital marketing site as it stood on **2026-02-27**, before it was lost when the original `Badmouth-Digital` GitHub repo and `badmouth-digital` Vercel project were deleted on Apr 16. The site was previously live at `https://badmouth-digital.vercel.app/`.

## What lives here

Full Astro project — 24 pages built, including:

- `src/pages/index.astro` — homepage with the **MS-DOS boot-sequence hero** (browser-mockup window, `LEAD_SYSTEM V.09`, kernel identity, memory integrity loading bar, flickering process log)
- `src/pages/foundation-install.astro`, `visibility.astro`, `volume.astro`
- `src/pages/see-the-system.astro`, `process.astro`, `custom-builds.astro`, `activation.astro`, `field-kit.astro`
- `src/pages/services/` — `local-seo.astro`, `paid-ads.astro`
- `src/pages/transmissions/` — 6 blog posts
- `src/pages/about.astro`, `contact.astro`, `terms.astro`, `privacy.astro`

## Key files for porting the DOS-boot hero into Next.js

- `src/styles/system/hero-animation.css` — the entire DOS-boot CSS (browser-mockup, mech-container grid, mech-flicker, loading bars)
- `src/styles/system/retro.css` — cassette cards, system warning dialog, danger labels, retro UI patterns
- `src/styles/system/typography.css` — `t-display`, `t-flicker`, `t-crt-shake`, terminal-path eyebrow styling
- `src/components/SystemWarning.astro` — the "ARE YOU READY FOR THE TRUTH?" boot overlay
- `src/pages/index.astro` lines 30–80 — the DOS-boot hero markup
- `src/copy/` — site copy in markdown

## How to preview

From this directory:
```
npm install
npx astro build
npx astro preview
```

## DO NOT

- Build this from the parent Next.js repo. It's a separate Astro project — its `package.json` and `node_modules` are scoped to this folder.
- Modify these files in place. Treat as read-only reference material. When porting to Next.js, copy out and adapt.
