import { NavLink } from "react-router-dom";
import Momma from "../../assets/MommaAria.jpeg";
import Partner1 from "../../assets/Partner1.jpeg";
import Partner2 from "../../assets/Partner2.jpeg";
import Partner3 from "../../assets/Partner3.jpeg";
import Partner4 from "../../assets/Partner 4.png";
import Partner5 from "../../assets/Partner 5.jpg";
import Partner6 from "../../assets/Partner 6.jpg";
import Partner7 from "../../assets/Partner 7.jpeg";
import Partner8 from "../../assets/Partner 8.jpg";
import Partner9 from "../../assets/Partner9.jpg";
// import Logo from "../../assets/Logo.png";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-25 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${Momma})` }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 w-10/12 grid grid-cols-1 items-center">
        <div className="col-span-1 md:col-span-7 flex justify-center md:justify-end items-center">
          <img
            src={Momma}
            alt="Momma Aria"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-5 flex flex-col my-5 justify-center text-center md:text-left">
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

          <div className="mt-12 flex flex-col items-center md:items-start gap-6">
            {/* <p className="text-lg md:text-xl uppercase tracking-[0.2em] font-black text-black">
              Our Partners
            </p> */}
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <img
                src={Partner1}
                alt="Mboa Market"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner2}
                alt="Say It Loud"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <div className="h-27 w-27 rounded-xl bg-[#1a1a2e] flex items-center justify-center p-1.5">
                <img
                  src={Partner3}
                  alt="Old Folks Matter"
                  className="h-full w-auto object-contain transition duration-300"
                />
              </div>
              <img
                src={Partner4}
                alt="Partner 4"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner5}
                alt="Partner 5"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner6}
                alt="Partner 6"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner7}
                alt="Partner 7"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner8}
                alt="Partner 8"
                className="h-27 w-auto object-contain transition duration-300"
              />
              <img
                src={Partner9}
                alt="Partner 9"
                className="h-27 w-auto object-contain transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
