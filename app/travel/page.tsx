// app/travel/page.tsx
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../css/common.css";
import "../css/stylesTravel.css";
import "../css/adaptiveTravel.css";

export default function TravelPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* TRAVEL CONTENT WRAPPER */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <div className="contentSection">
          {/* Vietnam */}
          <div className="project">
            <a href="/travel/vietnam">
              <img
                className="img"
                src="/img/Flag_of_Vietnam.png"
                alt="Vietnam"
              />
            </a>
          </div>

          {/* Израиль */}
          <div className="project">
            <a href="/travel/israel">
              <img
                className="imgForSmallFlag"
                src="/img/Flag_of_Israel.png"
                alt="Israel"
              />
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
              <img
                className="img"
                src="/img/Flag_of_the_Czech_Republic.png"
                alt="CZ"
              />
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
              <img
                className="img"
                src="/img/Flag_Europe.png"
                alt="Europe with friends"
              />
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
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
