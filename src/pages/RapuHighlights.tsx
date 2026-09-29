import { useCallback, useEffect, useState } from "react";
import Rapu1 from "../assets/Rapu1.jpg";
import Rapu2 from "../assets/Rapu2.jpg";
import Rapu3 from "../assets/Rapu3.jpg";
import Rapu4 from "../assets/Rapu4.jpg";
import Rapu5 from "../assets/Rapu5.jpg";
import Rapu6 from "../assets/Rapu6.jpg";
import Rapu7 from "../assets/Rapu7.jpg";
// import Rapu8 from "../assets/Rapu8.jpg";
import Rapu9 from "../assets/Rapu9.jpg";
import Rapu10 from "../assets/Rapu10.jpg";
import Rapu11 from "../assets/Rapu11.jpg";
import Rapu12 from "../assets/Rapu12.jpg";
// import rapuHighlightVideo from "../assets/RapuHighlight.mp4";

const photos = [
  Rapu1, Rapu2, Rapu3, Rapu4, Rapu5, Rapu6,
  Rapu7, Rapu9, Rapu10, Rapu11, Rapu12,
];

const RapuHighlights = () => {
  // null = lightbox closed, otherwise the index of the open photo
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((o) => (o === null ? o : (o + 1) % photos.length)),
    []
  );
  const prev = useCallback(
    () => setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length)),
    []
  );

  // Keyboard controls + stop the page scrolling behind the lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  return (
    <section className="w-full bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Intro */}
        <div className="max-w-6xl mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-[#0B2A4A] text-4xl md:text-6xl font-extrabold">
            Rapu Party Extravaganza: The Highlights
          </h1>
          <p className="text-[#0B2A4A] text-xl md:text-3xl font-semibold">
            26 September 2026 · Taiteen Talo, Basement Factory Auditorium, Turku
          </p>
          <p className="text-[#0B2A4A] text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            The Basement Factory Auditorium came alive on the night of Rapu
            Party Extravaganza. Guests arrived in their finest, the music kept
            the floor full from start to finish, and the energy in the room
            never dropped. Here are some of the moments from the night. Tap
            any photo to see it full size.
          </p>
        </div>

        {/* Video slot: uncomment this block and the import above when the video is ready */}
        {/*
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <video
            src={rapuHighlightVideo}
            controls
            playsInline
            className="w-full max-h-[75vh] object-cover bg-black"
          />
        </div>
        */}

        {/* Photo grid: every photo the same size, in even rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              aria-label={`Open photo ${i + 1}`}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0B2A4A]"
            >
              <img
                src={src}
                alt={`Rapu Party Extravaganza moment ${i + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0B2A4A]/0 group-hover:bg-[#0B2A4A]/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center flex flex-col gap-3">
          <p className="text-[#0B2A4A] text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Thank you to everyone who came, danced and celebrated with us.
            Rapu Party Extravaganza was a night to remember, and we cannot wait
            to do it again.
          </p>
        </div>
      </div>

      {/* Lightbox: shows the full, uncropped photo */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0B2A4A]/95 flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <img
            src={photos[open]}
            alt={`Rapu Party Extravaganza moment ${open + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/15 text-white text-sm md:text-base font-semibold px-4 py-1 rounded-full">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default RapuHighlights;