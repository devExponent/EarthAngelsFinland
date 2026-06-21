export default function ArtHouseNewsletter() {
  return (
    <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Partner Update · Art House Turku
          </span>
        </div>

        <h2
          className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          What's Happening at{" "}
          <span className="text-[#C9A84C]">Art House Turku</span>
        </h2>

        <p className="text-[#8BAF96] text-lg md:text-xl lg:text-2xl leading-relaxed mb-12">
          EarthAngels has an office at Taiteen Talo, Art House Turku, and we
          like to keep our community in the loop. Here is a quick summary of
          this week's newsletter from the building team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8">
            <span className="text-3xl block mb-4">🏖️</span>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
              Summer Holiday Hours
            </h3>
            <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
              The Art House office team will be on holiday in turns over the
              summer. Jere is away from 22 to 26 June and again from 14 to 30
              July. Ansku is away from 29 June to 12 July, and Julle from 27
              July to 11 August.
            </p>
          </div>

          <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8">
            <span className="text-3xl block mb-4">🚊</span>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
              Cathedral Bridge Tram Project
            </h3>
            <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
              The Turku Tramway Alliance invites local entrepreneurs to an
              information event on 16 September from 9 to 11am, covering the
              first construction phase of the tram project around
              Tuomiokirkkosilta, Aninkaistenkatu, and Uudenmaankatu. Detailed
              information and registration will follow in August.
            </p>
          </div>

          <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8">
            <span className="text-3xl block mb-4">🎭</span>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
              Brinkkala Courtyard Events
            </h3>
            <p className="text-[#5A8A6A] text-sm md:text-base leading-relaxed">
              Comedy Factory rehearsals and Turku Youth Theatre's Pessi and
              Illusia screenings run Monday to Wednesday next week, followed by
              the Medieval Turku event from Thursday through Sunday.
            </p>
          </div>
        </div>

        <div className="bg-[#0F2419] border border-[#1E4A2B] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <span className="text-3xl flex-shrink-0">✉️</span>
          <p className="text-[#8BAF96] text-base md:text-lg leading-relaxed">
            For more on the Cathedral Bridge project, you can reach out to{" "}
            <a
              href="mailto:laura.klefbohm@turunraitiotie.fi"
              className="text-[#C9A84C] underline underline-offset-2 hover:text-white transition-colors"
            >
              laura.klefbohm@turunraitiotie.fi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
