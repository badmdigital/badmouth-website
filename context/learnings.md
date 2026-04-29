# Learnings — Badmouth Website

## General
- 2026-03-31 — Use `printf` not `echo` when piping values to `vercel env add` to avoid trailing newlines
- 2026-03-31 — GHL v2 custom fields require field IDs (not field keys) in the `customFields` array
- 2026-03-31 — GHL `/contacts/upsert` is the cleanest approach for create-or-update by email
- 2026-03-31 — Read env vars at request time in API routes, not at module scope (Vercel serverless)
- 2026-04-28 — Feb-27 Astro site recovered; full source archived at `_archive/astro-feb-2026/` with `RECOVERY-NOTES.md`. DOS-boot hero source: `src/pages/index.astro` + `src/styles/system/hero-animation.css`.
- 2026-04-28 — When Reno says "that's not it" — STOP arguing, ask for one unforgeable string to grep. Mounting more evidence to convince is the wrong move.
- 2026-04-28 — Never recommend repo/Vercel deletion based on session-memory "content migrated" notes. Inspect actual `src/`+ deployments first.
