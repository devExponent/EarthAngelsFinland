import nominateFlyer from "../../assets/NominateAnEarthangel.png";

const NOMINATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehGX_879V9bpGH38lYKMKnmuJOP-kfxRFwR0bsdEYRf5z-4Q/viewform";

export default function NominateAnEarthAngel() {
  return (
    <section
      id="nominate"
      className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_1.3fr] lg:gap-20">
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={nominateFlyer}
            alt="Flyer: Nominate an EarthAngel for the 2027 Say Their Names ECHOES and RHYTHMS exhibition, Celebration of Men in Turku. Deadline December 15, 2026."
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-10 text-[#2A130E] lg:pr-4">
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl xl:text-6xl">
            Know a man in Turku who uplifts his community?
            <span className="mt-4 block text-3xl font-semibold md:text-4xl xl:text-5xl">
              Nominate him as an EarthAngel by December 15, 2026.
            </span>
          </h2>

          <div>
            <a
              href={NOMINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8400F] px-10 py-5 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#2A130E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8400F] md:text-xl"
            >
              Nominate an EarthAngel
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
