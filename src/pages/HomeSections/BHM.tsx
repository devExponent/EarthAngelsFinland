import { NavLink } from "react-router-dom";
import {
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SayTheirNamesMen from "../../assets/Say Their Names Men.jpeg";
import NominationBkg from "../../assets/Nomination bkg.jpeg";
import bhmPoster from "../../assets/BHM.png";
import DjDalo from "../../assets/DJ Dalo.jpeg";
import Ebun from "../../assets/Ebun Kivenen.jpeg";
import CityOfTurku from "../../assets/Partner 6.png";
import TaiteenTalo from "../../assets/Partner 4.png";
import Moniheli from "../../assets/moniheli logo.png";

const NOMINATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehGX_879V9bpGH38lYKMKnmuJOP-kfxRFwR0bsdEYRf5z-4Q/viewform";

const VOLUNTEER_FORM_URL =
  "https://docs.google.com/forms/d/1HJtXETgfSnuBKqaeVjC7-RcCtuLnGmU8Ve5B12qJVS4/viewform";

const PILLARS = [
  { label: "Community Well-Being", Icon: UserGroupIcon },
  { label: "Education and Awareness", Icon: AcademicCapIcon },
  { label: "Annual Cultural Productions", Icon: ChartBarIcon },
];

const BHM = () => {
  return (
    <main className="bg-[#F1EDE4]">
      {/* Section 1: Hero */}

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-80px)] lg:min-h-[600px] lg:max-h-[750px]">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-4 px-6 py-10 md:px-12 lg:px-12 xl:px-16 lg:py-8 bg-[#2B3835]">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold uppercase leading-tight text-[#F4F1EA]">
              Say It Loud: Black History Month 2027{" "}
              <span className="text-[#C9A55C] normal-case">
                - Echoes and Rhythms
              </span>
            </h1>

            <div className="flex flex-col gap-2 text-[#F4F1EA]">
              <p className="text-base md:text-lg font-semibold">
                Celebrating Men in Turku across seven cultural backgrounds
              </p>

              <p className="text-sm md:text-base">
                Opening Programme: FEBRUARY 01-28, 2027 at Turku Main Library
                (Nunnankatu 4, 20700, Turku, Finland)
              </p>

              <p className="text-xs md:text-sm text-[#F4F1EA]/80">
                Opening Day: FEBRUARY 06, 2027 • Final Exhibition: FEBRUARY 27,
                2027
              </p>
            </div>

            <div className="pt-1">
              <NavLink
                to="/events"
                className="inline-flex items-center justify-center rounded-lg bg-[#C9A55C] px-6 py-3 text-sm md:text-base font-semibold text-[#1F2927] transition hover:bg-white"
              >
                Explore February Programme
              </NavLink>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-full overflow-hidden flex items-center justify-center">
            <img
              src={SayTheirNamesMen}
              alt="Illustration of men from seven cultural backgrounds in Turku"
              className="block h-full w-full object-contain object-center"
            />

            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2B3835] to-transparent pointer-events-none" />

            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#2B3835] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Section 2: Mission and three pillars */}
      <section className="px-4 py-12 md:py-16">
        <div className="w-10/12 lg:w-9/12 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-[#1F2927]">
            Our Mission and Three Pillars
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#1F2927]/80">
            Building inclusion, celebrating cultural heritage, and empowering
            communities across Finland.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {PILLARS.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 rounded-lg border border-[#DDD6C8] bg-white px-6 py-6 shadow-sm"
              >
                <Icon className="h-8 w-8 md:h-9 md:w-9 shrink-0 text-[#2D4F5B]" />
                <span className="text-xl md:text-2xl font-extrabold text-center text-[#1F2927]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Current and upcoming 2027 productions */}
      <section className="px-4 pb-12 md:pb-16">
        <div className="w-10/12 lg:w-9/12 mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#1F2927]">
            Current and Upcoming 2027 Productions
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={NominationBkg}
                alt="Hands holding the earth, nominate an EarthAngel"
                className="h-64 md:h-80 w-full object-cover"
              />
              <div className="flex flex-1 flex-col items-center gap-2 p-5 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2927]">
                  Nominate an EarthAngel
                </h3>
                <p className="text-base md:text-lg font-semibold text-[#1F2927]">
                  Deadline: December 15, 2026
                </p>
                <div className="mt-auto pt-3">
                  <a
                    href={NOMINATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2D4F5B] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#1F3A43]"
                  >
                    Nominate Now
                  </a>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={bhmPoster}
                alt="Say It Loud Black History Month 2027 programme poster"
                className="h-64 md:h-80 w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col items-center gap-2 p-5 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2927]">
                  Exhibition and Feb Programme
                </h3>
                <p className="text-base md:text-lg font-semibold text-[#1F2927]">
                  Opens FEBRUARY 06, 2027 • Turku Main Library
                </p>
                <div className="mt-auto pt-3">
                  <NavLink
                    to="/events"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2D4F5B] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#1F3A43]"
                  >
                    View Full Schedule
                  </NavLink>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <div className="flex h-64 md:h-80 gap-1 overflow-hidden bg-[#C9A55C] p-1">
                <img
                  src={DjDalo}
                  alt="DJ Dalo"
                  className="h-full w-1/2 min-w-0 object-cover object-top"
                />
                <img
                  src={Ebun}
                  alt="Ebun Kivenen"
                  className="h-full w-1/2 min-w-0 object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col items-center gap-2 p-5 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2927]">
                  Say It Loud: Black Tie
                </h3>
                <p className="text-base md:text-lg font-semibold text-[#1F2927]">
                  FEBRUARY 27, 2027 • Taiteen Talo Main Hall (Nunnankatu 4,
                  20700, Turku, Finland)
                </p>
                <p className="text-base md:text-lg text-[#1F2927]">
                  Tickets at the Door <br></br>Pre-Order: coming soon
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: Volunteer and partner with us */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="w-10/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col gap-6 rounded-xl bg-[#25403F] px-6 py-8 md:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="lg:max-w-xl">
                <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#F4F1EA] text-balance">
                  Volunteer and Partner with Us
                </h2>
                <p className="mt-2 text-base md:text-lg text-[#F4F1EA]/85">
                  Express your volunteer spirit for 2027 or partner with us to
                  support community impact.
                </p>
              </div>

              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#C9A55C] px-8 py-4 text-base md:text-lg font-semibold text-[#1F2927] transition hover:bg-white"
              >
                Volunteer with Us
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-lg bg-white px-4 py-2">
                <img
                  src={CityOfTurku}
                  alt="City of Turku"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center rounded-lg bg-white px-4 py-2">
                <img
                  src={TaiteenTalo}
                  alt="Taiteen Talo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center rounded-lg bg-white px-4 py-2">
                <img
                  src={Moniheli}
                  alt="Moniheli"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BHM;
