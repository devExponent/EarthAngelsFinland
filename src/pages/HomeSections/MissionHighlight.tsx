import { useTranslation } from "react-i18next";

export default function MissionHighlight() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-black py-15 md:py-25">
      <div className="mx-auto w-10/12 md:w-8/12 lg:w-6/12 px-4 py-14 sm:py-20">
        <h2 className="mt-4 md:text-3xl text-xl  font-extrabold leading-tight sm:text-5xl">
          {t("home.mission.title")}
        </h2>

        <p className="my-10   whitespace-pre-line leading-8  font-medium md:text-justify">
          {t("home.mission.body")}
        </p>
      </div>
    </section>
  );
}
