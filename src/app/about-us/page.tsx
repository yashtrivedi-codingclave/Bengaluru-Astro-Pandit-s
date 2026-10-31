import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { generalFAQs } from "@/data/faqs";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, Award, HeartHandshake, Shield, Sparkles } from "lucide-react";
import { CornerOrnament, DiyaIcon } from "@/components/shared/SacredIcons";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    `Learn about ${siteConfig.name}. Over a decade of dedicated Vedic expertise performing authentic South Indian puja services for homes and offices in Bangalore.`,
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
};

export default function AboutUsPage() {
  const whatsappUrl = generateQuickWhatsAppUrl(`Hello, I would like to know more about ${siteConfig.name} services in Bangalore.`);

  const values = [
    {
      icon: <Award className="w-7 h-7 text-[#7b1828]" />,
      title: "Vedic Authenticity",
      desc: "Every mantra and ritual strictly follows ancient scriptural guidelines, preserving the spiritual purity of Sanatana Dharma.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#7b1828]" />,
      title: "Devotional Dedication",
      desc: "We approach each ceremony with sincere reverence, understanding the emotional and spiritual significance for your family.",
    },
    {
      icon: <Shield className="w-7 h-7 text-[#7b1828]" />,
      title: "Integrity & Transparency",
      desc: "Clear upfront communication regarding samagri, timings, and dakshina without hidden fees or commercial pressure.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#7b1828]" />,
      title: "Cultural Connection",
      desc: "We explain the profound meaning behind every ritual in fluent Hindi, helping the younger generation connect with their roots.",
    },
  ];

  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
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
              Our Spiritual Heritage
            </span>
            <DiyaIcon className="w-6 h-5" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            About {siteConfig.name}
          </h1>

          <p className="text-sm sm:text-base text-[#f3ebd9] leading-relaxed">
            Bridging timeless South Indian Vedic traditions with families living in vibrant Bengaluru.
          </p>
        </div>
      </section>

      {/* Story & Background Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#d4c2a5] shadow-xl p-2 bg-[#fcf8f0]">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/assets/imgi_18_WhatsApp-Image-2025-09-07-at-10.44.26-AM-1.jpg"
                  alt="Pandit ji performing authentic Vedic havan ritual in Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="text-xs font-bold text-[#b89768] uppercase tracking-[2px] block mb-2">
              Our Journey & Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[#7b1828] mb-4 leading-tight">
              A Decade of Sacred Service in Bangalore
            </h2>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-4">
              Moving away from one&apos;s ancestral roots to cosmopolitan Bengaluru often makes it difficult to find learned pandits who perform ceremonies in familiar regional traditions. {siteConfig.name} was founded to address this very need.
            </p>
            <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-6">
              With deep mastery of Sanskrit hymns, Vedic rituals, and South Indian customs (Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, and Kerala), our pandits bring the serene sanctity of the temple directly into your drawing room, apartment, or office.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#24d366] to-[#075e54] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Today</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Devotional Values Grid */}
      <section className="bg-[#fcf8f0] py-16 px-4 sm:px-6 border-y-[1.5px] border-[#d4c2a5]">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-xs font-bold text-[#b89768] uppercase tracking-wider block mb-2">
            The Pillars of Our Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#7b1828] mb-12">
            Our Core Spiritual Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#faf6ee] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#f4ebd9] border border-[#d4c2a5] flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#7b1828] mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-[#5d4f3e] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#b89768] uppercase tracking-wider block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#7b1828]">
            Frequently Asked Questions
          </h2>
        </div>

        <FAQAccordion items={generalFAQs} />
      </section>
    </main>
  );
}
