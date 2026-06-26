// app/travel/vietnam/day8/page.tsx
"use client";

import { useEffect } from 'react';
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import '../../../css/common.css';
import '../../../css/stylesSimplePage.css';
import '../../../css/vietnamStylesSimplePage.css';
import '../../../css/adaptiveStylesSimplePage.css';
import { rememberVietnamSlide } from '../vietnamSlider';

export default function VietnamDay8Page() {
  useEffect(() => {
    rememberVietnamSlide(7);
  }, []);

  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DAY 8 CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <h4>The last day of 2019 year.</h4>
        <p>That day I was doing everything alone because Kostia was ill and sleeping all day. It was sad without him. I decided to spend morning in the swimming pool, was there alone almost all time, so had a chance made some beautiful pictures. The hotel provided beach and swimming pool's towels. When I decided to return to the room, there wasn't a pen and I didn't sign that I returned the towel. Interesting if they would forced me to pay for this towel during check out.</p>
        
        <div className="photoContainer">
           <div className="panoramicPhotoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/hotelspPanorama.jpg" alt="Hotel swimming pool panoramic view" /></p>
           </div>
        </div>

        <p>Then I went to the shop for water and bought a bottle of rice milk, I hadn't tried it before. The taste was good, but may be too sweet. It's interestingly that there were a lot of Korean food in shops, that rice milk was Korean too. Instead of going to the beach I decided to made a work place on our balcony, truly speaking the balcony didn't suit at all. But eventually I had a cosy place with a sea view. Moreover, the sky was amasing, with some clouds but here was 30 celsius degrees. There was 15:43 but Kostia was still sleeping, hope he would feel good by the evening.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/workingPlace.jpg" alt="Laptop setup on the hotel balcony" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/wpCity.jpg" alt="Cityscape view from the high balcony look" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/workingPlaceSW.jpg" alt="Balcony view showcasing the sea edge" /></p>
           </div>
        </div>

        <p>It looked like I needed to go to eat somewhere. By the way, I was writing this sitting on the balcony :) Would show my dinner later.</p>
        <p>So there were: a crepe with mozzarella and salamy, a smoothie and a one crepe without any additives for Kostia. I paid 155000.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/dinerAloneCaffee.jpg" alt="Local cafe counter layout" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/dinnerAlone.jpg" alt="Crepes and fresh fruit smoothie layout" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/dinerAloneCaffeeStreet.jpg" alt="Cafe looking out into the street corner" /></p>
           </div>
        </div>

        <p>So, there were last minutes of 2019 year and our New Year 2020 in Vietnam.</p>
        <p>Fortunately, Kostia felt better and we organised a small new year in our room. Some people celebrated it on the beach and there were slightly crowded. Locals didn't celebrate New year today, their New Year will be on 20 January. They just were sittings with families or friends on the sand, enjoying fresh breeze. We bought two croissant and a Dalat's sparkling wine. There were no fireworks, no shouts, but for me it was a perfect New Year 2020 in calm and friendly atmosphere.</p>
        
        <div className="photoContainer">
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/NYbeach.jpg" alt="People sitting gathered along the evening beach line" /></p>
           </div>
           <div className="photoInText">
              <p className="aroundPhoto"><img className="imgInText" src="/img/vietnam/NYtable.jpg" alt="Croissants and snacks setup on hotel desk" /></p>
           </div>
           <div className="photoInText">
              <p><img className="imgInText" src="/img/vietnam/NYdrinks.jpg" alt="Dalat sparkling wine bottle pouring into glasses" /></p>
           </div>
        </div>

        <div>
           <p>Summaries:</p>
           <p>1 – Two 1.5 L bottles of water - 22000 total</p>
           <p>2 – Two 500 ml bottles of isotonic - 20000 total</p>
           <p>3 – One more bottle of isotonic - 10000</p>
           <p>4 – A bottle of rice milk 500 ml - 28000</p>
           <p>5 – A pack of black tea - 41000</p>
           <p>6 – A package of rice chips 150gr - 25000</p>
           <p>7 – A battle of sparcling vine - 165 000</p>
           <p>8 – Two croissant - 70000</p>
           <p>9 – Celebrating New Year not at home without cooking salads and having a lot of drunk people - pricelessly</p>
        </div>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: '100%' }} />
    </div>
  );
}