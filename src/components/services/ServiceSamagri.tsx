import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import type { ServiceItem } from "@/types";

export function ServiceSamagri({ service }: { service: ServiceItem }) {
  return (
    <section className="bg-[#faf6ee] py-14 sm:py-18 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#fcf8f0] border-2 border-[#d4c2a5] rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#7b1828] mb-2">
              Essential Puja Samagri & Preparations
            </h3>
            <p className="text-xs sm:text-sm text-[#6a5a4a]">
              A general checklist of pure items used during the {service.shortTitle || service.title}. We provide personalized guidance and can also arrange complete kits upon request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
            {service.samagri.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-[#e8dfcc]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#4b3e2f]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#fff2d8] border border-[#ffd700] text-xs text-[#5c0612] flex items-center gap-2">
            <Info className="w-4 h-4 flex-shrink-0 text-[#b3002d]" />
            <span>
              <strong>Note:</strong> Our Pandit ji will consult with you beforehand to verify all kitchen arrangements, fresh flowers, and prasad details to ensure a serene ceremony.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
