import React from "react";
import { siteConfig } from "@/config/site";

export function SeoContentBand() {
  return (
    <section
      className="bg-[#faf6ee] py-12 px-4 sm:px-6 border-b border-[#d4c2a5]/50"
      aria-label={`SEO information for ${siteConfig.name} | Book Vedic Puja & Rituals in Bangalore`}
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#7b1828] mb-3">
          {siteConfig.name} for Authentic Vedic Puja in Bangalore
        </h2>
        <p className="text-xs sm:text-sm text-[#5d4f3e] leading-relaxed mb-6">
          {siteConfig.name} helps families book experienced North Indian Hindi-speaking pandits for home, office, and family rituals across Bangalore. Our services include Griha Pravesh, Satyanarayan Puja, Marriage Puja, Bhumi Puja, Navgrah Shanti, Namkaran, Sunderkand Path, Mata Ki Chauki, Mahamrityunjay Jaap, and Shraddh Karma.
        </p>

        <h3 className="text-base sm:text-lg font-bold font-serif text-[#7b1828] mb-2">
          Book Trusted North Indian Puja Services Near You
        </h3>
        <p className="text-xs sm:text-sm text-[#5d4f3e] leading-relaxed">
          Each ceremony focuses on clear communication, traditional Vedic vidhi, punctual service, transparent samagri guidance, and easy direct WhatsApp and call booking so devotees across Bengaluru can plan sacred family ceremonies with complete confidence.
        </p>
      </div>
    </section>
  );
}
