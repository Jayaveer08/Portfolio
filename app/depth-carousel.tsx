"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export interface ProjectItem {
  no: string;
  title: string;
  type: string;
  description: string;
  stack: string;
  source: string;
  live?: string;
}

interface DepthCarouselProps {
  projects: ProjectItem[];
}

export default function DepthCarousel({ projects }: DepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastScrollTime = useRef<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  // Handle Mouse Wheel / Trackpad Scroll (Only trigger on horizontal wheel or explicit side scroll)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Only capture horizontal scrolling to avoid blocking normal vertical page scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
      const now = Date.now();
      if (now - lastScrollTime.current < 300) return;
      if (e.deltaX > 0) {
        nextCard();
      } else {
        prevCard();
      }
      lastScrollTime.current = now;
    }
  };

  // Handle Touch Drag Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (diff > threshold) {
      nextCard();
    } else if (diff < -threshold) {
      prevCard();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle Mouse Drag Gestures
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    const threshold = 50;

    if (diff > threshold) {
      nextCard();
    } else if (diff < -threshold) {
      prevCard();
    }
    dragStartX.current = null;
  };

  // Keyboard arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevCard();
      if (e.key === "ArrowRight") nextCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevCard, nextCard]);

  return (
    <div className="depth-carousel-section">
      <div
        className="depth-carousel-wrapper"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* 3D Depth Perspective Stage */}
        <div className="depth-stage">
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const isActive = index === activeIndex;

            // 3D Depth Math Transforms
            let transform = "";
            let opacity = 1;
            let zIndex = 10 - absOffset;

            if (offset === 0) {
              transform = "translate3d(0, 0, 0) rotateY(0deg) scale(1)";
              opacity = 1;
            } else if (offset > 0) {
              const translateX = Math.min(offset * 210, 480);
              const translateZ = -offset * 180;
              const rotateY = -28;
              const scale = Math.max(1 - offset * 0.12, 0.65);
              transform = `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
              opacity = Math.max(1 - offset * 0.35, 0.15);
            } else {
              const translateX = Math.max(offset * 210, -480);
              const translateZ = absOffset * -180;
              const rotateY = 28;
              const scale = Math.max(1 - absOffset * 0.12, 0.65);
              transform = `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
              opacity = Math.max(1 - absOffset * 0.35, 0.15);
            }

            return (
              <div
                key={project.no}
                className={`depth-card ${isActive ? "active" : ""}`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  cursor: isActive ? "default" : "pointer",
                }}
                onClick={(e) => {
                  if (!isActive) {
                    e.stopPropagation();
                    if (offset > 0) {
                      nextCard();
                    } else if (offset < 0) {
                      prevCard();
                    } else {
                      setActiveIndex(index);
                    }
                  }
                }}
              >
                <div className="depth-card-inner">
                  {/* Card Header */}
                  <div className="depth-card-header">
                    <span className="depth-card-no">{project.no}</span>
                    <span className="depth-card-tag">{project.type}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="depth-card-title">{project.title}</h3>

                  {/* Description */}
                  <p className="depth-card-desc">{project.description}</p>

                  {/* Tech Stack Chips */}
                  <div className="depth-card-stack">
                    {project.stack.split(" · ").map((tech) => (
                      <span key={tech} className="depth-tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Links */}
                  <div className="depth-card-footer">
                    <a
                      href={project.source}
                      target={isActive ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="depth-btn depth-btn-source"
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault();
                          e.stopPropagation();
                          if (offset > 0) nextCard();
                          else prevCard();
                        } else {
                          e.stopPropagation();
                        }
                      }}
                    >
                      <span>GITHUB</span>
                      <i>↗</i>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target={isActive ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="depth-btn depth-btn-live"
                        onClick={(e) => {
                          if (!isActive) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (offset > 0) nextCard();
                            else prevCard();
                          } else {
                            e.stopPropagation();
                          }
                        }}
                      >
                        <span>LIVE DEMO</span>
                        <i>↗</i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Dedicated Left & Right Side Tap Zones */}
          <div
            className="depth-side-zone depth-zone-left"
            onClick={(e) => {
              e.stopPropagation();
              prevCard();
            }}
            title="Click for Previous Project"
            aria-label="Previous Project"
          />
          <div
            className="depth-side-zone depth-zone-right"
            onClick={(e) => {
              e.stopPropagation();
              nextCard();
            }}
            title="Click for Next Project"
            aria-label="Next Project"
          />
        </div>

        {/* 3D Depth Carousel Navigation Controls */}
        <div className="depth-controls">
          <button
            className="depth-nav-btn depth-prev"
            onClick={prevCard}
            aria-label="Previous Project"
          >
            ← PREV
          </button>

          {/* Indicator Dots & Project Counter */}
          <div className="depth-indicators">
            {projects.map((p, idx) => (
              <button
                key={p.no}
                className={`depth-dot ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to project ${p.no}`}
              />
            ))}
            <span className="depth-counter">
              0{activeIndex + 1} / 0{projects.length}
            </span>
          </div>

          <button
            className="depth-nav-btn depth-next"
            onClick={nextCard}
            aria-label="Next Project"
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
}
