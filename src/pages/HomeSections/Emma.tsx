import { useEffect, useRef, useState } from "react";

const QUOTE =
  "I want to give something back. I don't want others to make the same mistakes I made when I came to Finland.";

const stats = [
  { value: "7", label: "Languages spoken" },
  { value: "27+", label: "Years in Finland" },
  { value: "100s", label: "Lives touched weekly" },
];

const highlights = [
  {
    icon: "❤️",
    title: "Health Advocate",
    body: "Emma runs a free health advisory service for immigrants at Itäkeskus shopping centre — with queues that stretch long every single week.",
  },
  {
    icon: "🌍",
    title: "Cultural Bridge",
    body: "She counsels clients in Arabic, English, Somali, and Finnish, bringing cultural sensitivity to healthcare that the system often misses.",
  },
  {
    icon: "📰",
    title: "Nationally Recognised",
    body: "Featured on the front pages of Helsingin Sanomat in March 2026 for her extraordinary contribution to immigrant wellbeing in Finland.",
  },
];

export default function EmmaTamankagSpotlight() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0B1D13] text-white py-16 md:py-24 lg:py-32 px-4 md:px-8"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full border border-[#1E4A2B] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-[200px] h-[200px] md:w-[360px] md:h-[360px] rounded-full border border-[#2A6B3C] opacity-30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[240px] h-[240px] md:w-[480px] md:h-[480px] rounded-full border border-[#1E4A2B] opacity-20 translate-x-1/3 translate-y-1/3"
        aria-hidden
      />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />

      <div className="relative w-10/12 lg:w-8/12 mx-auto">
        <div
          className={`inline-flex items-center gap-2 mb-6 md:mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block w-5 md:w-6 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs md:text-sm lg:text-base tracking-[0.18em] uppercase font-semibold">
            Earth Angels of Finland · Spotlight
          </span>
        </div>

        <h2
          className={`font-serif text-4xl md:text-6xl lg:text-8xl leading-[1.08] mb-6 md:mb-8 w-full transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Celebrating <span className="text-[#C9A84C]">Emma Tamankag</span>
          <br />— a true Earth Angel.
        </h2>

        <p
          className={`text-white text-base md:text-xl lg:text-3xl w-full mb-10 md:mb-16 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From Cameroon to Itäkeskus — Emma turned her own struggles in Finland
          into a lifeline for hundreds of immigrants navigating health in a new
          land.
        </p>

        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-[#1E4A2B] rounded-2xl p-5 md:p-6 lg:p-8 bg-[#0F2419]"
            >
              <p
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#C9A84C] mb-2 leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {s.value}
              </p>
              <p className="text-[#5A8A6A] text-sm md:text-base uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`relative mb-10 md:mb-16 pl-5 md:pl-8 lg:pl-10 transition-all duration-700 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="absolute left-0 top-0 w-[3px] h-full bg-[#C9A84C] rounded-full" />
          <p
            className="text-xl md:text-3xl lg:text-4xl text-white/85 italic leading-relaxed"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            "{QUOTE}"
          </p>
          <p className="mt-3 md:mt-4 text-[#C9A84C] text-sm md:text-base tracking-widest uppercase">
            — Emma Tamankag
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-16 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group bg-[#0F2419] border border-[#1E4A2B] hover:border-[#C9A84C]/50 rounded-2xl p-6 md:p-8 transition-colors duration-300"
            >
              <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">
                {h.icon}
              </span>
              <h3 className="text-white font-semibold text-lg md:text-2xl mb-2 md:mb-3">
                {h.title}
              </h3>
              <p className="text-[#5A8A6A] text-sm md:text-lg leading-relaxed">
                {h.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 border-t border-[#1E4A2B] pt-8 md:pt-10 transition-all duration-700 delay-[600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
            <span className="text-2xl md:text-3xl">🌿</span>
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs md:text-base uppercase tracking-widest mb-1 md:mb-2 font-semibold">
              From Earth Angels of Finland
            </p>
            <p className="text-white/70 text-sm md:text-xl leading-relaxed w-full">
              Emma, your courage, compassion, and commitment to your community
              inspire us all. Thank you for making Finland a warmer, healthier,
              and more welcoming home for so many. You are, in every sense, an
              Earth Angel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
