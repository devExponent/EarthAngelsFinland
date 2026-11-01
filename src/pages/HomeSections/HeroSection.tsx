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
    <section className="relative h-[70vh] min-h-[460px] overflow-hidden bg-white">
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

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/70 via-white/50 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center md:pb-14">
        <h1 className="text-5xl font-extrabold leading-tight text-blue-700 sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </h1>

        <p className="mt-4 max-w-4xl text-balance text-lg font-bold leading-relaxed text-black sm:text-2xl md:text-3xl">
          {t("home.hero.subtitle")}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <NavLink
            to="/events"
            className="rounded-full bg-blue-700 px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-blue-800 sm:text-lg"
          >
            {t("home.hero.ctaEvents")}
          </NavLink>

          <NavLink
            to="/about"
            className="rounded-full border-2 border-blue-700 bg-white px-10 py-4 text-base font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:text-lg"
          >
            {t("home.hero.ctaLearnMore")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
