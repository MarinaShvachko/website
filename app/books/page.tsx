// app/books/page.tsx
"use client";

import { useState } from 'react';
import '../css/books.css';
import '../css/adaptivebooks.css';

export default function BooksPage() {
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
          <li><a href="/cv">CV</a></li>
          <li><a href="/projects">Projects</a></li> 
          <li><a href="/travel">Travel</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </header>

      {/* BOOKS CONTENT */}
      <div className="projectWrapper">
        <h4>Books that I would advise to read everybody.</h4>
        <div className="containerBooks">
          
          {/* FIRST BOOK */}
          <div className="book">
            <div className="bookPhotoLeft1"></div>
            <div className="bookDescriptionRight1">
              <p>Most people would say that it is a good book for people who just started working as QA.</p>
              <p>However, I am sure it is a good idea to read it before applying for a such position. There are a lot of basic and useful information about testing. That may clarify what testers do at work and what you should be able to do for starting working at a junior position. Definitely, all information will help to find a first job.</p>
            </div>
          </div>

          {/* SECOND BOOK */}
          <div className="book">
            <div className="bookDescriptionLeft2">
              <p>Must read book. The main attention is focused on different testing techniques. I'm sure it useful to refresh knowledge sometimes, despite the level of experience. And it is always possible to find something new while reading. Also, there are good examples of testing techniques and exercises after each chapter.</p>
              <p>Revising test techniques and combining it with a rising experience helps me to watch at a project I work on from different points,it opens new ways to test, brings new ideas.</p>
              <p>Also, I found there some new information about white-box testing. Hope, will be able to apply it soon. Provided examples and exercises help to understand information deeply.</p>
            </div>
            <div className="bookPhotoRight2"></div>
          </div>

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