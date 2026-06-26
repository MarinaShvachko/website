"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/travel", label: "Travel" },
  { href: "/books", label: "Books" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="menuBurger" onClick={() => setMenuOpen((open) => !open)}>
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <g><title>background</title><rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" /></g>
          <g><title>Layer 1</title><path fill="#049900" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z" /></g>
        </svg>
      </div>

      <ul className={`menu clearfix ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </header>
  );
}
