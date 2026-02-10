import { NavLink } from "react-router-dom";
import Event from "../../assets/EventBG.jpeg";
import Momma from "../../assets/MommaAria.jpeg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${Event})` }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 w-10/12 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-blue-600 sm:text-6xl md:text-7xl">
            {t("home.hero.title")}
          </h1>

          <p className="mt-5 text-base font-extrabold leading-relaxed text-black/70 sm:text-lg">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <NavLink
              to="/events"
              className="rounded-full bg-black px-8 py-4 text-base font-bold text-white transition hover:bg-black/90"
            >
              {t("home.hero.ctaEvents")}
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-full border-2 border-blue-500 px-8 py-4 text-base font-bold text-black transition hover:bg-black/5"
            >
              {t("home.hero.ctaLearnMore")}
            </NavLink>
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 flex justify-center md:justify-end items-center">
          <img
            src={Momma}
            alt="Momma Aria"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
