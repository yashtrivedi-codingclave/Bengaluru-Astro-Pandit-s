import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesCatalogue } from "@/data/services";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesSection() {
  // First 6 are rectangular cards, next 4 are capsule cards
  const rectangularServices = servicesCatalogue.slice(0, 6);
  const capsuleServices = servicesCatalogue.slice(6, 10);

  return (
    <section className="bg-[#faf6ee] py-16 sm:py-24 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]" id="services">
      <div className="max-w-[1180px] mx-auto">
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-sm text-[#b89768]">
            <span>🪔</span>
            <span className="text-2xl font-black text-[#b89768]">ॐ</span>
            <span>🪔</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif mb-4">
            Our Puja Services in Bangalore
          </h2>

          <p className="text-sm sm:text-base text-[#4b3e2f] leading-relaxed">
            Authentic South Indian Vedic rituals in Bangalore performed with 10+ years of expertise. From Marriage Puja to Satyanarayan Katha, we ensure auspicious ceremonies, accurate mantras, and divine blessings for your home, office, and family.
          </p>
        </div>

        {/* Rows 1 & 2: 6 Rectangular Cards (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {rectangularServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#f4ebd9] border-[1.5px] border-[#d4c2a5] rounded-[28px] p-8 pt-10 flex flex-col items-center text-center shadow-[0_10px_25px_rgba(139,90,43,0.08)] hover:shadow-[0_15px_35px_rgba(139,90,43,0.15)] hover:-translate-y-1.5 transition-all duration-300 card-devotional"
            >
              {/* Circular Icon Frame */}
              <div className="w-36 h-36 rounded-full border-[1.5px] border-[#b89768] bg-white p-2.5 flex items-center justify-center mb-6 overflow-hidden shadow-inner">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={service.cardImage}
                    alt={service.imageAlt}
                    fill
                    sizes="144px"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-serif text-[#7b1828] mb-3 leading-snug">
                {service.shortTitle || service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5d4f3e] leading-relaxed mb-6 flex-1">
                {service.shortDescription}
              </p>

              {/* Book Now Button */}
              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/${service.slug}`}
                  className="font-bold text-sm text-[#7b1828] underline hover:text-[#b3002d] transition-colors py-1"
                >
                  Learn More
                </Link>
                <span className="text-[#b89768]">•</span>
                <Link
                  href={`/${service.slug}#book`}
                  className="inline-flex items-center gap-1 font-bold text-sm text-[#b3002d] hover:text-[#7b1828] transition-colors py-1"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: 4 Capsule Cards (4 columns on desktop, responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capsuleServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#f4ebd9] border-[1.5px] border-[#d4c2a5] rounded-[32px] lg:rounded-[90px] p-6 lg:py-10 lg:px-4 flex flex-col items-center text-center shadow-[0_10px_25px_rgba(139,90,43,0.08)] hover:shadow-[0_15px_35px_rgba(139,90,43,0.15)] hover:-translate-y-1.5 transition-all duration-300 card-devotional"
            >
              {/* Circular Icon Frame */}
              <div className="w-28 h-28 rounded-full border-[1.5px] border-[#b89768] bg-white p-2 flex items-center justify-center mb-5 overflow-hidden shadow-inner">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={service.cardImage}
                    alt={service.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-serif text-[#7b1828] mb-2 leading-snug">
                {service.shortTitle || service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#5d4f3e] leading-relaxed mb-5 flex-1 line-clamp-3">
                {service.shortDescription}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-auto">
                <Link
                  href={`/${service.slug}`}
                  className="font-bold text-xs text-[#7b1828] underline hover:text-[#b3002d] transition-colors"
                >
                  View Vidhi
                </Link>
                <span className="text-[#b89768]">•</span>
                <Link
                  href={`/${service.slug}#book`}
                  className="font-bold text-xs text-[#b3002d] hover:text-[#7b1828] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-[1.5px] border-[#b89768] rounded-full px-10 py-3.5 text-[#7b1828] font-bold text-base hover:bg-[#7b1828] hover:text-white hover:border-[#7b1828] transition-all duration-300 shadow-sm"
          >
            <span>Explore All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
