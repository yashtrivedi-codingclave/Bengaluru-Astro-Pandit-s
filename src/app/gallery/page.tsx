import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GalleryLightbox } from "@/components/shared/GalleryLightbox";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/config/site";
import { CornerOrnament, DiyaIcon } from "@/components/shared/SacredIcons";

export const metadata: Metadata = {
  title: "Devotional Gallery | Puja Ceremony Moments in Bangalore",
  description:
    "View glimpses of authentic Vedic ceremonies, Marriage Pujas, Griha Pravesh, Havan, and Satyanarayan Pujas conducted across Bangalore.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "Gallery" }]} />

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
              Devotional Glimpses
            </span>
            <DiyaIcon className="w-6 h-5" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Puja Moments &amp; Altars
          </h1>

          <p className="text-sm sm:text-base text-[#f3ebd9] leading-relaxed">
            Capturing the serenity, sacred mantras, and devotion of our South Indian Vedic rituals in Bengaluru.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <GalleryLightbox items={galleryItems} />
      </section>
    </main>
  );
}
