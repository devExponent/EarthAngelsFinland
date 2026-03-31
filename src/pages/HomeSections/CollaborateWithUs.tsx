import { useEffect, useRef, useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCe8fH2ZOxFCcuFLnyIAKZgNptVkdKO6Mn_N41IRdgbaM8kg/viewform?embedded=true";

const perks = [
  {
    icon: "🌿",
    title: "Shared Mission",
    body: "Partner with an organization rooted in compassion, inclusion, and community wellbeing across Finland.",
  },
  {
    icon: "🤝",
    title: "Meaningful Impact",
    body: "Your collaboration directly supports immigrants, families, and vulnerable communities in need.",
  },
  {
    icon: "📣",
    title: "Visibility",
    body: "Get featured across our platforms, events, and campaigns as a proud EarthAngels partner.",
  },
];

export default function CollaborateWithUs() {
  const [visible, setVisible] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={ref}
      className="min-h-screen bg-[#F7F5F0] text-[#1A1A1A]"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#0B1D13] via-[#C9A84C] to-[#0B1D13]" />

      <section className="relative bg-[#0B1D13] overflow-hidden py-20 md:py-28 lg:py-36 px-4">
        <div className="pointer-events-none absolute -top-24 -left-24 w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border border-[#1E4A2B] opacity-30" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-full border border-[#2A6B3C] opacity-20 translate-x-1/3 translate-y-1/3" />

        <div className="relative w-10/12 lg:w-8/12 mx-auto text-center">
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="block h-[2px] w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
              Partnership & Collaboration
            </span>
            <span className="block h-[2px] w-8 bg-[#C9A84C]" />
          </div>

          <h1
            className={`text-white text-4xl md:text-6xl lg:text-7xl leading-[1.08] mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Collaborate With <span className="text-[#C9A84C]">EarthAngels</span>
          </h1>

          <p
            className={`text-[#8BAF96] text-base md:text-xl lg:text-2xl leading-relaxed w-full md:w-10/12 mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We believe change happens through connection. If your organization
            shares our commitment to dignity, health, and belonging — we'd love
            to build something meaningful together.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-[#F7F5F0]">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-[#E2DDD5] hover:border-[#C9A84C]/50 rounded-2xl p-6 md:p-8 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl mb-4 block">
                  {p.icon}
                </span>
                <h3 className="text-[#0B1D13] font-semibold text-lg md:text-xl mb-2">
                  {p.title}
                </h3>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 bg-white">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <div
            className={`text-center mb-10 md:mb-14 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block h-[2px] w-6 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-semibold">
                Get In Touch
              </span>
              <span className="block h-[2px] w-6 bg-[#C9A84C]" />
            </div>
            <h2 className="text-[#0B1D13] text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Tell Us About Your Organization
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed w-full md:w-9/12 mx-auto">
              Fill out the form below and our team will be in touch within 3–5
              business days. We review every submission with care.
            </p>
          </div>

          <div
            className={`relative transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {!formLoaded && (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] border-t-transparent animate-spin" />
                <p className="text-[#6B7280] text-sm tracking-wide">
                  Loading form…
                </p>
              </div>
            )}

            <iframe
              src={GOOGLE_FORM_URL}
              title="EarthAngels Collaboration Form"
              onLoad={() => setFormLoaded(true)}
              className={`w-full border-0 transition-opacity duration-500 ${
                formLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
              style={{ height: "1100px" }}
              allowFullScreen
            />
          </div>

          <p className="text-center text-[#9CA3AF] text-xs mt-8 leading-relaxed">
            Prefer email?{" "}
            <a
              href="mailto:hello@earthangels.fi"
              className="text-[#C9A84C] underline underline-offset-2 hover:text-[#0B1D13] transition-colors"
            >
              hello@earthangels.fi
            </a>
          </p>
        </div>
      </section>

      <section className="bg-[#0B1D13] py-14 md:py-20 px-4 text-center">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <span className="text-3xl block mb-4">🌍</span>
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4">
            Together, we go further.
          </h3>
          <p className="text-[#5A8A6A] text-base md:text-lg leading-relaxed">
            EarthAngels of Finland — building bridges, one partnership at a
            time.
          </p>
        </div>
      </section>
    </main>
  );
}
