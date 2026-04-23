import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import { RESEARCH_COOKIE, isValidToken } from "@/lib/research-auth";
import { loadDossier, DOSSIER_OVERRIDES } from "@/lib/dossier";

export const metadata: Metadata = {
  title: "Research Dossier — Badmouth Digital",
  description: "Buyer research, ICP, belief stack, and strategy.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function ResearchPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(RESEARCH_COOKIE)?.value;
  if (!isValidToken(token)) {
    redirect("/research/login");
  }

  const strategyBlocks = await loadStrategyBlocks();
  const dossier = await loadDossier();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--bad-gray)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-10">
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--bad-red)] mb-4">
            // Research Dossier
          </div>
          <h1
            className="uppercase leading-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Badmouth Digital
          </h1>
          <p className="mt-4 text-sm text-[var(--foreground)]/60 max-w-2xl">
            Buyer research, positioning, ICP, belief stack, and content
            strategy. Internal reference only.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/brand-guide"
              className="text-xs uppercase tracking-[0.15em] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--bad-gray)] px-4 py-2"
            >
              → Brand Guide
            </a>
            <form action="/api/research/logout" method="POST">
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.15em] text-[var(--foreground)]/50 hover:text-[var(--bad-red)] px-4 py-2"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16">
        {strategyBlocks.length > 0 ? (
          <section className="mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/50 mb-8">
              // Strategy files
            </div>
            <div className="space-y-16">
              {strategyBlocks.map((block) => (
                <article key={block.slug}>
                  <h2
                    className="uppercase mb-4"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    }}
                  >
                    {block.title}
                  </h2>
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-[var(--foreground)]/80 border-l-2 border-[var(--bad-red)] pl-5">
                    {block.body}
                  </pre>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {dossier ? (
          <section>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/50 mb-10">
              // Buyer research dossier
            </div>
            <style
              // eslint-disable-next-line react/no-danger-with-children
              dangerouslySetInnerHTML={{
                __html: `${dossier.css}\n${DOSSIER_OVERRIDES}`,
              }}
            />
            <div
              className="dossier-scope"
              dangerouslySetInnerHTML={{ __html: dossier.html }}
            />
          </section>
        ) : null}
      </div>
    </main>
  );
}

type StrategyBlock = { slug: string; title: string; body: string };

const STRATEGY_FILES = [
  { slug: "positioning", title: "Positioning" },
  { slug: "icp", title: "ICP" },
  { slug: "belief-stack", title: "Belief Stack" },
  { slug: "proof", title: "Proof" },
  { slug: "content-hooks", title: "Content Hooks" },
  { slug: "keyword-clusters", title: "Keyword Clusters" },
];

async function loadStrategyBlocks(): Promise<StrategyBlock[]> {
  const roots = [
    path.join(process.cwd(), "..", "brand-context", "strategy"),
    path.join(process.cwd(), "..", "brand-context"),
  ];
  const blocks: StrategyBlock[] = [];
  for (const file of STRATEGY_FILES) {
    for (const root of roots) {
      const fullPath = path.join(root, `${file.slug}.md`);
      try {
        const body = await fs.readFile(fullPath, "utf8");
        blocks.push({ slug: file.slug, title: file.title, body });
        break;
      } catch {
        // try next root
      }
    }
  }
  return blocks;
}

