"use client";

import { useState } from "react";

type CommandTab = "info" | "stack" | "stats" | "resume" | "contact";

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState<CommandTab>("info");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nallapatijayaveer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero-console-container">
      <div className="console-layout">
        {/* Left Pitch Block */}
        <div className="console-pitch">
          <div className="console-kicker">
            <span className="console-badge">SYSTEM ACTIVE</span>
            <span>HYDERABAD / TELANGANA, INDIA</span>
          </div>

          <h1 className="console-title">
            <span>Jayaveer</span>
            <span>Nallapati</span>
          </h1>

          <div className="console-subtitle-block">
            <h2>Software Engineer · AI &amp; ML Developer</h2>
            <p>
              Final-year B.Tech CS (AI &amp; ML) student at Sreyas Institute of
              Engineering &amp; Technology. Architecting production-grade
              backend APIs and AI-driven platforms.
            </p>
          </div>

          <div className="console-actions">
            <a className="console-btn primary" href="#work">
              View Work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="console-btn secondary"
              href="/Jayaveer_Nallapati_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              📄 Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Terminal Console Widget */}
        <div className="console-terminal-wrapper">
          <div className="terminal-window">
            {/* Terminal Window Header Bar */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">
                jayaveer@portfolio:~ ({activeTab})
              </div>
            </div>

            {/* Terminal Command Tabs */}
            <div className="terminal-nav">
              <button
                className={`terminal-tab ${activeTab === "info" ? "active" : ""}`}
                onClick={() => setActiveTab("info")}
              >
                <code>$ jayaveer --info</code>
              </button>
              <button
                className={`terminal-tab ${activeTab === "stack" ? "active" : ""}`}
                onClick={() => setActiveTab("stack")}
              >
                <code>$ jayaveer --stack</code>
              </button>
              <button
                className={`terminal-tab ${activeTab === "stats" ? "active" : ""}`}
                onClick={() => setActiveTab("stats")}
              >
                <code>$ jayaveer --stats</code>
              </button>
              <button
                className={`terminal-tab ${activeTab === "resume" ? "active" : ""}`}
                onClick={() => setActiveTab("resume")}
              >
                <code>$ jayaveer --resume</code>
              </button>
              <button
                className={`terminal-tab ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => setActiveTab("contact")}
              >
                <code>$ jayaveer --contact</code>
              </button>
            </div>

            {/* Terminal Body Content */}
            <div className="terminal-body" key={activeTab}>
              {activeTab === "info" && (
                <div className="terminal-content">
                  <div className="term-line prompt">
                    <span className="user">jayaveer@dev</span>:<span className="path">~</span>$ cat identity.json
                  </div>
                  <pre className="term-code">
{`{
  "name": "Jayaveer Nallapati",
  "role": "Software Engineer & AI/ML Developer",
  "education": "B.Tech CS (AI & ML) @ SIET",
  "specialisation": "AI Engineering & Scalable Backends",
  "status": "Available for Full-Time Roles (2026)",
  "location": "Hyderabad, Telangana, India"
}`}
                  </pre>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="terminal-content">
                  <div className="term-line prompt">
                    <span className="user">jayaveer@dev</span>:<span className="path">~</span>$ list --tech-stack
                  </div>
                  <div className="term-stack-list">
                    <div className="stack-group">
                      <span className="group-label">[Languages]</span>
                      <span className="group-items">Java 17, Python, TypeScript, JavaScript, SQL, C++</span>
                    </div>
                    <div className="stack-group">
                      <span className="group-label">[Frameworks]</span>
                      <span className="group-items">Spring Boot, React 18, Next.js, FastAPI, Node.js</span>
                    </div>
                    <div className="stack-group">
                      <span className="group-label">[AI &amp; Data]</span>
                      <span className="group-items">PyTorch, NLP, Supabase, MySQL, PostgreSQL, Redis</span>
                    </div>
                    <div className="stack-group">
                      <span className="group-label">[DevOps/Tools]</span>
                      <span className="group-items">Docker, Git, REST APIs, JWT Auth, Swagger UI</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "stats" && (
                <div className="terminal-content">
                  <div className="term-line prompt">
                    <span className="user">jayaveer@dev</span>:<span className="path">~</span>$ query --metrics
                  </div>
                  <div className="term-metrics">
                    <div className="metric-row">
                      <span className="metric-icon">🚀</span>
                      <span className="metric-text"><strong>120+</strong> LeetCode Algorithmic Problems Solved</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-icon">⭐</span>
                      <span className="metric-text"><strong>9.06</strong> Academic Excellence CGPA</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-icon">💻</span>
                      <span className="metric-text"><strong>6+</strong> Full-Stack &amp; AI Production Projects</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-icon">🎟️</span>
                      <span className="metric-text"><strong>800+</strong> Attendees Event Ticketing Architecture</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "resume" && (
                <div className="terminal-content">
                  <div className="term-line prompt">
                    <span className="user">jayaveer@dev</span>:<span className="path">~</span>$ fetch --resume-pdf
                  </div>
                  <div className="term-socials">
                    <div className="group-label" style={{ color: "var(--signal)", fontWeight: 700, marginBottom: "0.4rem" }}>[DOCUMENT READY]</div>
                    <div className="group-items" style={{ marginBottom: "0.8rem", color: "var(--ink)" }}>
                      Jayaveer_Nallapati_Resume.pdf (Verified Version)
                    </div>
                    <a
                      href="/Jayaveer_Nallapati_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="console-btn primary"
                      style={{ width: "fit-content", padding: "0.5rem 1rem", fontSize: "0.72rem" }}
                    >
                      📄 Open Full Résumé PDF ↗
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "contact" && (
                <div className="terminal-content">
                  <div className="term-line prompt">
                    <span className="user">jayaveer@dev</span>:<span className="path">~</span>$ open --socials
                  </div>
                  <div className="term-socials">
                    <a href="mailto:nallapatijayaveer@gmail.com" className="social-term-link">
                      <span>Email:</span> nallapatijayaveer@gmail.com ↗
                    </a>
                    <a href="https://github.com/Jayaveer08" target="_blank" rel="noreferrer" className="social-term-link">
                      <span>GitHub:</span> github.com/Jayaveer08 ↗
                    </a>
                    <a href="https://www.linkedin.com/in/jayaveer-nallapati/" target="_blank" rel="noreferrer" className="social-term-link">
                      <span>LinkedIn:</span> linkedin.com/in/jayaveer-nallapati ↗
                    </a>
                    <a href="https://leetcode.com/u/Jayaveer31/" target="_blank" rel="noreferrer" className="social-term-link">
                      <span>LeetCode:</span> leetcode.com/u/Jayaveer31 ↗
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Status Bar */}
            <div className="terminal-footer">
              <span>● READY</span>
              <span>UTF-8</span>
              <span>ZSH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
