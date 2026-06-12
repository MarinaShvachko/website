// app/travel/vietnam/day9/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay9Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(8);
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

      {/* DAY 9 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>The first day of 2020</h4>
        <p>As usual we had a breakfast at a hotel, that day there was a really tasty bird... I didn't know what... a duck, but it didn't taste like it, or may be a turkey. The whole dish looked perfectly. In this time we wanted sweets: local cakes, small craps with condensed milk. Breakfasts in the hotel Erika was always tasty, good and diverse. Rounds on my plate were hash brown. Interestingly, why in Russia we don't cook hash brown. It's just a kind of fried potatoes.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/breakfastBird.jpg" alt="Roasted bird dish at the hotel breakfast buffet" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/breakfastHashBrown.jpg" alt="Plate with crispy golden hash browns" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/breakfastSweets.jpg" alt="Assorted local cakes and sweet breakfast treats" /></p>
           </div>
        </div>

        <p>It was so cool lying on the beach after a breakfast. Everybody who have visited Vietname before warned me that it is dangeros to sit on the sand because of sand fleas (I'm not sure that I wrote the name of this creatures right). But I didn't find any creatures or problems while having a rest on the sand. We took from home a mat that we bought in Sri Lanka and could lying on it together.</p>
        <p>It was strange that despite waves there weren't any seaweeds or shells on the beach. Kostia walked long distance through the beach and found only some empty sand shells.</p>
        <p>One more interesting thing - I saw a woman who fastened her arm with an arm of her child by a special handcuffs. The child couldn't go away frome her. I understand, it's for safety and convinience, but looked strange for us. I think in other countries people use this kind of handcuffs.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/beachMat.jpg" alt="Relaxing on the Sri Lankan beach mat over the sand" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/shellsBeach.jpg" alt="Small empty shells collected from the sandy beachline" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/beachPeople.jpg" alt="People strolling along the windy seashore" /></p>
           </div>
        </div>

        <p>During the evening we did shopping :)) Bought some things for ourselves in Japanese shop, but for example chopsticks were made in Vietnam. Hmmmm... OK, they were not souvenirs, they were for us. Earlier I was against of iron chopsticks, but when saw them in reality changed my opinion. Will see how convinient they will be in using.</p>
        <p>Also, I bought some masks for the face and Vietnam vitamins and creams. It is supposed to that the quality of vitamins in Vietnam is better than in our country. I understand that everything could be bought via the internet, but it's more interesting to bring gifts to home. Then, during a cold winter each vitamin will be recoll warm memories about our trip.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/staffFromJapaneseStore.jpg" alt="Purchased items from the Japanese store" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/masks.jpg" alt="Skincare face masks packages bought locally" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/vitamins.jpg" alt="Vitamins and creams collected from the pharmacy" /></p>
           </div>
        </div>

        <div>
           <p>Summaries:</p>
           <p>1 – A memory foam U-shaped neck pillow - 129 000 VND</p>
           <p>2 – A portable folding mirror - 43 000 VND</p>
           <p>3 – Three sets with chopsticks and spoons - 129 000 VND for all </p>
           <p>4 – Five masks - 135 000 VND</p>
           <p>5 – Vitamins and creams from a drugstore - about 675 000 VND</p>
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