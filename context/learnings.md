# Learnings — Badmouth Website

## General
- 2026-03-31 — Use `printf` not `echo` when piping values to `vercel env add` to avoid trailing newlines
- 2026-03-31 — GHL v2 custom fields require field IDs (not field keys) in the `customFields` array
- 2026-03-31 — GHL `/contacts/upsert` is the cleanest approach for create-or-update by email
- 2026-03-31 — Read env vars at request time in API routes, not at module scope (Vercel serverless)
