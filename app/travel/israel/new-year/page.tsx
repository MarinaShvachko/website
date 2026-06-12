"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelNewYearPage() {
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
        <h4>Big surprise, a such Jewish New Year we didn&apos;t expect.</h4>

        <p>We decided to celebrate a New Year&apos;s night on the streat, in front of the sea, looking at fireworks. But there was one problem - there were no people near a waterfront and all looked like there weren&apos;t goint to be any fireworks.</p>

        <p>We went in search of people, all of them were in the city center. There were hundrets of people, thousands. It was fantastic. So overcrowded, but safe and cosy. So noisy, but fun and interesting. Everything started from huge amount of people in each cafe, but soon they were standing on parts of roads. Cars slowly and calm drived round them. Everybody were happy.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/NewYear1.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/NewYear2.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/NewYear3.jpg" alt="" /></p>
          </div>
        </div>

        <p>It was impossible to stay in a cafe or bar, so we just walking. People sang songs and wished happy New Year. We felt how much local people loved their country and were proud of it. Moreovere, we didn&apos;t see any completely drank people or something negative. That night brought to us so many emotions and memories.</p>

        <p>Summaries:</p>
        <p>1 – It was the first country where New Year don&apos;t celebrate near waterfront</p>
        <p>2 – It&apos;s cool when peope are proud of their contry</p>
        <p>3 – It you want calm, better not go out at a day of Jewish New Year</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
