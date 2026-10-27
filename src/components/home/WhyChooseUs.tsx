import React from "react";
import { Award, Star, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const cards = [
    {
      icon: <Award className="w-8 h-8 text-[#7b1828]" />,
      title: "Experienced & Trusted Vedic Pandit",
      description:
        "With 10+ years of Vedic experience, our learned pandits ensure every ritual, mantra, and offering is performed with utmost devotion and precision.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#7b1828]" />,
      title: "Authentic North Indian Puja Vidhi",
      description:
        "All ceremonies follow traditional Vedic procedures guided strictly by scriptures, ensuring auspicious results and divine harmony for your household.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#7b1828]" />,
      title: "Personalized Rituals for Every Occasion",
      description:
        "From Marriage Puja to Satyanarayan Katha, every ceremony is tailored to your family's regional traditions, gotra, and auspicious muhurat.",
    },
  ];

  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif leading-tight">
              Why Choose Our Puja Services in Bangalore
            </h2>
          </div>
          <div className="lg:col-span-6 text-center lg:text-left space-y-2 text-sm sm:text-base text-[#5a4a3a]">
            <p>
              We perform all pujas with authentic Vedic rituals, mantras, and procedures guided strictly by sacred scriptures.
            </p>
            <p>
              Every ceremony is conducted with pure devotion to bring peace, prosperity, and spiritual harmony into your life.
            </p>
          </div>
        </div>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#fdfcf7] border-[1.5px] border-[#e8dfcc] hover:border-[#d4c2a5] rounded-2xl p-8 sm:p-9 flex flex-col items-center text-center shadow-[0_6px_15px_rgba(139,90,43,0.03)] hover:shadow-[0_12px_25px_rgba(139,90,43,0.08)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#faf6ee] border-[1.5px] border-[#d4c2a5] flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#4b3e2f] mb-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm text-[#6a5a4a] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
