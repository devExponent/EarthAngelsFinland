import herSpaceImage from "../../assets/HerSpace.png";
import rapuExtravaganzaFlyer from "../../assets/RapuExtravaganza.png";
import rapuPromoVideo from "../../assets/rapuPromoVideo.mp4";

export default function CommunitySpotlightSection() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] my-16 py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto flex flex-col gap-16 md:gap-24">

        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl">
          <strong>
            JOIN HER SPACE RETREAT AND GET A FREE PASS TO THE RAPU PARTY
            EXTRAVAGANZA FOR FREE
          </strong>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={herSpaceImage}
                alt="Her Space Retreat 2026 Save the Date poster"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-4">
                Her Space Retreat 2026
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-4 font-bold text-black">
                A full-day seminar on Women's Health on a Holistic Basis,
                bringing together researchers, nurses, therapists, and
                lived-experience voices for a day of learning, healing, and
                connection.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Saturday, 26 September 2026, 10:00 AM to 17:00 PM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Taiteen Talo, Nunnankatu 4, 20700 Turku
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    info@earthangelsfinland.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                src={rapuPromoVideo}
                controls
                playsInline
                poster={rapuExtravaganzaFlyer}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-4">
                Rapu Party Extravaganza!
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-4 font-bold text-black">
                Good food. Good vibes. Good people. Join us for the most epic
                crayfish party of the year. Come eat, sing, dance, and
                celebrate with 50 guests for one unforgettable night.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    26 September 2026, 19:00 to 23:30
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Taiteen Talo, Basement Factory Auditorium, Nunnankatu 4, 20700 Turku
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👗</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Dress code: Red, White, Yellow or Blue
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎤</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Karaoke Battle — prize for the audience favourite!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎟️</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Early bird €10 online (expires 23 Sep) — €15 at the gate
                  </span>
                </li>
              </ul>
              <a
                href="https://www.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Book Now — Early Bird €10
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}