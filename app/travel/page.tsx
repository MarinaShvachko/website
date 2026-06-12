// app/travel/page.tsx
"use client";

import { useState } from 'react';
import '../css/common.css';
import '../css/stylesTravel.css';
import '../css/adaptiveTravel.css';

export default function TravelPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* TRAVEL CONTENT WRAPPER */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <div className="try">
           
          {/* Vietnam */}
          <div className="project">
            <a href="/travel/vietnam">
              <img className="img" src="/img/Flag_of_Vietnam.png" alt="Vietnam" />
            </a>
          </div>

          {/* Израиль */}
          <div className="project">
            <a href="/travel/israel">
              <img className="imgForSmallFlag" src="/img/Flag_of_Israel.png" alt="Israel" />
            </a>
          </div>
            
          {/* Греция */}
          <div className="project">
            <a href="/travel/greece">                      
              <img className="img" src="/img/Flag_of_Greece.png" alt="Greece" />
            </a>
          </div>

          {/* USA
          <div className="project">
            <a href="/travel/america">
              <img className="img" src="/img/America.png" alt="USA" />
            </a>
          </div> */}

          {/* Чехия */}
          <div className="project">
            <a href="/travel/prague">
              <img className="img" src="/img/Flag_of_the_Czech_Republic.png" alt="CZ" />
            </a>
          </div>

          {/* Испания */}
          <div className="project">
            <a href="/travel/spain">
              <img className="img" src="/img/Flag_of_Spain.png" alt="Spain" />
            </a>
          </div>

          {/* Египет */}
          <div className="project">
            <a href="/travel/egypt">
              <img className="img" src="/img/Flag_of_Egypt.png" alt="Egypt" />
            </a>
          </div>

          {/* Черногория */}
          {/* <div className="project">
            <a href="/travel/turkey">убрала надпись в блока</a>
            <a href="https://wesbos.com/" target="_blank" rel="noopener noreferrer">
              <p className="source">course made by Wes Bos</p>
              <img className="img" src="/img/Flag_of_Montenegro.png" alt="Письма мастера дзен" />
            </a>
          </div> */}

          {/* Хорватия */}
          {/* <div className="project">
            <a href="/travel/turkey">убрала надпись в блока</a>
            <a href="https://wesbos.com/" target="_blank" rel="noopener noreferrer">
              <p className="source">course made by Wes Bos</p>
              <img className="img" src="/img/Flag_of_Croatia.png" alt="Письма мастера дзен" />
            </a>
          </div> */}

          {/* каникулы в Европе с друзьями */}
          <div className="project">
            <a href="/travel/vacation">
              <img className="img" src="/img/Flag_Europe.png" alt="Europe with friends" />
            </a>
          </div>

          {/* Italy */}
          <div className="project">
            <a href="/travel/italy">
              <img className="img" src="/img/Flag_of_Italy.png" alt="Italy" />
            </a> 
          </div>
         
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