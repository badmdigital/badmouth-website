import { promises as fs } from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

export type TypographyToken = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string | number;
  letterSpacing?: string;
};

export type ComponentToken = {
  backgroundColor?: string;
  textColor?: string;
  typography?: string;
  rounded?: string;
  padding?: string;
};

export type DesignTokens = {
  name: string;
  description?: string;
  colors: Record<string, string>;
  "color-scales"?: Record<string, Record<string, string>>;
  gradients?: Record<string, string>;
  typography: Record<string, TypographyToken>;
  rounded?: Record<string, string>;
  spacing?: Record<string, string>;
  breakpoints?: Record<string, string>;
  layout?: Record<string, string>;
  borders?: Record<string, string>;
  shadows?: Record<string, string>;
  icons?: Record<string, string | number>;
  components?: Record<string, ComponentToken>;
  motion?: {
    ease?: Record<string, string>;
    duration?: Record<string, string>;
    keyframes?: Record<string, string>;
  };
  effects?: Record<string, string>;
  voice?: {
    personality?: string;
    tone?: string;
    use?: string[];
    avoid?: string[];
  };
  imagery?: {
    style?: string;
    treatment?: string;
    subjects?: string;
  };
};

export type DesignSection = {
  heading: string;
  body: string;
};

export type DesignDoc = {
  tokens: DesignTokens;
  sections: DesignSection[];
  raw: string;
};

const FRONT_MATTER = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

export async function loadDesignDoc(): Promise<DesignDoc> {
  const filePath = path.join(process.cwd(), "DESIGN.md");
  const raw = await fs.readFile(filePath, "utf8");
  const match = raw.match(FRONT_MATTER);
  if (!match) {
    throw new Error("DESIGN.md is missing YAML front matter");
  }
  const tokens = parseYaml(match[1]) as DesignTokens;
  const body = match[2];
  const sections = splitSections(body);
  return { tokens, sections, raw };
}

function splitSections(body: string): DesignSection[] {
  const parts = body.split(/^## /m).filter(Boolean);
  return parts.map((part) => {
    const newlineIdx = part.indexOf("\n");
    const heading = part.slice(0, newlineIdx).trim();
    const content = part.slice(newlineIdx + 1).trim();
    return { heading, body: content };
  });
}

export function resolveRef(
  tokens: DesignTokens,
  value: string | undefined,
): string | undefined {
  if (!value) return undefined;
  const refMatch = value.match(/^\{([^}]+)\}$/);
  if (!refMatch) return value;
  const parts = refMatch[1].split(".");
  let cursor: unknown = tokens;
  for (const part of parts) {
    if (cursor && typeof cursor === "object" && part in (cursor as object)) {
      cursor = (cursor as Record<string, unknown>)[part];
    } else {
      return value;
    }
  }
  return typeof cursor === "string" ? cursor : value;
}

export function findSection(
  doc: DesignDoc,
  ...headings: string[]
): DesignSection | undefined {
  const set = new Set(headings.map((h) => h.toLowerCase()));
  return doc.sections.find((s) => set.has(s.heading.toLowerCase()));
}
