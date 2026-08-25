import { useRef, useState } from "react";
import rapuPromoVideo from "../../assets/rapuPromoVideo.mp4";
import rapuExtravaganzaFlyer from "../../assets/RapuExtravaganza.png";

export default function RapuVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#0B1D13] flex flex-col items-center gap-8">

      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center">
        Rapu Party Extravaganza!
      </h1>
      <p className="text-[#C9A84C] text-lg md:text-2xl font-semibold text-center">
        26 September 2026 · Taiteen Talo, Basement Factory Auditorium, Turku
      </p>

      <div className="relative w-full max-w-xl md:max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={rapuExtravaganzaFlyer}
          alt="Rapu Extravaganza flyer"
          className={`w-full h-auto object-cover transition-opacity duration-500 ${
            playing ? "opacity-0 absolute inset-0" : "opacity-100"
          }`}
        />

        {!playing && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        )}

        <video
          ref={videoRef}
          src={rapuPromoVideo}
          onPause={handlePause}
          onEnded={handlePause}
          playsInline
          controls={playing}
          className={`w-full h-auto transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />

        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-4 border-white flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 fill-white ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      <a
        href="https://www.eventbrite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
      >
        Book Now — Early Bird €10 →
      </a>

    </section>
  );
}