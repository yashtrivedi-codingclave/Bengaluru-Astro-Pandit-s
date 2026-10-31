import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export function DiwaliPujaSection() {
  const whatsappUrl = generateQuickWhatsAppUrl(
    `Namaste, I am visiting the ${siteConfig.name} website and would like to book Diwali Lakshmi Puja / Go Puja in Bangalore. Please share details.`
  );

  return (
    <section className="bg-[#fcf8f0] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg">🪔</span>
            <span className="text-lg">🪔</span>
            <span className="text-lg">🪔</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#b89768] uppercase tracking-[1.5px]">
            Festival Special
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif leading-tight mt-1">
            Diwali Puja in Bangalore
          </h2>
          <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed max-w-[750px] mx-auto mt-3">
            Welcome Goddess Lakshmi into your home and business this Deepavali with traditional South Indian Vedic vidhi performed by our experienced pandits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diwali Lakshmi Puja */}
          <div className="bg-[#faf6ee] border border-[#d4c2a5] rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(139,90,43,0.08)]">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#7b1828] mb-3">
              Deepavali Lakshmi Kubera Puja
            </h3>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-3">
              On the auspicious Amavasya night of Deepavali, our pandits perform Ganapati Puja, Kalash Sthapana, Lakshmi Kubera Puja, and Deepa Aradhana at the correct Pradosh Kaal muhurat, inviting wealth, health, and harmony into your family.
            </p>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed">
              We also conduct Diwali puja for shops, offices, and new account books (Chopda / Lekha Puja), with complete samagri guidance so you can celebrate without any worry.
            </p>
          </div>

          {/* Go Puja */}
          <div className="bg-[#faf6ee] border border-[#d4c2a5] rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(139,90,43,0.08)]">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#7b1828] mb-3">
              Go Puja (Gau Puja)
            </h3>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-3">
              In Sanatana Dharma the cow is revered as Gau Mata, the abode of all devatas. Go Puja, traditionally performed on Bali Padyami during Deepavali, involves bathing and decorating the cow and calf with turmeric, kumkum, and flower garlands, followed by aarti and offerings of fresh grass, jaggery, and fruits.
            </p>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed">
              Performing Go Puja is believed to remove doshas, bring prosperity, and bless the family with peace. Our pandits can arrange Go Puja at a nearby goshala in Bangalore or perform it at your home.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#bf953f] to-[#b38728] text-[#3b2b11] font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all border border-[#d4c2a5]"
          >
            <MessageCircle className="w-4 h-4 text-[#3b2b11]" />
            <span>Book Diwali Puja on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
