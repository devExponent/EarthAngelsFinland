import meetingImage from "../../assets/Meeting.jpeg";

const people = [
  { name: "Hazzalea Reyes", role: "Vice President, EarthAngels Finland" },
  { name: "Zainab Shahbaz", role: "Marketing, EarthAngels Finland" },
  {
    name: "Mari Lahti",
    role: "City of Turku and Turku University of Applied Sciences",
  },
  { name: "Momma Aria Arai", role: "President, EarthAngels Finland" },
];

export default function BoardMeetingPost() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Community Update · June 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2
              className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Powerful Meeting with the{" "}
              <span className="text-[#C9A84C]">City of Turku</span>
            </h2>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              The EarthAngels of Finland Ry board had a very successful meeting
              with Hon. Mari Lahti from the City of Turku and Turku University
              of Applied Sciences.
            </p>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              During this meeting, we discussed mental health, women's health
              and empowerment, cultural integration, and support for the
              elderly. We shared EarthAngels' motivations and our upcoming
              events, including the HER SPACE Retreat this September.
            </p>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
              This is the start of a beautiful connection that will include
              multiple, action-oriented voices. Thank you, Mari!
            </p>

            <a
              href="/events"
              className="inline-flex items-center justify-center gap-3 bg-[#0B1D13] hover:bg-[#C9A84C] text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              See Our Upcoming Events
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={meetingImage}
                alt="EarthAngels board meeting with Hon. Mari Lahti from the City of Turku"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <h3
                className="text-[#C9A84C] text-xl md:text-2xl font-semibold mb-5"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Left to Right
              </h3>
              <ul className="flex flex-col gap-4">
                {people.map((p) => (
                  <li key={p.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0 mt-2.5" />
                    <div>
                      <p className="text-white font-semibold text-base md:text-lg">
                        {p.name}
                      </p>
                      <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                        {p.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
