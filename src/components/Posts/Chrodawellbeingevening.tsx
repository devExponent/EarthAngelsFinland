import chrodaFlyer from "../../assets/ChrodaWellbeingEvening.png";

export default function ChrodaWellbeingEvening() {
  return (
    <section className="bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-white" />
          <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Community Event · HEED Finland
          </span>
        </div>

        <h2
          className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-4"
        >
          Cultural Well-being Evening
        </h2>

        <p className="text-white text-xl md:text-2xl font-semibold mb-2">
          Chronic Diseases Awareness — CHRODA Week
        </p>

        <p className="text-white/80 text-lg md:text-xl mb-12">
          7 to 12 September 2026
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">Date & Time</p>
                  <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
                    Saturday, 12 September 2026
                  </p>
                  <p className="text-[#0B1D13] font-bold text-lg md:text-xl">17:00 to 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">Venue</p>
                  <p className="text-[#0B1D13] font-bold text-lg md:text-xl">Malmitalo</p>
                  <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
                    Ala-Malmin tori 1, Helsinki
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏥</span>
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-1">Organised by</p>
                  <p className="text-[#0B1D13] font-bold text-lg md:text-xl">HEED Finland & CHRODA</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <h3
                className="text-[#C9A84C] text-xl md:text-2xl font-semibold mb-4"
              >
                About the Event
              </h3>
              <p className="text-[#8BAF96] text-base md:text-lg leading-relaxed mb-4">
                The Cultural Well-being Evening is the closing highlight of
                CHRODA Week 2026, a week dedicated to raising awareness about
                chronic diseases in multicultural Finland.
              </p>
              <p className="text-[#8BAF96] text-base md:text-lg leading-relaxed">
                The evening brings together community leaders, healthcare
                professionals, performers, and advocates for a night of
                education, culture, and connection, culminating in an award
                ceremony and networking reception.
              </p>
            </div>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={chrodaFlyer}
              alt="CHRODA Week Cultural Well-being Evening programme flyer"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}