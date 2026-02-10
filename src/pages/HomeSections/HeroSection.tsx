import { NavLink } from "react-router-dom";

import Momma from "../../assets/EventBG.jpeg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-black"
      style={{ backgroundImage: `url(${Momma})` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-white/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-blue-600">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-black/70 sm:text-lg font-extrabold">
          {t("home.hero.subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <NavLink
            to="/events"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-bold text-white transition hover:bg-black/90"
          >
            {t("home.hero.ctaEvents")}
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-8 py-4 text-base font-bold text-black transition hover:bg-black/5"
          >
            {t("home.hero.ctaLearnMore")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
