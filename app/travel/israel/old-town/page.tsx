import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import "../../../css/common.css";
import "../../../css/stylesSimplePage.css";
import "../../../css/vietnamStylesSimplePage.css";
import "../../../css/adaptiveStylesSimplePage.css";

export default function IsraelOldTownPage() {
  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>It&apos;s always the most interesting part of a city for me.</h4>

        <p>I am keen on an old architecture. Can&apos;t imagine how people could build all those buildings without modern knowledge, materials and instruments. Sometimes old architecture is so magnificent, just there are not so beautifulness nowadays. And it is for me, a person who loves huge cities and skyscrapers.</p>

        <p>Moreover, imagination works great when walking through narrow ancient streets. I always imagine how people lived there hundreds years ago, where were their farms, how they protect a city. And it&apos;s not a secret that old city centres usually cited in picturesque places.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/sunset_old_city.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/old_city_road.jpg" alt="" /></p>
          </div>
        </div>

        <p>Of course, at such place attracts tourists. Often there could be found a cafe, that works a lot of years and became a legend. There is a one in Tel-Aviv. Couldn&apos;t make normal photos due to a long queue to buy a food there. Also, don&apos;t know a name of that place in English. They cook only shrimps and some kinds of fish (may be some more sea creatures). The menu not big, but the taste and atmosphere are great. Some people could say that there is not clean, but in such great places is often everything is fresh, clean and tasty.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_shrimps.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_food_shrimps.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/old_city_kitchen.jpg" alt="" /></p>
          </div>
        </div>

        <p>Cats, flowers and night lighting are the other essential parts.</p>

        <div className="photoContainer">
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_cats.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p className="aroundPhoto"><img className="imgInText" src="/img/Israel/old_city_flowers.jpg" alt="" /></p>
          </div>
          <div className="photoInText">
            <p><img className="imgInText" src="/img/Israel/night_light.jpg" alt="" /></p>
          </div>
        </div>

        <p>Summaries:</p>
        <p>1 – Don&apos;t be afraid to eat in simple, popular cafes. The food will be always fresh there.</p>
        <p>2 – Read some historical information about an ancient city. It will be much more interesting to walk there.</p>
        <p>3 – I should take more photos, there are a lot of memories in my head but a few photos.</p>
      </div>

      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
