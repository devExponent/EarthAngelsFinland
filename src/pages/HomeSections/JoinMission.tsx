import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function JoinMission() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0f3f3b] text-white py-25">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          {t("home.join.title")}
        </h2>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-10 text-base sm:text-lg font-bold text-white/90">
          <a
            href="mailto:earthangelsfinland@gmail.com"
            className="hover:text-white transition"
          >
            {t("home.join.emailLabel")} earthangelsfinland@gmail.com
          </a>

          <a href="tel:+358451796881" className="hover:text-white transition">
            {t("home.join.callLabel")} +358 45 179 6881
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <NavLink
            to="/events"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide text-white hover:bg-orange-600 transition"
          >
            {t("home.join.ctaEvents")}
          </NavLink>

          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide text-orange-200 hover:bg-white/10 hover:text-white transition"
          >
            {t("home.join.ctaGetInvolved")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
