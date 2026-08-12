"use client";

import React, { useState, useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function GooeyNav({ items = defaultItems }: GooeyNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  useEffect(() => {
    const currentEl = itemRefs.current[targetIndex];
    const navEl = navRef.current;
    if (currentEl && navEl) {
      const currentRect = currentEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const left = currentRect.left - navRect.left;
      const width = currentRect.width;

      setIndicatorStyle({ left, width });
    }
  }, [targetIndex]);

  // Sync active section on page scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      items.forEach((item, index) => {
        const targetSection = document.querySelector(item.href);
        if (targetSection) {
          const top = (targetSection as HTMLElement).offsetTop;
          const height = (targetSection as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveIndex(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="clean-nav-wrapper">
      <nav
        ref={navRef}
        className="clean-nav-container"
        onMouseLeave={() => setHoverIndex(null)}
      >
        {/* Sliding Red Capsule Pill Highlight */}
        <div
          className="clean-nav-pill"
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: `${indicatorStyle.width}px`,
          }}
        />

        {/* Floating Navigation Links */}
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={item.label}
              ref={(el) => { itemRefs.current[index] = el; }}
              href={item.href}
              className={`clean-nav-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => setHoverIndex(index)}
              onClick={() => setActiveIndex(index)}
            >

              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
