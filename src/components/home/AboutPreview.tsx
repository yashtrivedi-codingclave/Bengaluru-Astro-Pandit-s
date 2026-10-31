import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { CornerOrnament } from "@/components/shared/SacredIcons";

export function AboutPreview() {
  const whatsappUrl = generateQuickWhatsAppUrl();
  const phoneUrl = `tel:${siteConfig.contact.phone}`;

  return (
    <section className="relative bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-b-[1.5px] border-[#d4c2a5]">
      {/* Corner Ornaments */}
      <div className="absolute -top-12 -left-12 w-48 h-48 opacity-10 pointer-events-none">
        <CornerOrnament className="w-full h-full text-[#b89768]" />
      </div>
      <div className="absolute -top-12 -right-12 w-48 h-48 opacity-10 pointer-events-none scale-x-[-1]">
        <CornerOrnament className="w-full h-full text-[#b89768]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Om & Diyas Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🪔</span>
              <span className="text-3xl font-black text-[#b38728] select-none">ॐ</span>
              <span className="text-lg">🪔</span>
            </div>

            <span className="text-xs sm:text-sm font-bold text-[#b89768] uppercase tracking-[1.5px] mb-1">
              About Us — {siteConfig.name} in Bangalore
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#7b1828] uppercase tracking-tight mb-2">
              {siteConfig.name}
            </h2>

            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#4b3e2f] mb-4">
              Authentic South Indian Puja Services
            </h3>

            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-4">
              At {siteConfig.name} in Bangalore, we provide authentic South Indian puja services for homes, offices, and auspicious family occasions. With over a decade of Vedic experience, our trusted pandits perform every ceremony with devotion, scriptural precision, and heartfelt blessings for families across Bengaluru.
            </p>

            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-8">
              We specialize in custom ceremonies tailored to your family&apos;s ancestral traditions—from Griha Pravesh and Satyanarayan Katha to grand Vivah Sanskar and Sunderkand Paths—complete with transparent samagri guidance and auspicious muhurat consultation.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#bf953f] to-[#b38728] text-[#3b2b11] font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#d4c2a5]"
              >
                <MessageCircle className="w-4 h-4 text-[#3b2b11]" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#fcf6ba] to-[#bf953f] text-[#3b2b11] font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#d4c2a5]"
              >
                <Phone className="w-4 h-4 text-[#3b2b11]" />
                <span>Call Now</span>
              </a>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#7b1828] hover:text-[#b3002d] hover:underline px-4 py-3"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Lord Ganesha Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#d4c2a5] shadow-[0_15px_40px_rgba(139,90,43,0.12)] bg-[#fcf8f0] p-3 flex flex-col justify-between">
              <div className="relative w-full h-[85%] rounded-xl overflow-hidden">
                <Image
                  src="/images/assets/imgi_2_gkp_home_ganesha.png"
                  alt="Lord Ganesha and sacred Vedic puja altar setup in Bangalore"
                  fill
                  sizes="(max-width: 768px) 90vw, 350px"
                  className="object-contain p-1"
                />
              </div>

              <div className="py-2 text-center">
                <span className="text-xs font-bold text-[#7b1828] font-serif uppercase tracking-wider block">
                  Preserving Sacred Vedic Traditions
                </span>
                <span className="text-[10px] text-[#8b7355] font-medium">
                  Experienced Hindi Pandits Across Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
