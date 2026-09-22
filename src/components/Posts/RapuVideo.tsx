import { useRef, useState } from "react";
import rapuPromoVideo from "../../assets/rapuPromoVideo.mp4";
import rapuExtravaganzaFlyer from "../../assets/RapuExtravaganza.png";
import herSpaceVideo from "../../assets/Combined HerSpace Video.mp4";
import herSpaceImage from "../../assets/HerSpace.png";

export default function RapuVideoHero() {
  const rapuRef = useRef<HTMLVideoElement>(null);
  const herSpaceRef = useRef<HTMLVideoElement>(null);
  const [rapuPlaying, setRapuPlaying] = useState(false);
  const [herSpacePlaying, setHerSpacePlaying] = useState(false);

  const handleRapuPlay = () => {
    if (rapuRef.current) {
      if (herSpaceRef.current && !herSpaceRef.current.paused) {
        herSpaceRef.current.pause();
      }
      rapuRef.current.play();
      setRapuPlaying(true);
    }
  };

  const handleHerSpacePlay = () => {
    if (herSpaceRef.current) {
      if (rapuRef.current && !rapuRef.current.paused) {
        rapuRef.current.pause();
      }
      herSpaceRef.current.play();
      setHerSpacePlaying(true);
    }
  };

  return (
    <section className="w-full py-14 px-4 bg-[#87CEEB] flex flex-col items-center gap-8">

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-64 items-start">

        <div className="flex flex-col gap-5">
          <h2 className="text-[#0B2B45] text-4xl md:text-5xl font-extrabold">
            Rapu Party Extravaganza!
          </h2>
          <p className="text-black text-xl md:text-2xl font-semibold">
            26 September 2026 · Taiteen Talo, Basement Factory Auditorium, Turku
          </p>
          <p className="text-black text-lg md:text-xl leading-relaxed">
            Good food. Good vibes. Good people. An epic crayfish party with
            karaoke, cultural attire, and 50 guests for one unforgettable night.
          </p>

          <div className="flex items-center gap-3">
            
            
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={rapuExtravaganzaFlyer}
              alt="Rapu Extravaganza flyer"
              className="w-full h-auto invisible"
              aria-hidden="true"
            />
            <img
              src={rapuExtravaganzaFlyer}
              alt="Rapu Extravaganza flyer"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                rapuPlaying ? "opacity-0" : "opacity-100"
              }`}
            />
            <video
              ref={rapuRef}
              src={rapuPromoVideo}
              onPause={() => setRapuPlaying(false)}
              onEnded={() => setRapuPlaying(false)}
              playsInline
              controls={rapuPlaying}
              className={`absolute inset-0 w-full h-full object-contain bg-[#0B2B45] transition-opacity duration-500 ${
                rapuPlaying ? "opacity-100" : "opacity-0"
              }`}
            />
            {!rapuPlaying && (
              <button
                onClick={handleRapuPlay}
                aria-label="Play Rapu video"
                className="absolute inset-0 z-10 flex items-center justify-center group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-4 border-white flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 fill-white" viewBox="0 0 24 24" style={{ marginLeft: '3px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          <span className="inline-flex items-center justify-center gap-3 bg-[#0B2B45] text-white text-lg md:text-xl font-extrabold px-7 py-4 rounded-full text-center">
            Online booking is now closed. Tickets available at the gate.
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[#0B2B45] text-4xl md:text-5xl font-extrabold">
            Her Space Retreat 2026
          </h2>
          <p className="text-black text-xl md:text-2xl font-semibold">
            26 September 2026 · Taiteen Talo, Nunnankatu 4, Turku · 10:00 AM to 17:00 PM
          </p>
          <p className="text-black text-lg md:text-xl leading-relaxed">
            A full-day seminar on Women's Health on a Holistic Basis, bringing
            together researchers, nurses, therapists, and lived-experience voices
            for a day of learning, healing, and connection.
          </p>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#0B4F6C] animate-pulse" />
            <span className="text-black text-lg md:text-xl font-semibold uppercase tracking-wide">
              Watch this video to meet the speakers
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={herSpaceImage}
              alt=""
              className="w-full h-auto invisible"
              aria-hidden="true"
            />
            <img
              src={herSpaceImage}
              alt="Her Space Retreat"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                herSpacePlaying ? "opacity-0" : "opacity-100"
              }`}
            />
            <video
              ref={herSpaceRef}
              src={herSpaceVideo}
              onPause={() => setHerSpacePlaying(false)}
              onEnded={() => setHerSpacePlaying(false)}
              playsInline
              controls={herSpacePlaying}
              className={`absolute inset-0 w-full h-full object-contain bg-[#0B2B45] transition-opacity duration-500 ${
                herSpacePlaying ? "opacity-100" : "opacity-0"
              }`}
            />
            {!herSpacePlaying && (
              <button
                onClick={handleHerSpacePlay}
                aria-label="Play Her Space video"
                className="absolute inset-0 z-10 flex items-center justify-center group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-4 border-white flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 fill-white" viewBox="0 0 24 24" style={{ marginLeft: '3px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}