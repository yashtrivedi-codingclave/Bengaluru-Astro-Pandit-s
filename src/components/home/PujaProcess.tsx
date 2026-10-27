import React from "react";
import { Laptop, PhoneCall, Home, Gift, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { StepDivider } from "@/components/shared/SacredIcons";

export function PujaProcess() {
  const whatsappUrl = generateQuickWhatsAppUrl();
  const phoneUrl = `tel:${siteConfig.contact.phone}`;

  const steps = [
    {
      num: "01",
      icon: <Laptop className="w-8 h-8 text-[#b8860b]" />,
      title: "Book Online",
      description: "Select your desired Puja and submit an enquiry easily through our secure portal.",
    },
    {
      num: "02",
      icon: <PhoneCall className="w-8 h-8 text-[#b8860b]" />,
      title: "Traditional Consultation",
      description: "Our head Pandit ji calls you to discuss rituals, confirm the auspicious muhurat, and guide on samagri.",
    },
    {
      num: "03",
      icon: <Home className="w-8 h-8 text-[#b8860b]" />,
      title: "Sacred Vedic Ceremony",
      subtitle: "(Customer's Choice)",
      description: "Conducted with complete devotion at your chosen venue: Home, Apartment, Office, or consecrated Temple.",
    },
    {
      num: "04",
      icon: <Gift className="w-8 h-8 text-[#b8860b]" />,
      title: "Prasad & Completion",
      description: "Following the ceremony, blessed prasad and traditional post-puja blessings are shared with all devotees.",
    },
  ];

  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-[#b89768]">
            <span>🪔</span>
            <span className="font-bold uppercase tracking-widest text-xs">Easy & Transparent</span>
            <span>🪔</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5c0612] font-serif leading-snug mb-3">
            A Journey of Devotion: Our 4-Step Vedic Puja Process in Bangalore
          </h2>
          <p className="text-sm sm:text-base text-[#4b3e2f]">
            From initial booking to divine blessings, experience a seamless and sacred spiritual journey.
          </p>
        </div>

        {/* 4 Steps Row with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative items-start">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="flex flex-col items-center text-center group px-2">
                {/* Icon Wrap */}
                <div className="w-24 h-24 rounded-full bg-radial from-[#fff6e0] to-[#d4c2a5]/30 border border-[#d4c2a5] shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Number Badge with gold bar */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#f3ebd9] to-[#d4c2a5] border-2 border-[#b3002d] text-[#5c0612] font-serif font-bold text-lg flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-gradient-to-r from-[#a87c33] via-[#ffd700] to-[#a87c33] rounded-full shadow-sm" />
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-[#5c0612] mb-1 leading-snug">
                  {step.title}
                  {step.subtitle && (
                    <span className="block text-xs font-semibold text-[#8b5a2b] mt-0.5">
                      {step.subtitle}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4b3e2f] leading-relaxed mt-1 max-w-xs">
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 sm:mt-14 flex flex-wrap justify-center items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#b3002d] to-[#7a0016] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#ffd700]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Now</span>
          </a>

          <a
            href={phoneUrl}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#b3002d] to-[#7a0016] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#ffd700]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
