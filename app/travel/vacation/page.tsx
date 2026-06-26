"use client";

import { useState } from 'react';
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import "../../css/common.css";
import "../../css/stylesTurkey.css";

const stories: Record<string, string> = {
  aboutVacation: `<p><p>Some days ago I’ve returned from a vacation. It was a great and unusual trip for us and I’m going to tell you about it. I’ll try not to be too boring.</p><p>It was the first time we spent a vacation with our friends. They are a married couple, their names are Lena and Andrey. We planned and booked all our trip together. Lena wanted to visit Prague because she has been learning the Czech language. I wanted to see an European country I haven’t visited before. The boys wanted to eat meat and drink beer.</p><p>We were lucky because we bought really cheap flights. The flight tickets were so cheap that we didn’t believe in it! A one round trip ticket cost only 5700 rubles per person (it’s about 90$). As a result we had a flight rout: Ekaterinburg-Moscow-Vienna-Moscow-Ekaterinburg. We spent 5 gays in Budapest, 6 days in Prague (for Lena) and 2 days in Vienna (for me, because I haven’t been there before) and 1 additional day in Moscow (but at the beginning of our journey we didn’t suspect about this day).</p><p>So… once upun a time, there were 4 friends … or Part №1 is coming.</p><p><img class='imgInText' src='/img/vacation/vacation.jpg'></p></p>`,
  day1: `<p><p>It was the first day of our vacations. We had flights from Ekaterinburg to Moscow, from Moscow to Vienna and then a bus from Vienna to Budapest. It took us 12 or 13 hours to get to an apartment in Budapest. As you see our rout wasn’t easy and short.</p><p>We woke up at night for going to an airport (our friends slept at our flat), I made some sandwiches because nobody wanted to eat a full meal and we went to the airport. Recently all airlines in Russia served a free hot meal during flights, but now they offer only a hot sandwich. So during our first and second flight we ate again only sandwiches. After arriving in Vienna we had 3 hours until the bus and we were enough hungry. The airport of Vienna is comfortable but not big. We easily found our bus stop and decided to have something to eat because in our apartment we had to be only in 10 hours. We found a shop in the airport and can you guess what we bought there? Yes, of course sandwiches (I don’t know why, just we did it despite there were some cafes).</p><p>Our bus was late for 20 minutes and we experienced how strong and cold can be wind in Vienna. When the bus arrived we were happy. The bus was comfortable and warm, there were free coffee, tea and hot chocolate, fresh newspapers. Each passenger had a personal mini-TV. After 3 hours we arrived to Budapest but about it I’ll tell you in part 2.</p><p>A windy day in Vienna</p><p><img class='imgInText' src='/img/vacation/windyDay.jpg'></p></p>`,
  budapest: `<p><p>I’ve decided to combine all days in Budapest into one post. I fell in love with this city during the first time I was there with my mother. Ever since the city became more gorgeous and fascinating.</p><p>I’m fond of architecture of Budapest, bridges, river and food! We lived in a private apartments in the city center, so it was an old building enough with a beautiful winding stair, a tiny private court and a strong smell of sewerage. But its all have their own charm. May be our neighbours were local residents and I hoped we didn’t disturb them. Actually apartments was great. There were 2 bedrooms, a living room with a kitchen and 2 bathrooms. One of the bedrooms was not so comfortable, so we spun a coin who would live in a better one and our friends won.</p><p><img class='imgInText' src='/img/vacation/budapest.jpg'></p><p>The second my vivid recollection is a chain of cafe bars – “Hummus Bar”. I adore hummus but in Russia it’s not always easy to find the shop where hummus is sold. It is no use speaking of it, you need to taste it! As well I found ruinpubs in Budapest interesting place enough. They are crowded places in old and ruin buildings. We were only in one ruinbar in the center, the music was modern, there were 2 or more bars and a crowd of different people. I liked a friendly atmosphere of this place.</p><p>The most of our time took walks through the city and one trip to a mountain where you had to use a chair lift to went up. I think this chair lift isn’t a tourist place because there were only a few people. To tell the truth I was dreading this lift because the mountain was high. I sat on the chair lift’s bench with a lot of screams. The view was amasing!</p><p><img class='imgInText' src='/img/vacation/budapest_tf.jpg'></p><p>The weather was different. Sometimes there were rains. I had to buy a jacket, because it was too cold to wear a raincoat. We didn’t visit any museums and didn’t have time to sightseen some places. Budapest is the city I want to return again. If I start writing about all places and events in this post, it will be too long to read. I don’t like long posts because I’m not always read them from the start to the end.</p></p>`,
  prague: `<p><p>It was our second time in Prague and we decided visited Karlstein, but it was a Monday and to our surprise the castle was closed. We didn’t get sad and went for a walk in the forest near the castl. Additionally, it was our firt experiens to get somewhere in Europe by trains. Sometimes it was raining and we bought special plastic raincoats, so in the forest we looked like gosts.</p><p><img class='imgInText' src='/img/vacation/prague.jpg'></p><p>In Prague we visited our favourite places and found new ones, sent two postcards and through some days we went to Vienna.</p></p>`,
  vienna: `<p><p>I have to finish this part a long time ago. Plenty of events have happend since that vacation, thus, I will be brief. <br><br>When I think about Vienna, I recall four places:</p><p>1. The U.N.O. (United Nations Organization)’s district. I really wanted to visit these buildings, but we didn’t have enough time, moreover our friends weren’t interested in this place, so we just walked through this district. Glassy, tall buildings looked impressively. But I didn’t like the whole design of this place. There are only concrete and glass, straight lines. I did’t feel the “soul” of this place. Undoubtedly, I don’t want to live there.</p><p>2. There is Danube Tower near the U.N.O. area. This tower is 826 feet high. We went up almost all the highest places in all cities we were because my boyfriend enjoys this (while he enjoys views I’m usually scared and dreaming about returning to the first floor). There is a point, on this tower, where all who are crasy enough can jump off, only legs are fixed by a long rope. By the way, it’s not a cheap attraction. I saw how three men jumped one after another. It’s impossible to reproduce their emotions! It worth to see it. Unfortunately, I can’t download a picture because I need to ask a permission from one of these men.</p><p>3. Spareribs (I’m not sure that I wrote this right. I am mean a dish pork’s ribs). Our friend met us in Vienna and we went to a cafe to celebrate our meeting. We ordered a huge dish for all of us. The taste of the dish was fantastic! I didn’t expect that Vienna is a city where it is possible to eat delicious and not expensive.</p><p><img class='imgInText' src='/img/vacation/vienna.jpg'></p><p>4. And the last place is a combustion plant, that is in the central part of Vienna. Our friend told us that it is really interesting place to see. The plant has bright and unusual design and it’s not harmful for environment and health. However, we didn’t go there because….. yes, right…. we didn’t have time for this. I’m keen on visiting unusual and interesting places like this plant, and each time I think about Vienna I regret that I didn’t see it.To sum up, Vienna is interesting and beautiful city. Medieval architecture and modern concrete desing are mixed there. Also, Vienna is the most convinient city for tourists. In my opinion everyone, who is not good at terrain orientation can understand where he or she is and how to use a subway, because it’s the simpliest subway I’ve used. I mean, it’s possible to go to almost all tourist’s places by the subway. It’s planned so comfortable and clearly.Summary:My mother dreams of visiting Vienna and I hope her dream comes true.Although I didn’t have time to go all places I wanted in Vienna, I don’t want to go there again, only if it is transit trip.</p></p>`,
};

export default function VacationPage() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <div className="container">
      <SiteHeader />

      <div className="storyFromVacation">
        <a className="days" href="#" onClick={(event) => { event.preventDefault(); setSelectedStory("aboutVacation"); }}>
          My vacations in Europe
        </a>
        <a className="days" href="#" onClick={(event) => { event.preventDefault(); setSelectedStory("day1"); }}>
          Part 1 or the day of sandwiches
        </a>
        <a className="days" href="#" onClick={(event) => { event.preventDefault(); setSelectedStory("budapest"); }}>
          Part 2 - Budapest
        </a>
        <a className="days" href="#" onClick={(event) => { event.preventDefault(); setSelectedStory("prague"); }}>
          Part 3 - Prague
        </a>
        <a className="days" href="#" onClick={(event) => { event.preventDefault(); setSelectedStory("vienna"); }}>
          Part 4 - Vienna
        </a>
      </div>

      <div className="storyContent">
        <div
          id="div_for_insert"
          dangerouslySetInnerHTML={{
            __html: selectedStory ? stories[selectedStory] : "<p>Choose the topic</p>",
          }}
        />
      </div>

      <SiteFooter style={{ order: 4, width: "100%" }} />
    </div>
  );
}
