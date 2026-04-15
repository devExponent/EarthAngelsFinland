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
                href="mailto:info@sayitloudfinland.org"
              >
                <EnvelopeIcon className="mt-1 h-6 w-6 shrink-0" />
                <span className="break-all">info@sayitloudfinland.org</span>
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

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-bold text-black/70 sm:text-base">
              © {year} {t("footer.bottom.copyright")}
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
