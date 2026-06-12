// app/travel/vietnam/day11/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay11Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(10);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <header className="header">
        <div className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <g><title>background</title><rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" /></g>
            <g><title>Layer 1</title><path fill="#049900" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z" /></g>
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

      {/* DAY 11 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>Goodby Vietnam, you gifted me a sunny vacationd and a new favourite type of food!</h4>
        <p>The first day in Vietnam was started from eating dumplings, the last day was finished by eating dumplings. This time in a local, not touristic caffee, quite far from a beach. We ordered a taxy to get there and where arrived, people in a cafe was surprised, I think they see tourists not often, especially arrived on an expensive car.</p>
        <p>We ordered some different dumplings to share to each other for testing. There were special sauces to each portion of food, but we mixed them. Through some time a waiter came up frome a kitchen and showed us which sauce combined to the certain dumplings. As a bonuse they brought to us a soup with a "hundred-year egg". It is a black, preserved chiken egg, in a mixture of clay, ash, salt, quicklime and rice hulls for several weeks to several months. It has too specific taste, like a soup itself. Trouly speaking, I wasn't able to eat it all.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/LastEveningCaffee.jpg" alt="Local non-touristic dumpling cafe layout" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/dumplingsLastEvening.jpg" alt="A variety of delicious fresh steamed dumplings" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/A soup with a hundred-year egg.jpg" alt="Traditional soup served with a hundred-year egg" /></p>
           </div>
        </div>

        <div>
           <p>Summaries:</p>
           <p>1 – It's cool to try local food, even if a name of this food doesn't sound deliciously for our culture.</p>
           <p>2 – I need to rebuild my site, develope one stile and think how I could make control better.</p>
           <p>3 – Will not use slider anymore, it's uncomfortable.</p>
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