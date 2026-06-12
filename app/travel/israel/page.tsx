"use client";

import { useState } from "react";
import "../../css/common.css";
import "../../css/stylesIsrael.css";
import "../../css/adaptiveIsrael.css";

export default function IsraelPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <div className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
            </g>
            <g>
              <title>Layer 1</title>
              <path
                fill="#049900"
                id="svg_1"
                d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"
              />
            </g>
          </svg>
        </div>

        <ul className={`menu clearfix ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </header>

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <div className="blockOfSquares">
          <a className="figure1" href="/travel/israel/first-day">
            <p className="title">First day</p>
          </a>

          <div className="figures2and3and4">
            <a className="figure2" href="/travel/israel/apartment">
              <p className="title">Apartment</p>
            </a>

            <a className="figure3" href="/travel/israel/modern-districts">
              <p className="title">Modern districts</p>
            </a>

            <a className="figure4" href="/travel/israel/old-town">
              <p className="title">old city. walking</p>
            </a>
          </div>
        </div>

        <div className="blockOfSquares">
          <a className="figure5" href="/travel/israel/beaches">
            <p className="title">beaches</p>
          </a>

          <a className="figure6">
            <p className="title">coming soon</p>
          </a>

          <a className="figure7" href="/travel/israel/jerusalem">
            <p className="title">Jerusalem</p>
          </a>

          <a className="figure8" href="/travel/israel/haifa">
            <p className="title">Haifa</p>
          </a>
        </div>

        <div className="blockOfSquares">
          <a className="figure9" href="/travel/israel/new-year">
            <p className="title">Big surprise: New Year in Tel-Aviv</p>
          </a>

          <a className="figure10">
            <p className="title">Coming soon</p>
          </a>
        </div>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
