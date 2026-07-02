// app/travel/vietnam/day5/page.tsx
"use client";

import { useEffect } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import { rememberVietnamSlide } from "../vietnamSlider";

export default function VietnamDay5Page() {
  useEffect(() => {
    rememberVietnamSlide(4);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DAY 5 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>Vietnamese soup in a real local caffee</h4>
        <p>
          We didn't do anything interesting today exept of eating in a non
          touristic caffe where they cook only one meal - soup. All other time
          we just walking and having a rest at a beach. Waves on the sea got
          bigger and bigger, only a few peole were brave enough to swim.
        </p>
        <p>
          While walking we noticed a local caffe some days ago, as I understood
          there served only one kind of Vietnamese soup. All tables in that
          caffe always were occupied by locals. So we decided to have a dinner
          in that place.
        </p>
        <p>
          Caffe was really simple, located at the crossroads. There were some
          usual wooden tables, plastic chairs and instead of two walls just open
          space with a view on a road. While we were waiting for our soups
          locals constantly arriving on their mopeds and bought take away food.
        </p>
        <p>
          The most interesting part was the way they serve food. Greens were
          served separately frome the soup and we had to add it by ourselve
          directly in a hot bouillon. Also there were differend spicy oils and a
          cold drink.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/grrensForSoup.jpg"
                alt="Greens for soup"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/soup.jpg"
                alt="The soup"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/meAndTheSoup.jpg"
                alt="I am eating a soup"
              />
            </p>
          </div>
        </div>

        <p>
          At the evening we walked to a supermarket that located quite far away
          from a touristic area and on our way back came across a concert. I
          think local or may be Vietnamese celebrities were performing because
          local people were filming them and sang along them. There were
          beautiful firework at the end of the show, I thik it was better that
          at New Year night.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/NYTreeAtSupermarket.jpg"
                alt="New Year Tree in front of a supermarket"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/firework.jpg"
                alt="The fireworks display"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/scene.jpg"
                alt="Concert stage"
              />
            </p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>
          1 – Next time I will try to find out about local activities in
          advance.
        </p>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
