import rapuExtravaganzaFlyer from "../../assets/RapuExtravaganza.png";
import herSpaceImage from "../../assets/HerSpace.png";

export default function CommunitySpotlightSection() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] my-16  py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto flex flex-col gap-16 md:gap-24">
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
              <h2
                className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
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
              <img
                src={rapuExtravaganzaFlyer}
                alt="Rapu Extravaganza traditional crayfish party flyer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2
                className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Rapu Extravaganza!
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-4 font-bold text-black">
                Join us for the traditional Finnish crayfish party. Come eat,
                sing, and celebrate with a full crayfish dinner, karaoke, and
                good company. Dress in your favourite cultural attire. Funny
                hats and bibs are encouraged. Only 25 spots available.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    26 September 2026, 19:00 to 24:00
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Taiteen Talo (Auditorio), Nunnankatu 4, Turku
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎟️</span>
                  <span className="text-black font-bold text-lg md:text-xl">
                    Ticket price 25.00 euros, RSVP by 15 September 2026
                  </span>
                </li>
              </ul>
              <a
                href="https://www.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Reserve on Eventbrite
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
