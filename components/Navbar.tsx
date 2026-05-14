"use client";

import { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "../i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`
    fixed top-0 left-0 z-50 w-full
    bg-[#1B1B1B]
    transition-all duration-300
    ${
      scrolled
        ? "md:shadow-lg md:border-b md:border-white/10"
        : "md:bg-transparent md:backdrop-blur-none md:border-transparent md:shadow-none"
    }
  `}
    >
      <nav>
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 h-18 md:h-26 md:p-0">
          {/* LOGO */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
          >
            {/* DESKTOP LOGO */}
            <Image
              className="
                hidden md:block
                object-contain
              "
              src="/icons/brand-logo-olive-white.png"
              width={150}
              height={150}
              alt="brand-nav-logo-large"
            />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={
                pathname === "/" || pathname === "/de"
                  ? "active text-[#D1E3B2] transition text-lg"
                  : "text-[#F9F9F9] hover:text-gray-300 transition text-lg"
              }
            >
              {t("home")}
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about" || pathname === "/de/about"
                  ? "active text-[#D1E3B2] transition text-lg"
                  : "text-[#F9F9F9] hover:text-gray-300 transition text-lg"
              }
            >
              {t("about")}
            </Link>

            <Link
              href="/services"
              className={
                pathname === "/services" || pathname === "/de/services"
                  ? "active text-[#D1E3B2] transition text-lg"
                  : "text-[#F9F9F9] hover:text-gray-300 transition text-lg"
              }
            >
              {t("services")}
            </Link>

            <Link
              href="/portfolio"
              className={
                pathname === "/portfolio" || pathname === "/de/portfolio"
                  ? "active text-[#D1E3B2] transition text-lg"
                  : "text-[#F9F9F9] hover:text-gray-300 transition text-lg"
              }
            >
              {t("portfolio")}
            </Link>

            <Link
              href="/contact"
              className={
                pathname === "/contact" || pathname === "/de/contact"
                  ? "active text-[#D1E3B2] transition text-lg"
                  : "text-[#F9F9F9] hover:text-gray-300 transition text-lg"
              }
            >
              {t("contact")}
            </Link>
            <LocaleSwitcher />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="
              relative w-8 h-8
              flex flex-col justify-center items-center
              cursor-pointer md:hidden
            "
          >
            <span
              className={`
                absolute h-0.5 w-6 bg-white
                transition-transform duration-300
                ${menuOpen ? "rotate-45" : "-translate-y-2"}
              `}
            />

            <span
              className={`
                absolute h-0.5 w-6 bg-white
                transition-opacity duration-300
                ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                absolute h-0.5 w-6 bg-white
                transition-transform duration-300
                ${menuOpen ? "-rotate-45" : "translate-y-2"}
              `}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 border border-white/10
            ${menuOpen ? "max-h-96" : "max-h-0"}
          `}
        >
          <div
            className="
              flex flex-col items-center gap-8
              bg-[#1B1B1B]
              p-6
            "
          >
            <Link
              onClick={closeMenu}
              href="/"
              className="text-gray-300 hover:text-white transition"
            >
              {t("home")}
            </Link>

            <Link
              onClick={closeMenu}
              href="/about"
              className="text-gray-300 hover:text-white transition"
            >
              {t("about")}
            </Link>

            <Link
              onClick={closeMenu}
              href="/services"
              className="text-gray-300 hover:text-white transition"
            >
              {t("services")}
            </Link>

            <Link
              onClick={closeMenu}
              href="/portfolio"
              className="text-gray-300 hover:text-white transition"
            >
              {t("portfolio")}
            </Link>

            <Link
              onClick={closeMenu}
              href="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              {t("contact")}
            </Link>

            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
