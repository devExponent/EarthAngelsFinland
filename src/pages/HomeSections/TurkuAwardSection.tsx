export default function TurkuAwardSection() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-white" />
          <span className=" text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            City of Turku · 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-6">
              Multicultural &<span className="">Anti-Racist Act Award</span>{" "}
              2026
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              The City of Turku annually recognises an individual, community, or
              organisation that has made a meaningful contribution to
              multiculturalism and equality in Turku.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
              The 2026 award focuses on
              <strong className="text-white">genuine human encounters</strong>
              everyday interactions that bring together people from different
              backgrounds, building inclusion, trust, and mutual understanding
              between immigrants and the local population.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://link.webropolsurveys.com/Participation/Public/2795979a-45a9-4354-b863-eecf22a29bc7?displayId=Fin3634275&surveyLocale=fi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Submit a Nomination
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.turku.fi/kotoutumispalvelut/vuoden-2026-monikulttuurinen-ja-antirasistinen-teko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#C9A84C]  hover:bg-[#C9A84C] hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">⏳</span>
                <p className=" font-semibold text-lg md:text-xl">
                  Nominations Close April 30, 2026
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                Nominations are open right now until April 30th. Don't miss the
                chance to recognise someone doing extraordinary work in Turku.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">🏅</span>
                <p className="text-white font-semibold text-base md:text-lg mb-2">
                  Who Can Be Nominated
                </p>
                <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                  Individuals, communities, organisations, or specific acts that
                  meet the award criteria.
                </p>
              </div>

              <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">🤝</span>
                <p className="text-white font-semibold text-base md:text-lg mb-2">
                  What It Celebrates
                </p>
                <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                  Acts that build bridges between immigrants and native Finns
                  through trust, inclusion, and everyday connection.
                </p>
              </div>

              <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">📋</span>
                <p className="text-white font-semibold text-base md:text-lg mb-2">
                  How to Nominate
                </p>
                <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                  Fill out the Webropol form on the City of Turku website.
                  Anyone can submit a nomination.
                </p>
              </div>

              <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">🎖️</span>
                <p className="text-white font-semibold text-base md:text-lg mb-2">
                  Award Ceremony
                </p>
                <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
                  The winner is announced in autumn 2026 as part of the
                  Celebration of Finnish Citizenship and Independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
