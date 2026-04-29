"use client";

import { useEffect } from "react";

export function SeeTheSystemInteractive() {
  useEffect(() => {
    // Lead counter
    const counter = document.getElementById("sysLeadCounter");
    if (counter) {
      let val = 0;
      const target = 14872;
      const step = () => {
        val += Math.floor(Math.random() * 800 + 200);
        if (val >= target) {
          val = target;
          counter.textContent = val.toLocaleString();
          return;
        }
        counter.textContent = val.toLocaleString();
        requestAnimationFrame(step);
      };
      step();
    }

    // Uptime counter
    const uptimeEl = document.getElementById("sysUptime");
    let uptimeInterval: ReturnType<typeof setInterval> | undefined;
    if (uptimeEl) {
      const start = Date.now();
      uptimeInterval = setInterval(() => {
        const s = Math.floor((Date.now() - start) / 1000);
        const h = String(Math.floor(s / 3600)).padStart(2, "0");
        const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
        const sec = String(s % 60).padStart(2, "0");
        uptimeEl.textContent = `${h}h ${m}m ${sec}s`;
      }, 1000);
    }

    // Stagger reveal + count-pair animations
    const staggerEls = document.querySelectorAll<HTMLElement>(".sys-stagger");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);

          const pair = entry.target.querySelector<HTMLElement>(".sys-count-pair");
          if (pair) {
            const before = Number(pair.dataset.before);
            const after = Number(pair.dataset.after);
            const suffix = pair.dataset.suffix || "";
            const bEl = pair.querySelector<HTMLElement>(".sys-count-before");
            const aEl = pair.querySelector<HTMLElement>(".sys-count-after");
            if (!bEl || !aEl) return;
            let t = 0;
            const dur = 900;
            const tick = () => {
              t = Math.min(t + 16, dur);
              const p = t / dur;
              bEl.textContent =
                Math.round(before + before * 0.4 * (1 - p)) + suffix;
              aEl.textContent =
                Math.round(after + after * 0.6 * (1 - p)) + suffix;
              if (t < dur) requestAnimationFrame(tick);
              else {
                bEl.textContent = before + suffix;
                aEl.textContent = after + suffix;
              }
            };
            setTimeout(() => requestAnimationFrame(tick), 200);
          }
        });
      },
      { threshold: 0.2 }
    );
    staggerEls.forEach((el) => obs.observe(el));

    return () => {
      if (uptimeInterval) clearInterval(uptimeInterval);
      obs.disconnect();
    };
  }, []);

  return null;
}
