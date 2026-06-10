// app/travel/vietnam/day1/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay1Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(0);
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

      {/* DAY 1 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>9 Hours FLIGHT - FROM SNOWY EKATERINBURG TO SUNNY VIETNAM</h4>
        <p>There was cold and snowy when we left Ekaterinburg. Our flight was delayed almost for 4 hours, fortunately we checked the departure time before ordering a taxi to the airport, so we waited in comfort at home eating a big pizza.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/airport.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/airportSnow.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/cityFromPlain.jpg" alt="" /></p>
           </div>
        </div>

        <p>Unfortunately, we almost didn't sleep during the flight, but saw a beautiful sunrise frome a plane. Therefore by the time we arrive to the hotel we felt like a zomby. During checking in a porter told us that all tickets for celebrating New Year at our hotel were already sold, so the question where we should celebrate a New Year night was still open.</p>
        <p>Our room was on the 11 floor, with a french balcony and a bathtub instead of a shower. It looked cool but indeed a bathroom was not comfortable, water sprayed everywhere while taking a shower. One more interesting thing - bathroom walls were made from glass. Generally, we loved our room.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/bed.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/bathroom.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/bathroom2.jpg" alt="" /></p>
           </div>
        </div>

        <p>After all luggage was unpacked we went out for walking and finding something to eat. The first place was a chineese cafe Nha Trang Dimsum House. I think locals sometimes could be surprised how we can eat so much, but we were hungry and it was our first normal meal for a day. We payed 300 VND for all: 3 beers, a soup, 4 sets of dumplings, each set contains 3 dumplings. Often, cafes had not a big territory, but had two or more floors in Asia. I loved sitting on the second floor, eating and watching what's going on around on a street.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/cafeDumplings.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/dumplings.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/dumplingsMenu.jpg" alt="" /></p>
           </div>
        </div>

        <p>The most surprising and interesting part of the first day happened in the evening. While we were walking along the beach Kostia found some money. There weren't people around and all beach vendors were far away, so we took them.</p>
        <p>There is a sign - money that were received by a chance has to be spent as soon as possible or they won't bring a luck. So, we went to a cafe and spended there all unexpected money. Yes, we loved eating.</p>
        <p>Before returning to the hotel room, we walked through evening's streets with shops and cafes and checked the hotel's swimming pool. It's on the 27 floor. Looked cool at the evening.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/eveningFood.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Our hotel.jpg" alt="" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/eveningSwimmingpool.jpg" alt="" /></p>
           </div>
        </div>

        <p>Summaries:</p>
        <p>1 – To sleep in a plane with a travel pillow much more comfortable.</p>
        <p>2 – It's better to have a shower-bath instead of a bath in a hotel room.</p>
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