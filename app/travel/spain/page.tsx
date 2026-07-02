"use client";

import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../css/common.css";
import "../../css/stylesEuropeSidebar.css";

export default function SpainPage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="container">
      <SiteHeader />

      <div className="storyFromVacation">
        <a
          className="days"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setShowStory(true);
          }}
        >
          OH! I hope all fishes and other sea&apos;s creations are happy in this
          aquarium!
        </a>
      </div>

      <div className="storyContent">
        <div id="div_for_insert">
          {!showStory ? (
            <p>Choose the topic</p>
          ) : (
            <>
              <p>
                I have never seen an aquarium like this before. Barcelona&apos;s
                aquarium is huge and there live thousands of fishes, plants and
                other animals. The most ineresting place in aquarium - a tunnel
                with glass walls. During wolking in this tunnel you can see how
                differetn fishes are swimming around and even above you.
              </p>
              <p>
                This isn&apos;t me 🙂 This is my boyfriend in tunnel. And he is
                serious as always.
              </p>
              <p>
                <img
                  className="imgInText"
                  src="/img/spainKostia/acvarium.jpg"
                  alt="Aquarium tunnel"
                />
              </p>
              <p>
                But not only this tunnel impressed me. There were in a one of
                the rooms an aquarium with octopuses. There were so cute and
                funny! But I felt myself terribly in that moment because I had
                eaten fried octopuses the day befor. I really like seafood, but
                I&apos;m not shure will I eat octopuses in the future or not.
              </p>
              <p>Octopuses......</p>
              <p>
                <img
                  className="imgInText"
                  src="/img/spainKostia/octopus.jpg"
                  alt="Octopus in aquarium"
                />
              </p>
              <p>
                I recommend strongly to visit this aquarium to all people who
                will stay in Bacelona. We were wolking there more than 2 hours,
                and there aren&apos;t any benches, so it&apos;s better if you
                will have a rest before the aquarium. Furthermore the aquarium
                is almost in the center of the city. There are, near the
                aquarium, a seafront, an interesting mobile bridge, lots of
                yachts, a supermarket, cafe. So there are a lot of beautiful
                places to go.
              </p>
              <p>Summary:</p>
              <p>- to stop thinking about octopuses and feel pity for them.</p>
              <p>
                - to visit places like this in working days and not in the high
                tourists season (if there are a lot of people you won&apos;t see
                all fishes because a crowd)
              </p>
              <p>
                And, as always there are below some pictures that I can&apos;t
                not to show you:
              </p>
              <div className="photoContainer">
                <div className="photoInText">
                  <img
                    className="imgInText2"
                    src="/img/spainKostia/fish.jpg"
                    alt="Fish"
                  />
                </div>
                <div className="photoInText">
                  <img
                    className="imgInText2"
                    src="/img/spainKostia/hors.jpg"
                    alt="Sea horse"
                  />
                </div>
              </div>
              <p>These are medusa. They look like Russian&apos;s snowflake.</p>
              <p>
                <img
                  className="imgInText"
                  src="/img/spainKostia/jellyFish.jpg"
                  alt="Jellyfish"
                />
              </p>
            </>
          )}
        </div>
      </div>

      <SiteFooter style={{ order: 4, width: "100%" }} />
    </div>
  );
}
