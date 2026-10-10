import independence1 from "../../assets/independence1.jpeg";
import independence2 from "../../assets/independence2.jpeg";
import independence3 from "../../assets/independence3.jpeg";
import independence4 from "../../assets/independence4.jpeg";
import independence5 from "../../assets/independence5.jpeg";
import independence6 from "../../assets/independence6.jpeg";
import independence7 from "../../assets/independence7.jpeg";
import independence8 from "../../assets/independence8.jpeg";

export default function NigeriaIndependence() {
  return (
    <main className="min-h-screen bg-white my-10">

      <section className="bg-[#2faa79] py-16 md:py-24 px-4">
        <div className="w-10/12 lg:w-8/12 mx-auto">

          <div className="flex items-center gap-3 mb-6">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Community Recap · 3 October 2026
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug mb-4">
            Nigeria <span className="text-[#FFD700]">@ 66</span>
          </h1>

          <p className="text-white text-xl md:text-2xl font-semibold mb-6">
            Every tribe, one heartbeat. 🇳🇬
          </p>

          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed w-full lg:w-9/12 mb-4">
            EarthAngels of Finland joined the Nigerians Association in Finland
            to celebrate Nigeria's 66th Independence Day in Helsinki. The
            gathering brought together Nigerians and friends of Nigeria from
            across the country for an afternoon of food, music, culture, and
            community.
          </p>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed w-full lg:w-9/12">
            Held at Pakilan peruskoulu, Halkosuontie 88 on Saturday 3 October
            at 2 PM — free entry, traditional attire, and good people all
            around. It was exactly what it was meant to be.
          </p>

        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="w-10/12 lg:w-8/12 mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <span className="block h-[2px] w-5 bg-[#008751]" />
            <span className="text-[#008751] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Highlights of the Day
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {[
              { icon: "🍛", label: "Food" },
              { icon: "🎵", label: "Music" },
              { icon: "🥁", label: "Culture" },
              { icon: "👨‍👩‍👧‍👦", label: "Family" },
            ].map((h) => (
              <div
                key={h.label}
                className="bg-[#F7F5F0] border border-[#E2DDD5] rounded-2xl p-5 flex flex-col items-center gap-2 text-center"
              >
                <span className="text-3xl">{h.icon}</span>
                <p className="text-[#0B1D13] font-bold text-base md:text-lg">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8 mt-14">
            <span className="block h-[2px] w-5 bg-[#008751]" />
            <span className="text-[#008751] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Moments from the Celebration
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="rounded-2xl overflow-hidden shadow-md col-span-2">
              <img src={independence1} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence2} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence3} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence4} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence5} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence6} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence7} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={independence8} alt="Nigeria at 66 celebration" className="w-full h-auto object-cover" />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-[#2faa79]">
        <div className="w-10/12 lg:w-8/12 mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Proud to Be There 🇳🇬
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            EarthAngels of Finland celebrates every culture and every
            community. Moments like these remind us why connection,
            representation, and showing up for each other matter so much.
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Happy 66th Independence Day, Nigeria. You are seen and celebrated
            here in Finland too.
          </p>
        </div>
      </section>

    </main>
  );
}