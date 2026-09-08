import sayItLoudFlyer from "../../assets/Sayitloudmen.jpeg"

export default function SayItLoudMenEvent() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#0097D0]" />
          <span className="text-[#0097D0] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Save the Date · EarthAngels of Finland
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>
            <h2 className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4">
              Say It Loud — In Celebration of{" "}
              <span className="text-[#0097D0]">Men in Finland</span>
            </h2>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              A celebration of culture, community, and unity. EarthAngels of
              Finland invites everyone to come together and say it loud — open
              to all, free entry.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-xl">📅</span>
                <span className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  Saturday, 6 February 2027, 11:00 to 13:00
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  Turku, Finland
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎟️</span>
                <span className="text-[#0B1D13] font-bold text-lg md:text-xl">
                  Free entry — open to all
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={sayItLoudFlyer}
              alt="Say It Loud — In Celebration of Men in Finland event flyer"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}