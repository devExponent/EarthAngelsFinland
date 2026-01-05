import { useState } from "react";
import { useTranslation } from "react-i18next";
import faqImageSrc from "../../assets/blackhistory.png"; // Vite returns a URL string [web:1152]

type FaqItem = { q: string; a: string };

type Props = {
  faqImageAlt?: string;
  /** Optional: link to Google Maps directions */
  directionsHref?: string;
};

export default function FAQ({
  faqImageAlt = "Earth Angels Finland",
  directionsHref = "https://www.google.com/maps?q=Nunnankatu+4,+Turku,+Finland",
}: Props) {
  const { t } = useTranslation(); // [web:1006]

  const rawFaqs = t("contactExtras.faq.items", { returnObjects: true });
  const faqs: FaqItem[] = Array.isArray(rawFaqs) ? (rawFaqs as FaqItem[]) : [];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-gray-100">
      <div className="mx-auto w-10/12 md:w-8/12 px-4 py-14 md:py-18">
        {/* Visit/Hours row */}
        <div className="text-center py-10">
          <div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 md:text-4xl">
              {t("contactExtras.visit.title")}
            </h2>

            <p className="mt-4 text-center text-md leading-7 font-bold text-slate-700">
              {t("contactExtras.visit.body")}
            </p>

            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-orange-400/60 bg-white px-6 text-xs font-semibold tracking-wider text-orange-600 transition hover:bg-orange-50"
            >
              {t("contactExtras.visit.cta")}
            </a>
          </div>

          {/* <div className="justify-self-start md:justify-self-end">
            <div className="w-full max-w-sm rounded-2xl bg-emerald-950 p-7 text-white shadow-xl ring-1 ring-black/10">
              <div className="mx-auto inline-flex items-center rounded-full bg-orange-500 px-4 py-1 text-[10px] font-bold tracking-widest">
                {t("contactExtras.hours.badge")}
              </div>

              <div className="mt-6 space-y-4 text-center">
                <HoursRow
                  title={t("contactExtras.hours.monFri.title")}
                  detail={t("contactExtras.hours.monFri.detail")}
                />
                <HoursRow
                  title={t("contactExtras.hours.sat.title")}
                  detail={t("contactExtras.hours.sat.detail")}
                />
                <HoursRow
                  title={t("contactExtras.hours.sun.title")}
                  detail={t("contactExtras.hours.sun.detail")}
                />
              </div>
            </div>
          </div> */}
        </div>

        {/* FAQ + Image row */}
        <div className="mt-14 md:mt-18">
          <p className="text-xs font-semibold tracking-widest text-orange-500">
            {t("contactExtras.faq.kicker")}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 md:text-4xl">
            {t("contactExtras.faq.title")}
          </h3>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            {/* FAQ list */}
            <div className="space-y-3">
              {faqs.length === 0 ? (
                <div className="rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
                  {t(
                    "contactExtras.faq.empty",
                    "FAQ content is not available yet."
                  )}
                </div>
              ) : (
                faqs.map((item, idx) => {
                  const open = idx === openIndex;
                  return (
                    <button
                      key={`${idx}-${item.q}`}
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : idx)}
                      className="w-full rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.q}
                          </p>
                          {open && (
                            <p className="mt-2 text-sm leading-7 text-slate-700">
                              {item.a}
                            </p>
                          )}
                        </div>

                        <span
                          className={[
                            "mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full",
                            open
                              ? "bg-orange-500 text-white"
                              : "bg-orange-50 text-orange-600",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          {open ? "–" : "+"}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Image (replaces the form) */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={faqImageSrc}
                    alt={faqImageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-orange-500">
                    {t("contactExtras.imageCard.kicker")}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    {t("contactExtras.imageCard.title")}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {t("contactExtras.imageCard.body")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoursRow({ title, detail }: { title: string; detail: string }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-white/80">{detail}</p>
    </div>
  );
}
