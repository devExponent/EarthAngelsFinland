const highlights = [
  {
    icon: "🎵",
    month: "July",
    event: "Ruisrock",
    body: "Finland's second-oldest rock festival on Ruissalo Island, three days of music across five stages with a Baltic sea breeze.",
  },
  {
    icon: "⛵",
    month: "July",
    event: "Tall Ships Races",
    body: "Historic square-riggers line the River Aura quays for one of the most spectacular free events in the city.",
  },
  {
    icon: "🏰",
    month: "June",
    event: "Medieval Turku Days",
    body: "Turku Castle comes alive with chainmail, falconry, mead, and craftsmen forging coins on cobblestone streets.",
  },
  {
    icon: "🐟",
    month: "September",
    event: "Herring Market",
    body: "A beloved autumn tradition on the Aura riverside, with smoked fish, pickled fillets, and cheesemongers from across Finland.",
  },
  {
    icon: "🎄",
    month: "December",
    event: "Turku Christmas Market",
    body: "Wooden huts, almond potatoes, carousel rides, and glögi steam in the Old Great Square.",
  },
  {
    icon: "🎆",
    month: "December",
    event: "New Year's Eve Riverfire",
    body: "Synchronized fireworks launched from the river reflect off the ice, with the whole city gathered on both banks.",
  },
];

export default function TurkuEventsHighlight() {
  return (
    <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Explore Turku · Community Resource
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-12">
          <div>
            <h2
              className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Things to Do in{" "}
              <span className="text-[#C9A84C]">Turku Year-Round</span>
            </h2>

            <p className="text-[#8BAF96] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              Turku has something happening every single month. From medieval
              festivals and rock concerts to Christmas markets and New Year
              fireworks over the Aura River, the city's calendar is packed with
              experiences for everyone.
            </p>

            <p className="text-[#8BAF96] text-lg md:text-xl leading-relaxed mb-10">
              Whether you are newly arrived in Finland or have been here for
              years, getting out and joining local events is one of the best
              ways to feel at home and connect with people around you.
            </p>

            <a
              href="https://thingstodointurku.com/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              See All Turku Events
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8">
            <h3
              className="text-[#C9A84C] text-xl md:text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Good to Know
            </h3>
            <p className="text-[#5A8A6A] text-sm md:text-base mb-6 leading-relaxed">
              Practical tips to help you make the most of events in Turku.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: "🏨",
                  tip: "Book accommodation early during July and August festival peaks as hotels sell out months in advance.",
                },
                {
                  icon: "🧥",
                  tip: "Pack layers even in summer. Turku weather can swing from cool drizzle to warm sunshine in hours.",
                },
                {
                  icon: "🚶",
                  tip: "Most riverfront events are walkable from the city centre. Use the Föli ferry for Ruissalo Island.",
                },
                {
                  icon: "💧",
                  tip: "Carry a refillable water bottle. City taps dispense clean cold water and reduce festival plastic waste.",
                },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-[#8BAF96] text-sm md:text-base leading-relaxed">
                    {item.tip}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {highlights.map((h) => (
            <div
              key={h.event}
              className="bg-[#0F2419] border border-[#1E4A2B] hover:border-[#C9A84C]/50 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{h.icon}</span>
                <span className="text-[#5A8A6A] text-xs uppercase tracking-widest font-semibold">
                  {h.month}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                {h.event}
              </h3>
              <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                {h.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://thingstodointurku.com/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            View the Full Events Calendar
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
