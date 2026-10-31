import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesCatalogue } from "@/data/services";
import { CornerOrnament, DiyaIcon } from "@/components/shared/SacredIcons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-gradient-to-br from-[#2e0005] via-[#54000c] to-[#2e0005] border-t-[5px] border-[#d4c2a5] text-white pt-16 pb-6 overflow-hidden">
      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 opacity-15 hidden sm:block">
        <CornerOrnament className="w-24 h-24" />
      </div>
      <div className="absolute top-4 right-4 opacity-15 scale-x-[-1] hidden sm:block">
        <CornerOrnament className="w-24 h-24" />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: About Business (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Medallion Logo */}
            <div className="w-20 h-20 rounded-full border-2 border-[#d4c2a5] bg-radial from-[#5c0612] to-[#290005] shadow-lg flex items-center justify-center mb-4">
              <span className="text-4xl font-black text-[#ffd700] select-none">
                ॐ
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#ffd700] font-serif uppercase tracking-wider mb-1">
              {siteConfig.name}
            </h2>
            <div className="text-xs font-bold text-[#d4c2a5] tracking-[2.5px] uppercase mb-5">
              Authentic Vedic Pujas
            </div>

            <p className="text-sm text-[#f3ebd9] leading-relaxed mb-4 max-w-sm">
              Authentic South Indian Vedic puja services in Bangalore. Over a decade of sacred guidance performing traditional Griha Pravesh, Satyanarayan, Marriage, and Vedic ceremonies for homes and offices.
            </p>

            <div className="flex items-center gap-2 mt-2 text-[#ffd700]">
              <DiyaIcon className="w-7 h-5" />
              <span className="text-xs font-medium italic text-[#d4c2a5]">
                Dharmo Rakshati Rakshitah
              </span>
            </div>
          </div>

          {/* Col 2: Contact Information Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#fcf8f0] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 sm:p-7 shadow-xl text-[#4b3e2f]">
            <h3 className="text-lg font-bold text-[#5c0612] text-center font-serif tracking-wider uppercase mb-1">
              Contact Information
            </h3>
            <p className="text-xs font-semibold text-[#8b5a2b] text-center mb-5 uppercase tracking-wider">
              Feel Free To Contact Us!
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8b7355]">
                    Phone / Call
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8b7355]">
                    Email Support
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8b7355]">
                    Service Location
                  </div>
                  <span className="font-medium text-[#4b3e2f] text-xs leading-snug">
                    {siteConfig.address}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8b7355]">
                    Working Hours
                  </div>
                  <span className="font-medium text-[#4b3e2f] text-xs">
                    {siteConfig.workingHours}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: All 10 Services Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#fcf8f0] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 sm:p-7 shadow-xl text-[#4b3e2f]">
            <h3 className="text-lg font-bold text-[#5c0612] text-center font-serif tracking-wider uppercase mb-1">
              Our Puja Services
            </h3>
            <p className="text-xs font-semibold text-[#8b5a2b] text-center mb-5 uppercase tracking-wider">
              Explore Our Ceremonies
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {servicesCatalogue.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#f3ebd9] hover:text-[#b3002d] transition-colors group"
                >
                  <span className="w-4 h-4 rounded-full bg-[#e8dfcc] group-hover:bg-[#b3002d] text-[#5c0612] group-hover:text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0 transition-colors">
                    {index + 1}
                  </span>
                  <span className="font-semibold truncate">
                    {service.shortTitle || service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="mt-12 pt-6 border-t border-[#d4c2a5]/30 flex flex-wrap justify-center items-center gap-6 text-xs text-[#d4c2a5]">
          <Link href="/" className="hover:text-[#ffd700] transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#ffd700] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#ffd700] transition-colors">
            Puja Services
          </Link>
          <Link href="/gallery" className="hover:text-[#ffd700] transition-colors">
            Gallery
          </Link>
          <Link href="/contact-us" className="hover:text-[#ffd700] transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy-policy" className="hover:text-[#ffd700] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-[#ffd700] transition-colors">
            Terms & Conditions
          </Link>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-6 pt-4 border-t border-[#ffd700]/40 text-center text-[11px] text-[#d4c2a5] leading-relaxed">
          <p>
            © {currentYear} {siteConfig.legalName}. All Rights Reserved. Serving families across Bangalore with traditional South Indian Vedic rituals.
          </p>
        </div>
      </div>
    </footer>
  );
}
