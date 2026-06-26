import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelHaifaPage() {
  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>
          A train trip to Haifa. Gardens, a cave and an ice cream from our
          family&apos;s friend.
        </h4>

        <p>
          Travel inside a forein country by ourselves is always interesting and
          thrilling. It&apos;s a greate opportunity to see pieces of usuall life
          of locals, the difference in nature and buildings. We had already used
          a train by that time, so easily came by foot to the train station Ha
          Hagana in Tel Aviv, bought two tickets to Haifa and a sandwich for
          Kostia.
        </p>

        <p>
          As soon as we arrived, we went to a lift station (or it was a metro
          station) for getting to The Bahai Gardens. The view from a hill was
          amasing, it&apos;s worth to visit Haifa only for this view.
          Surprisingly there were a lot of Russians, who chosen to get an Israel
          citizenship.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/haifalift.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/haifahill.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/Israel/haifawaterfall.jpg"
                alt=""
              />
            </p>
          </div>
        </div>

        <p>
          We knew that the garden would be closed, so went only on a first, the
          topmost platform. Despite the fact that it is a garden, I think the
          way through it could be quite harsh because there would be a lot of
          stairs and almost no shadow.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/gardenview.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/haifagardencentralview.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/Israel/bahaitree.jpg"
                alt=""
              />
            </p>
          </div>
        </div>

        <p>
          Our way down wasn&apos;t less interesting. We had an appointment with
          a friend and walked with pleasure in different places where he and his
          family lived a lot of years ago.
        </p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/HaifaWayBackMonument.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto">
              <img
                className="imgInText"
                src="/img/Israel/HaifaWayBackCabins.jpg"
                alt=""
              />
            </p>
          </div>
          <div className="photoInText">
            <p>
              <img
                className="imgInText"
                src="/img/Israel/HaifaWayBackSubmarine.jpg"
                alt=""
              />
            </p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>
          1 – Haifa is worth to visit, but I wouldn&apos;t chose this spot for a
          two week vacation. Beach is better in Tel Aviv and, of course, a night
          life too.
        </p>
        <p>
          2 – The Bahai Gardens are must for visiting. They have a convinient
          site where opening hours are described.
        </p>
        <p>
          3 – The Baha&apos;i Faith is quite interesting and unusual. I
          recommend to read about it before visiting gardens.
        </p>
      </div>

      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
