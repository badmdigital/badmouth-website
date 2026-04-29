"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "badmouth-warned";

export function SystemWarning() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (!dismissed) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function dismiss() {
    setDismissing(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    document.body.style.overflow = "";
    setTimeout(() => setVisible(false), 500);
  }

  function leave() {
    window.location.href = "https://www.google.com";
  }

  if (!mounted || !visible) return null;

  return (
    <div className={`system-warning-overlay${dismissing ? " dismissed" : ""}`}>
      <div className="system-warning">
        <div className="system-warning__titlebar">
          <span className="system-warning__titlebar-icon">⚠</span>
          <span className="system-warning__titlebar-text">SYSTEM WARNING</span>
          <span className="system-warning__titlebar-dots">
            <span className="dot dot--red"></span>
            <span className="dot dot--white"></span>
          </span>
        </div>

        <div className="system-warning__body">
          <div className="system-warning__icon">!</div>
          <h2 className="system-warning__heading">
            ARE YOU READY FOR THE <span className="system-warning__truth">TRUTH?</span>
          </h2>
          <p className="system-warning__text">
            This site contains raw, unfiltered marketing advice. No fluff. No BS. Just results.
          </p>
          <p className="system-warning__subtext">PROCEED AT YOUR OWN RISK.</p>

          <div className="system-warning__buttons">
            <button
              className="system-warning__btn system-warning__btn--ready"
              onClick={dismiss}
            >
              I&apos;M READY
            </button>
            <button
              className="system-warning__btn system-warning__btn--leave"
              onClick={leave}
            >
              GET ME OUT
            </button>
          </div>
        </div>

        <div className="system-warning__accent"></div>
      </div>
    </div>
  );
}
