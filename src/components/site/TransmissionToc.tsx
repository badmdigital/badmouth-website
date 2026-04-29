"use client";

import { useEffect, useRef } from "react";

export function TransmissionToc() {
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = document.getElementById("post-content");
    const tocNav = navRef.current;
    const progressBar = progressRef.current;
    if (!content || !tocNav) return;

    // Build TOC from h2 elements
    const headings = Array.from(content.querySelectorAll("h2"));
    tocNav.innerHTML = "";
    headings.forEach((h, i) => {
      const id = h.id || `section-${i}`;
      h.id = id;
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.className = "post-toc__link";
      link.textContent = h.textContent;
      tocNav.appendChild(link);
    });

    const tocLinks = Array.from(tocNav.querySelectorAll(".post-toc__link"));

    function updateActiveHeading() {
      let current = 0;
      headings.forEach((h, i) => {
        if (h.getBoundingClientRect().top <= 120) current = i;
      });
      tocLinks.forEach((l, i) => {
        l.classList.toggle("post-toc__link--active", i === current);
      });
    }

    function updateProgress() {
      if (!progressBar || !content) return;
      const rect = content.getBoundingClientRect();
      const total = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(100, (scrolled / (total - window.innerHeight)) * 100);
      progressBar.style.width = `${pct}%`;
    }

    function onScroll() {
      updateActiveHeading();
      updateProgress();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveHeading();
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside className="post-toc" id="post-toc">
      <div className="post-toc__sticky">
        <p className="post-toc__title">TABLE OF CONTENTS</p>
        <nav className="post-toc__nav" id="toc-nav" ref={navRef}></nav>
        <div className="post-toc__progress">
          <div
            className="post-toc__progress-bar"
            id="reading-progress"
            ref={progressRef}
          ></div>
        </div>
      </div>
    </aside>
  );
}
