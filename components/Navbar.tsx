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

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex justify-between items-center h-18 md:h-24">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* MOBILE LOGO */}
            <Image
              className="
                block md:hidden
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
              src="/icons/baque-primary-symbol-white.png"
              width={42}
              height={42}
              alt="brand-nav-logo-small"
            />

            {/* DESKTOP LOGO */}
            <Image
              className="
                hidden md:block
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
              src="/icons/baque-primary-logo-white.png"
              width={170}
              height={170}
              alt="brand-nav-logo-large"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={
                pathname === "/" || pathname === "/de"
                  ? "active text-emerald-500 hover:text-white transition text-lg font-medium"
                  : "text-gray-300 hover:text-white transition text-lg font-medium"
              }
            >
              {t("home")}
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about" || pathname === "/de/about"
                  ? "active text-emerald-500 hover:text-white transition text-lg font-medium"
                  : "text-gray-300 hover:text-white transition text-lg font-medium"
              }
            >
              {t("about")}
            </Link>

            <Link
              href="/services"
              className={
                pathname === "/services" || pathname === "/de/services"
                  ? "active text-emerald-500 hover:text-white transition text-lg font-medium"
                  : "text-gray-300 hover:text-white transition text-lg font-medium"
              }
            >
              {t("services")}
            </Link>

            <Link
              href="/portfolio"
              className={
                pathname === "/portfolio" || pathname === "/de/portfolio"
                  ? "active text-emerald-500 hover:text-white transition text-lg font-medium"
                  : "text-gray-300 hover:text-white transition text-lg font-medium"
              }
            >
              {t("portfolio")}
            </Link>

            <Link
              href="/contact"
              className={
                pathname === "/contact" || pathname === "/de/contact"
                  ? "active text-emerald-500 hover:text-white transition text-lg font-medium"
                  : "text-gray-300 hover:text-white transition text-lg font-medium"
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
            md:hidden overflow-hidden transition-all duration-300
            ${menuOpen ? "max-h-96 pb-6" : "max-h-0"}
          `}
        >
          <div
            className="
              flex flex-col gap-6
              bg-black/70
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
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
              className="
                bg-[#697857]
                hover:bg-[#51603E]
                px-5 py-3
                rounded-full
                text-white
                text-center
                font-semibold
                transition
              "
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
