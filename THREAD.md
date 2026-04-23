# Badmouth Website — Status

> Last updated: 2026-04-16

## Done
- [x] Coming soon landing page (live at badmouthdigital.com)
- [x] Email opt-in with GHL integration
- [x] Client copy review + business intake form (`/review/copy`)
- [x] GHL API integration (19 custom fields, 6 tags, contact upsert + notes)
- [x] Production deploy with env vars
- [x] Migrated brand docs from Badmouth-Digital repo: site-copy-v3.md, visual-asset-guide.md, brand-guidelines.md

## Next
- [ ] Delete Badmouth-Digital and badmouth-os repos manually (GitHub settings)
- [ ] Full website build (replacing coming soon page) — use `content/site-copy-v3.md` as copy source
- [ ] Design review form (`/review/design`) — same pattern, different questions
- [ ] Supabase storage layer for review submissions (for Command Center integration later)

## Handoff — 2026-04-22 09:04

**Summary:** Reviewed Google Labs' `design.md` spec and authored `_Badmouth/website/DESIGN.md` combining Google's token format with our extensions + all 14 sections from the `brand-guide-html` skill.

**Done:**
- Reviewed https://github.com/google-labs-code/design.md
- Wrote `DESIGN.md` — full YAML token set + 14 prose sections
- Pulled tokens from `src/app/globals.css`; mapped prose from `brand-context/voice.md` + `positioning.md`

**Next action:** Reno picks (1) lint with `npx @google/design.md lint DESIGN.md`, (2) write schema-extension doc, or (3) roll into `/brand-setup`.

**Open question:** Does `DESIGN.md` replace `brand-context/identity/design-system.json` or live alongside?
