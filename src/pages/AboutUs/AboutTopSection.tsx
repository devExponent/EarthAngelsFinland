import { useTranslation } from "react-i18next";
import Image from "../../assets/Image3.jpg";
import { Target, Eye, BookOpen } from "lucide-react";
import type { ReactNode } from "react"; // icon prop typing [web:1249]

export default function AboutTop() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#f4f1ea]">
      <section className="mx-auto w-10/12 px-4 py-12 md:py-16">
        {/* Top row */}
        <div className="grid items-center gap-10 lg:grid-cols-2 md:gap-14">
          <div>
            <p className="my-2 text-xl font-black tracking-widest text-orange-500">
              {t("about.kicker")}
            </p>

            <h1 className="mt-3 text-4xl     font-black tracking-tight text-emerald-950 md:text-6xl">
              {t("about.title")}
            </h1>

            <p className="mt-5 text-lg font-medium leading-8 text-slate-700">
              {t("about.body1")}
            </p>

            <p className="mt-4 text-lg font-medium leading-8 text-slate-700">
              {t("about.body2")}
            </p>

            <ul className="mt-7 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                  ✓
                </span>
                <p className="text-lg font-bold text-emerald-950">
                  {t("about.bullets.0")}
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                  ✓
                </span>
                <p className="text-lg font-bold text-emerald-950">
                  {t("about.bullets.1")}
                </p>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <div className="grid aspect-[4/3] w-full place-items-center">
              <div className="px-6 text-center">
                <img
                  src={Image}
                  alt="Earth Angels Finland"
                  className="h-full w-full object-contain p-5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="rounded-3xl bg-emerald-900 px-6 py-10 text-white shadow-xl md:px-10 md:py-12">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <InfoCol
                icon={<Target className="h-9 w-9 text-white" />}
                title={t("about.cards.mission.title")}
                body={t("about.cards.mission.body")}
              />
              <InfoCol
                icon={<Eye className="h-9 w-9 text-white" />}
                title={t("about.cards.vision.title")}
                body={t("about.cards.vision.body")}
              />
              <InfoCol
                icon={<BookOpen className="h-9 w-9 text-white" />}
                title={t("about.cards.story.title")}
                body={t("about.cards.story.body")}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCol({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      {/* Bigger icon badge (icon sits above title) */}
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
        {icon}
      </div>

      {/* Title bigger + bolder than body */}
      <h3 className="text-2xl font-black">{title}</h3>

      {/* Body slightly smaller than title */}
      <p className="mt-3 text-lg font-medium leading-8 text-white/85">{body}</p>
    </div>
  );
}
