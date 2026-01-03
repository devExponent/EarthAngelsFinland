import { NavLink } from "react-router-dom";

export default function JoinMission() {
  return (
    <section className="bg-[#0f3f3b] text-white py-25">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Join our mission. Educate, Celebrate, Empower. Get Started Today.
        </h2>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-10 text-base sm:text-lg font-bold text-white/90">
          <a
            href="mailto:earthangelsfinland@gmail.com"
            className="hover:text-white transition"
          >
            Email: earthangelsfinland@gmail.com
          </a>

          <a href="tel:+358451796881" className="hover:text-white transition">
            Call Anytime: +358 45 179 6881
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <NavLink
            to="/events"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide text-white hover:bg-orange-600 transition"
          >
            BROWSE EVENTS
          </NavLink>

          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide text-orange-200 hover:bg-white/10 hover:text-white transition"
          >
            GET INVOLVED
          </NavLink>
        </div>
      </div>
    </section>
  );
}
