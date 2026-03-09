"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            Baque Solutions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-gray-600">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer md:hidden">
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
