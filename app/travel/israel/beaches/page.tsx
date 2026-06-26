import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelBeachesPage() {
  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>
          Cool, cool beaches! For people, for our small four-legged friends, for
          everybody!
        </h4>

        <p>
          How do you think, what do people, who live far away frome a sea and in
          quite cold climate, as soon as came to a beach country? Any guesses?
          Right - leave a baggage at a hotel and right away come to the nearest
          beach. We didn&apos;t know the way to the beach and unintentionally
          went to the dog&apos;s one.
        </p>

        <p>
          It&apos;s so nice to see how dogs walked and run there, playing to
          each other and with people. Those pets were really happy. We spen
          there may be about an hour just sitting and watching them and enjoying
          the sun and a warmth weather.
        </p>

        <p>
          The beach line in Tel Aviv is awesome. It&apos;s so long and quite
          width. The beach separated by areas with sunbeds and just free spaces
          where people can have a reast on their beach towels.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/dogbeach.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/nightbeach.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/Israel/serfbeach.jpg"
                alt=""
              />
            </p>
          </div>
        </div>

        <p>
          It was a first country we payed for sunbeds by card. Also, there was
          possible to buy suncream, umbrellas, beach chairs and everything were
          sold througth a vendind machine.
        </p>

        <p>
          Water was quite warm at the start of May. The sea deepens very slowly
          and it was really clean. Also, there were some places for serfers. I
          didn&apos;t know that serfing is so popular in Tel Aviv untile I came.
          Unfortunately, I&apos;m not good at swimming and hardly likely to try
          it some day.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/vendingmachineatbeach.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img className="imgInText" src="/img/Israel/sunbed2.jpg" alt="" />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/Israel/costofbeachstuff.jpg"
                alt=""
              />
            </p>
          </div>
        </div>

        <p>
          That trip we didn&apos;t spend a lot of time at a beach, preffering
          just walking along the sealine at evenings, and walking in a city.
          There were a lot to see.
        </p>

        <p>Summaries:</p>
        <p>1 – It would be greate to be able to swim.</p>
        <p>
          2 – I deafinetly want to live near a sea, or spend at least one season
          living in a such country.
        </p>
      </div>

      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
