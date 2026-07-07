import { NavLink } from "react-router-dom";
import Momma from "../../assets/MommaAria.jpeg";
import Partner1 from "../../assets/Partner1.jpeg";
import Partner2 from "../../assets/Partner2.jpeg";
import Partner3 from "../../assets/Partner3.jpeg";
import Partner4 from "../../assets/Partner 4.png";
import Partner5 from "../../assets/Partner 5.png";
import Partner6 from "../../assets/Partner 6.png";
import Partner7 from "../../assets/Partner 7.png";
import Partner8 from "../../assets/Partner 8.png";

import Logo from "../../assets/Logo.png";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-25 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${Momma})` }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 w-12/12 flex flex-col items-center mx-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center gap-4">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left gap-2 order-2 md:order-1">
            <div className="text-black/70 font-bold">
              <p className="text-xl md:text-6xl">Taiteen Talo, Nunnankatu 4</p>
              <p className="text-2xl md:text-5xl">
                <br></br>Turku, Finland.
                <br></br>20700
              </p>
            </div>
            <a
              href="mailto:info@sayitloudfinland.org"
              className="text-black/70 font-bold text-3xl md:text-4xl hover:underline underline-offset-4"
            >
              info@sayitloudfinland.org
            </a>
          </div>

          <img
            src={Momma}
            alt="Momma Aria"
            className="md:col-span-3 w-full max-w-[1100px] mx-auto h-auto rounded-2xl order-1 md:order-2"
          />

          <div className="md:col-span-1 flex flex-col items-center md:items-end gap-6 order-3">
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
              <img
                src={Logo}
                alt="Earth Angels of Finland"
                className="h-52 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner1}
                alt="Mboa Market"
                className="h-52 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner2}
                alt="Say It Loud"
                className="h-52 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner7}
                alt="Partner 7"
                className="h-52 w-auto object-contain transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col my-5 justify-center text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-blue-600 sm:text-6xl md:text-7xl">
            {t("home.hero.title")}
          </h1>

          <p className="mt-5 text-lg font-extrabold leading-relaxed text-blue-400 sm:text-2xl">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <NavLink
              to="/events"
              className="rounded-full bg-[blue] px-6 py-3 text-sm font-bold text-white transition hover:bg-black/90"
            >
              {t("home.hero.ctaEvents")}
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-full border-2 border-blue-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-black/5"
            >
              {t("home.hero.ctaLearnMore")}
            </NavLink>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-2xl md:text-3xl uppercase tracking-[0.2em] font-black text-blue-600">
              Collaborative Partners
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="h-24 w-24 rounded-xl flex items-center justify-center p-2">
                <img
                  src={Partner3}
                  alt="Old Folks Matter"
                  className="h-full w-auto object-contain transition duration-300"
                />
              </div>
              <img
                src={Partner4}
                alt="Taiteen Talo"
                className="h-16 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner5}
                alt="Omono's Fashion Concepts"
                className="h-28 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner6}
                alt="Partner 6"
                className="h-24 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner8}
                alt="Partner 8"
                className="h-24 w-auto object-contain transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
