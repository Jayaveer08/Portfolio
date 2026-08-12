"use client";

import { useState, useEffect, MouseEvent } from "react";

const specializations = [
  "FULL-STACK PLATFORMS",
  "BACKEND REST APIs",
  "APPLIED AI / ML SYSTEMS",
  "DISTRIBUTED ARCHITECTURES",
];

export default function HeroAmbientGrid() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [tickerIndex, setTickerIndex] = useState(0);

  // Rotate specializations ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % specializations.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Track mouse movement across hero section for ambient glow spotlight
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // 3D Card tilt effect
  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardX = e.clientX - card.left - card.width / 2;
    const cardY = e.clientY - card.top - card.height / 2;
    setTilt({
      rotateX: -(cardY / card.height) * 14,
      rotateY: (cardX / card.width) * 14,
    });
  };

  const handleCardMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="hero-ambient-wrapper"
      onMouseMove={handleMouseMove}
      style={
        {
          "--mouse-x": `${mousePos.x}%`,
          "--mouse-y": `${mousePos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Mouse Spotlight Glow Layer */}
      <div className="ambient-spotlight" />

      {/* Grid Pattern Overlay */}
      <div className="ambient-grid-lines" />

      <div className="ambient-content-grid">
        {/* Left Pitch Block */}
        <div className="ambient-pitch">
          {/* Status Pill & Live Ticker */}
          <div className="status-pill-row">
            <span className="status-pill">
              <i className="status-dot" />
              AVAILABLE FOR 2026 OPPORTUNITIES
            </span>
            <span className="ticker-pill">
              {specializations[tickerIndex]}
            </span>
          </div>

          <h1 className="ambient-title">
            <span>Jayaveer</span>
            <span>Nallapati</span>
          </h1>

          <div className="ambient-subtitle-block">
            <h2>Software Engineer · AI &amp; ML Developer</h2>
            <p>
              Architecting intelligent, high-throughput applications with clean
              code principles, robust backends, and responsive user experiences.
            </p>
          </div>

          <div className="ambient-cta-row">
            <a className="ambient-btn primary" href="#work">
              Explore Selected Work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="ambient-btn secondary"
              href="mailto:nallapatijayaveer@gmail.com"
            >
              Get In Touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right 3D Tilt Matrix Card */}
        <div className="ambient-card-wrapper">
          <div
            className="tilt-card-matrix"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
          >
            <div className="matrix-badge-tag">ENGINEERING MATRIX</div>

            <div className="matrix-metrics-grid">
              <div className="matrix-stat">
                <strong>120+</strong>
                <span>LeetCode Solved</span>
              </div>
              <div className="matrix-stat">
                <strong>9.06</strong>
                <span>B.Tech CGPA</span>
              </div>
              <div className="matrix-stat">
                <strong>6+</strong>
                <span>Full-Stack Apps</span>
              </div>
              <div className="matrix-stat">
                <strong>2026</strong>
                <span>Graduation Year</span>
              </div>
            </div>

            <div className="matrix-tech-row">
              <span>CORE TOOLKIT</span>
              <div className="floating-tech-chips">
                <span className="tech-badge">React 18</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Java Spring</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">PyTorch</span>
                <span className="tech-badge">Supabase</span>
              </div>
            </div>

            <div className="matrix-footer">
              <span className="matrix-dot" />
              <span>HYDERABAD / TELANGANA, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
