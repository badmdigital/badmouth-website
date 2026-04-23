import type { Metadata } from "next";
import Link from "next/link";
import { loadDesignDoc, resolveRef, findSection } from "@/lib/design-md";
import type { DesignDoc, TypographyToken } from "@/lib/design-md";

export const metadata: Metadata = {
  title: "Brand Guide — Badmouth Digital",
  description: "Design system and brand reference for Badmouth Digital.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-static";

export default async function BrandGuidePage() {
  const doc = await loadDesignDoc();
  const { tokens } = doc;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header name={tokens.name} description={tokens.description} />
      <Nav />
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pb-32">
        <SectionOverview doc={doc} />
        <SectionAudience doc={doc} />
        <SectionColors doc={doc} />
        <SectionTypography doc={doc} />
        <SectionComponents doc={doc} />
        <SectionMotion doc={doc} />
        <SectionEffects doc={doc} />
        <SectionVoice doc={doc} />
        <SectionSignature doc={doc} />
        <SectionImagery doc={doc} />
        <SectionContent doc={doc} />
        <SectionLayout doc={doc} />
        <SectionAssets doc={doc} />
        <SectionDos doc={doc} />
        <SectionTLDR doc={doc} />
        <Footer />
      </div>
    </main>
  );
}

function Header({ name, description }: { name: string; description?: string }) {
  return (
    <header className="relative border-b border-[var(--bad-gray)] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        <div className="text-xs tracking-[0.2em] uppercase text-[var(--bad-red)] mb-4">
          // Brand Guide
        </div>
        <h1
          className="uppercase leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
          }}
        >
          {name}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">
            {description}
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/brand-guide/download"
            className="inline-flex items-center gap-3 bg-[var(--bad-red)] text-[var(--foreground)] px-6 py-3 uppercase tracking-[0.15em] text-xs font-medium hover:opacity-90 transition"
          >
            <span>↓</span> Download DESIGN.md
          </a>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 border border-[var(--bad-gray)] px-6 py-3 uppercase tracking-[0.15em] text-xs text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition"
          >
            → Research
          </Link>
        </div>
      </div>
    </header>
  );
}

const NAV_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "audience", label: "Audience" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "components", label: "Components" },
  { id: "motion", label: "Motion" },
  { id: "effects", label: "Effects" },
  { id: "voice", label: "Voice" },
  { id: "signature", label: "Signature Phrases" },
  { id: "imagery", label: "Imagery" },
  { id: "content-rules", label: "Content Rules" },
  { id: "layout", label: "Layout" },
  { id: "assets", label: "Assets" },
  { id: "dos", label: "Do / Don't" },
  { id: "tldr", label: "TL;DR" },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--bad-gray)]">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="overflow-x-auto px-6 md:px-10 py-3 scrollbar-thin">
          <ul className="flex items-center gap-6 whitespace-nowrap text-[0.7rem] tracking-[0.15em] uppercase">
            <li className="flex items-center gap-2 text-[var(--foreground)]/30 pr-3 border-r border-[var(--bad-gray)]">
              <span>scroll</span>
              <span className="text-[var(--bad-red)]">→</span>
            </li>
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[var(--foreground)]/60 hover:text-[var(--bad-red)] transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="text-[var(--foreground)]/20 pl-2">//</li>
          </ul>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[var(--background)] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[var(--background)] to-transparent"
        />
      </div>
    </nav>
  );
}

function SectionWrap({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-20 md:pt-28 scroll-mt-24">
      <div className="text-xs tracking-[0.2em] uppercase text-[var(--bad-red)] mb-3">
        // {number} · {title}
      </div>
      <h2
        className="uppercase mb-10"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Prose({ text }: { text: string }) {
  if (!text) return null;
  const paragraphs = text.split(/\n{2,}/);
  return (
    <div className="space-y-4 text-sm md:text-base leading-relaxed text-[var(--foreground)]/80 max-w-3xl">
      {paragraphs.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: renderInline(p) }} />
      ))}
    </div>
  );
}

function renderInline(text: string): string {
  return text
    .replace(/</g, "&lt;")
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="text-[var(--bad-teal)] font-mono text-[0.9em]">$1</code>');
}

function SectionOverview({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Overview");
  return (
    <SectionWrap id="overview" number="01" title="Overview">
      <Prose text={section?.body || ""} />
    </SectionWrap>
  );
}

function SectionAudience({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Audience (ICP)", "Audience");
  if (!section) return null;
  return (
    <SectionWrap id="audience" number="02" title="Audience">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function SectionColors({ doc }: { doc: DesignDoc }) {
  const { colors, "color-scales": scales, gradients } = doc.tokens;
  const section = findSection(doc, "Colors");
  return (
    <SectionWrap id="colors" number="03" title="Colors">
      <Prose text={section?.body || ""} />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(colors).map(([name, hex]) => (
          <ColorSwatch key={name} name={name} value={hex} />
        ))}
      </div>
      {scales ? (
        <div className="mt-14">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-4">
            Scales
          </div>
          <div className="space-y-6">
            {Object.entries(scales).map(([scaleName, stops]) => (
              <div key={scaleName}>
                <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--foreground)]/50 mb-2">
                  {scaleName}
                </div>
                <div className="flex h-14 w-full overflow-hidden border border-[var(--bad-gray)]">
                  {Object.entries(stops).map(([stop, hex]) => (
                    <div
                      key={stop}
                      className="flex-1 flex items-end justify-center pb-1 text-[0.65rem] font-mono"
                      style={{
                        background: hex,
                        color: parseInt(stop) > 400 ? "#f0f0f0" : "#0a0a0a",
                      }}
                      title={hex}
                    >
                      {stop}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {gradients ? (
        <div className="mt-14">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-4">
            Gradients
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(gradients).map(([name, value]) => (
              <div
                key={name}
                className="h-32 border border-[var(--bad-gray)] flex items-end p-3"
                style={{ background: value }}
              >
                <span className="text-xs uppercase tracking-[0.15em] font-mono">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </SectionWrap>
  );
}

function ColorSwatch({ name, value }: { name: string; value: string }) {
  const isDark = isColorDark(value);
  return (
    <div className="border border-[var(--bad-gray)]">
      <div
        className="h-24 flex items-end p-3"
        style={{ background: value, color: isDark ? "#f0f0f0" : "#0a0a0a" }}
      >
        <span className="text-[0.7rem] font-mono">{value}</span>
      </div>
      <div className="px-3 py-2 text-xs uppercase tracking-[0.15em]">
        {name}
      </div>
    </div>
  );
}

function isColorDark(hex: string): boolean {
  const match = hex.match(/^#([a-f0-9]{6})$/i);
  if (!match) return false;
  const n = parseInt(match[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.55;
}

function SectionTypography({ doc }: { doc: DesignDoc }) {
  const { typography } = doc.tokens;
  const section = findSection(doc, "Typography");
  return (
    <SectionWrap id="typography" number="04" title="Typography">
      <Prose text={section?.body || ""} />
      <div className="mt-10 space-y-6">
        {Object.entries(typography).map(([name, token]) => (
          <TypeSample key={name} name={name} token={token} />
        ))}
      </div>
    </SectionWrap>
  );
}

function TypeSample({
  name,
  token,
}: {
  name: string;
  token: TypographyToken;
}) {
  const style: React.CSSProperties = {
    fontFamily: token.fontFamily
      ? `'${token.fontFamily}', sans-serif`
      : undefined,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight !== undefined ? String(token.lineHeight) : undefined,
    letterSpacing: token.letterSpacing,
    fontWeight: token.fontWeight,
  };
  return (
    <div className="border border-[var(--bad-gray)] p-6">
      <div className="flex items-center justify-between mb-4 text-[0.7rem] uppercase tracking-[0.15em] text-[var(--foreground)]/50 font-mono">
        <span>{name}</span>
        <span>
          {token.fontFamily} · {token.fontSize} · {token.fontWeight || 400}
        </span>
      </div>
      <div style={style}>The system is the mechanism.</div>
    </div>
  );
}

function SectionComponents({ doc }: { doc: DesignDoc }) {
  const { components = {} } = doc.tokens;
  const section = findSection(doc, "Components");
  const entries = Object.entries(components);

  const hoverMap = new Map<string, (typeof entries)[number][1]>();
  for (const [name, token] of entries) {
    const match = name.match(/^(.+)-hover$/);
    if (match) hoverMap.set(match[1], token);
  }
  const primaryEntries = entries.filter(([name]) => !name.endsWith("-hover"));

  return (
    <SectionWrap id="components" number="05" title="Components">
      <Prose text={section?.body || ""} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {primaryEntries.map(([name, token]) => (
          <ComponentDemo
            key={name}
            name={name}
            token={token}
            hoverToken={hoverMap.get(name)}
            doc={doc}
          />
        ))}
      </div>
    </SectionWrap>
  );
}

type CompToken = {
  backgroundColor?: string;
  textColor?: string;
  typography?: string;
  rounded?: string;
  padding?: string;
};

function resolveToken(t: CompToken, doc: DesignDoc) {
  return {
    bg: resolveRef(doc.tokens, t.backgroundColor) || t.backgroundColor,
    text: resolveRef(doc.tokens, t.textColor) || t.textColor,
    padding:
      resolveRef(doc.tokens, t.padding) || t.padding || "12px 20px",
    rounded: resolveRef(doc.tokens, t.rounded) || "0px",
  };
}

function ComponentDemo({
  name,
  token,
  hoverToken,
  doc,
}: {
  name: string;
  token: CompToken;
  hoverToken?: CompToken;
  doc: DesignDoc;
}) {
  const base = resolveToken(token, doc);
  const hover = hoverToken ? resolveToken(hoverToken, doc) : null;
  const isBtn = name.startsWith("button");
  const isInput = name.startsWith("input");
  const isCard = name.startsWith("card");

  return (
    <div className="border border-[var(--bad-gray)] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--foreground)]/50 font-mono">
          {name}
        </div>
        {hover ? (
          <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--bad-teal)] font-mono">
            hover →
          </div>
        ) : null}
      </div>
      <div
        className={`min-h-[80px] bg-[var(--bad-gray)]/20 p-6 ${
          hover ? "grid grid-cols-2 gap-4" : "flex items-center justify-center"
        }`}
      >
        {isBtn ? (
          <>
            <DemoButton variant={base} hover={hover || undefined} />
            {hover ? (
              <DemoButton
                variant={hover}
                forceHoverStyle
                label="hover state"
              />
            ) : null}
          </>
        ) : isInput ? (
          <input
            type="text"
            placeholder="your@email.com"
            style={{
              background: base.bg,
              color: base.text,
              padding: base.padding,
              borderRadius: base.rounded,
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              border: "none",
              minWidth: "240px",
            }}
          />
        ) : isCard ? (
          <div
            style={{
              background: base.bg,
              color: base.text,
              padding: base.padding,
              borderRadius: base.rounded,
              minWidth: "240px",
              border: `1px solid var(--bad-gray)`,
            }}
          >
            <div className="text-xs uppercase tracking-[0.15em] opacity-60 mb-2">
              Card
            </div>
            <div className="text-sm">The system outlasts us.</div>
          </div>
        ) : (
          <div
            style={{
              background: base.bg,
              color: base.text,
              padding: base.padding,
              borderRadius: base.rounded,
            }}
          >
            {name}
          </div>
        )}
      </div>
      <div className="mt-3 text-[0.7rem] font-mono text-[var(--foreground)]/50 space-y-1">
        {token.backgroundColor ? <div>bg: {token.backgroundColor}</div> : null}
        {token.textColor ? <div>text: {token.textColor}</div> : null}
        {token.rounded ? <div>rounded: {token.rounded}</div> : null}
        {hoverToken?.backgroundColor ? (
          <div className="text-[var(--bad-teal)]">
            hover.bg: {hoverToken.backgroundColor}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DemoButton({
  variant,
  hover,
  forceHoverStyle,
  label,
}: {
  variant: ReturnType<typeof resolveToken>;
  hover?: ReturnType<typeof resolveToken>;
  forceHoverStyle?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      className={`demo-btn ${forceHoverStyle ? "demo-btn--forced" : ""} ${
        hover ? "demo-btn--has-hover" : ""
      } pulse-hover`}
      style={
        {
          "--btn-bg": variant.bg,
          "--btn-text": variant.text,
          "--btn-hover-bg": hover?.bg ?? variant.bg,
          "--btn-hover-text": hover?.text ?? variant.text,
          padding: variant.padding,
          borderRadius: variant.rounded,
        } as React.CSSProperties
      }
    >
      {label ?? "Install Your System"}
    </button>
  );
}

function SectionMotion({ doc }: { doc: DesignDoc }) {
  const { motion } = doc.tokens;
  if (!motion) return null;
  return (
    <SectionWrap id="motion" number="06" title="Motion">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-3">
            Tokens
          </div>
          {motion.ease ? (
            <KeyValue label="Ease" data={motion.ease} />
          ) : null}
          {motion.duration ? (
            <KeyValue label="Duration" data={motion.duration} />
          ) : null}
          {motion.keyframes ? (
            <KeyValue label="Keyframes" data={motion.keyframes} />
          ) : null}
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-3">
            Live demos
          </div>
          <div className="space-y-4">
            <div className="border border-[var(--bad-gray)] p-4 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.15em]">flicker</span>
              <span className="flicker text-[var(--bad-red)] font-mono">
                ● signal
              </span>
            </div>
            <div className="border border-[var(--bad-gray)] p-4 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.15em]">glitch</span>
              <span className="glitch-text font-mono">SYSTEM</span>
            </div>
            <div className="border border-[var(--bad-gray)] p-4 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.15em]">blink-cursor</span>
              <span className="font-mono">
                ENTER
                <span className="blink-cursor" />
              </span>
            </div>
            <div className="border border-[var(--bad-gray)] p-4 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.15em]">pulse-hover</span>
              <button
                type="button"
                className="pulse-hover bg-[var(--bad-red)] text-[var(--foreground)] px-4 py-2 uppercase text-xs tracking-[0.15em]"
              >
                Hover me
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}

function KeyValue({
  label,
  data,
}: {
  label: string;
  data: Record<string, string>;
}) {
  return (
    <div className="mb-5">
      <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--foreground)]/50 mb-2">
        {label}
      </div>
      <dl className="font-mono text-xs space-y-1">
        {Object.entries(data).map(([k, v]) => (
          <div key={k} className="flex gap-3">
            <dt className="text-[var(--bad-teal)] min-w-[100px]">{k}</dt>
            <dd className="text-[var(--foreground)]/70">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SectionEffects({ doc }: { doc: DesignDoc }) {
  const { effects } = doc.tokens;
  const section = findSection(doc, "Effects");
  if (!effects) return null;
  return (
    <SectionWrap id="effects" number="07" title="Effects">
      <Prose text={section?.body || ""} />
      <div className="mt-8">
        <KeyValue label="Applied overlays" data={effects} />
      </div>
    </SectionWrap>
  );
}

function SectionVoice({ doc }: { doc: DesignDoc }) {
  const { voice } = doc.tokens;
  const section = findSection(doc, "Voice");
  return (
    <SectionWrap id="voice" number="08" title="Voice">
      <Prose text={section?.body || ""} />
      {voice ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {voice.personality ? (
            <InfoCard label="Personality">{voice.personality}</InfoCard>
          ) : null}
          {voice.tone ? <InfoCard label="Tone">{voice.tone}</InfoCard> : null}
          {voice.use ? (
            <InfoCard label="Use" tint="teal">
              {voice.use.join(", ")}
            </InfoCard>
          ) : null}
          {voice.avoid ? (
            <InfoCard label="Avoid" tint="red">
              {voice.avoid.join(", ")}
            </InfoCard>
          ) : null}
        </div>
      ) : null}
    </SectionWrap>
  );
}

function InfoCard({
  label,
  children,
  tint,
}: {
  label: string;
  children: React.ReactNode;
  tint?: "teal" | "red";
}) {
  const border =
    tint === "teal"
      ? "border-[var(--bad-teal)]/40"
      : tint === "red"
      ? "border-[var(--bad-red)]/40"
      : "border-[var(--bad-gray)]";
  return (
    <div className={`border ${border} p-5`}>
      <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-2">
        {label}
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionSignature({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Signature Phrases");
  if (!section) return null;
  return (
    <SectionWrap id="signature" number="09" title="Signature Phrases">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function SectionImagery({ doc }: { doc: DesignDoc }) {
  const { imagery } = doc.tokens;
  const section = findSection(doc, "Imagery");
  return (
    <SectionWrap id="imagery" number="10" title="Imagery">
      <Prose text={section?.body || ""} />
      {imagery ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {imagery.style ? <InfoCard label="Style">{imagery.style}</InfoCard> : null}
          {imagery.treatment ? (
            <InfoCard label="Treatment">{imagery.treatment}</InfoCard>
          ) : null}
          {imagery.subjects ? (
            <InfoCard label="Subjects">{imagery.subjects}</InfoCard>
          ) : null}
        </div>
      ) : null}
    </SectionWrap>
  );
}

function SectionContent({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Content Rules");
  if (!section) return null;
  return (
    <SectionWrap id="content-rules" number="11" title="Content Rules">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function SectionLayout({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Layout");
  const { layout, spacing, breakpoints, rounded, borders, shadows } = doc.tokens;
  return (
    <SectionWrap id="layout" number="12" title="Layout & System">
      <Prose text={section?.body || ""} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {layout ? <KeyValue label="Layout" data={asStringMap(layout)} /> : null}
        {spacing ? <KeyValue label="Spacing" data={asStringMap(spacing)} /> : null}
        {breakpoints ? (
          <KeyValue label="Breakpoints" data={asStringMap(breakpoints)} />
        ) : null}
        {rounded ? <KeyValue label="Rounded" data={asStringMap(rounded)} /> : null}
        {borders ? <KeyValue label="Borders" data={asStringMap(borders)} /> : null}
        {shadows ? <KeyValue label="Shadows" data={asStringMap(shadows)} /> : null}
      </div>
    </SectionWrap>
  );
}

function asStringMap(record: Record<string, string | number>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(record).map(([k, v]) => [k, String(v)]),
  );
}

function SectionAssets({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Assets");
  if (!section) return null;
  return (
    <SectionWrap id="assets" number="13" title="Assets">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function SectionDos({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "Do's and Don'ts", "Do's / Don'ts");
  if (!section) return null;
  return (
    <SectionWrap id="dos" number="14" title="Do's and Don'ts">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function SectionTLDR({ doc }: { doc: DesignDoc }) {
  const section = findSection(doc, "TL;DR");
  if (!section) return null;
  return (
    <SectionWrap id="tldr" number="15" title="TL;DR">
      <Prose text={section.body} />
    </SectionWrap>
  );
}

function Footer() {
  return (
    <footer className="mt-32 pt-10 border-t border-[var(--bad-gray)] text-xs font-mono text-[var(--foreground)]/50 flex flex-wrap gap-4 justify-between">
      <span>// generated from DESIGN.md · rebuilds on deploy</span>
      <a
        href="/brand-guide/download"
        className="text-[var(--bad-red)] hover:underline"
      >
        ↓ Download DESIGN.md
      </a>
    </footer>
  );
}
