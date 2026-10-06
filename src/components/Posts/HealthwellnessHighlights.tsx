import Health1 from "../../assets/Health1.jpeg";
import Health2 from "../../assets/Health2.jpeg";
import Health3 from "../../assets/Health3.jpeg";
import Health4 from "../../assets/Health4.jpeg";
import Health5 from "../../assets/Health5.jpeg";
import Health6 from "../../assets/Health6.jpeg";
import Health7 from "../../assets/Health7.jpeg";
import Health8 from "../../assets/Health8.jpeg";
import Health9 from "../../assets/Health9.jpeg";
import Health10 from "../../assets/Health10.jpeg";

const checks = [
  { icon: "🩸", label: "Blood Pressure" },
  { icon: "🔬", label: "Haemoglobin" },
  { icon: "🍬", label: "Blood Sugar" },
  { icon: "💉", label: "Total Cholesterol" },
  { icon: "⚖️", label: "Body Composition" },
  { icon: "☀️", label: "Vitamins D3, K2 & Calcium Guidance" },
];

const photos = [Health1, Health2, Health3, Health4, Health5, Health6, Health7, Health8, Health9, Health10];

export default function HealthwellnessHighlights() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">

      <section className="bg-gradient-to-b from-[#7dafc7] to-[#7dafc7] py-16 md:py-24 px-4">
        <div className="w-10/12 lg:w-8/12 mx-auto">

          <div className="flex items-center gap-3 mb-6">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Event Recap · 3 October 2026
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Well-being Day for Immigrants —{" "}
            <span className="text-[#0097D0]">Free Health Checks and Guidance</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 w-full lg:w-9/12">
            On 3 October 2026, EarthAngels of Finland and HEED Finland joined
            hands at Yhdessä-Yhdistys Ry in Varissuo, Turku, to offer free
            health screenings and guidance to immigrants in the community.
          </p>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed w-full lg:w-9/12">
            No registration. No ID required. Just walk in, get checked, and
            leave knowing a little more about your health. That was the spirit
            of the day and it showed.
          </p>

        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-[#F7F5F0]">
        <div className="w-10/12 lg:w-8/12 mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <span className="block h-[2px] w-5 bg-[#0097D0]" />
            <span className="text-[#0097D0] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              What Was Offered
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {checks.map((c) => (
              <div
                key={c.label}
                className="bg-[#F7F5F0] border border-[#E2DDD5] rounded-2xl p-5 flex items-center gap-3"
              >
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <p className="text-[#0B1D13] font-bold text-sm md:text-base">
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="block h-[2px] w-5 bg-[#0097D0]" />
            <span className="text-[#0097D0] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Moments from the Day
            </span>
          </div>

      
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md aspect-square"
              >
                <img
                  src={src}
                  alt={`Health wellness day highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="w-10/12 lg:w-8/12 mx-auto text-center">
          <h2 className="text-[#0B1D13] text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Health is a Right, Not a Privilege
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Events like this are at the heart of what EarthAngels and HEED
            Finland stand for. Access to health information and screenings
            should not be a barrier for anyone living in Finland, regardless
            of background or language.
          </p>
          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Thank you to every volunteer, healthcare professional, and community
            member who made this day possible.
          </p>
        </div>
      </section>

    </main>
  );
}