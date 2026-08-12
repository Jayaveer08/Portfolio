"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // 1.2 seconds smooth load

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => setFade(true), 250);
        setTimeout(() => setLoading(false), 950);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`preloader-overlay ${fade ? "preloader-fade" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-center">
        <span className="preloader-title">JAYAVEER.</span>
      </div>
      <div className="preloader-counter">{progress}%</div>
    </div>
  );
}
