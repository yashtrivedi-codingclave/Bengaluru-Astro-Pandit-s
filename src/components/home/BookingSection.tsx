import React from "react";
import Image from "next/image";
import { BookingForm } from "@/components/forms/BookingForm";
import { LotusDivider } from "@/components/shared/SacredIcons";
import { siteConfig } from "@/config/site";

export function BookingSection() {
  const featureCards = [
    {
      eyebrow: "Our Services",
      title: "Puja for Every Occasion",
      description:
        `Find experienced Vedic pandits in Bangalore for all your sacred ceremonies with ${siteConfig.name}. We specialize in Griha Pravesh, Satyanarayan Puja, Vivah, and all other Vedic rituals.`,
      image: "/images/assets/imgi_3_Untitled-design-3.png",
    },
    {
      eyebrow: "Convenience & Expertise",
      title: "Hassle-Free Puja Experience",
      description:
        "Our team of Hindi-speaking pandits in Bangalore ensures an authentic, smooth ceremony. We provide complete samagri guidance so you can focus entirely on divine moments.",
      image: "/images/assets/imgi_4_Untitled-design-4.png",
    },
    {
      eyebrow: "All-Inclusive Packages",
      title: "Vedic Rituals, Seamlessly Done",
      description:
        "Whether it is a new home blessing with Griha Pravesh or a sacred Satyanarayan Katha, our services cover every detail with transparent guidance tailored to your family.",
      image: "/images/assets/imgi_10_Untitled-design-10.jpg",
    },
    {
      eyebrow: "Trust & Reliability",
      title: "Certified & Experienced Pandits",
      description:
        "We are a team of trusted, South Indian pandits in Bangalore well-versed in Vedic scriptures, dedicated to bringing peace, health, and prosperity through authentic rituals.",
      image: "/images/assets/imgi_1_gkp_hero_kalash.png",
    },
  ];

  return (
    <section className="bg-[#faf6ee] py-16 sm:py-24 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]" id="booking-form">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-[#b89768]">
            <span>🪔</span>
            <span className="text-2xl font-black text-[#b89768]">ॐ</span>
            <span>🪔</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif mb-2">
            Book Your Puja with {siteConfig.name}
          </h2>

          <p className="text-sm sm:text-base text-[#4b3e2f]">
            Performing Griha Pravesh, Satyanarayan Puja & All Vedic Rituals in Bangalore
          </p>
        </div>

        {/* 2-Column Flex/Grid: Left 2x2 Feature Cards, Right Booking Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Side: 2x2 Feature Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#faf6ee] border-[3px] border-double border-[#7b1828] rounded-2xl p-6 relative shadow-[0_6px_15px_rgba(123,24,40,0.05)] flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Floating Corner Thumbnail */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full border border-[#d4c2a5] overflow-hidden opacity-90 group-hover:scale-105 transition-transform bg-white">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="mb-4 pr-16">
                  <span className="text-[11px] font-bold text-[#b89768] uppercase tracking-wider block mb-1">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#7b1828] leading-tight">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5d4f3e] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                <div className="flex justify-center mt-auto pt-2 border-t border-[#d4c2a5]/30">
                  <LotusDivider className="w-6 h-6 text-[#7b1828]" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Red & Gold Royal Booking Form Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#a51d24] via-[#7a0e12] to-[#4a0306] border-[6px] border-double border-[#d6a742] outline outline-1 outline-[#d6a742] -outline-offset-12 rounded-3xl p-6 sm:p-9 shadow-[0_15px_35px_rgba(74,3,6,0.35)] text-white relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#f3d082] leading-tight mb-2">
                Book Your Puja in Bangalore Today
              </h3>
              <p className="text-xs sm:text-sm text-[#ffe8cc] leading-snug">
                Schedule your Griha Pravesh, Satyanarayan Puja, or any other ritual with ease.
              </p>
            </div>

            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
