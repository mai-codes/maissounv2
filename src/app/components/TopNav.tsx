"use client";
import React, { useEffect, useState } from "react";

const palette = [
  '#EC4899', // pink
  '#3B82F6', // blue
  '#10B981', // green
  '#F59E42', // yellow
  '#8B5CF6', // purple
  '#EF4444', // red
];

const navLinks = [
  { number: "0.1", label: "Bio", href: "#about" },
  { number: "0.2", label: "Experience", href: "#experience" },
  { number: "0.3", label: "Work", href: "#work" },
  { number: "0.4", label: "Contact", href: "#contact" },
];



export default function TopNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] bg-background bg-opacity-90 backdrop-blur-md shadow-lg border-b border-muted/30 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">
        {/* Top left icon linking to hero section */}
        <a href="#hero" className="group flex items-center">
          <span className="inline-block">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent transition-transform duration-700 group-hover:rotate-180"
              style={{ display: 'block' }}
            >
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20"
                fontFamily="monospace"
                fill="currentColor"
                fontWeight="bold"
              >
                M
              </text>
            </svg>
          </span>
        </a>
        <div className="flex items-center gap-8 ml-auto">
          <ul className="flex gap-6 font-mono">
            {navLinks.map((link, idx) => {
              const color = palette[Math.floor(Math.random() * palette.length)];
              return (
                <li key={link.number} className="group flex items-center">
                  <a
                    href={link.href}
                    className="flex items-center text-base text-foreground transition-colors duration-300 overflow-hidden"
                    style={{ minWidth: "2.5rem" }}
                    onMouseEnter={e => (e.currentTarget.style.color = color)}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    <span className="transition-all duration-300">{link.number}</span>
                    <span
                      className="ml-2 transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap"
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-4 py-1 rounded font-mono hover:bg-accent/10 transition"
          >
            Resume
          </a> */}
        </div>
      </div>
    </nav>
  );
}
