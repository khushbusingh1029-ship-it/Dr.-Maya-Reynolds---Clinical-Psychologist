"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#E8E2D8] px-5 py-5 sm:px-6 md:px-8 lg:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="block"
        >
          <h1 className="text-2xl font-light tracking-wide text-[#3F4A45] sm:text-3xl">
            Dr. Maya Reynolds
          </h1>

          <p className="mt-1 text-[9px] tracking-[0.25em] text-[#6B7D72] sm:text-[10px] sm:tracking-[0.3em]">
            CLINICAL PSYCHOLOGIST, PSYD
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm tracking-wide text-[#4E5852] lg:flex xl:gap-8">

          <Link
            href="/"
            className="border-b border-transparent transition hover:border-[#4E5852] "
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="border-b border-transparent transition hover:border-[#4E5852]"
          >
            ABOUT
          </Link>

          <Link
            href="/services"
            className="border-b border-transparent transition hover:border-[#4E5852]"
          >
            SERVICES
          </Link>

          <Link
            href="/approach"
            className="border-b border-transparent transition hover:border-[#4E5852]"
          >
            APPROACH
          </Link>

          <Link
            href="/faqs"
            className="border-b border-transparent transition hover:border-[#4E5852]"
          >
            FAQS
          </Link>

          {/* Part 3 - New Custom Section */}
          <Link
            href="/our-office"
            className="border-b border-transparent transition hover:border-[#4E5852]"
          >
            OUR OFFICE
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="rounded-full border border-[#5C6B63] px-6 py-3 text-sm transition hover:bg-[#3F4A45] hover:text-white"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile + Tablet Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-2xl text-[#3F4A45] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile + Tablet Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#D3CCC1] bg-[#E8E2D8] px-6 py-7 shadow-md lg:hidden">
          <div className="flex flex-col gap-5 text-sm tracking-wide text-[#4E5852]">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              ABOUT
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              SERVICES
            </Link>

            <Link
              href="/approach"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              APPROACH
            </Link>

            <Link
              href="/faqs"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              FAQS
            </Link>

            <Link
              href="/our-office"
              onClick={() => setMenuOpen(false)}
              className="transition hover:underline"
            >
              OUR OFFICE
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full border border-[#5C6B63] px-6 py-3 transition hover:bg-[#3F4A45] hover:text-white"
            >
              CONTACT
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}