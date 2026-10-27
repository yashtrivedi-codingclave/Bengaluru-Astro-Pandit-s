import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#fffaf1] via-[#fff2d8] to-[#fffaf1] py-16 sm:py-24 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5] overflow-hidden">
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

      <div className="max-w-[1220px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7a0016] to-[#b3002d] text-[#ffd700] text-xs font-extrabold uppercase tracking-[2.5px] px-5 py-2 rounded-full shadow-md mb-4">
            <Star className="w-3.5 h-3.5 fill-[#ffd700]" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#4a2600] leading-tight mb-3">
            What Our{" "}
            <span className="bg-gradient-to-b from-[#ff2e5b] to-[#b3002d] bg-clip-text text-transparent">
              Devotees
            </span>{" "}
            Say
          </h2>

          <p className="text-sm sm:text-base text-[#6b5a4e] leading-relaxed mb-6">
            Hear from families across Bengaluru who experienced authentic Vedic rituals and spiritual peace with our trusted {siteConfig.name}.
          </p>

          {/* Google Review Trust Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2 px-4 sm:px-5 rounded-2xl sm:rounded-full bg-white/80 backdrop-blur-sm border border-[#d4c2a5] shadow-sm max-w-full">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <div className="flex items-center gap-1 font-bold text-sm text-[#4a2600]">
                <span className="text-[#4285F4] font-black">G</span>
                <span className="text-[#EA4335] font-black">o</span>
                <span className="text-[#FBBC05] font-black">o</span>
                <span className="text-[#4285F4] font-black">g</span>
                <span className="text-[#34A853] font-black">l</span>
                <span className="text-[#EA4335] font-black">e</span>
                <span className="text-sm sm:text-base font-extrabold ml-1">4.9 / 5.0</span>
              </div>
              <div className="flex gap-0.5 text-[#ffc107]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#ffc107]" />
                ))}
              </div>
            </div>
            <span className="text-xs font-semibold text-[#8b7355] sm:border-l sm:border-[#d4c2a5] sm:pl-3 whitespace-nowrap">
              200+ Devotee Experiences
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#fdfbf7] border-2 border-[#b3002d] rounded-2xl p-5 sm:p-7 pt-8 sm:pt-9 flex flex-col justify-between shadow-[0_8px_32px_rgba(179,0,45,0.04)] hover:shadow-[0_16px_36px_rgba(179,0,45,0.12)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Inner Gold Frame */}
              <div className="absolute inset-1.5 border border-[#ffd700] rounded-xl pointer-events-none" />

              {/* Floating Quote Icon */}
              <div className="absolute top-4 right-5 w-9 h-9 rounded-full bg-gradient-to-br from-[#7a0016] to-[#b3002d] border border-[#ffd700] flex items-center justify-center shadow-sm">
                <Quote className="w-4 h-4 text-[#ffd700] fill-[#ffd700]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10 text-[#ffc107]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffc107]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#4b3e2f] italic leading-relaxed mb-6 flex-1 relative z-10">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* Author Row */}
              <div className="pt-4 border-t border-[#d4c2a5]/40 flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-full border-2 border-[#ffd700] bg-gradient-to-br from-[#7a0016] to-[#b3002d] text-[#ffd700] font-serif font-black text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.avatarLetter}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#b3002d] leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#8b7355] flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                    <span>Verified • {item.location}</span>
                  </div>
                </div>
              </div>

              {/* Puja Tag */}
              <div className="mt-4 pt-1 relative z-10">
                <span className="inline-block text-[11px] font-bold text-[#ffd700] bg-gradient-to-r from-[#7a0016] to-[#b3002d] px-3 py-1 rounded-full border border-[#ffd700] shadow-sm">
                  {item.tagEmoji} {item.serviceBooked}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
