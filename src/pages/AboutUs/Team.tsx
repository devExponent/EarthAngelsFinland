import { useTranslation } from "react-i18next";
import Momma from "../../assets/Momma.jpeg";
import Hazzalea from "../../assets/Hazzalea.jpeg";
import Ekemini from "../../assets/Ekemini.jpeg";
import Nayeli from "../../assets/Nayelli.jpeg";
import Muhammad from "../../assets/Muhammad.jpeg";

import Female from "../../assets/Female.png";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const founder: TeamMember = {
  name: "Aria Arai",
  role: "President",
  imageUrl: Momma,
};

const team: TeamMember[] = [
  {
    name: "Hazzalea Reyes",
    role: "Vice President",
    imageUrl: Hazzalea,
  },
  {
    name: "Ekemini James Ekpe",
    role: "Communications Secretary",
    imageUrl: Ekemini,
  },
  {
    name: "Nayeli Ortiz",
    role: "Graphics Designer/ Photographer",
    imageUrl: Nayeli,
  },
  {
    name: "Muhammad Okunlola",
    role: "Software Engineer",
    imageUrl: Muhammad,
  },
  {
    name: "Reeta Vilhu",
    role: "Financial Secretary",
    imageUrl: Female,
  },
];

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f4f1ea]">
      <div className="mx-auto w-10/12 px-4 py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-emerald-950 md:text-5xl">
            {t("team.title", "Meet our team")}
          </h2>
          <p className="mt-3 text-base font-medium text-slate-700 md:text-lg">
            {t(
              "team.subtitle",
              "The people behind our programs, events, and community work."
            )}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <TeamCard member={founder} featured />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={[
          "mx-auto overflow-hidden rounded-full bg-white",
          "ring-4 ring-emerald-900/25 ring-offset-4 ring-offset-[#f4f1ea]",
          "shadow-lg",
          featured ? "h-40 w-40 md:h-48 md:w-48" : "h-32 w-32 md:h-40 md:w-40",
        ].join(" ")}
      >
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <h3
        className={[
          "mt-5 font-black text-emerald-950",
          featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
        ].join(" ")}
      >
        {member.name}
      </h3>

      <p className="mt-1 text-base font-semibold text-slate-600 md:text-lg">
        {member.role}
      </p>
    </div>
  );
}
