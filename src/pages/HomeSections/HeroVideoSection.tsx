import { useRef, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

import HeroVideo from "../../assets/Herovideo.mp4";

export function IntroVideoCard() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-[#faf7f0] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          {!playing && (
            <img
              src="https://img.youtube.com/vi/40C7XIFn86o/maxresdefault.jpg"
              alt="Video thumbnail"
              className="md:h-180 h-100 w-full object-cover transition duration-300 blur-[2px] scale-[1.01]"
            />
          )}

          {playing && (
            <iframe
              src="https://www.youtube.com/embed/40C7XIFn86o?autoplay=1&mute=1"
              title="Intro video"
              className="md:h-180 h-100 w-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}

          {!playing && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white transition">
                <PlayIcon className="ml-0.5 h-8 w-8 text-black" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="bg-[#faf7f0] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-black shadow-lg">
          <video
            ref={videoRef}
            src={HeroVideo}
            className={[
              "h-full w-full object-cover transition duration-300",
              playing ? "blur-none" : "blur-[2px] scale-[1.01]",
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
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white transition">
                <PlayIcon className="ml-0.5 h-8 w-8 text-black" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
