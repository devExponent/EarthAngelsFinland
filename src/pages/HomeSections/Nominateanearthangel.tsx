import nominateFlyer from "../../assets/NominateAnEarthangel.png";

const NOMINATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehGX_879V9bpGH38lYKMKnmuJOP-kfxRFwR0bsdEYRf5z-4Q/viewform";

const communities = ["Sami", "Roma", "Africa", "Americas", "Asia", "Nordic", "Arabia"];

const criteria = [
  "Volunteer, mentor, or activist",
  "Leader and inclusion champion",
  "Fights discrimination",
  "Advocate for marginalized communities",
  "Lives in the Turku region",
  "Inspires youth and builds bridges",
];

export default function NominateAnEarthAngel() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-white" />
          <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Say It Loud · Men in Turku · 2027
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          <div className="flex flex-col gap-6">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
              Nominate an <span className="text-[#0B1D13]">Earth Angel</span>
            </h2>

            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
              For the 2027 Say It Loud Black History Month in Finland, we are
              celebrating the men of Turku who quietly hold their communities
              together. Do you know a man who deserves to be seen? Nominate him
              today.
            </p>

            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h3 className="text-[#0B1D13] text-xl md:text-2xl font-bold mb-4">
                Who Can Be Nominated?
              </h3>
              <p className="text-[#4B5563] text-base md:text-lg mb-4">
                A man who serves his community and lives in the Turku region:
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {criteria.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0097D0] flex-shrink-0 mt-2.5" />
                    <span className="text-[#0B1D13] font-semibold text-base md:text-lg">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#4B5563] text-base md:text-lg">
                Tell us <strong className="text-[#0B1D13]">why he is worthy</strong> in 100 to 200 words.
              </p>
            </div>

            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <h3 className="text-[#C9A84C] text-xl md:text-2xl font-bold mb-2">
                From 7 Communities
              </h3>
              <p className="text-[#8BAF96] text-base md:text-lg mb-4">
                Nominations are open to men from every community we celebrate:
              </p>
              <div className="flex flex-wrap gap-2">
                {communities.map((c) => (
                  <span
                    key={c}
                    className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm md:text-base font-semibold px-4 py-2 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#C62828] rounded-2xl p-5 md:p-6">
                <span className="text-2xl block mb-2">⏳</span>
                <p className="text-white/80 text-xs uppercase tracking-widest mb-1">Deadline</p>
                <p className="text-white font-extrabold text-lg md:text-xl">15 December 2026</p>
              </div>
              <div className="bg-[#C9A84C] rounded-2xl p-5 md:p-6">
                <span className="text-2xl block mb-2">🖼️</span>
                <p className="text-[#0B1D13]/70 text-xs uppercase tracking-widest mb-1">Exhibition</p>
                <p className="text-[#0B1D13] font-extrabold text-lg md:text-xl">February 2027</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={NOMINATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-white text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Nominate via Google Form
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:earthangels@earthangels.org"
                className="inline-flex items-center justify-center gap-3 border border-[#0B1D13] text-[#0B1D13] hover:bg-[#0B1D13] hover:text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Nominate by Email
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={nominateFlyer}
                alt="Say It Loud Men in Turku, Nominate an Earth Angel flyer"
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}