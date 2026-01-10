import { useTranslation } from "react-i18next";

import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpg";
import Image4 from "../../assets/Image4.jpg";
import Blackhistory from "../../assets/blackhistory.png";

const images = [
  { src: Image1, alt: "Gallery image 1" },
  { src: Image2, alt: "Gallery image 2" },
  { src: Image3, alt: "Gallery image 3" },
  { src: Image4, alt: "Gallery image 4" },
  { src: Blackhistory, alt: "Black History Month event" },
];

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100">
      <div className="mx-auto w-10/12 px-4 py-12 md:py-16">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-emerald-950">
              {t("about.gallery.title")}
            </h1>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
