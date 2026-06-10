"use client";

import { useState } from "react";
import "../../css/common.css";
import "../../css/stylesSimplePage.css";
import "../../css/vietnamStylesSimplePage.css";
import "../../css/adaptiveStylesSimplePage.css";

export default function PraguePage() {
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
        <h4>Freemason, my boyfriend&rsquo;s socks and a lot of liqueur.</h4>
        <p>I think I should start from explanation about my boyfriend&rsquo;s socks.</p>
        <p>We were in Prague this September. I was going to wear a pair of beautiful sandals, but it was really uncomfortable because of cobblestone pavements. So I had to wear my sneakers (but I took only 2 pairs of socks)</p>
        <p>The rest of the time I was wearing my boyfriend&rsquo;s socks :)) Were they too big for me? Of course! Why I didn&rsquo;t buy some new socks, I really don&rsquo;t know.</p>
        <p>Fremason (I&rsquo;m not sure that I write it correct)... Before our trip, we have watched short videos that were photographed by tourists. We were interested at cafes and bars, but several times there were some information about fremason. Actually, there were everywhere fremasson&rsquo;s signs. So we have decided to visit one fremason&rsquo;s restaurant.</p>
        <p>We thought it would our first cafe in Prague. But the first was a very simple local bar. We noticed it by chance while we were walking because it was too early check in in our hotel. Some workers from the project site entered in this bar (it was a local bar for local people with enough dirty tablecloth and smoked up room) so we entered too. I like eating in places that aren&rsquo;t for tourists. It&rsquo;s more interesting, more delicious and of course cheaper. In spite of a simple atmosphere, the cafe was enoug cosy, servise was fast and food was delicious.</p>
        <p>Liqueur. Actually I don&rsquo;t drink strong alcohol. But through some days in Prague I wasn&rsquo;t able to drink beer any more. What to do if you are round-the-clock with a person who drink..... to drink too. So I started tasting different liqueurs. I liked most two: eggs&rsquo; liqueur and &ldquo;Baileys&rdquo;. Don&rsquo;t think that we were drunk all the time. We just drink a littel while we were eating and resting during our long wolks.</p>
        <p>The end of our holiday wasn&rsquo;t lucky for me because I caught cold. May be because of it I&rsquo;m not fascinating about Prague. But than more time passes than more I want to return.</p>
        <p>Sum up:</p>
        <p>1) While I was writing it I was drinking a cup of coffeу and eating some strange cheese (actually right now) which was with sourish taste. May be the cheese is spoiled, may be it should has so taste. Should I eat it?</p>
        <p>2) Don&rsquo;t get ill on the road!</p>
        <p>3) Take more pictures.</p>
        <p>4) Wear appropriate footwear.</p>
        <p>5) Texts without any photos aren&rsquo;t interesting.</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
