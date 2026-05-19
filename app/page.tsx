// app/page.tsx
"use client";

import { useState } from 'react';
import './css/adaptive.css';

export default function HomePage() {
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
        
        {/* The menu styles dynamically transition open and closed */}
        <ul className={`menu clearfix ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/cv">CV</a></li>
          <li><a href="/projects">Projects</a></li> 
          <li><a href="/travel">Travel</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </header>

      {/* INTRODUCTION HERO BANNER */}
      <div className="introduction">
        <div className="lightOverlay">
          <div className="introductionText">
            <div className="mainSlogan">
              <h1>"The whole purpose of education is to turn mirrors into windows"</h1>
            </div>
            <div className="slogan">
              <h2>- Sydney J. Harris</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME BIOGRAPHY SECTION */}
      <div className="aboutMe">
        <div className="overlay">
          <div className="pp">
            <p>I have been working as a Quality Assurance Engineer since October 2017. At first I used to test different websites. Biggest part of that work was checking of UI. Then, I moved to another company and did functional and integrational testing of a web application and a CRM system. Now I work as AQA and enjoy continuous learning of programming and QA skills. This site is my small hobby. I'm doing it for my amusement, practicing English and CSS/HTML skills.</p>
          </div>
        </div>
      </div>

      {/* VERTICAL COLUMN PHOTOS */}
      <div className="myPhoto"></div>

      {/* CERTIFICATES SECTION */}
      <div className="certificates">
        <div className="pp">
          <div className="certificate">
            <p className="certificateTitle">
              <a href="http://scr.istqb.org/?name=Marina&number=79501&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=" target="_blank" rel="noopener noreferrer">ISTQB</a>
            </p>
          </div>
          <div className="certificate">
            <p className="certificateTitle">
              <a href="/img/FEND.pdf" target="_blank" rel="noopener noreferrer">Front - end Web Developer Nanodegree</a>
            </p>
          </div>
          <div className="certificate">
            <p className="certificateTitle">
              <a href="/img/IELTS.jpg" target="_blank" rel="noopener noreferrer">IELTS</a>
            </p>
          </div>
        </div>
      </div>

      {/* MIDDLE VERTICAL PHOTO BAR */}
      <div className="blogPhoto"></div>

      {/* FOOTER BLOG SECTION */}
      <div className="blogLink">
        <div className="overlay">
           <div className="pp">
                <p>
                    <a href="/books">Books I have read on QA and other topics. Not all, but these, that worth to read in my opinion. Some of them provided knowledge only about testing, some describe wider concepts. All in all, it helps to improve quality of product, different skills and brings pleasure while reading.</a>
                </p>
            </div>
        </div>
      </div>

      {/* PORTFOLIO PROJECTS SECTION */}
      <div className="projects">
        <div className="pp">
          <a href="/projects">
            <p className="certificateTitle">Different projects I have done for practicing development, tester and english skills.</p>
          </a>
        </div>
      </div>

      {/* FOOTER BAR */}
      <footer className="footer">
        <div className="copirait">
          <p className="footerText">
            © {new Date().getFullYear()} Marina Shvachko. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}