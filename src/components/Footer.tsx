import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "./SocialIcons";
import Logo from "../assets/Logo.png";

import Partner1 from "../assets/Partner1.jpeg";
import Partner2 from "../assets/Partner2.jpeg";
import Partner4 from "../assets/Partner 4.png";
import Partner5 from "../assets/Partner 5.png";
import Partner6 from "../assets/Partner 6.png";
import Partner7 from "../assets/Partner 7.png";
import Partner8 from "../assets/Partner 8.png";
import Jarritos from "../assets/jarritos.png";
import Muusa from "../assets/MUUSA.png";

const topPartners = [
  { src: Partner1, alt: "Old Folks" },
  { src: Partner2, alt: "Say It Loud" },
  { src: Partner7, alt: "Partner 7" },
];

const partners = [
  { src: Partner4, alt: "Partner 4" },
  { src: Partner5, alt: "Partner 5" },
  { src: Partner6, alt: "Partner 6" },
  { src: Partner8, alt: "Partner 8" },
  { src: Muusa, alt: "Partner 9" },
  { src: Jarritos, alt: "Partner 10" },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#e7e7e2] text-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink to="/" className="inline-flex">
              <img
                src={Logo}
                alt="Earth Angels Finland Logo"
                className="h-20 w-auto object-contain sm:h-24"
              />
            </NavLink>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.22em] uppercase sm:text-base">
              {t("footer.meetUs.title")}
            </h3>
            <ul className="mt-6 space-y-4 text-base font-bold sm:text-lg">
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/about"
                >
                  {t("footer.meetUs.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/events"
                >
                  {t("footer.meetUs.events")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/contact"
                >
                  {t("footer.meetUs.contact")}
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.22em] uppercase sm:text-base">
              {t("footer.getInvolved.title")}
            </h3>
            <ul className="mt-6 space-y-4 text-base font-bold sm:text-lg">
              <li>
                <a
                  className="hover:underline underline-offset-4"
                  href="https://form.123formbuilder.com/6776082/non-profit-organization-membership-form"
                  target="_blank"
                >
                  {t("footer.getInvolved.volunteer")}
                </a>
              </li>
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/contact"
                >
                  {t("footer.getInvolved.partner")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/contact"
                >
                  {t("footer.getInvolved.sponsor")}
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-[0.22em] uppercase sm:text-base">
              {t("footer.contact.title")}
            </h3>

            <div className="mt-6 space-y-4 text-base font-bold sm:text-lg">
              <a
                className="flex items-start gap-3 hover:underline underline-offset-4"
                href="mailto:earthangels@earthangelsfinland.org"
              >
                <EnvelopeIcon className="mt-1 h-6 w-6 shrink-0" />
                <span className="break-all">
                  eearthangels@earthangelsfinland.org
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-6 w-6 shrink-0" />
                <span className="break-words">
                  {t("footer.contact.address")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap items-center gap-6">
          {topPartners.map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              className="h-12 w-auto shrink-0 object-contain"
            />
          ))}
        </div>

        <h2 className="my-6 text-2xl font-black uppercase tracking-[0.2em] sm:text-3xl">
          Collaborating Partners
        </h2>

        <div className="grid grid-cols-3 items-center gap-x-6 gap-y-6 sm:flex sm:flex-nowrap sm:overflow-x-auto">
          {partners.map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              className="h-10 w-auto max-w-full object-contain sm:h-12 sm:shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-bold text-black/70 sm:text-base">
              © {year} {t("footer.bottom.copyright")}
            </div>

            <div className="flex items-center gap-6">
              <a
                className="text-[#E4405F] transition-opacity hover:opacity-80"
                href="https://www.instagram.com/earthangelsfinland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-8 w-8" />
              </a>
              <a
                className="text-[#1877F2] transition-opacity hover:opacity-80"
                href="https://www.facebook.com/EarthangelsOfFinland/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-8 w-8" />
              </a>
              <a
                className="text-[#FF0000] transition-opacity hover:opacity-80"
                href="#"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-8 w-8" />
              </a>
              <a
                className="text-[#0A66C2] transition-opacity hover:opacity-80"
                href="#"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
