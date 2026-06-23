import soundsOfSouthFlyer1 from "../../assets/SoundsOfSouth1.jpeg";
import soundsOfSouthFlyer2 from "../../assets/SoundsOfSouth2.jpeg";

export default function SoundsOfSouthFestival() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5" />
          <span className="text-black font-extrabold md:text-lg tracking-[0.2em] uppercase">
            Turku Cultural Carnival 2026
          </span>
        </div>

        <h2
          className="text-[#0097D0] text-5xl md:text-6xl lg:text-7xl leading-tight mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          <span className="text-[#2E7D32]">Sounds</span> of{" "}
          <span className="text-[#C62828]">South</span>
        </h2>
        <p className="text-2xl md:text-3xl font-semibold tracking-wide mb-8">
          Afro · Latino · Caribbean · Culture
        </p>

        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
          EarthAngels is proud to be part of the Cultural Street Parade at the
          Turku Cultural Carnival 2026, a vibrant celebration of African,
          Latino, and Caribbean heritage through music, dance, and fashion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={soundsOfSouthFlyer1}
              alt="Sounds of South Festival Cultural Street Parade open call flyer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={soundsOfSouthFlyer2}
              alt="Sounds of South Festival Cultural Street Parade programme details"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E2DDD5] rounded-2xl p-6 md:p-10 mb-10">
          <h3
            className="text-[#0B1D13] text-2xl md:text-3xl font-semibold mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Cultural Street Parade Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">
                  Date & Time
                </p>
                <p className="text-[#0B1D13] text-base md:text-lg">
                  10 July 2026, 15:00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">
                  Starting Point
                </p>
                <p className="text-[#0B1D13] text-base md:text-lg">
                  Turku Market Square
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <span className="text-2xl">🚶</span>
            <div>
              <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">
                Parade Route
              </p>
              <p className="text-[#0B1D13] text-base md:text-lg">
                Market Square, Kauppiaskatu, Library Bridge, Läntinen Pitkäkatu,
                Nunnankatu
              </p>
            </div>
          </div>

          <div className="border-t border-[#E2DDD5] pt-6">
            <p className="text-[#0B1D13] font-semibold text-lg md:text-xl mb-4">
              Optional Competition for Registered Groups
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#F7F5F0] rounded-xl p-4 text-center">
                <span className="text-2xl block mb-1">🥇</span>
                <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  1000 €
                </p>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                  1st Place
                </p>
              </div>
              <div className="bg-[#F7F5F0] rounded-xl p-4 text-center">
                <span className="text-2xl block mb-1">🥈</span>
                <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  700 €
                </p>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                  2nd Place
                </p>
              </div>
              <div className="bg-[#F7F5F0] rounded-xl p-4 text-center">
                <span className="text-2xl block mb-1">🥉</span>
                <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  500 €
                </p>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                  3rd Place
                </p>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm md:text-base mt-4 leading-relaxed">
              Registration fee for competing groups: 100 €. Registration
              deadline: 15 June 2026.
            </p>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-6 md:p-10 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">👗</span>
            <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Fashion Show Not to Be Missed
            </h3>
          </div>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            <strong className="text-white">Omono's Fashion Concepts</strong>{" "}
            will provide one of a kind fashions, co coordinating the fashion
            show with <strong className="text-white">RemixGear</strong>, who
            will highlight innovative fashions from their extensive line.
          </p>

          <strong className="text-white">
            Our Own Momma Aria will be modelling in the show
          </strong>

          <p className="text-lg md:text-xl leading-relaxed">
            Expect bold colours, cultural pride, and creativity on full display.
            Get your ticket now, you will not want to miss this.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.soundsofsouth.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#0097D0] hover:bg-[#3AB6E8] text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            Register or Get Your Ticket
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
