import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { servicesCatalogue } from "@/data/services";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { CornerOrnament, DiyaIcon } from "@/components/shared/SacredIcons";

export const metadata: Metadata = {
  title: `All Vedic Puja Services in Bangalore | ${siteConfig.name}`,
  description:
    `Explore all 10 Vedic Puja services in Bangalore by ${siteConfig.name}: Griha Pravesh, Satyanarayan, Marriage, Bhumi Puja, Navgrah Shanti, Sunderkand, and more.`,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "Puja Services" }]} />

      {/* Royal Banner */}
      <section className="relative bg-gradient-to-br from-[#2e0005] via-[#54000c] to-[#2e0005] border-b-4 border-[#ffd700] py-16 sm:py-20 px-4 sm:px-6 text-white text-center overflow-hidden">
        <div className="absolute top-4 left-4 opacity-15 hidden sm:block">
          <CornerOrnament className="w-20 h-20" />
        </div>
        <div className="absolute top-4 right-4 opacity-15 scale-x-[-1] hidden sm:block">
          <CornerOrnament className="w-20 h-20" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DiyaIcon className="w-6 h-5" />
            <span className="text-xs font-bold text-[#ffd700] uppercase tracking-[3px]">
              Vedic Services Catalogue
            </span>
            <DiyaIcon className="w-6 h-5" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Our Sacred Puja Services
          </h1>

          <p className="text-sm sm:text-base text-[#f3ebd9] leading-relaxed">
            All 10 authentic North Indian Vedic ceremonies performed at your home, office, or temple in Bangalore.
          </p>
        </div>
      </section>

      {/* Complete 10 Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesCatalogue.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#f4ebd9] border-[1.5px] border-[#d4c2a5] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group card-devotional"
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                <Image
                  src={service.heroImage}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#7b1828]/90 text-[#ffd700] text-[11px] font-bold px-3 py-1 rounded-full border border-[#ffd700]">
                  #{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#fcf8f0]">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#7b1828] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5d4f3e] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-[#6a5a4a]">
                    {service.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#d4c2a5]/40 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}`}
                    className="font-bold text-xs sm:text-sm text-[#7b1828] hover:text-[#b3002d] transition-colors"
                  >
                    View Vidhi &amp; Samagri →
                  </Link>
                  <Link
                    href={`/${service.slug}#book`}
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-[#e52d27] to-[#b31217] text-white text-xs font-bold px-4 py-2 rounded-full shadow hover:opacity-95 transition-opacity"
                  >
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="bg-[#fcf8f0] py-14 px-4 sm:px-6 border-t border-[#d4c2a5]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#7b1828] mb-3">
            Looking for a Ceremony Not Listed Here?
          </h2>
          <p className="text-sm text-[#5a4a3a] leading-relaxed mb-6">
            We perform over 30 specialized Vedic rites, including Annaprashan, Janeu Sanskar, Vastu Shanti Havan, and Kundali Dosh Nivaran. Connect directly with our head pandit for custom ceremony consultations.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b3002d] to-[#7a0016] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Pandit Ji</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
