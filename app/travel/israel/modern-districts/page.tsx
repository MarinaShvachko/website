"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelModernDistrictsPage() {
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
        <h4>The page that was going to be the longest</h4>

        <p>Some times we walked towards Yarkon park, it&apos;s about 6 km in one direction. There is no special in park, our aim was looking districts. Starting point was our apartment, it&apos;s a cross Elifelet and Eilat streets. Of course we didn&apos;t use the shortest road, and often our route might looked like zigzag. There is only a few scyscrapers in Ekaterinburg, so we vere amazed by all high and modern buildings. At night or late evening, when light was on they looked especially effective. Combination of old architecture and modernity it&apos;s special charm. Style of buildengs in tel Aviv is different from all I saw in other countries.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/modernBuildingArchitecture1.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/modernBuildingArchitecture2.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/modernBuildingArchitecture3.jpg" alt="" /></p>
          </div>
        </div>

        <p>At our way back two times we had a rest at Ha-Medina Square. It&apos;s a round lawn circled by blockы of flats and I guess there are quite expensive flats. During this walks we got to know a chain of cafes Cofix, it&apos;s helped us to got some power to be able to get back to the apartment. Moreover we didn&apos;t mind to have a rest in all possible places, even in daytime. Lately it was opend in Russia so each time I buy a cap of coffee there, I recall our trip.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/rest1.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/rest2.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/rest3.jpg" alt="" /></p>
          </div>
        </div>

        <p>Tel Aviv it&apos;s not only buildings, actually there were a lot of green trees. I didn&apos;t expect to see it in a districts that is thought to be a desert. One day we found out a smoll pond with water-lilies and fish, I have a passion for them. Also there were a park with a beautiful river. People decorate their balconies with flowers and garlands.</p>

        <p>Actually I thought it would be the longest page, because I have so many memories and stories to tell after our long evening walks. Also I believed I could have much more photos, but there are only a few of them, obviously we didn&apos;t make photos when it was dark. Now I am willing to bet that a page about food is going to be the biggest.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/river.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/streetflowers.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/pound.jpg" alt="" /></p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Write some stories straight after walks, while all memories and emotions are vivid</p>
        <p>2 – Make more photos at night, they have not bad quality</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
