// app/travel/vietnam/day7/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay7Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(6);
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

      {/* DAY 7 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>The day of overeating.</h4>
        <p>This day was remarcable for the fact that we visited a restaurant where we had to pay for an entrance and had as much food as we wanted. Most of all for us was interesting to try different tipes of shells and cook them by ourselves on a special hot spot in the center of table. One ticket for adult was 250000, beer was unlimited.</p>
        <p>There were plenty of raw and cooked shells, I had no idea of their names, some types of fish, meat and unusual meat like crocodile or ostrich.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/shells1.jpg" alt="Raw shell assortments on ice display" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/shells3.jpg" alt="Exotic raw meats counter selection" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/shells2.jpg" alt="Different species of shells and clams" /></p>
           </div>
        </div>

        <p>All food had to be fried on that coals. Staff cared that coals were hot, sometimes they helped us to cook shells. I always afraid that seafood I cooked would not be fried properly and thought that my shells were overcooked. The process was interesting and fun. Around us were sitting some huge Chinese and may be Viethamese families.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/friedShells.jpg" alt="Cooking shells on the tabletop grill coals" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/friedShells2.jpg" alt="Clams sizzling over hot grill center" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/friedShells3.jpg" alt="Grilling assorted seafood skewers and meat slices" /></p>
           </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Restaurants with fixed prices are good for tasting different types of dishes, I think they aren't profitable for just eating.</p>
        <p>2 – Don't take french fried potato or something usual in fixed price restaurants. Usual food we eat constantly at home or the nearest restaurants. Try something new.</p>
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