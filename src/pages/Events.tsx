import { useState } from "react";

import OpeningIMG from "../assets/OpeningDayIMG.jpg";
import Eventcard from "../components/Eventcard";
import BlackWomen from "../assets/BlackWomen.jpg";
import MovieIMG from "../assets/MovieIMG.jpg";
// import EventBG from "../assets/EventBG.jpeg";
import ChildrenIMG from "../assets/ChildrenIMG.jpg";
import OpenMic from "../assets/OpenMIC.jpg";
import Workshop from "../assets/Workshop.jpg";
import Thomas from "../assets/Thomas.jpg";
import EventBGG from "../assets/EventBGG.jpeg";

const EVENTS_2026 = [
  {
    id: 1,
    image: EventBGG,
    title: "Exhibition Opening: Turku City Main Library 2nd Floor",
    date: "2026-02-07",
    time: "11:00 - 12:45",
    location: "Turku City Main Library, 2nd Floor",
    description:
      "This special Opening Day Celebration will take place on the second floor of the Turku Main Library. It will concentrate on the international women Finland, Mexico and Peru. Their artistic achievements of Photography, paintings and literature will be highlighted in this exciting opening celebration. The opening day will consist of an opening speech by Dr. Theresia Bilola. The TUNISIAN AMBASSADOR, Ambassador Hajjaji will be the Keynote Speaker. The entertainment will be provided by a Ukrainian musician, performance by a singer from Indonesia accompanied by a pianist from Turkey. The showstopper will be a Fashion show with couture designs by OMONO'S FASHION CONCEPTS.",
    type: "exhibition",
    link: "https://www.eventbrite.com/e/2026-say-it-loud-black-history-month-in-celebration-of-women-of-color-tickets-1980220341347?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 2,
    image: BlackWomen,
    title: '"Say Their Names" - Women of Color Exhibition Opening',
    date: "2026-02-07",
    time: "12:50 - 13:15",
    location: "Turku City Main Library, 1st Floor",
    description:
      "The day continues the first floor in the lobby and studio with an opening speech by Hope Nwosu. The exhibition features the achievements of Women of Colour from various countries. Diversity, Equity and Inclusion, are being dismantled and it will be very difficult to find information about achievements in the future. In this exhibit we present groundbreaking women of International and diverse backgrounds who have excelled against all odds, in many facets of industries including Literature, Medicine, Politics, Inventions, Entrepreneurship, and Military Service.",
    type: "exhibition",
    link: "https://www.eventbrite.com/e/2026-say-it-loud-black-history-month-in-celebration-of-women-of-color-tickets-1980220341347?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 3,
    image: Thomas,
    title: "Panel Discussion: Why Research Marginalized History?",
    date: "2026-02-07",
    time: "13:30 - 16:30",
    location: "Turku City Main Library, 1st Floor Studio",
    description:
      "Moderated by Thomas B. Sama PhD. Discussion on the importance of teaching inclusive history and lessons Finland can learn from inclusive historical narratives. Do people understand why books, achievements, websites and historical facts about the people of color are being dismantled? What lessons can Finland learn from the lack of teaching a more inclusive historical narrative? We hope this will help in accomplishing and reaching the objective, which is equitable integration.",
    type: "workshop",
    link: "https://www.eventbrite.com/e/2026-say-it-loud-black-history-month-in-celebration-of-women-of-color-tickets-1980220341347?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 4,
    image: ChildrenIMG,
    title: "Children's Face-painting Workshop",
    date: "2026-02-11",
    time: "16:00 - 18:30",
    location: "Turku City Main Library (Studio)",
    description:
      "Bring your children for an afternoon of fun while they express their inner artist through face painting. Our professional artist will be on hand to guide your child about how to use color to express feelings and how to use paper to first make a drawing then paint the drawing on their face.",
    type: "workshop",
    link: "https://www.eventbrite.com/e/childrens-face-painting-workshop-tickets-1980309682569?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 5,
    image: MovieIMG,
    title: "Movie Night: Shirley Chisholm Documentary",
    date: "2026-02-15",
    time: "14:00 - 18:00",
    location: "Turku City Main Library (Studio)",
    description:
      "This year’s movie is a documentary about the achievements of Shirley Chisholm. This is intended to be thought provoking, educational and inspiring. Take time out for an escape with a movie about this legendary lady.",
    type: "movie",
    link: "https://www.eventbrite.com/e/movie-night-tickets-1980309985475?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 6,
    image: Workshop,
    title: "Workshop: Understanding Privilege",
    date: "2026-02-25",
    time: "16:00 - 19:00",
    location: "Turku City Main Library (Studio)",
    description:
      "Led by PhD Heidi Layne. Explore how discrimination impacts psychological well-being and society as a whole. Who benefits? How does it hurt society as a whole? This workshop demonstrates how harmful discrimination is to one's psychological well being.",
    type: "workshop",
    link: "https://www.eventbrite.com/e/workshop-understanding-privilege-tickets-1980312348543?aff=odcleoeventsincollection&keep_tld=1",
  },
  {
    id: 7,
    image: OpenMic,
    title: "International Open Mic Youth Night",
    date: "2026-02-27",
    time: "17:00 - 20:00",
    location: "Vimma Youth House, Aurakatu 16, Turku",
    description:
      "Come and join an evening of entertainment, with you as one of the stars. Take this opportunity to garner stage experience and test your talent. The city and our production team will be in contact with music schools, clubs, organizations and media so that this call for artists reaches everyone. Come and support your Favorite artist. All communities are invited to be very active in supporting these young artists. Remember the age limit is 29 years. So, if you can dance, sing, do magic, acrobatics, play an instrument, or recite a poem, artists from all talents should come and represent their native country and heritage. You could leave with the trophy and cash prize of 1st 200€, 2nd 150€, and 3rd 100€. Celebrity judges will be on hand to give their professional opinion of all performances fairly. There will be a buffet, and plenty of music. Tickets will go on sales from January 15th. Early bird tickets will be sold for 10€ online and 15€ at the event day.",
    type: "performance",
    link: "https://www.eventbrite.com/e/international-open-mic-youth-night-competition-tickets-1980313720647?aff=odcleoeventsincollection&keep_tld=1",
  },
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("upcoming");

  const now = new Date();
  const filtered = EVENTS_2026.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === "upcoming") return eventDate >= now;
    if (filter === "past") return eventDate < now;
    return true;
  });

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
        style={{ backgroundImage: `url(${OpeningIMG})` }}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 space-y-6 py-30 w-10/12 md:w-6/12 mx-auto text-white">
        <div>
          <h1 className="text-3xl font-extrabold">Events</h1>
          <p className="mt-2 font-bold text-2xl">
            Join us for "Say It Loud" Black History Month celebration in
            February 2026
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 border-b border-gray-500 pb-4">
          {["all", "upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={[
                "rounded-lg px-4 py-2 font-medium transition",
                filter === tab
                  ? "bg-amber-600 text-white"
                  : "text-white bg-black hover:bg-blue-300 hover:text-black",
              ].join(" ")}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <Eventcard filtered={filtered} />
      </div>
    </section>
  );
}
