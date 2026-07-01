// app/travel/vietnam/day11/page.tsx
"use client";

import { useEffect } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import { rememberVietnamSlide } from "../vietnamSlider";

export default function VietnamDay11Page() {
  useEffect(() => {
    rememberVietnamSlide(10);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DAY 11 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>
          Goodby Vietnam, you gifted me a sunny vacationd and a new favourite
          type of food!
        </h4>
        <p>
          The first day in Vietnam was started from eating dumplings, the last
          day was finished by eating dumplings. This time in a local, not
          touristic caffee, quite far from a beach. We ordered a taxy to get
          there and where arrived, people in a cafe was surprised, I think they
          see tourists not often, especially arrived on an expensive car.
        </p>
        <p>
          We ordered some different dumplings to share to each other for
          testing. There were special sauces to each portion of food, but we
          mixed them. Through some time a waiter came up frome a kitchen and
          showed us which sauce combined to the certain dumplings. As a bonuse
          they brought to us a soup with a "hundred-year egg". It is a black,
          preserved chiken egg, in a mixture of clay, ash, salt, quicklime and
          rice hulls for several weeks to several months. It has too specific
          taste, like a soup itself. Trouly speaking, I wasn't able to eat it
          all.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/LastEveningCaffee.jpg"
                alt="Local non-touristic dumpling cafe layout"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/dumplingsLastEvening.jpg"
                alt="A variety of delicious fresh steamed dumplings"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/A soup with a hundred-year egg.jpg"
                alt="Traditional soup served with a hundred-year egg"
              />
            </p>
          </div>
        </div>

        <div>
          <p>Summaries:</p>
          <p>
            1 – It's cool to try local food, even if a name of this food doesn't
            sound deliciously for our culture.
          </p>
          <p>
            2 – I need to rebuild my site, develope one stile and think how I
            could make control better.
          </p>
          <p>3 – Will not use slider anymore, it's uncomfortable.</p>
        </div>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
