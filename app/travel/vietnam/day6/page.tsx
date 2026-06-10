// app/travel/vietnam/day6/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay6Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(5);
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

      {/* DAY 6 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>Po Nagar Cham Towers, I thought I would die</h4>
        <p>We liked walking, especially where there nothing else to do, like in Nha Trang. There always are opportunities to see something interesting during a rout. So this time we decidet to went to Po Nagar Towers by foot.</p>
        <p>The weather was sunny and hot, but we walked along long shadowed streets and looked around with interest at thousands local cafes and shops. In one of them we bought amazingly tasty cold Vietnamese coffee with condensed milk. Thus we gradually approached a bridge.</p>
        <p>The view was great! That bridge reminded us the one in Istanbul that connected two parts of land and that we easily acrossed almost every day. So without any doubt we went on a bridge.</p>
        <p>In a middle of a bridge we understood that the sun was too hot, there was no shadow and we passed only a middle of the bridge in a best-case scenario. When we crossed the bridge we thought that we could have an overheat, our mood got worse when we saw that there weren't almost any cafes with air condition where we could have a rest. So we went and went until found a cafe, sat in a basement because only there were slightly cooler, but stank a paint. Only after some cold drinks we were brave enough to continue our rout.</p>
        <p>Outside cafe we surprisingly discover that we were across the road from Towers. But there was second problem. It turned out that tourists were brought there by huge groups of 20 and more people. That place was just overcrowded. We sat in a shadow and just waited when all tourist would went away and the started sunset. In minutes like that I understand how much my husband loves me :)) he didn't say me a rough word and didn't blame me for I brought him to that place.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/PoNagar.jpg" alt="Po Nagar Cham Towers facade" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/PoNagarSunSet.jpg" alt="Sunset colors over Po Nagar complex" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/PoNagar2.jpg" alt="Close architectural details of Cham Towers" /></p>
           </div>
        </div>

        <p>Of course we ordered a taxy to get to our hotel and all our way to hatel, sitting at a comfortable car with air condition we thought, why we didn't get a taxy to get to Po Nagar...</p>
        
        <p>Summaries:</p>
        <p>1 – Don't buy excurtion to Po Nagar, take a taxy and visit it befor sunset, where the view is beautiful and less people.</p>
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