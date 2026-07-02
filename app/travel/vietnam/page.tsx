// app/travel/vietnam/page.tsx
"use client";

import { useEffect } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../css/common.css";
import "../../css/stylesVietnamHomePage.css";
import { bindVietnamSliderListeners, syncVietnamSlider } from "./vietnamSlider";

const TOTAL_SLIDES = 11;

bindVietnamSliderListeners();

function VietnamSlider() {
  useEffect(() => {
    syncVietnamSlider();
    requestAnimationFrame(syncVietnamSlider);
  }, []);

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="slider__item slider__item_1">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day1">
                <span className="slider__item_title">
                  1 day: the flight, the hotel, exploration of territories
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_2">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day2">
                <span className="slider__item_title">
                  2 day: long walks, a lot of shrimps
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_3">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day3">
                <span className="slider__item_title">
                  3 day: The walking trip to Long Sơn through a not touristic
                  area
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_4">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day4">
                <span className="slider__item_title">
                  4 day: The day on the Vinpearl island
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_5">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day5">
                <span className="slider__item_title">5 day: Pho Bo soup</span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_6">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day6">
                <span className="slider__item_title">
                  6 day: Po Nagar Cham Towers, if I knew....
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_7">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day7">
                <span className="slider__item_title">
                  7 day: THE DAY OF OVEREATING. Our visit to a cafe with a fixed
                  price.
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_8">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day8">
                <span className="slider__item_title">
                  8 day: THE LAST DAY OF 2019 YEAR
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_9">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day9">
                <span className="slider__item_title">
                  9 day: THE FIRST DAY OF 2020
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_10">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day10">
                <span className="slider__item_title">
                  10 day: Excursion to Da Lat
                </span>
              </a>
            </div>
          </div>

          <div className="slider__item slider__item_11">
            <div className="slider__item_inner">
              <a href="/travel/vietnam/day11">
                <span className="slider__item_title">
                  11 day: Last day - Dumplings in a local caffee
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        className="slider__control slider__control_prev"
        href="#"
        role="button"
        aria-label="Previous slide"
      />
      <a
        className="slider__control slider__control_next"
        href="#"
        role="button"
        aria-label="Next slide"
      />

      <ol className="slider__indicators">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <li
            key={index}
            data-slide-to={index}
            className={index === 0 ? "active" : undefined}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </ol>
    </div>
  );
}

export default function VietnamPage() {
  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <div className="containerForSlider">
          <h4>New Year 2020 in Vietnam</h4>

          <div className="articleBody">
            <VietnamSlider />
          </div>
        </div>
      </div>

      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
