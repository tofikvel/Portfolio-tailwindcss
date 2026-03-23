"use client";

import { useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from '../i18n/navigation'
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const t = useTranslations('Navbar');

  return (
    <nav className="bg-sky-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Baque Solutions
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="md:text-lg md:hover:text-gray-600">
              {t('home')}
            </Link>
            <Link href="/about" className="md:text-lg md:hover:text-gray-600">
              {t('about')}
            </Link>
            <Link href="/services" className="md:text-lg md:hover:text-gray-600">
              {t('services')}
            </Link>
            <Link href="/portfolio" className="md:text-lg md:hover:text-gray-600">
              {t('portfolio')}
            </Link>
            <Link href="/contact" className="md:text-lg md:hover:text-gray-600">
              {t('contact')}
            </Link>
            <LocaleSwitcher />
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer md:hidden"
          >
            <span
              className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="flex flex-col px-6 pb-4 text-center space-y-6">
          <Link onClick={closeMenu} href="/">
            Home
          </Link>
          <Link onClick={closeMenu} href="/about">
            About
          </Link>
          <Link onClick={closeMenu} href="/services">
            Services
          </Link>
          <Link onClick={closeMenu} href="/portfolio">
            Portfolio
          </Link>
          <Link onClick={closeMenu} href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
