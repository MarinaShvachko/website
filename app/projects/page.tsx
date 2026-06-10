// app/projects/page.tsx
"use client";

import { useState } from 'react';
import '../css/common.css';
import '../css/stylesProjects.css';
import '../css/adaptiveProjects.css';

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION */}
      <header className="header">
        <div className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
            </g>
            <g>
              <title>Layer 1</title>
              <path fill="#049900" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z" />
            </g>
          </svg>
        </div>
        
        <ul className={`menu clearfix ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          {/* <li><a href="/cv">CV</a></li> */}
          <li><a href="/projects">Projects</a></li> 
          <li><a href="/travel">Travel</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </header>

      {/* PROJECTS WRAPPER GRID */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <div className="try">

          <div className="project">
            <p className="projectNameWithoutLink">Participation in translation of a book</p>
            <a href="https://uraltester.ru/2019/12/02/%d0%9c%d1%8b-%d0%bf%d0%b5%d1%80%d0%b5%d0%b2%d0%b5%d0%bb%d0%b8-%d0%ba%d0%bd%d0%b8%d0%b3%d1%83-%d0%9b%d0%b8-%d0%9a%d0%be%d1%83%d0%bf%d0%bb%d1%8d%d0%bd%d0%b4%d0%b0-%d0%9f%d1%80%d0%b0%d0%ba/" target="_blank" rel="noopener noreferrer">
              <p className="source">A Practitioner's Guide to Software Test Design by Lee Copeland</p>
            </a>
          </div>

          <div className="project">
            <a href="/aqa">
              <p className="projectName">AQA notes</p>
              <p className="source">Notes and simple examples related to software automation</p>
            </a>
          </div>

        </div>
      </div>

      {/* FOOTER BAR */}
      <footer className="footer" style={{ order: 3, width: '100%' }}>
        <div className="copirait">
          <p className="footerText">
            © {new Date().getFullYear()} Marina Shvachko. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}