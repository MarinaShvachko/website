// app/travel/vietnam/day7/page.tsx
"use client";

import { useEffect } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";
import { rememberVietnamSlide } from "../vietnamSlider";

export default function VietnamDay7Page() {
  useEffect(() => {
    rememberVietnamSlide(6);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DAY 7 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>The day of overeating.</h4>
        <p>
          This day was remarcable for the fact that we visited a restaurant
          where we had to pay for an entrance and had as much food as we wanted.
          Most of all for us was interesting to try different tipes of shells
          and cook them by ourselves on a special hot spot in the center of
          table. One ticket for adult was 250000, beer was unlimited.
        </p>
        <p>
          There were plenty of raw and cooked shells, I had no idea of their
          names, some types of fish, meat and unusual meat like crocodile or
          ostrich.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/shells1.jpg"
                alt="Raw shell assortments on ice display"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/shells3.jpg"
                alt="Exotic raw meats counter selection"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/shells2.jpg"
                alt="Different species of shells and clams"
              />
            </p>
          </div>
        </div>

        <p>
          All food had to be fried on that coals. Staff cared that coals were
          hot, sometimes they helped us to cook shells. I always afraid that
          seafood I cooked would not be fried properly and thought that my
          shells were overcooked. The process was interesting and fun. Around us
          were sitting some huge Chinese and may be Viethamese families.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/friedShells.jpg"
                alt="Cooking shells on the tabletop grill coals"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/friedShells2.jpg"
                alt="Clams sizzling over hot grill center"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/friedShells3.jpg"
                alt="Grilling assorted seafood skewers and meat slices"
              />
            </p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>
          1 – Restaurants with fixed prices are good for tasting different types
          of dishes, I think they aren't profitable for just eating.
        </p>
        <p>
          2 – Don't take french fried potato or something usual in fixed price
          restaurants. Usual food we eat constantly at home or the nearest
          restaurants. Try something new.
        </p>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
