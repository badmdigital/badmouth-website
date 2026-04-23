import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Login",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ error?: string; from?: string }>;

export default async function ResearchLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const from = params.from || "/research";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6">
      <div className="w-full max-w-md border border-[var(--bad-gray)] p-8 md:p-10">
        <div className="text-xs tracking-[0.2em] uppercase text-[var(--bad-red)] mb-4">
          // Restricted
        </div>
        <h1
          className="uppercase mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            lineHeight: 1,
          }}
        >
          Research Access
        </h1>
        <p className="text-sm text-[var(--foreground)]/60 mb-8">
          Enter the access password to view the research dossier.
        </p>

        <form action="/api/research/auth" method="POST" className="space-y-4">
          <input type="hidden" name="from" value={from} />
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
          />
          <div>
            <label
              htmlFor="password"
              className="block text-[0.7rem] uppercase tracking-[0.2em] text-[var(--foreground)]/60 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              className="w-full bg-[var(--bad-gray)]/20 text-[var(--foreground)] px-4 py-3 font-mono text-sm"
              style={{ border: "none" }}
              placeholder="••••••••••"
            />
          </div>
          {hasError ? (
            <div className="border-l-2 border-[var(--bad-red)] pl-3 py-1 space-y-1">
              <div className="text-xs font-mono text-[var(--bad-red)]">
                // invalid password
              </div>
              <div className="text-xs text-[var(--foreground)]/60 leading-relaxed">
                Need access? Contact{" "}
                <a
                  href="mailto:support@badmouthdigital.com?subject=Research%20dossier%20access"
                  className="text-[var(--bad-red)] hover:underline"
                >
                  support@badmouthdigital.com
                </a>
              </div>
            </div>
          ) : null}
          <button
            type="submit"
            className="w-full bg-[var(--bad-red)] text-[var(--foreground)] py-3 uppercase tracking-[0.15em] text-xs font-medium hover:opacity-90 transition"
          >
            Enter
          </button>
        </form>

      </div>
    </main>
  );
}
