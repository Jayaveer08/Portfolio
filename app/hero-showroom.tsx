"use client";

import { useState } from "react";

interface ProjectShowcase {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  metric: string;
  metricLabel: string;
}

const featuredProjects: ProjectShowcase[] = [
  {
    id: "eventverse",
    number: "01",
    category: "Full-Stack Platform",
    title: "EVENTVERSE",
    description: "Full-stack event ticketing platform with real-time seat map selection, Stripe payments, and automated PDF ticket generation.",
    tags: ["React 18", "TypeScript", "Supabase", "Stripe"],
    liveUrl: "https://eventverse-fullstack.vercel.app/",
    codeUrl: "https://github.com/Jayaveer08",
    metric: "100%",
    metricLabel: "Real-time sync",
  },
  {
    id: "tasktrackr",
    number: "02",
    category: "Backend REST API",
    title: "TASKTRACKR",
    description: "Production-grade Java Spring Boot Task Manager API with JWT security, BCrypt hashing, MySQL relational storage, and Swagger docs.",
    tags: ["Java 17", "Spring Boot", "MySQL", "JWT", "Swagger"],
    codeUrl: "https://github.com/Jayaveer08",
    metric: "99.9%",
    metricLabel: "Uptime & security",
  },
  {
    id: "moodify",
    number: "03",
    category: "Applied AI / ML",
    title: "MOODIFY",
    description: "AI-powered mood journaling companion utilizing NLP sentiment analysis to generate personalized insights and emotional trends.",
    tags: ["Python", "PyTorch", "NLP", "FastAPI", "React"],
    codeUrl: "https://github.com/Jayaveer08",
    metric: "94%",
    metricLabel: "Sentiment accuracy",
  },
];

export default function HeroShowroom() {
  const [activeId, setActiveId] = useState<string>("eventverse");

  const activeProject =
    featuredProjects.find((p) => p.id === activeId) || featuredProjects[0];

  return (
    <div className="hero-showroom">
      {/* Background Watermark */}
      <div className="showroom-watermark" aria-hidden="true">
        JN
      </div>

      {/* Showroom Header / Tabs */}
      <div className="showroom-header">
        <span className="showroom-kicker">/ FEATURED HIGHLIGHTS</span>
        <div className="showroom-tabs">
          {featuredProjects.map((p) => (
            <button
              key={p.id}
              className={`showroom-tab ${activeId === p.id ? "is-active" : ""}`}
              onClick={() => setActiveId(p.id)}
            >
              <span>{p.number}</span>
              <strong>{p.title}</strong>
            </button>
          ))}
        </div>
      </div>

      {/* Main Showroom Card */}
      <div className="showroom-card" key={activeProject.id}>
        <div className="showroom-card-top">
          <span className="showroom-category">{activeProject.category}</span>
          <div className="showroom-metric-badge">
            <strong>{activeProject.metric}</strong>
            <span>{activeProject.metricLabel}</span>
          </div>
        </div>

        <h3 className="showroom-card-title">{activeProject.title}</h3>
        <p className="showroom-card-desc">{activeProject.description}</p>

        {/* Tech Stack Chips */}
        <div className="showroom-chips">
          {activeProject.tags.map((tag) => (
            <span key={tag} className="showroom-chip">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="showroom-actions">
          {activeProject.codeUrl && (
            <a
              href={activeProject.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="showroom-btn secondary"
            >
              Code <span aria-hidden="true">↗</span>
            </a>
          )}
          {activeProject.liveUrl && (
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="showroom-btn primary"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
