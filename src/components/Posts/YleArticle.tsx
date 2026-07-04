export default function YleArticleHighlight() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            In The Conversation · Yle News
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2
              className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              "Not Finnish Enough" —{" "}
              <span className="text-[#C9A84C]">Who Gets to Belong?</span>
            </h2>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              Finland now has over 100,000 second-generation Finns — yet many
              mixed-background individuals still face the quiet question: are
              you Finnish enough? A new Yle podcast episode explores language,
              identity, and what belonging really means in a changing Finland.
            </p>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
              Filmmaker Zimema Mhone, creator of{" "}
              <em>Finland in Colour: What Makes a Finn a Finn?</em>, reflects on
              representation and the lived experiences of multicultural Finns.
              Experts from Familia NGO also weigh in on discrimination,
              inclusion, and what Finnish society still needs to do.
            </p>

            <a
              href="https://yle.fi/a/74-20225014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0B1D13] hover:bg-[#C9A84C] text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              Listen & Read on Yle
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <span className="text-3xl block mb-4">🎙️</span>
              <h3
                className="text-[#C9A84C] text-xl md:text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                All Points North Podcast · Yle
              </h3>
              <p className="text-[#8BAF96] text-base md:text-lg leading-relaxed">
                Available on Yle Areena, Apple Podcasts, and Spotify. A candid
                conversation about what it means to grow up Finnish — when not
                everyone sees you that way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">🌍</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-2">
                  661,000+
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  People with foreign backgrounds permanently residing in
                  Finland
                </p>
              </div>

              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">👶</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-2">
                  100,000+
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  Second-generation Finns — a milestone reached for the first
                  time in 2026
                </p>
              </div>

              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6 sm:col-span-2">
                <span className="text-2xl md:text-3xl block mb-3">💬</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-2">
                  Why This Matters to EarthAngels
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  This is exactly the conversation EarthAngels exists to
                  support. Belonging isn't given — it's built, together, one
                  connection at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
