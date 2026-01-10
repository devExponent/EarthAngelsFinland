import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to Firebase/Email service
    console.log("Contact form submitted:", form);
  }

  return (
    <main className="bg-gray-100 py-10">
      <section className="mx-auto  w-10/12 md:w-10/12  px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-1 lg:grid-cols-2 md:gap-12">
          {/* Left copy */}
          <div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-950 md:text-5xl">
              {t("contact.title", "Get in touch")}
            </h1>

            <p className="mt-5 max-w-prose text-lg leading-7 text-slate-700">
              {t(
                "contact.subtitle",
                "Questions about our work, partnerships, volunteering, or upcoming events? Send a message and the Earth Angels Finland team will reply as soon as possible."
              )}
            </p>
          </div>

          {/* Right form card */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  {t("contact.form.name", "Name")}
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder={t("contact.form.name", "Name")}
                  className="h-12 w-full rounded-xl bg-slate-50 px-4 text-sm text-slate-900 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  {t("contact.form.email", "Email address")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder={t("contact.form.email", "Email address")}
                  className="h-12 w-full rounded-xl bg-slate-50 px-4 text-sm text-slate-900 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  {t("contact.form.message", "Message")}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder={t("contact.form.message", "Message")}
                  className="min-h-44 w-full resize-none rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-orange-500 px-10 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  {t("contact.form.submit", "Submit")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-15 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title={t("contact.cards.email.title", "Email")}
            lines={[
              t("contact.cards.email.line1", "hello@earthangelsfinland.fi"),
              t("contact.cards.email.line2", "contact@earthangelsfinland.fi"),
            ]}
          />
          <InfoCard
            title={t("contact.cards.phone.title", "Phone")}
            lines={[t("contact.cards.phone.line1", "+358 XX XXX XXXX")]}
          />
          <InfoCard
            title={t("contact.cards.address.title", "Address")}
            lines={[
              t("contact.cards.address.line1", "Turku, Southwest Finland"),
              t("contact.cards.address.line2", "Finland"),
            ]}
          />
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
          <span className="text-lg">✦</span>
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-slate-900">{title}</h3>

          <div className="mt-2 space-y-1 text-base font-semibold text-slate-700">
            {lines.map((l) => (
              <p key={l} className="break-all">
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
