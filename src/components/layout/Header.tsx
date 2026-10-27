"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/config/site";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#faf6ee] border-b-[1.5px] border-[#d4c2a5] shadow-[0_4px_15px_rgba(139,90,43,0.05)] transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b3002d] rounded-xl p-1">
            <div className="w-11 h-11 rounded-full border-[1.5px] border-[#b89768] border-dashed p-1 flex items-center justify-center bg-gradient-to-br from-[#faf6ee] to-[#f4ebd9] shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="text-2xl font-black bg-gradient-to-b from-[#ff2e5b] to-[#b3002d] bg-clip-text text-transparent select-none leading-none">
                ॐ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight uppercase bg-gradient-to-b from-[#ff2e5b] to-[#b3002d] bg-clip-text text-transparent leading-none drop-shadow-[1px_1px_0px_rgba(214,167,66,0.2)]">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-[#b89768] tracking-[2px] uppercase mt-1 leading-none">
                Authentic Vedic Pujas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <Link
              href="/"
              className="text-[15px] font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors py-2"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="text-[15px] font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors py-2"
            >
              About Us
            </Link>

            {/* Dropdown with all 10 services */}
            <ServicesDropdown />

            <Link
              href="/gallery"
              className="text-[15px] font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors py-2"
            >
              Gallery
            </Link>

            <Link
              href="/contact-us"
              className="text-[15px] font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors py-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Book Now Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              className="hidden lg:inline-flex items-center justify-center bg-gradient-to-b from-[#e52d27] to-[#b31217] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_4px_10px_rgba(179,18,23,0.25)] hover:shadow-[0_6px_15px_rgba(179,18,23,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#7b1828] hover:bg-[#f3ebd9] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7b1828]"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
