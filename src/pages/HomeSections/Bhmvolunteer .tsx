import bhmPoster from "../../assets/BHM.png";

const VOLUNTEER_FORM_URL =
  "https://docs.google.com/forms/d/1HJtXETgfSnuBKqaeVjC7-RcCtuLnGmU8Ve5B12qJVS4/viewform";

export default function BHMVolunteer() {
  return (
    <section className="bg-[#F7F1E6] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div
          className="mb-10 flex h-2 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <span className="flex-1 bg-[#E8501F]" />
          <span className="flex-1 bg-[#E9B424]" />
          <span className="flex-1 bg-[#2FA37C]" />
          <span className="flex-1 bg-[#2A130E]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-5 bg-[#C8400F]" />
              <span className="text-[#2A130E] text-base md:text-lg tracking-[0.2em] uppercase font-bold">
                Black History Month 2027 · Volunteer
              </span>
            </div>

            <h2 className="text-[#C8400F] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
              Be Part of the Echoes and Rhythms
            </h2>

            <p className="text-[#2A130E]/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Help us welcome the community to Say It Loud Black History Month
              2027, in celebration of Men in Turku. Fill in the short form and
              tell us how you would like to help.
            </p>

            <div className="pt-2">
              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C8400F] hover:bg-[#2A130E] text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Volunteer with Us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={bhmPoster}
              alt="Say It Loud Black History Month February 2027 programme poster"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
