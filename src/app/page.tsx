"use client";

import Image from "next/image";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silent fail — still show confirmation
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="scanlines noise crt-vignette flex min-h-screen flex-col items-center px-6 relative overflow-hidden">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Logo — anchored to top */}
      <div className="relative z-10 pt-8 sm:pt-10 flicker">
        <Image
          src="/images/badmouth-logo.webp"
          alt="Badmouth Digital"
          width={200}
          height={60}
          priority
          className="w-[160px] sm:w-[200px]"
        />
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center max-w-3xl mx-auto">
        {/* Headline */}
        <h1
          className="glitch-text font-heading text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-none mb-10 text-bad-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SOMETHING
          <br />
          <span className="text-bad-red">LOUD</span>
          <br />
          IS COMING
        </h1>

        {/* Subhead */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-bad-white/75 max-w-xl mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          We build marketing systems that follow human logic.
          {" "}Not campaigns. Not hacks. <span className="text-bad-red font-bold">Systems.</span>
        </p>

        <p
          className="text-sm text-bad-white/40 mb-10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          The new Badmouth Digital site is being built. Get on the list.
        </p>

        {/* Optin Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-bad-gray/50 border-2 border-bad-gray text-bad-white px-4 py-3 text-sm placeholder:text-bad-white/30 transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            />
            <button
              type="submit"
              disabled={loading}
              className="pulse-hover bg-bad-red text-bad-white px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 border-bad-red transition-all duration-200 hover:bg-bad-red/90 disabled:opacity-50"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {loading ? "..." : "NOTIFY ME"}
            </button>
          </form>
        ) : (
          <div className="border-2 border-bad-red/40 bg-bad-red/5 px-6 py-4 max-w-md w-full">
            <p
              className="text-bad-red text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              You're on the list.
            </p>
            <p
              className="text-bad-white/50 text-xs mt-1"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              We'll let you know when we go live. No spam. No fluff.
            </p>
          </div>
        )}

        {/* Bottom tagline */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-px w-16 bg-bad-red/30" />
          <p
            className="text-xs text-bad-white/50 uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Marketing that follows human logic.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pt-12 pb-6">
        <p
          className="text-xs text-bad-white/15"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          &copy; 2026 Badmouth Digital
        </p>
      </footer>
    </div>
  );
}
