import herSpaceImage from "../../assets/HerSpace.png";

const speakers = [
  {
    name: "Emma Tamankang",
    role: "Senior Nurse Lecturer, Laurea UAS, Project Expert, HEED Finland, Doctoral Researcher, Helsinki University",
  },
  {
    name: "Deeana Lehtinen",
    role: "Life Design Expert — Introduction / Welcome Speech",
  },
  {
    name: "Momma Aria Arai",
    role: "President / Founder of Earth Angels Finland Ry. Producer of Her Space Retreat",
  },
  {
    name: "Elizabeth Eta Ph.D",
    role: "Postdoctoral Researcher, Tampere University — Talk: 'Don't Guess, Get Checked.'",
  },
  {
    name: "Selene Gama",
    role: "Holistic Therapist Specializing in Women's Well Being, Mental Health Facilitator, Myth or Fact? Movement Game",
  },
  {
    name: "Zainab Shahbaz",
    role: "Postgraduate Researcher, Åbo Akademi University — Lived Experiences as a Taboo?",
  },
  {
    name: "Floriane Kamto",
    role: "Surgical Nurse — Lived Experiences",
  },
  {
    name: "Heidi Layne Ph.D",
    role: "The Modern Balancing Act: Family, Identity & Ambition",
  },
];

export default function HerSpaceRetreat() {
  return (
    <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Save the Date · Upcoming Event
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2
              className="text-white text-5xl md:text-6xl lg:text-7xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Her Space <span className="text-[#C9A84C]">Retreat 2026</span>
            </h2>

            <p className="text-[#8BAF96] text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10">
              A full-day seminar on Women's Health on a Holistic Basis —
              bringing together researchers, nurses, therapists, and
              lived-experience voices for a day of learning, healing, and
              connection.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "📅",
                  label: "Date",
                  value: "Saturday, 26 September 2026",
                },
                { icon: "🕙", label: "Time", value: "10:00 AM – 17:00 PM" },
                {
                  icon: "📍",
                  label: "Venue",
                  value: "Taiteen Talo, Nunnankatu 4, 20700 Turku",
                },
                {
                  icon: "✉️",
                  label: "Contact",
                  value: "info@earthangelsfinland.com",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#5A8A6A] text-sm md:text-base uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white text-lg md:text-xl lg:text-2xl">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={herSpaceImage}
              alt="Her Space Retreat 2026 Save the Date poster"
              className="w-full rounded-2xl object-cover shadow-lg"
            />

            <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8">
              <h3
                className="text-[#C9A84C] text-2xl md:text-3xl font-semibold mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Speakers
              </h3>
              <ul className="flex flex-col gap-5">
                {speakers.map((s) => (
                  <li key={s.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0 mt-2.5" />
                    <div>
                      <p className="text-white font-semibold text-lg md:text-xl">
                        {s.name}
                      </p>
                      <p className="text-[#5A8A6A] text-base md:text-lg leading-relaxed">
                        {s.role}
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
