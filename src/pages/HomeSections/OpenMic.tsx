import { useRef, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

import Nemaro from "../../assets/second.png";
import Annak from "../../assets/first.png";
import Jose from "../../assets/AudienceFav.png";
import ItsGirls from "../../assets/third.png";
import GroupEventPic from "../../assets/OpenMic.jpeg";
import OpenMicVid from "../../assets/OpenMicVid.mp4";
import EarthAngelTeam from "../../assets/EarthAngelTeam.jpeg";

type Winner = {
  image: string;
  accent: string;
  textAccent: string;
};

const WINNERS: Winner[] = [
  {
    image: Annak,
    accent: "bg-amber-400",
    textAccent: "text-amber-500",
  },
  {
    image: Nemaro,
    accent: "bg-slate-300",
    textAccent: "text-slate-500",
  },
  {
    image: ItsGirls,
    accent: "bg-orange-700",
    textAccent: "text-orange-700",
  },
  {
    image: Jose,
    accent: "bg-emerald-500",
    textAccent: "text-emerald-600",
  },
];

const OpenMic = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#0d1a12] my-15">
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh]">
        <img
          src={GroupEventPic}
          alt="International Open Mic Youth Night"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0d1a12]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-amber-400 mb-3">
            27 February 2026 · Vimma Youth House, Turku
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-4">
            International Open Mic{" "}
            <span className="text-amber-400">Youth Night</span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg font-medium max-w-md px-2">
            An electrifying evening of talent, culture, and community
            celebrating young artists from across the world.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center mb-10">
          <p className="text-[0.6rem] font-extrabold tracking-[0.25em] uppercase text-amber-400 mb-3">
            Competition Results
          </p>
          <h3 className="font-serif text-2xl md:text-4xl font-black text-white">
            Meet the Winners
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-5">
          {WINNERS.map((winner) => (
            <div
              key={winner.image}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full overflow-hidden rounded-xl mb-3">
                <img
                  src={winner.image}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="text-center mb-6">
          <p className="text-[0.6rem] font-extrabold tracking-[0.25em] uppercase text-amber-400 mb-2">
            Relive the Night
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-black text-white">
            Watch the Highlights
          </h3>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={OpenMicVid}
            className={[
              "w-full block transition duration-300",
              playing ? "blur-none" : "blur-sm scale-[1.02]",
            ].join(" ")}
            controls={playing}
            muted
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-amber-400 shadow-xl hover:bg-amber-300 transition">
                <PlayIcon className="ml-1 h-7 w-7 md:h-9 md:w-9 text-[#0d1a12]" />
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-6">
          <p className="text-[0.6rem] font-extrabold tracking-[0.25em] uppercase text-amber-400 mb-2">
            Behind the Night
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-black text-white">
            The Earth Angels Team
          </h3>
        </div>

        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={EarthAngelTeam}
            alt="Earth Angels Team"
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-1000"
          />
        </div>
      </div>

      <div className="w-full bg-amber-400 py-5 px-4 text-center">
        <p className="text-[0.6rem] sm:text-[0.7rem] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#0d1a12]">
          Earth Angels of Finland · Open Mic Youth Night · 27 Feb 2026 · Turku
        </p>
      </div>
    </section>
  );
};

export default OpenMic;
