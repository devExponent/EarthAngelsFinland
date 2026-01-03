import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.png";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white text-black border-b border-black/10 font-bold">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo (bigger on mobile + responsive) */}
            <NavLink to="/" className="flex items-center">
              <img
                src={Logo}
                alt="EarthAnglesFinland Logo"
                className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      "rounded-md px-3 py-2 transition",
                      "sm:text-2xl font-extrabold tracking-wide",
                      isActive
                        ? "text-black"
                        : "text-black/70 hover:text-black hover:bg-black/5",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

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

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-80 bg-white border-r border-black/10">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
              <img
                src={Logo}
                alt="EarthAnglesFinland Logo"
                className="h-20 w-auto object-contain"
              />
              <button
                className="rounded-xl border border-black/10 bg-black/5 p-2 hover:bg-black/10 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-1 px-4 py-4">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-lg px-3 py-3 transition",
                      "text-lg font-extrabold",
                      isActive
                        ? "bg-black/10 text-black"
                        : "text-black/70 hover:bg-black/5 hover:text-black",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
