"use client";

import { useState } from "react";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelApartmentPage() {
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
        <h4>Our experience in booking apartments on AirBnB</h4>

        <p>That time we decided not to use Booking for researving a hotel, but use Airbnb. First two or three people didn&apos;t approve our reservations for a long time and then regected. Then we started to write to hosts before making a reservation, however in this case hosts boosted prices.</p>
        <p>One guy approved our request. It was a small apartment with a balcony in the center of Florentin, area where live youthful and yuppie. We were already dreaming how we would spent time there, but unfortunately, after a while, he told us that his house owner got to know that he rented this flat to another people and was going to go to court. He cancelled our reservation and took away a flat from an Airbnb. I hope everything is OK with that guy and his host excused him.</p>
        <p>We ended up in an apartment on Eilat Street 44 and it was gorgeous. Everything were new there exactly like on photos, some cooking staff still had stickers with a bar code frome a shop. The most interesting thing for me was that a bed was on the second floor. First of all I was afraid of a perpendicular staircase that we had to use for reaching a bedroom, but then understood all charm. It&apos;s really cool to live in a flat with high ceiling.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/livingroom.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/kitchen.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/stairs.jpg" alt="" /></p>
          </div>
        </div>

        <p>We used kitchen only for preparing breakfasts. It was coffee and so tasty sandwiches with hummus. We bought fresh greens, cucumbers, bread, cheese, hummus, strawberries, avocado, yoghurt, sun-dried tomatoes and this food didn&apos;t annoy us at all. Average prices in shekels are: one unit of hummus 13.90, bread 13.90, some tomatos 14.90, coca-cola 1.5 litres 6.50, a bottle of wine 40.00, a bottle of bear 16.0, a bottle of olives 9.90.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/breakfast1.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/breakfast4.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/breakfast3.jpg" alt="" /></p>
          </div>
        </div>

        <p>It was a pleasure to return to that apartment after a long walks and have a rest there. By the way, location was convinient. About 10-15 minutes to the beach and the same distance to the old city.</p>
        <p>Summaries:</p>
        <p>1 – It&apos;s more convenient to buy everything at shops because there were clear prices, the same as in the market and possible to pay by card.</p>
        <p>2 – Hotel should be at the center, for saving time to get to sightseen places and beach.</p>
        <p>3 – It&apos;s a good idea to reserve a hotel with a balkony if you are going to have a rest in a country with a warm climate, for ventilation and just for sitting there and enjoying in the evening.</p>
      </div>

      <footer className="footer" style={{ order: 3, width: "100%" }}>
        <div className="copirait">
          <p className="footerText">© {new Date().getFullYear()} Marina Shvachko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
