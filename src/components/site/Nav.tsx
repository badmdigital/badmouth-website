"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavProps = {
  currentPage?: string;
};

const PAGES = [
  { href: "/see-the-system", label: "The System", slug: "see-the-system" },
  { href: "/foundation-install", label: "Foundation", slug: "foundation-install" },
  { href: "/visibility", label: "Visibility", slug: "visibility" },
  { href: "/volume", label: "Volume", slug: "volume" },
  { href: "/custom-builds", label: "Custom Builds", slug: "custom-builds" },
  { href: "/activation", label: "Activation", slug: "activation" },
  { href: "/about", label: "About", slug: "about" },
];

export function Nav({ currentPage = "" }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav className="nav" id="global-nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/badmouth-logo.webp"
            alt="Badmouth Digital"
            width={200}
            height={40}
            loading="eager"
          />
        </Link>

        <div className="nav__links">
          {PAGES.map((p) => (
            <Link
              key={p.slug}
              href={p.href}
              className={`nav__link${currentPage === p.slug ? " nav__link--active" : ""}`}
            >
              {p.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--primary btn--sm">
            Install Your System
          </Link>
        </div>

        <button
          className="nav__mobile-btn"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`nav__mobile-menu${isOpen ? " is-open" : ""}`}>
        {PAGES.map((p) => (
          <Link key={p.slug} href={p.href} onClick={close}>
            {p.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn--primary"
          style={{ marginTop: "var(--space-4)", textAlign: "center" }}
          onClick={close}
        >
          Install Your System
        </Link>
      </div>
    </nav>
  );
}
