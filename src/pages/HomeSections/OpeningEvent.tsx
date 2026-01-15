import { useTranslation } from "react-i18next";
import bg from "../../assets/SayItLoud.jpeg";

export default function OpeningEventSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* Background image (blur but visible) */}
      <img
        src={bg}
        alt="Say It Loud"
        className="absolute inset-0 h-full w-full object-cover blur-md scale-110"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-emerald-950/70" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-extrabold tracking-widest text-orange-300">
          {t("home.openingEvent.kicker", "OPENING EVENT")}
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
          {t(
            "home.openingEvent.title",
            "“Say It Loud” Opening Day Celebration"
          )}
        </h2>

        <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/90 md:text-xl">
          {t(
            "home.openingEvent.subtitle",
            "Join us in Turku for the exhibition opening celebrating Women of Color—featuring speeches, performances, and a fashion showcase."
          )}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoPill
            label={t("home.openingEvent.dateLabel", "Date")}
            value={t("home.openingEvent.dateValue", "February 7, 2026")}
          />
          <InfoPill
            label={t("home.openingEvent.timeLabel", "Time")}
            value={t("home.openingEvent.timeValue", "11:00–12:45")}
          />
          <InfoPill
            label={t("home.openingEvent.locationLabel", "Location")}
            value={t(
              "home.openingEvent.locationValue",
              "Turku City Main Library (2nd Floor)"
            )}
          />
        </div>

        <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-base font-semibold text-white/90 md:text-lg">
          <li>
            {t(
              "home.openingEvent.bullets.0",
              "Opening speech by Dr. Theresia Bilola."
            )}
          </li>
          <li>
            {t(
              "home.openingEvent.bullets.1",
              "Keynote Speaker: Tunisian Ambassador Hajjaji."
            )}
          </li>
          <li>
            {t(
              "home.openingEvent.bullets.2",
              "International performances and a fashion show by Omono’s Fashion Concepts."
            )}
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/events"
            className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-sm font-extrabold tracking-wide text-white transition hover:bg-orange-600"
          >
            {t("home.openingEvent.ctaEvents", "VIEW FULL PROGRAM")}
          </a>

          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 text-sm font-extrabold tracking-wide text-white backdrop-blur hover:bg-white/15"
          >
            {t("home.openingEvent.ctaContact", "CONTACT US")}
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
      <p className="text-xs font-extrabold tracking-widest text-white/70">
        {label}
      </p>
      <p className="mt-1 text-base font-black text-white">{value}</p>
    </div>
  );
}
