import { useRef, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import introVideo from "../../assets/Herovideo.mp4";

export default function IntroVideoCard() {
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
            src={introVideo}
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
