import {
  HeartIcon,
  AcademicCapIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const ITEMS = [
  {
    title: "Community Well‑Being",
    body: "Supporting the well‑being of immigrants and marginalized communities through connection, visibility, and shared cultural understanding.",
    icon: HeartIcon,
  },
  {
    title: "Education & Awareness",
    body: "Educating people of all ages about the achievements of people of color—helping restore histories that have been diminished or erased.",
    icon: AcademicCapIcon,
  },
  {
    title: "Yearly “Say It Loud” Events",
    body: "Producing high‑quality annual programs that spotlight untold contributions and inspire pride, confidence, and acceptance across communities.",
    icon: MegaphoneIcon,
  },
];

export default function ImpactThreeCards() {
  return (
    <section className="bg-gray-300 text-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">What We Do</h2>
          <p className="mt-4 text-black/70 text-base sm:text-lg">
            Earth Angels of Finland brings people together through education and
            events that celebrate achievements and strengthen belonging.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="text-center border border-black-300 p-10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                <it.icon className="h-8 w-8 text-emerald-700" />
              </div>

              <h3 className="mt-6 text-xl font-extrabold">{it.title}</h3>
              <p className="mt-3 text-black/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
