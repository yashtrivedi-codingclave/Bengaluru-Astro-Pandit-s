import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { CornerOrnament } from "@/components/shared/SacredIcons";

export function Hero() {
  const whatsappUrl = generateQuickWhatsAppUrl();

  return (
    <section className="relative bg-[#faf6ee] border-b-[1.5px] border-[#d4c2a5] py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Mandala Watermarks */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 h-80 opacity-10 pointer-events-none">
        <CornerOrnament className="w-full h-full text-[#b89768]" />
      </div>
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-80 h-80 opacity-10 pointer-events-none scale-x-[-1]">
        <CornerOrnament className="w-full h-full text-[#b89768]" />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Traditional Kalash Artwork */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md aspect-square rounded-3xl p-4 bg-gradient-to-br from-[#faf6ee] via-[#f4ebd9] to-[#faf6ee] border-2 border-[#d4c2a5] shadow-[0_15px_40px_rgba(139,90,43,0.12)] flex items-center justify-center">
            {/* Inner Gold Frame */}
            <div className="absolute inset-3 border border-[#ffd700] rounded-2xl pointer-events-none" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
              <Image
                src="/images/assets/imgi_1_gkp_hero_kalash.png"
                alt="Authentic Vedic Puja Kalash, Diya, and sacred flowers for home ceremonies in Bangalore"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-1.5 mb-0.5">
                    <span>🪔</span>
                    <span>South Indian Vedic Vidhi</span>
                  </div>
                  <div className="text-sm font-semibold">
                    Home • Office • Temple Ceremonies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebd9] border border-[#d4c2a5] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b3002d] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1828]">
              Vedic Puja Services in Bangalore
            </span>
          </div>

          {/* Main Title with Gold Shimmer */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tight text-[#7b1828] leading-[1.1] mb-2 drop-shadow-[0_2px_3px_rgba(139,90,43,0.2)]">
            {siteConfig.name}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#4b3e2f] leading-snug mb-4">
            Authentic Vedic Rituals from Your Home
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#5a4a3a] leading-relaxed mb-8 max-w-xl">
            With 10+ years of expert guidance, we perform traditional South Indian pujas—from Grih Pravesh to Marriage—in the comfort of your home. Trusted for sacred blessings, precise rituals, and spiritual peace across Bengaluru.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full">
            <Link
              href="#booking-form"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e52d27] to-[#b31217] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-[0_5px_15px_rgba(179,18,23,0.3)] hover:shadow-[0_8px_25px_rgba(179,18,23,0.5)] hover:-translate-y-0.5 transition-all border border-[#ffd700]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Puja</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#24d366] to-[#075e54] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-[0_5px_15px_rgba(36,211,102,0.25)] hover:shadow-[0_8px_25px_rgba(36,211,102,0.4)] hover:-translate-y-0.5 transition-all border border-[#ffd700]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-[0_5px_15px_rgba(255,46,91,0.25)] hover:shadow-[0_8px_25px_rgba(255,46,91,0.4)] hover:-translate-y-0.5 transition-all border border-[#ffd700]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
