import React from "react";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import type { ServiceItem } from "@/types";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { CornerOrnament } from "@/components/shared/SacredIcons";

export function ServiceHero({ service }: { service: ServiceItem }) {
  const whatsappUrl = generateQuickWhatsAppUrl(
    `Hello, I would like to enquire about ${service.title} in Bangalore. Please share details and muhurat availability.`
  );

  return (
    <>
      {/* Royal Banner with Golden Mandala & Corner Ornaments */}
      <section className="relative bg-gradient-to-br from-[#2e0005] via-[#54000c] to-[#2e0005] border-b-4 border-[#ffd700] py-14 sm:py-20 px-4 sm:px-6 overflow-hidden text-white shadow-inner">
        {/* Ornaments in corners */}
        <div className="absolute top-4 left-4 opacity-15 hidden sm:block">
          <CornerOrnament className="w-20 h-20" />
        </div>
        <div className="absolute top-4 right-4 opacity-15 scale-x-[-1] hidden sm:block">
          <CornerOrnament className="w-20 h-20" />
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Banner Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-xs font-bold text-[#ffd700] uppercase tracking-[3px]">
                {siteConfig.name}
              </span>
              <span className="w-8 h-px bg-[#ffd700]" />
              <span className="text-[11px] font-semibold text-[#d4c2a5] uppercase tracking-wider">
                Authentic Vedic Rituals
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white uppercase tracking-tight mb-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
              {service.title}
            </h1>

            <div className="text-base sm:text-lg font-bold text-[#ffd700] mb-2 drop-shadow">
              {service.shortDescription}
            </div>

            <p className="text-xs sm:text-sm italic text-[#f3ebd9] font-medium max-w-xl">
              Traditional Sanskrit Mantras, Complete Samagri Guidance, and Auspicious Muhurat Consultation
            </p>
          </div>

          {/* Right Circular Medallion */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-[3px] border-double border-[#ffd700] outline outline-1 outline-[#ffd700] -outline-offset-8 bg-radial from-[#5c0612] to-[#290005] p-2.5 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={service.cardImage}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section: Service Image & Detailed Description */}
      <section className="bg-[#faf6ee] py-14 sm:py-16 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Framed Ceremony Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#b3002d] shadow-lg bg-[#fcf8f0] p-1.5">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b89768] uppercase tracking-wider mb-2">
              <span>🪔</span>
              <span>{service.hindiTitle || "वैदिक पूजा विधि"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#7b1828] leading-tight mb-2">
              {service.title} by Experienced Vedic Pandits
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#8b5a2b] mb-4">
              Welcome divine blessings, peace, and prosperity with traditional South Indian Vedic rituals in Bangalore.
            </p>

            <p className="text-sm text-[#4b3e2f] leading-relaxed mb-6">
              {service.introduction}
            </p>

            {/* WhatsApp and Call Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#24d366] to-[#075e54] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#ffd700]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#ffd700]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e52d27] to-[#b31217] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>Book This Puja</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
