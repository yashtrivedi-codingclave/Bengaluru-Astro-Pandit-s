import React from "react";
import { Check, Sparkles, Shield, HeartHandshake } from "lucide-react";
import type { ServiceItem } from "@/types";

export function ServiceBenefits({ service }: { service: ServiceItem }) {
  const whyChooseList = [
    "10+ years of authentic Vedic puja experience in Bangalore",
    "Expertise in all North Indian traditions and accurate Sanskrit pronunciation",
    "Personalized guidance for auspicious Muhurat and samagri requirements",
    "Performed strictly as per sacred Vedic scriptures and family gotra",
    "Trusted by hundreds of families across Bengaluru for peace and prosperity",
    "Complete support for hassle-free ceremony arrangements at Home or Office",
    "Transparent pricing and respectful, punctual service at every step",
    "Clear Hindi explanations so family members and guests connect with the ritual",
  ];

  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          {/* Card 1: Benefits */}
          <div className="relative bg-[#fcf8f0] border-2 border-[#d4c2a5] rounded-3xl p-7 pt-12 shadow-[0_10px_30px_rgba(139,90,43,0.06)]">
            {/* Top Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7a0016] to-[#b3002d] border-2 border-[#ffd700] rounded-xl px-6 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
              <span className="text-base">🏵️</span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                Benefits of {service.shortTitle || service.title}
              </h3>
              <span className="text-base">🏵️</span>
            </div>

            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#b3002d]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-[#4b3e2f] leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Why Choose Us */}
          <div className="relative bg-[#fcf8f0] border-2 border-[#d4c2a5] rounded-3xl p-7 pt-12 shadow-[0_10px_30px_rgba(139,90,43,0.06)]">
            {/* Top Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7a0016] to-[#b3002d] border-2 border-[#ffd700] rounded-xl px-6 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
              <span className="text-base">🏵️</span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                Why Choose Us for Puja
              </h3>
              <span className="text-base">🏵️</span>
            </div>

            <ul className="space-y-4">
              {whyChooseList.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#b8860b]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-[#4b3e2f] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
