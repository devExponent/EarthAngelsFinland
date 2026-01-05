import { useTranslation } from "react-i18next";

export default function MissionHighlight() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-black py-25">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20 text-center">
        <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
          {t("home.mission.title")}
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-black/70 sm:text-lg">
          {t("home.mission.body")}
        </p>
      </div>
    </section>
  );
}
