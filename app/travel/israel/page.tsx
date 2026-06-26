import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../css/common.css";
import "../../css/stylesIsrael.css";
import "../../css/adaptiveIsrael.css";

export default function IsraelPage() {
  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <div className="blockOfSquares">
          <a className="figure1" href="/travel/israel/first-day">
            <p className="title">First day</p>
          </a>

          <div className="figureGroup">
            <a className="figure2" href="/travel/israel/apartment">
              <p className="title">Apartment</p>
            </a>

            <a className="figure3" href="/travel/israel/modern-districts">
              <p className="title">Modern districts</p>
            </a>

            <a className="figure4" href="/travel/israel/old-town">
              <p className="title">old city. walking</p>
            </a>
          </div>
        </div>

        <div className="blockOfSquares">
          <a className="figure5" href="/travel/israel/beaches">
            <p className="title">beaches</p>
          </a>

          <a className="figure6">
            <p className="title">coming soon</p>
          </a>

          <a className="figure7" href="/travel/israel/jerusalem">
            <p className="title">Jerusalem</p>
          </a>

          <a className="figure8" href="/travel/israel/haifa">
            <p className="title">Haifa</p>
          </a>
        </div>

        <div className="blockOfSquares">
          <a className="figure9" href="/travel/israel/new-year">
            <p className="title">Big surprise: New Year in Tel-Aviv</p>
          </a>

          <a className="figure10">
            <p className="title">Coming soon</p>
          </a>
        </div>
      </div>

      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
