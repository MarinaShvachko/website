"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelFirstDayPage() {
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
        <h4>2 May 2019 we landed in Israel: the introduction to our slightly irrational trip.</h4>

        <p>Our common sense were telling us that it wasn&apos;t a good idea to go to Israel at first days of May. Prices for flights, hotels, transfers were higher than usual because of May&apos;s holidays in Russia, a day of Independency in Israel and Shabbat - we landed on Friday and had a return flight on Saturday. However, we wanted to had a holiday, really WANTED. Besides May is the perfect month for having a rest in Israel because of the warm weather and quite warm water.</p>

        <p>We prepared to spand more money, than we would like and overcome some inconviniences. Fortunately, all anxieties were useless. There was a tourist information center at the airport and while we were asking for a city map and taxi service, we found out that we could take a last Friday&apos;s train from the airport to Tel-Aviv. After some minutes we bought two tickets, payed by cards, withdrawn some cash (lately we understood that almost for everything is possible to pay by card) and boarded the train.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/automatForBuyingTickets.jpg" alt="Automat for buying tickets" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/trainStation.jpg" alt="The train station" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/wayToApt.jpg" alt="A road to the apartment" /></p>
          </div>
        </div>

        <p>We arrived to HaHagana, the nearest train station to historic centre of Tel-Aviv and to our apartment. There wasn&apos;t a point to take a taxi, so we reached our apartment by foot. The distance was approximately 2 km through narrow, atmospheric and sometimes overloaded streets. This way not for a grumpy person, think carefful who you are goint to travel with.</p>

        <p>Apartment looked like on photos on AirBnb, may be even better. I&apos;m not sure if I would like to book something on that site again, will tell you about my experience in a section &quot;Our home in Tel-Aviv&quot;.</p>

        <p>After having a rest, our study of neighborhood began. First aims were: to eat something, find AM:PM - 24/7 a chain of supermarket that work even in Shabbat. Then, to go to the beach.</p>

        <p>Summaries:</p>
        <p>1 – Even if there is no information about transport timetable in the Internet, it&apos;s a good idea to ask at touristic center</p>
        <p>2 – Cash isn&apos;t necessary in Israel. But it could be easy withdrown from an ATM</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
