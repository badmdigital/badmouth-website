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
