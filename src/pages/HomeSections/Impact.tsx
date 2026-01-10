import {
  HeartIcon,
  AcademicCapIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const ICONS = [HeartIcon, AcademicCapIcon, MegaphoneIcon];

type ImpactItem = { title: string; body: string };

export default function ImpactThreeCards() {
  const { t } = useTranslation();

  const items = t("home.impact.items", { returnObjects: true }) as ImpactItem[];

  return (
    <section className="bg-gray-300 text-black py-20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {t("home.impact.title")}
          </h2>

          <p className="mt-4 text-black/70 text-base sm:text-lg">
            {t("home.impact.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = ICONS[idx] ?? HeartIcon;

            return (
              <div
                key={`${it.title}-${idx}`}
                className="text-center border border-black/20 p-10 bg-white/30"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <Icon className="h-8 w-8 text-emerald-700" />
                </div>

                <h3 className="mt-6 text-xl font-extrabold">{it.title}</h3>
                <p className="mt-3 text-black/70 leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
