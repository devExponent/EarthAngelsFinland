import Image1 from "../../assets/WomensDay1.jpeg";
import Image2 from "../../assets/WomensDay2.jpeg";
import Image3 from "../../assets/WomensDay3.jpeg";
import Image4 from "../../assets/WomensDay4.jpeg";

const WomensDay = () => {
  return (
    <section className="bg-[#fdf8f3]">
      <div className="relative overflow-hidden h-[70vh] md:h-[80vh]">
        <img
          src={Image1}
          alt="Earth Angels International Women's Day"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/75" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-amber-300 mb-4">
            8 March 2026 · Helsinki, Finland
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
            Celebrating{" "}
            <em className="text-amber-300 italic">
              International Women&apos;s Day
            </em>
          </h2>
          <p className="mt-4 text-white/80 text-base md:text-lg font-medium max-w-xl">
            Earth Angels of Finland honoured Women of Color with joy, culture,
            and sisterhood.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-amber-600 mb-3">
            Our Community
          </p>
          <h3 className="font-serif text-3xl md:text-4xl font-black text-[#2a1f1a] leading-tight mb-5">
            A Day of Voices,
            <br />
            Art &amp; Sisterhood
          </h3>
          <p className="text-[#4a3525] leading-relaxed text-base md:text-lg mb-4">
            Women from across Finland and beyond came together to celebrate,
            perform, and uplift one another. Speeches, music, dance, and a
            stunning fashion showcase filled the day with colour and pride.
          </p>
          <p className="text-[#4a3525] leading-relaxed text-base md:text-lg">
            At Earth Angels, every woman&apos;s voice carries the same weight.
            This is a circle with no head, only hearts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-2xl aspect-[3/4]">
            <img
              src={Image2}
              alt="Women celebrating"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-2xl aspect-[3/4] mt-8">
            <img
              src={Image3}
              alt="Performances and community"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      <div className="bg-emerald-950 py-16 px-6 text-center">
        <p className="font-serif text-2xl md:text-4xl italic font-bold text-white max-w-3xl mx-auto leading-snug">
          &ldquo;We gather not only to celebrate how far we have come, but to
          remind each other of how powerful we already are.&rdquo;
        </p>
        <span className="inline-block mt-6 text-[0.7rem] font-bold tracking-[0.22em] uppercase text-amber-400">
          Earth Angels of Finland
        </span>
      </div>

      <div className="grid grid-cols-2">
        <div className="overflow-hidden aspect-video max-h-[480px]">
          <img
            src={Image3}
            alt="Earth Angels Women's Day celebration"
            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
          />
        </div>
        <div className="overflow-hidden aspect-video max-h-[480px]">
          <img
            src={Image4}
            alt="Earth Angels group celebration"
            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
          />
        </div>
      </div>

      <div className="bg-amber-400 py-6 px-6 text-center">
        <p className="text-[0.7rem] font-extrabold tracking-[0.25em] uppercase text-emerald-950">
          Earth Angels of Finland · International Women&apos;s Day · 8 March
          2026 · Helsinki
        </p>
      </div>
    </section>
  );
};

export default WomensDay;
