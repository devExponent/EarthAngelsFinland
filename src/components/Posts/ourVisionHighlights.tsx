export default function OurvisionHighlight() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="block h-[2px] w-5 bg-white" />
          <span className=" text-xs tracking-[0.2em] uppercase font-semibold">
            In The Press
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="flex-1">
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              "Ourvision Song Contest" —{" "}
              <span className="">Voicing Immigrant Talent</span> in Finland
            </h2>

            <p className=" text-base md:text-lg lg:text-xl leading-relaxed mb-10">
              A Helsinki-based song contest giving immigrants and those with
              immigrant roots a stage to perform — representing cultures from
              Africa, Asia, the Middle East, and beyond. Over 8,000 people
              attended the first edition, with a sold-out final at the Savoy
              Theatre.
            </p>

            <a
              href="https://yle.fi/a/3-5805164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#C9A84C]  hover:bg-[#C9A84C] hover:text-[#0B1D13] text-sm md:text-base font-semibold px-7 py-3 rounded-full transition-all duration-300 group"
            >
              Read Full Story on Yle
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex-shrink-0 w-full md:w-48 lg:w-56 flex flex-col items-start md:items-center gap-6 md:pt-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
              <span className="text-3xl md:text-4xl">🎤</span>
            </div>
            <div className="border-t border-[#1E4A2B] pt-6 w-full">
              <p className="text-[#5A8A6A] text-xs uppercase tracking-widest mb-1">
                Source
              </p>
              <p className="text-white text-sm font-semibold">Yle News</p>
              <p className="text-[#5A8A6A] text-xs mt-1">Published 2007</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
