"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Offers", href: "/offers" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        {/* LOGO */}
        <div className="text-2xl font-semibold tracking-[0.2em] text-white">
          LUMORA<span className="text-[#d4af37]">.</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-zinc-300 hover:text-[#d4af37] transition duration-300 group"
            >
              {link.label}

              {/* subtle underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/94704438074"
          target="_blank"
          className="hidden md:inline-flex items-center justify-center
          bg-[#d4af37] text-black px-5 py-2 rounded-full text-sm font-semibold
          hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-md"
        >
          Book Now
        </a>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-[400px]" : "max-h-0"}`}
      >
        <div
          className="flex flex-col items-center gap-6 py-6 text-white
          bg-black/70 backdrop-blur-xl border-t border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d4af37] transition"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/94704438074"
            target="_blank"
            className="mt-2 bg-[#d4af37] text-black px-6 py-2 rounded-full font-semibold"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
