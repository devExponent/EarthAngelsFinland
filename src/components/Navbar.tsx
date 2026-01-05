import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.png";
import { useTranslation } from "react-i18next";

const LINKS = [
  { to: "/", key: "nav.home" },
  { to: "/events", key: "nav.events" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

function DesktopLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-md px-3 py-2 transition",
          "text-lg lg:text-xl font-extrabold tracking-wide",
          isActive
            ? "text-black"
            : "text-black/70 hover:text-black hover:bg-black/5",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block rounded-lg px-3 py-3 transition",
          "text-xl font-extrabold",
          isActive
            ? "bg-white/15 text-white"
            : "text-white/70 hover:bg-white/10 hover:text-white",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.resolvedLanguage === "en" ? "fi" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <>
      {/* Desktop/overall navbar: always white */}
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white text-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Earth Angels Finland Logo"
                className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto object-contain"
              />
              <p className="font-extrabold">EarthAnglesFinland</p>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-3">
              <nav className="flex items-center gap-2">
                {LINKS.map((l) => (
                  <DesktopLink key={l.to} to={l.to}>
                    {t(l.key)}
                  </DesktopLink>
                ))}
              </nav>

              {/* translator */}
              <div className="ml-2 flex gap-2">
                <button
                  onClick={toggleLang}
                  className="rounded-lg border border-black/10 bg-black/5 px-3 py-2 text-sm font-extrabold hover:bg-black/10"
                  aria-label="Toggle language"
                >
                  {i18n.resolvedLanguage === "en" ? "FI" : "EN"}
                </button>
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                className="rounded-xl border border-black/10 bg-black/5 p-2 hover:bg-black/10 transition"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer (black background) */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-80 border-r border-white/10 bg-black text-white">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <img
                src={Logo}
                alt="Earth Angels Finland Logo"
                className="h-18 w-auto object-contain"
              />
              <p className="font-bold">EarthAngelsFinland</p>

              <button
                className="rounded-xl border border-white/10 bg-white/10 p-2 hover:bg-white/15 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="px-4 py-4 space-y-4">
              <nav className="space-y-1">
                {LINKS.map((l) => (
                  <MobileLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                  >
                    {t(l.key)}
                  </MobileLink>
                ))}
              </nav>

              {/* translator */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={toggleLang}
                  className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-base font-extrabold hover:bg-white/15"
                >
                  {i18n.resolvedLanguage === "en" ? "FI" : "EN"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
