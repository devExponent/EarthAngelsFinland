export default function ChrodaWeekHighlight() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Community Action · HEED Finland
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2
              className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Volunteers Needed for{" "}
              <span className="text-[#C9A84C]">CHRODA Week 2026</span>
            </h2>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              CHRODA Week is a community-driven initiative focused on the
              prevention of chronic diseases. This September, HEED Finland is
              calling on volunteers to help make it happen and you can be part
              of it.
            </p>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
              All activities will take place in and around{" "}
              <strong className="text-[#0B1D13]">Malmi Talo, Helsinki</strong>{" "}
              from{" "}
              <strong className="text-[#0B1D13]">7–12 September 2026</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.facebook.com/100031265149941/posts/1646474209738068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0B1D13] hover:bg-[#C9A84C] text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                See Full Post
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="mailto:chrodaweek@heedfinland.fi"
                className="inline-flex items-center justify-center gap-3 border border-[#0B1D13] text-[#0B1D13] hover:bg-[#0B1D13] hover:text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Contact HEED Finland
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <h3
                className="text-[#C9A84C] text-2xl md:text-3xl font-semibold mb-5"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                How You Can Help
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Marketing",
                  "Communications",
                  "Photography & Media",
                  "Administrative Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <span className="text-[#8BAF96] text-lg md:text-xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">📅</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  When
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  7–12 September 2026
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">📍</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Where
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  Malmi Talo & surroundings, Helsinki
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">✉️</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Email
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed break-all">
                  chrodaweek@heedfinland.fi
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-2xl md:text-3xl block mb-3">📞</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Phone
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  0404108319
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
