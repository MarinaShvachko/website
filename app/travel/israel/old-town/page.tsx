"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelOldTownPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <div className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <g><title>background</title><rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" /></g>
            <g><title>Layer 1</title><path fill="#049900" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z" /></g>
          </svg>
        </div>
        <ul className={`menu clearfix ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </header>

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>It&apos;s always the most interesting part of a city for me.</h4>

        <p>I am keen on an old architecture. Can&apos;t imagine how people could build all those buildings without modern knowledge, materials and instruments. Sometimes old architecture is so magnificent, just there are not so beautifulness nowadays. And it is for me, a person who loves huge cities and skyscrapers.</p>

        <p>Moreover, imagination works great when walking through narrow ancient streets. I always imagine how people lived there hundreds years ago, where were their farms, how they protect a city. And it&apos;s not a secret that old city centres usually cited in picturesque places.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/sunset_old_city.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/old_city_road.jpg" alt="" /></p>
          </div>
        </div>

        <p>Of course, at such place attracts tourists. Often there could be found a cafe, that works a lot of years and became a legend. There is a one in Tel-Aviv. Couldn&apos;t make normal photos due to a long queue to buy a food there. Also, don&apos;t know a name of that place in English. They cook only shrimps and some kinds of fish (may be some more sea creatures). The menu not big, but the taste and atmosphere are great. Some people could say that there is not clean, but in such great places is often everything is fresh, clean and tasty.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_shrimps.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_food_shrimps.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/old_city_kitchen.jpg" alt="" /></p>
          </div>
        </div>

        <p>Cats, flowers and night lighting are the other essential parts.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_cats.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_flowers.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/night_light.jpg" alt="" /></p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Don&apos;t be afraid to eat in simple, popular cafes. The food will be always fresh there.</p>
        <p>2 – Read some historical information about an ancient city. It will be much more interesting to walk there.</p>
        <p>3 – I should take more photos, there are a lot of memories in my head but a few photos.</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
