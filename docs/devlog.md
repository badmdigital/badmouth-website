# Devlog — Badmouth Website

## 2026-03-31 — Client Copy Review Form

Built and shipped client copy review + business intake form at `/review/copy`.

**Tasks:**
- Brainstormed form architecture (standalone public pages, multi-step, Badmouth branded)
- Built 7-step form: identity, business details, services, audience, voice, copy review, final call
- Created 19 GHL custom fields + 6 tags in Agency account via API
- Wired API route with GHL upsert (contact + custom fields + tags + note)
- Fixed production 403 (trailing newline in Vercel env var for GHL_LOCATION_ID)
- Added graceful error handling with retry instead of fake success on failure
- Deployed live, generated client emails for Second Prime and Provaeon

**Stack:** Next.js 16 + GHL v2 API (private integration token, upsert endpoint)

**Key decisions:**
- API direct over webhooks for reliability and control
- Query params (`brand`, `url`, `sections`) for per-client pre-filling
- `ping.badmouthdigital.com` for sending review emails

## 2026-04-16 — GitHub Repo Audit + Doc Migration

Audited all repos under `badmdigital` GitHub account. Identified two stale repos and migrated all useful content.

**Tasks:**
- Reviewed 25 repos across badmdigital account
- Clarified purpose of badmouth-claude (AI brain backup), Badmouth-Digital (old Astro site), badmouth-website (current Next.js site), badmouth-os (stale scaffold)
- Reviewed branding, copy, and funnels folders in Badmouth-Digital
- Migrated 3 docs into badmouth-website

**Files created:**
- `content/site-copy-v3.md` — full website copy (all 8 pages, Feb 2026 draft)
- `docs/visual-asset-guide.md` — design/asset direction with AI prompts per section
- `context/brand-guidelines.md` — brand identity v2 (voice, colors, typography, photography)

**Key decisions:**
- Badmouth-Digital and badmouth-os are now safe to archive/delete (manual — MCP has no delete_repository)
- Two brand images (Artboard 11, Artboard 7) not migrated — likely superseded or already in Supabase

> ⚠️ **2026-04-28 retraction:** the "safe to archive/delete" call above was WRONG. The Apr-16 migration only pulled 3 markdown files from docs/branding folders — the actual built Astro site (24 pages, full Feb-27 DOS-boot hero homepage) was never migrated. The repo + Vercel project deletion that followed took the live site down. Recovery only worked because a Drive backup happened to exist. See `2026-04-28 — Astro Site Recovery` below.

## 2026-04-28 — Astro Site Recovery

Forensic recovery of the Feb-27 Astro Badmouth site that was lost when the Apr-16 session recommended deleting `Badmouth-Digital` GitHub repo + `badmouth-digital` Vercel project on shallow-read evidence.

**Tasks:**
- Multi-pass disk + git + Vercel API + GitHub + IDE-cache + cloud-mount hunt for the missing site
- Located stale Drive backup at `~/Downloads/Drive/Coding Projects/_Badmouth/website/` with uncommitted Feb-27 work
- Identified `hero-animation.css` ("HERO: MECHANICAL DOS BOOT IN BROWSER") + `index.astro` with full DOS-boot hero markup that never made it into the dist build
- Reinstalled deps to fix rollup native bug; rebuilt with `./node_modules/.bin/astro build`; confirmed DOS-boot markers in served HTML
- Consolidated source into `_archive/astro-feb-2026/` inside this repo
- Deleted temp recovery repo and local folder after verifying nothing live depended on either

**Files created:**
- `_archive/astro-feb-2026/` — full Astro source (66 files, 6.3 MB)
- `_archive/astro-feb-2026/RECOVERY-NOTES.md` — file map for porting DOS-boot hero
- `.gitignore` — excludes `_archive/**/node_modules`, `dist`, `.astro`, `.vercel/output`

**Cross-cutting outputs:**
- `~/.claude/projects/-Volumes-HOMEBASE-Projects/memory/feedback_dont_recommend_repo_delete_from_shallow_read.md`
- `~/.claude/projects/-Volumes-HOMEBASE-Projects/memory/feedback_user_no_means_no.md`
- `~/.claude/skills/recover-lost-work/SKILL.md` + matching command file

**Commit:** `9254f88 recover: archive Feb-27 Astro site with DOS-boot hero`

**Next:** port DOS-boot hero from `_archive/astro-feb-2026/src/pages/index.astro` + `hero-animation.css` into the current Next.js homepage (Option B chosen — keep Next.js stack, add DOS-boot hero as a component).

Feedback logged to context/learnings.md.

## 2026-04-29 — Astro → Next.js Port Complete

Ported the recovered Feb-2026 Astro marketing site (24 pages) into the existing Next.js 16 + React 19 + Tailwind 4 repo. Site live in production. Coming-soon kept at `/`; ported homepage with DOS-boot hero previewable at `/home` until Reno flips it.

**Tasks:**
- Located + inspected recovered Astro site at `_archive/astro-feb-2026/` (66 files, 5,093 lines of `.astro`)
- Inventoried existing Next.js shell — confirmed `app/[slug]`, `/brand-guide`, `/research`, `/review/copy`, all API routes, layout.tsx tracking infra to leave untouched
- Copied public assets (`images/logos/*`, `images/visuals/*`) preserving Astro structure
- Copied entire CSS system (`themes/badmouth.css` + 8 `system/*.css`) verbatim into `src/styles/`; wired via globals.css
- Manually ported homepage with DOS-boot hero — `src/app/page.tsx` (server) + `src/components/site/HomeContent.tsx` (client, requestAnimationFrame memory counter)
- Built site shell: `Nav.tsx` (client, mobile menu), `Footer.tsx` (server, inline SVG socials), `SystemWarning.tsx` (client, sessionStorage gate), `SiteShell.tsx` wrapper
- Dispatched 3 parallel `general-purpose` agents to port remaining 22 pages in batches (service pages / site pages / transmissions). Each got the same conversion-rules brief + reference to HomeContent.tsx
- Build clean (`next build` 11s compile, 39 routes generated)
- Visual QA via Playwright at 1280x800 — DOS-boot hero rendering, 0 console errors, no 4xx/5xx fails. Screenshots at `/tmp/badmouth-qa/`
- Committed on `feat/astro-to-next-port`, merged to `main`, pushed, branch deleted
- Verified Vercel prod: `/` = 13.7KB coming-soon, `/home` = 54.2KB DOS-boot, `/transmissions` 200
- Reverted `src/app/page.tsx` back to ComingSoonPage; new homepage parked at `src/app/home/page.tsx` for preview
- Captured the entire playbook as `/astro-to-next` skill at `~/.claude/skills/astro-to-next/`

**Stack:** Next.js 16.2.1, React 19.2.4, Tailwind 4, TypeScript 5

**Commits:**
- `0adc86d` Port Astro site to Next.js 16 (12,530 insertions across 56 files)
- `5f9013a` Keep coming-soon at /, expose ported homepage at /home
- `3eb9d81` Merge feat/astro-to-next-port

**Key decisions:**
- 1:1 file-per-page routing — clearer for marketing pages with bespoke layouts than reusing the existing `app/[slug]` content-driven catch-all
- Keep Astro CSS system as-is — DOS-boot keyframes + custom typography classes (`t-display`, `t-flicker`, `t-crt-shake`) too fragile to translate to Tailwind utilities
- Hybrid token system — Astro's `--theme-*` / `--color-*` cascade coexists with existing Next `--background` / `--bad-red` tokens. No name collisions
- Coming-soon stays at root for now per Reno's call. Flip is one-line swap of `app/page.tsx`
- Parallel agent batching beat sequential — 3 agents × ~7 pages = ~5,000 lines of mechanical conversion in ~10 minutes wall time
- Existing CSS for Footer + SystemWarning extracted from `<style is:global>` Astro blocks into standalone `.css` files so React components stay clean

**Feedback logged:** New cross-cutting feedback memory `feedback_playwright_cli_sandbox.md` — Playwright CLI sandbox file-write limitation. Captured in `/astro-to-next` skill too.

**Open items:**
- Spot-check all 22 pages visually (Reno will). Three pages screenshot-confirmed; remaining 19 returned 200 + grep-confirmed unique strings only.
- When ready to flip: replace `src/app/page.tsx` body with `src/app/home/page.tsx` body, or just delete the home folder.
- Pre-existing dirty repo files (THREAD.md, context/learnings.md, docs/devlog.md, context/memory/2026-04-28.md) untouched — separate from this work.
