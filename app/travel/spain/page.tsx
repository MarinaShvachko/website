"use client";

import { useState } from "react";
import "../../css/common.css";
import "../../css/stylesTurkey.css";

export default function SpainPage() {
  const [showStory, setShowStory] = useState(false);
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

      <div className="storyFromVacation">
        <a
          className="days"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setShowStory(true);
          }}
        >
          OH! I hope all fishes and other sea&apos;s creations are happy in this aquarium!
        </a>
      </div>

      <div className="storyContent">
        <div id="div_for_insert">
          {!showStory ? (
            <p>Choose the topic</p>
          ) : (
            <>
              <p>I have never seen an aquarium like this before. Barcelona&apos;s aquarium is huge and there live thousands of fishes, plants and other animals. The most ineresting place in aquarium - a tunnel with glass walls. During wolking in this tunnel you can see how differetn fishes are swimming around and even above you.</p>
              <p>This isn&apos;t me 🙂 This is my boyfriend in tunnel. And he is serious as always.</p>
              <p><img className="imgInText" src="/img/spainKostia/acvarium.jpg" alt="Aquarium tunnel" /></p>
              <p>But not only this tunnel impressed me. There were in a one of the rooms an aquarium with octopuses. There were so cute and funny! But I felt myself terribly in that moment because I had eaten fried octopuses the day befor. I really like seafood, but I&apos;m not shure will I eat octopuses in the future or not.</p>
              <p>Octopuses......</p>
              <p><img className="imgInText" src="/img/spainKostia/octopus.jpg" alt="Octopus in aquarium" /></p>
              <p>I recommend strongly to visit this aquarium to all people who will stay in Bacelona. We were wolking there more than 2 hours, and there aren&apos;t any benches, so it&apos;s better if you will have a rest before the aquarium. Furthermore the aquarium is almost in the center of the city. There are, near the aquarium, a seafront, an interesting mobile bridge, lots of yachts, a supermarket, cafe. So there are a lot of beautiful places to go.</p>
              <p>Summary:</p>
              <p>- to stop thinking about octopuses and feel pity for them.</p>
              <p>- to visit places like this in working days and not in the high tourists season (if there are a lot of people you won&apos;t see all fishes because a crowd)</p>
              <p>And, as always there are below some pictures that I can&apos;t not to show you:</p>
              <div className="photoContainer">
                <div className="photoInText">
                  <img className="imgInText2" src="/img/spainKostia/fish.jpg" alt="Fish" />
                </div>
                <div className="photoInText">
                  <img className="imgInText2" src="/img/spainKostia/hors.jpg" alt="Sea horse" />
                </div>
              </div>
              <p>These are medusa. They look like Russian&apos;s snowflake.</p>
              <p><img className="imgInText" src="/img/spainKostia/jellyFish.jpg" alt="Jellyfish" /></p>
            </>
          )}
        </div>
      </div>

      <footer className="footer" style={{ order: 4, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
