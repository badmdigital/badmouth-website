# Badmouth Website — Status

> Last updated: 2026-04-29

## ✅ Done
- [x] Coming soon landing page (live at badmouthdigital.com)
- [x] Email opt-in with GHL integration
- [x] Client copy review + business intake form (`/review/copy`)
- [x] GHL API integration (19 custom fields, 6 tags, contact upsert + notes)
- [x] Production deploy with env vars
- [x] Migrated brand docs from Badmouth-Digital repo: site-copy-v3.md, visual-asset-guide.md, brand-guidelines.md
- [x] DESIGN.md authored (Google Labs token format + 14 prose sections)
- [x] Brand-routes (`/brand-guide` + `/research`) deployed to prod 2026-04-22
- [x] **Recovered Feb-27 Astro site** with DOS-boot hero — archived at `_archive/astro-feb-2026/`. Commit `9254f88`. (See devlog 2026-04-28.)
- [x] **Astro → Next.js port complete** 2026-04-29 — all 24 pages ported, site live in prod. Coming-soon stays at `/`; new homepage with DOS-boot hero parked at `/home` for QA. 22 ported routes return 200, build clean, Playwright QA on 3 pages clean. Commits `0adc86d` + `5f9013a` + `3eb9d81`. (See devlog 2026-04-29.)

## 🔄 In Progress
_(none active — see Next)_

## 🎯 Next
- [ ] **Spot-check all 22 ported pages visually** — Reno to walk through `/home`, `/about`, `/services`, `/foundation-install`, `/visibility`, `/volume`, `/see-the-system`, `/process`, `/custom-builds`, `/activation`, `/field-kit`, `/websites`, `/services/local-seo`, `/services/paid-ads`, `/transmissions` + 6 posts, `/contact`, `/terms`, `/privacy`. Three already screenshot-confirmed; remaining 19 only verified at HTTP 200 + unique-string grep.
- [ ] **Flip root to new homepage** when QA is green — replace `src/app/page.tsx` body with the body of `src/app/home/page.tsx`, then delete `home/`.
- [ ] Design review form (`/review/design`) — same pattern as `/review/copy`, different questions
- [ ] Supabase storage layer for review submissions (for Command Center integration later)
- [ ] Open question: does `DESIGN.md` replace `brand-context/identity/design-system.json` or live alongside?

## 📦 Archive
- `_archive/astro-feb-2026/` — Feb-27 Astro source (66 files). Reference only. Port complete; kept as fallback / copy source.
