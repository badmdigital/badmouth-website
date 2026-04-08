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
