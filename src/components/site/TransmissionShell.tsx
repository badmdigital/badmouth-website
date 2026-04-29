import type { ReactNode } from "react";
import Link from "next/link";

import { SiteShell } from "./SiteShell";
import { TransmissionToc } from "./TransmissionToc";

type AdjacentPost = {
  title: string;
  slug: string;
};

type TransmissionShellProps = {
  children: ReactNode;
  title: string;
  description: string;
  category: string;
  categoryColor?: string;
  date: string;
  readTime: string;
  wordCount: string;
  author?: string;
  prevPost?: AdjacentPost;
  nextPost?: AdjacentPost;
};

export function TransmissionShell({
  children,
  title,
  description,
  category,
  categoryColor = "var(--color-brand)",
  date,
  readTime,
  wordCount,
  author = "Badmouth Digital",
  prevPost,
  nextPost,
}: TransmissionShellProps) {
  return (
    <SiteShell currentPage="transmissions">
      {/* ARTICLE HERO */}
      <section className="post-hero surface-base noise-bg">
        <div className="grid-page">
          <div className="col-content stack-4">
            <div className="post-hero__meta">
              <Link href="/transmissions" className="post-hero__back">
                ← All Transmissions
              </Link>
              <span
                className="post-hero__category"
                style={{ color: categoryColor, borderColor: categoryColor }}
              >
                {category}
              </span>
            </div>
            <h1 className="t-display t-display--hero post-hero__title">{title}</h1>
            <p className="t-body t-body--lg post-hero__desc">{description}</p>
            <div className="post-meta-bar">
              <div className="post-meta-bar__item">
                <span className="post-meta-bar__label">Published</span>
                <span className="post-meta-bar__value">{date}</span>
              </div>
              <div className="post-meta-bar__divider"></div>
              <div className="post-meta-bar__item">
                <span className="post-meta-bar__label">Read Time</span>
                <span className="post-meta-bar__value">{readTime}</span>
              </div>
              <div className="post-meta-bar__divider"></div>
              <div className="post-meta-bar__item">
                <span className="post-meta-bar__label">Word Count</span>
                <span className="post-meta-bar__value">{wordCount}</span>
              </div>
              <div className="post-meta-bar__divider"></div>
              <div className="post-meta-bar__item">
                <span className="post-meta-bar__label">By</span>
                <span className="post-meta-bar__value">{author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY + TOC SIDEBAR */}
      <section className="post-body surface-sunken">
        <div className="post-layout">
          <TransmissionToc />
          <article className="post-content" id="post-content">
            {children}
          </article>
        </div>
      </section>

      {/* ARTICLE NAVIGATION */}
      <section className="post-nav surface-base">
        <div className="grid-page">
          <div className="col-content">
            <div className="post-nav__grid">
              {prevPost ? (
                <Link
                  href={`/transmissions/${prevPost.slug}`}
                  className="post-nav__link post-nav__link--prev"
                >
                  <span className="post-nav__label">← Previous</span>
                  <span className="post-nav__title">{prevPost.title}</span>
                </Link>
              ) : (
                <div></div>
              )}
              {nextPost ? (
                <Link
                  href={`/transmissions/${nextPost.slug}`}
                  className="post-nav__link post-nav__link--next"
                >
                  <span className="post-nav__label">Next →</span>
                  <span className="post-nav__title">{nextPost.title}</span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section section--cta section--padded section--mic-drop has-scanlines"
        style={{ position: "relative" }}
      >
        <div className="grid-page" style={{ position: "relative", zIndex: 2 }}>
          <div className="col-content text-center stack-4">
            <h2
              className="t-display t-display--section"
              style={{ color: "#fff", marginInline: "auto" }}
            >
              DONE READING?
              <br />
              <span className="mic-drop__headline">LET&apos;S FIX YOURS.</span>
            </h2>
            <p
              className="t-body t-body--lg"
              style={{
                marginInline: "auto",
                maxWidth: "50ch",
                marginTop: "var(--space-4)",
              }}
            >
              These posts give you the playbook. If you want someone to run it for you,
              that&apos;s what we do.
            </p>
            <Link href="/contact" className="btn btn--lg">
              Diagnose Your System →
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
