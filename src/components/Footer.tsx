import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "./SocialIcons";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#e7e7e2] text-black py-20">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}
          <div className="md:col-span-1">
            <img
              src={Logo}
              alt="Earth Angels Finland Logo"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </div>

          {/* MEET US */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold tracking-[0.22em] uppercase">
              {t("footer.meetUs.title")}
            </h3>
            <ul className="mt-7 space-y-5 text-lg sm:text-xl font-bold">
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

          {/* GET INVOLVED */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold tracking-[0.22em] uppercase">
              {t("footer.getInvolved.title")}
            </h3>
            <ul className="mt-7 space-y-5 text-lg sm:text-xl font-bold">
              <li>
                <NavLink
                  className="hover:underline underline-offset-4"
                  to="/contact"
                >
                  {t("footer.getInvolved.volunteer")}
                </NavLink>
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

          {/* CONTACT US */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold tracking-[0.22em] uppercase">
              {t("footer.contact.title")}
            </h3>

            <div className="mt-7 space-y-5 text-lg sm:text-xl font-bold">
              <a
                className="flex items-start gap-3 hover:underline underline-offset-4"
                href="mailto:earthangelsfinland@gmail.com"
              >
                <EnvelopeIcon className="mt-1 h-6 w-6" />
                <span>earthangelsfinland@gmail.com</span>
              </a>

              <a
                className="flex items-start gap-3 hover:underline underline-offset-4"
                href="mailto:sayitloudfinland@gmail.com"
              >
                <EnvelopeIcon className="mt-1 h-6 w-6" />
                <span>sayitloudfinland@gmail.com</span>
              </a>

              <a
                className="flex items-start gap-3 hover:underline underline-offset-4"
                href="tel:+358451796881"
              >
                <PhoneIcon className="mt-1 h-6 w-6" />
                <span>+358 45 179 6881</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-6 w-6" />
                <span>{t("footer.contact.address")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-base sm:text-lg font-bold text-black/70">
              © {year} {t("footer.bottom.copyright")}
            </div>

            <div className="flex flex-wrap gap-8 text-base sm:text-lg font-bold">
              <NavLink
                className="underline underline-offset-4 hover:no-underline"
                to="/privacy"
              >
                {t("footer.bottom.privacy")}
              </NavLink>
              <NavLink
                className="underline underline-offset-4 hover:no-underline"
                to="/terms"
              >
                {t("footer.bottom.terms")}
              </NavLink>
            </div>

            <div className="flex items-center gap-5 text-black/60">
              <a className="hover:text-black" href="#" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a className="hover:text-black" href="#" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a className="hover:text-black" href="#" aria-label="YouTube">
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a className="hover:text-black" href="#" aria-label="LinkedIn">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
