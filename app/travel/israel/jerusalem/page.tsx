"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelJerusalemPage() {
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
        <h4>Jerusalem</h4>

        <p>We planned to spend only one day in Jerusalem, went there by bus early in the morning and returned to Tel-Aviv on the evening bus. Because of hot weather I was wearing a short pair of shorts and had a cape in my backpack for covering legs during visiting churches and The Western Wall.</p>

        <p>I knew that Jerusalem isn&apos;t as tolerant city as Tel-Aviv, but I couldn&apos;t even imagine that all local people and tourists would wear long covered clothes. Actually, in Jerusalem I saw only two persons wearing a pair of shorts, one of them was I. Exept my stupidity I had a second problem durin that trip - the weather was quite cold, so I felt uncomfortable and freezing.</p>

        <p>We walked in to the Old City through Jaffa Gate, but soon turned up on market, that was under all sightseen places. Market looked like an endless labyrinth. I think that market&apos;s sellers made some money on helping tourists to get out of market because to find a way to surface was difficult. The good thing - there possible to buy a wide range of souvenirs.</p>

        <p>Old&apos;s city architecture always impressed me more, than all stories that guides told to tourists. How they could build such massive and beauteful buildings without engineering knowledge and modern equipment. I&apos;m ready to sit for hourse and examine each old stone. However, huge groups of tourists didn&apos;t let us to relax.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/j5v.jpg" alt="Automat for buying tickets" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/j4v.jpg" alt="The train station" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/j6v.jpg" alt="A road to the apartment" /></p>
          </div>
        </div>

        <p>We decided to buy some gifts and had a meal out of Old city. Of course I have to post a picture of The Western Wall.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/j2.jpg" alt="Automat for buying tickets" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/jWesternWall.jpg" alt="The train station" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/j3.jpg" alt="A road to the apartment" /></p>
          </div>
        </div>

        <p>We examine Jerusalem just wandering towards to the bus station, having a rest on street benches and caffe. There were a lot of flowers on streets, modern public transport that we used to get to the city center from the bus station. Often we met young people who were serving in the Army, so they were walking with submachine guns. Atmosphere in Jerusalem was calm and friendly, it looked like streets were plenty of locals, not tourists.</p>

        <p>In Jerusalem magically connected modern amenities, old medieval architecture and angular buildings that looked like big rectangular boxes. It&apos;s interesting how this city loked like after sunset, unfortunately we didn&apos;t have time to see it.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/jflowers.jpg" alt="Automat for buying tickets" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/jjuice.jpg" alt="The train station" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/jtrain.jpg" alt="A road to the apartment" /></p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>1 – It takes about one hour to get to Jerusalem from Tel-Aviv by bus.</p>
        <p>2 – The bus station located not far away from Old city. There is a train from the station to Old city.</p>
        <p>3 – Clothes should cover legs and shoulders.</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
