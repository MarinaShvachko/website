// app/travel/vietnam/day10/page.tsx
"use client";

import { useState, useEffect } from 'react';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay10Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    rememberVietnamSlide(9);
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

      {/* DAY 10 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>Excursion to Dalat</h4>
        <p>Sometimes escape excursions is impossible, it was the only chance to see Dalat, the city located 1500 m above sea level, in mountains and with slightly another climat. My main aim was an observation spot in mountains on the way to Dalat. Can say right now, there was awful fog and nothing further that 1 m was impossible to see. Then our first stop was the Crasy house. Surprisingly it made an impression on me. There were some really high bridges with an interesting view.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/CrasyHouseBridge.jpg" alt="Bridges in Crazy House" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/CrasyHouseMe.jpg" alt="I'm standing on a high bridge" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/CrasyHouse.jpg" alt="Crazy House architectural view" /></p>
           </div>
        </div>

        <p>The second interesting place was a factory of silk. I can't imagin how people work in that poor conditions. I bought a scarf like souvenir, but don't think that it had a good quality. Our guid gave us two pods and of course Kostia saved them and brought them to Russia despite my strong resistance. In my imagination we were arrested at airport with all awful consiquences. Moreover, through some months in Russia, a butterfly protruded from a pod.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Pods.jpg" alt="Silk cocoons pods close up" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Factory.jpg" alt="Silk production factory floor setup" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/Pods on facory.jpg" alt="Silk cocoons raw processing tray" /></p>
           </div>
        </div>

        <p>The third place was a waterfall. I would say a hell waterfall, there were so hot, I thought I would die. But photos are nice.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Waterfall.jpg" alt="Dalat waterfall cascades scenery" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Nature around waterfall.jpg" alt="Lush mountain greenery surrounding the falls" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/Statue near waterfall.jpg" alt="Religious statue monument near the rushing stream" /></p>
           </div>
        </div>

        <p>Then we visited a park with small zoo and some waterfalls. To get to one of them we used an electric sleigh. We controlled the speed, so Kostia not often slowed it down. After parks we went to a quite big territory of Truc Lam Temple. Unfortunately, because of it was an excursion we weren't able to use a cable car to get to this Temple. Everybody wrote that the view frome a cable car cabin would amazing. All we had it was a fast walk throught a part of Temple's park.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/Temple.jpg" alt="Truc Lam Zen Temple front grounds" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/TempleTree.jpg" alt="Bonsai and ancient trees on temple soil" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/Temple2.jpg" alt="Main temple pagoda sanctuary" /></p>
           </div>
        </div>

        <p>The last stop was a surprise for us. I heard a lot about a temple that was made frome a millions of shatters of ceramic dishes, but couldn't imagine that it would be so fascinating and tall. Of course we climbed up upstairs, because of it were almost late for our bus. Other people frome our group wanted to go back to hotels and just walking near the temple and bus. They missed unreal emotions that could be found only upstairs. Such moments are saved at memory better then other excursion information. Without Kostia I wouldn't be so brave to go up, on the highest terrace.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/A tower of a temple.jpg" alt="Intricate mosaic ceramic tower spire" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/The view frome a tower.jpg" alt="Mountain valley vista from the high tower platform" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/A temple balcony.jpg" alt="High balcony decorated in porcelain shards" /></p>
           </div>
        </div>

        <div>
           <p>Summaries:</p>
           <p>1 – I hope that next time we will go to different places without excursion</p>
           <p>2 – Climb upstairs, no matter how difficult or scary it is. Probably you will have the most strong and cool emotions about a trip because of it.</p>
           <p>3 – If an excursion is inevitable - take an excursion in a small bus, like about maximum 10 people.</p>
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