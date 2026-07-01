// app/travel/vietnam/day3/page.tsx
"use client";

import { useEffect } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import { rememberVietnamSlide } from "../vietnamSlider";

export default function VietnamDay3Page() {
  useEffect(() => {
    rememberVietnamSlide(2);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DAY 3 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>It's unfair that in vacation I have to wake up so early.</h4>
        <p>
          The breakfast time was from 6 am to 10 am at our hotel, so every day
          we had to wake up with healp of alarm clock. I think next time we
          should try to go abroad without breakfast at a hotel, of course it
          depends on a country. The best option to rent an apartment of course.
        </p>
        <p>
          The breakfasts were good. Some times I tried something special, like
          crocodile meat or Kimchi.
        </p>
        <p>
          After dinner we decided to go to pagoda Long Sơn. The distance isn't
          long, only about 3 km frome our hotel, but a lot of mopeds and absence
          of organised traffic made our trip much longer. Usually, people get
          there by bus. There were some districts looked like slumbs, I didn't
          feel safe there. Moreover there weren't any sidewalks, sometimes we
          made our way through mopeds with difficulty.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/theWayToLongSon.jpg"
                alt="Walking along local streets"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/theWayToLongSonMopeds.jpg"
                alt="Heavy moped traffic on the road"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/theWayToLongSonTrain.jpg"
                alt="Railway tracks passing through the neighborhood"
              />
            </p>
          </div>
        </div>

        <p>
          The pagoda isn't big but cosy. We saw two statues of Buddha, and
          watched beautiful sunset there at a hill. Lots of trees make this
          place calm and beautiful, like in jungle.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/LongSonStatue.jpg"
                alt="Large white Buddha statue at Long Son Pagoda"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/pagodaTree.jpg"
                alt="Scenic trees around the pagoda complex"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/statueB.jpg"
                alt="Reclining Buddha statue on the hill"
              />
            </p>
          </div>
        </div>

        <p>
          There was a cafe at the entrance to the pagoda, one of waitress was a
          monk. I was ashamed to make a picture of him. There we tried another
          Vietnamese food - steamed loaf Bánh bao.{" "}
        </p>
        <p>
          Because of a sunset we couldn't stay there for a long time, so we walk
          toward to the hotel, of course by foot. And, as usuall, the way
          forward to the pagoda and back was more memorable than the pagoda
          itself. There were too many differences in our culture and the way of
          life. The number of moped on roads were crazy, it was like a endless
          river of mopeds. Each place where seafood were sold stopped us for
          some time, these places were everywhere. We stared and made photos of
          food we didn't see before.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/LongCafe.jpg"
                alt="Local cafe near the pagoda entrance"
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/vietnam/LongCake.jpg"
                alt="Wrapped Banh Bao steamed loaf"
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/vietnam/LongCakeOpened.jpg"
                alt="Opened Banh Bao bun showing filling"
              />
            </p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Don't even think to go to the pagoda by foot.</p>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
