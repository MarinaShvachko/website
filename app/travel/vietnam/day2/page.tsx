// app/travel/vietnam/day2/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay2Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(1);
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

      {/* DAY 2 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>The day of relax. Our vacation starts</h4>
        <p>This time we were lazy and had a rest at a beach spot, that was the nearest to the hotel. The beach reminded me the one in Tel Aviv, the same beautiful and clean sand, skyscrapers along the sealine, the long seafront. This day we had tried a soup Tom Yam, I was wonder if it would be the same taste as in Ekaterinburg or not. The soup was tasty and much spicier.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/hotelFromBeach.jpg" alt="Hotel view from the beach" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/beachFirstDay.jpg" alt="Beach landscape on the first days" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/tomYam.jpg" alt="Tasty Tom Yam soup bowl" /></p>
           </div>
        </div>

        <p>Later, during our walk to Ponagar towers we cought a beautiful sunset and decided to change our plan. Instead of towers we walked along a river. There weren't other tourists. Houses on the opposit bank looked different, they were not high and not new. It looked like only local people live there.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/meNearBridge.jpg" alt="Standing near the river bridge" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/sunset2Day.jpg" alt="Beautiful landscape view during sunset" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/sunset2.jpg" alt="Picturesque sunset colors" /></p>
           </div>
        </div>

        <p>I think this walk was the most memorable part of this trip for me because of beautiful sunset and picturesque view. On our way back we walked through local areas, saw some pieces of usual life. Sometimes it was difficult to cross a road, locals use mopeds, they didn't walk. At the end of a day, what do you think we did? Of course we ate. Bought a kg of shrimps fried with butter and garlic. Nothing special, but it was interesting experience to buy shrimps that were swimming in a small basin in a front of a cafe.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/womanCookingAtStreet.jpg" alt="Local woman cooking meal at a street stall" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/shopWithBuddhas.jpg" alt="Local shop display with Buddha figurines" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/meAndKgShrimps.jpg" alt="Enjoying a kilogram of freshly prepared shrimps" /></p>
           </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Vietnamese sandwiches Banh mi are great</p>
        <p>2 – Walking in Vietnam completely uncomfortable and may be even danger, especially during crossing a road.</p>
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