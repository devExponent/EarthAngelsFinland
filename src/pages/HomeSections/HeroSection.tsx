import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Momma from "../../assets/MommaAria.jpeg";
import MeetingImage from "../../assets/EarthAngelTeam.jpeg";
import OpenMicImg from "../../assets/OpenMic.jpeg";
import TeamatHealthWealth from "../../assets/TeamatHealthWeath.jpeg";

const SLIDES = [
  { src: Momma, fit: "object-cover object-right md:object-center" },
  { src: MeetingImage, fit: "object-cover object-[center_30%]" },
  { src: OpenMicImg, fit: "object-cover object-center" },
  { src: TeamatHealthWealth, fit: "object-cover object-center" },
];
const SLIDE_INTERVAL_MS = 5000;

export default function HeroSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden bg-white md:h-[70vh] md:min-h-[460px]">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full ${slide.fit} transition-opacity duration-1000 motion-reduce:transition-none ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white via-white/90 to-transparent md:h-2/5 md:from-white/70 md:via-white/50" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-5 pb-8 text-center md:pb-14">
        <h1 className="text-3xl font-extrabold leading-tight text-blue-700 sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </h1>

        <p className="mt-3 max-w-4xl text-balance text-sm font-semibold leading-relaxed text-blue-950 sm:text-2xl md:mt-4 md:text-3xl md:font-bold md:text-black">
          {t("home.hero.subtitle")}
        </p>

        <div className="mt-5 flex w-full max-w-xs flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <NavLink
            to="/events"
            className="rounded-full bg-blue-700 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-800 sm:px-10 sm:py-4 sm:text-lg"
          >
            {t("home.hero.ctaEvents")}
          </NavLink>

          <NavLink
            to="/about"
            className="rounded-full border-2 border-blue-700 bg-white px-8 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:px-10 sm:py-4 sm:text-lg"
          >
            {t("home.hero.ctaLearnMore")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
