"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, MessageCircle, Calendar } from "lucide-react";
import { servicesCatalogue } from "@/data/services";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { OmSymbol } from "@/components/shared/SacredIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-[#faf6ee] h-full shadow-2xl flex flex-col z-10 border-l border-[#d4c2a5] overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-[#d4c2a5] flex items-center justify-between bg-[#fcf8f0]">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2e5b] to-[#b3002d] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ॐ
            </span>
            <div>
              <div className="text-base font-extrabold uppercase bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] bg-clip-text text-transparent leading-tight">
                {siteConfig.name}
              </div>
              <div className="text-[10px] font-bold text-[#b89768] uppercase tracking-wider">
                Vedic Puja Services
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7b1828] hover:bg-[#f3ebd9] rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 flex-1">
          <Link
            href="/"
            onClick={onClose}
            className="block px-3 py-2.5 text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-xl transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            onClick={onClose}
            className="block px-3 py-2.5 text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-xl transition-colors"
          >
            About Us
          </Link>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-xl transition-colors"
            >
              <span>Our Puja Services</span>
              <ChevronDown
                className={`w-4 h-4 text-[#b89768] transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 my-1 border-l-2 border-[#d4c2a5] ml-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block px-3 py-1.5 text-sm font-semibold text-[#b3002d] hover:underline"
                >
                  ✦ View All Services
                </Link>
                {servicesCatalogue.map((service, idx) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    onClick={onClose}
                    className="block px-3 py-1.5 text-sm font-medium text-[#5a4a3a] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-lg transition-colors truncate"
                  >
                    {idx + 1}. {service.shortTitle || service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={onClose}
            className="block px-3 py-2.5 text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-xl transition-colors"
          >
            Gallery
          </Link>

          <Link
            href="/contact-us"
            onClick={onClose}
            className="block px-3 py-2.5 text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Bottom CTA Block */}
        <div className="p-4 border-t border-[#d4c2a5] bg-[#fcf8f0] space-y-2.5">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#e52d27] to-[#b31217] shadow-md hover:opacity-95 transition-opacity"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Puja</span>
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-white font-bold text-xs bg-gradient-to-r from-[#24d366] to-[#075e54] shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={generateQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-white font-bold text-xs bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
