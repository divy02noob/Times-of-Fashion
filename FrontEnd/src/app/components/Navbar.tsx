"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/10 shadow-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Logo with gold star icon */}
        <Link href="/" className="flex items-center gap-2 font-serif text-3xl tracking-wide text-black select-none">
          {/* Gold Star Icon */}
          <span className="inline-block w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow-lg">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <polygon
                points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
                fill="#fffbe8"
                stroke="#e5c06d"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="font-bold">
            Times of <span className="text-yellow-500">Fashion</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-sans tracking-wide uppercase text-sm text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:scale-x-0 before:bg-yellow-400 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-gray-300 text-black hover:border-yellow-400 hover:text-yellow-500 transition"
        >
          {/* Hamburger icon with smooth rotation */}
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white/90 backdrop-blur border-t border-gray-200 shadow-lg fixed top-16 left-0 right-0 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-sans uppercase tracking-wider text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-gray-100 hover:text-yellow-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
