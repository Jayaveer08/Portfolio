"use client";

import React, { useEffect, useState } from "react";

interface SplashRipple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [ripples, setRipples] = useState<SplashRipple[]>([]);

  useEffect(() => {
    let animId: number;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest(".gooey-nav-item") ||
          target.closest(".console-btn") ||
          target.closest(".terminal-tab") ||
          target.closest(".project-item"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      const newRipple: SplashRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
    };

    // Smooth lerp physics for cursor liquid follower
    let currentX = -100;
    let currentY = -100;

    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setFollowerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      {/* Precision Core Cursor Dot */}
      <div
        className={`cursor-dot ${isMouseDown ? "click" : ""} ${
          isHovered ? "hovered" : ""
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Liquid Splash Ring Follower */}
      <div
        className={`cursor-splash-follower ${isHovered ? "hovered" : ""} ${
          isMouseDown ? "click" : ""
        }`}
        style={{
          transform: `translate3d(${followerPos.x}px, ${followerPos.y}px, 0)`,
        }}
      />

      {/* Liquid Click Splash Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="cursor-splash-ripple"
          style={{
            left: `${r.x}px`,
            top: `${r.y}px`,
          }}
        />
      ))}
    </div>
  );
}
