import { useState } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

const EVENTS_2026 = [
  {
    id: 1,
    title: "Exhibition Opening: Turku City Main Library 2nd Floor",
    date: "2026-02-07",
    time: "11:00 - 12:45",
    location: "Turku City Main Library, 2nd Floor",
    description:
      "Special opening day celebrating international women from Finland, Mexico, and Peru. Features opening speech by Dr. Theresia Bilola, keynote by Tunisian Ambassador Hajjaji, Ukrainian musician, Indonesian singer, Turkish pianist, and fashion show by Omono's Fashion Concepts.",
    type: "exhibition",
  },
  {
    id: 2,
    title: '"Say Their Names" - Women of Color Exhibition Opening',
    date: "2026-02-07",
    time: "12:50 - 13:15",
    location: "Turku City Main Library, 1st Floor",
    description:
      "Opening of the Women of Color Exhibition featuring groundbreaking women from various countries. Book signing with award-winning author Hope Nwosu. Buffet of Tunisian and international foods provided.",
    type: "exhibition",
  },
  {
    id: 3,
    title: "Panel Discussion: Why Research Marginalized History?",
    date: "2026-02-07",
    time: "13:30 - 16:30",
    location: "Turku City Main Library, 1st Floor Studio",
    description:
      "Moderated by Thomas B. Sama PhD. Discussion on the importance of teaching inclusive history and lessons Finland can learn from inclusive historical narratives.",
    type: "workshop",
  },
  {
    id: 4,
    title: "Children's Face-painting Workshop",
    date: "2026-02-11",
    time: "16:00 - 18:30",
    location: "Turku City Main Library (Studio)",
    description:
      "Professional artist-led workshop for children ages 8-13. Learn to express feelings through color and create face paintings. LIMITED to 10 seats.",
    type: "workshop",
  },
  {
    id: 5,
    title: "Movie Night: Shirley Chisholm Documentary",
    date: "2026-02-15",
    time: "14:00 - 18:00",
    location: "Turku City Main Library (Studio)",
    description:
      "Thought-provoking, educational, and inspiring documentary about Shirley Chisholm, first Black woman to run for U.S. President.",
    type: "movie",
  },
  {
    id: 6,
    title: "Workshop: Understanding Privilege",
    date: "2026-02-25",
    time: "16:00 - 19:00",
    location: "Turku City Main Library (Studio)",
    description:
      "Led by PhD Heidi Layne. Explore how discrimination impacts psychological well-being and society as a whole.",
    type: "workshop",
  },
  {
    id: 7,
    title: "International Open Mic Youth Night",
    date: "2026-02-27",
    time: "17:00 - 20:00",
    location: "Vimma Youth House, Aurakatu 16, Turku",
    description:
      "Evening of entertainment for young artists (age limit 29). Sing, dance, perform, play instruments. Prizes: 1st €200, 2nd €150, 3rd €100. Early bird tickets €10 online.",
    type: "performance",
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
    <div className="space-y-6 py-30 w-10/12 md:w-6/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="mt-2">
          Join us for "Say It Loud" - Black History Month celebration in
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
                : "text-white bg-black hover:text-white",
            ].join(" ")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-white/70">No events found.</p>
        ) : (
          filtered.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-black bg-white p-12 transition my-10"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-black">{event.description}</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-black">
                      <CalendarIcon className="h-5 w-5" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        · {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <MapPinIcon className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-block rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
                  {event.type}
                </span>
              </div>
              {new Date(event.date) >= new Date() && (
                <button className="bg-blue-400 mt-6 py-5 px-5 rounded-xl">
                  RSVP
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
