import { promises as fs } from "node:fs";
import path from "node:path";

const SCOPE = ".dossier-scope";
const DOSSIER_FILENAMES = ["research-dossier.html"];

const SKIP_SELECTORS = new Set([
  ":root",
  "html",
  "body",
  "*",
  "::selection",
]);

const STRIPPED_BODY_SELECTORS = [
  /<nav\b[\s\S]*?<\/nav>/gi,
  /<div\s+class="sidebar-toc"[\s\S]*?<\/div>/gi,
  /<button\s+class="export-pdf-btn"[\s\S]*?<\/button>/gi,
  /<section\s+id="cover"[\s\S]*?<\/section>/gi,
  // Strip the duplicate "View Brand Book" inline link — keep the styled one
  /<p\s+style="margin-top:\s*16px[^"]*"><a[^>]*>\s*&larr;\s*VIEW BRAND BOOK[\s\S]*?<\/p>/gi,
];

function formatToday(): string {
  const d = new Date();
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type DossierContent = {
  html: string;
  css: string;
};

export async function loadDossier(): Promise<DossierContent | null> {
  const roots = [
    path.join(process.cwd(), "..", "brand-context"),
    path.join(process.cwd(), "public"),
  ];

  for (const root of roots) {
    for (const name of DOSSIER_FILENAMES) {
      try {
        const file = path.join(root, name);
        const raw = await fs.readFile(file, "utf8");
        return extract(raw);
      } catch {
        continue;
      }
    }
  }
  return null;
}

function extract(raw: string): DossierContent {
  const styleMatch = raw.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const rawCss = styleMatch ? styleMatch[1] : "";
  const rawBody = bodyMatch ? bodyMatch[1] : raw;

  let body = rawBody;
  for (const re of STRIPPED_BODY_SELECTORS) {
    body = body.replace(re, "");
  }
  body = body
    .replace(/\[Date\]/g, formatToday())
    .replace(/href="\.\.\/identity\/brand-book\.html"/g, 'href="/brand-guide"')
    .replace(/href="sample-brand-book\.html"/g, 'href="/brand-guide"');

  const css = scopeCss(rawCss);
  return { html: body, css };
}

function scopeCss(input: string): string {
  const out: string[] = [];
  let i = 0;
  while (i < input.length) {
    // Skip comments
    if (input.startsWith("/*", i)) {
      const end = input.indexOf("*/", i + 2);
      if (end === -1) break;
      out.push(input.slice(i, end + 2));
      i = end + 2;
      continue;
    }
    // Skip whitespace (but preserve it)
    const wsMatch = input.slice(i).match(/^\s+/);
    if (wsMatch) {
      out.push(wsMatch[0]);
      i += wsMatch[0].length;
      continue;
    }
    // @rules
    if (input[i] === "@") {
      const { block, nextIndex } = readAtRule(input, i);
      out.push(block);
      i = nextIndex;
      continue;
    }
    // Regular rule: read selector up to '{'
    const braceIdx = input.indexOf("{", i);
    if (braceIdx === -1) break;
    const selector = input.slice(i, braceIdx).trim();
    const { body, nextIndex } = readBlock(input, braceIdx);
    const scoped = scopeSelector(selector);
    if (scoped === null) {
      // skip this rule entirely (e.g. body, :root)
    } else {
      out.push(`${scoped} ${body}`);
    }
    i = nextIndex;
  }
  return out.join("");
}

function readAtRule(
  input: string,
  start: number,
): { block: string; nextIndex: number } {
  // e.g. @media, @keyframes, @import
  // Read up to `{` OR `;`
  let i = start;
  while (i < input.length && input[i] !== "{" && input[i] !== ";") i++;
  if (i >= input.length) return { block: input.slice(start), nextIndex: input.length };
  if (input[i] === ";") {
    // @import etc.
    return { block: input.slice(start, i + 1), nextIndex: i + 1 };
  }
  const prelude = input.slice(start, i + 1);
  const atKind = prelude.slice(0, 10).toLowerCase();
  const { body, nextIndex } = readBlock(input, i);
  if (atKind.startsWith("@keyframes") || atKind.startsWith("@font-face")) {
    return { block: `${prelude.replace(/\{$/, "")} ${body}`, nextIndex };
  }
  if (atKind.startsWith("@media") || atKind.startsWith("@supports")) {
    // Recurse into body (strip outer braces, scope, re-wrap)
    const inner = body.slice(1, -1);
    const scopedInner = scopeCss(inner);
    return {
      block: `${prelude.replace(/\{$/, "")} { ${scopedInner} }`,
      nextIndex,
    };
  }
  return { block: `${prelude.replace(/\{$/, "")} ${body}`, nextIndex };
}

function readBlock(
  input: string,
  openBraceIdx: number,
): { body: string; nextIndex: number } {
  let depth = 0;
  for (let i = openBraceIdx; i < input.length; i++) {
    const c = input[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        return { body: input.slice(openBraceIdx, i + 1), nextIndex: i + 1 };
      }
    }
  }
  return { body: input.slice(openBraceIdx), nextIndex: input.length };
}

function scopeSelector(selector: string): string | null {
  const parts = selector
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const kept: string[] = [];
  for (const part of parts) {
    if (SKIP_SELECTORS.has(part)) continue;
    if (part.startsWith("::") && !part.includes(" ")) continue;
    kept.push(`${SCOPE} ${part}`);
  }
  if (kept.length === 0) return null;
  return kept.join(", ");
}

export const DOSSIER_OVERRIDES = `
${SCOPE} {
  --brand: #ff0000;
  --brand-dark: #cc0000;
  --brand-light: #ff4d4d;
  --brand-glow: rgba(255, 0, 0, 0.1);
  --brand-glow-strong: rgba(255, 0, 0, 0.18);
  --page-bg: transparent;
  --page-text: #f0f0f0;
  --page-text-secondary: #a3a3a3;
  --page-text-muted: #6c6c6c;
  --page-border: #262626;
  --page-surface: #111111;
  --page-surface-2: #0f0f0f;
  --dark-bg: #0a0a0a;
  --dark-elevated: #1a1a1a;
  --dark-sunken: #0f0f0f;
  --dark-text: #f0f0f0;
  --dark-text-secondary: #a3a3a3;
  --dark-text-muted: #525252;
  --dark-border: #262626;
  --font-display: 'Anton', system-ui, sans-serif;
  --font-body: 'JetBrains Mono', monospace;
  --font-mono: 'JetBrains Mono', monospace;
  color: var(--page-text);
}
${SCOPE} section {
  padding: 64px 0 !important;
  border-bottom: 1px solid var(--page-border);
}
${SCOPE} section:first-child {
  padding-top: 0 !important;
}
${SCOPE} .container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
}
${SCOPE} a { color: var(--brand); }
${SCOPE} .placeholder {
  border-color: #262626;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 8px,
    rgba(255,255,255,0.02) 8px,
    rgba(255,255,255,0.02) 16px
  );
}
`;
