import React from "react";
import type { ServiceItem } from "@/types";

export function ServiceVidhi({ service }: { service: ServiceItem }) {
  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-[#b89768]">
            <span>🪔</span>
            <span className="font-bold uppercase tracking-widest text-xs">Vedic Procedure</span>
            <span>🪔</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif mb-2">
            Puja Vidhi & Step-by-Step Procedure
          </h2>
          <p className="text-sm sm:text-base text-[#5a4a3a]">
            Conducted in strict adherence to ancient North Indian Vedic scriptures and sacred traditions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.ritualSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#fcf8f0] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#b3002d] to-[#7a0016] text-[#ffd700] font-serif font-black text-xs flex items-center justify-center shadow-sm">
                  0{step.stepNumber}
                </span>
                <h3 className="font-serif font-bold text-base text-[#7b1828] group-hover:text-[#b3002d] transition-colors leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5a4a3a] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
