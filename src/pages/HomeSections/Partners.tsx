const partners = [
  {
    name: "Taiteen talo",
    description:
      "Taiteen talo — House of Art in Turku — is a vibrant cultural hub that hosts EarthAngels events and provides a platform for multicultural expression and community building.",
    location: "Nunnegatan 4, 20700 Turku",
    url: "https://taiteentalo.fi/en/community/earthangels-of-finland/",
    icon: "🏛️",
  },
  {
    name: "Vapaa-aika Turku",
    description:
      "Turku's city leisure services partner with EarthAngels to promote inclusive community events, cultural activities, and wellbeing initiatives across the Turku region.",
    location: "Turku, Finland",
    url: "https://vapaa-aika.turku.fi/sv-FI/page/677d47d2961fdf4fd01d2272",
    icon: "🌇",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-semibold">
            Our Partners
          </span>
        </div>

        <h2
          className="text-white text-3xl md:text-4xl lg:text-5xl leading-snug mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Organisations That Walk{" "}
          <span className="text-[#C9A84C]">With Us</span>
        </h2>

        <p className="text-[#8BAF96] text-base md:text-lg mb-12 leading-relaxed w-full md:w-9/12">
          EarthAngels is proud to collaborate with organisations that share our
          vision of inclusion, culture, and community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-[#0F2419] border border-[#1E4A2B] hover:border-[#C9A84C]/50 rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-3xl">
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="text-white text-xl md:text-2xl font-semibold mb-1"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#5A8A6A] text-xs uppercase tracking-widest">
                    {p.location}
                  </p>
                </div>
              </div>

              <p className="text-[#8BAF96] text-sm md:text-base leading-relaxed flex-1">
                {p.description}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1D13] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 self-start group"
              >
                Visit Website
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
