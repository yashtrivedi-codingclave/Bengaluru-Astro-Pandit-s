import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PujaProcess } from "@/components/home/PujaProcess";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { BookingSection } from "@/components/home/BookingSection";
import { StatisticsCounter } from "@/components/home/StatisticsCounter";
import { SeoContentBand } from "@/components/home/SeoContentBand";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Best Vedic Puja Services in Bangalore`,
  description:
    "Book verified North Indian Hindi pandit in Bangalore for Griha Pravesh, Satyanarayan, Marriage, Bhumi Puja & Vedic rituals. Experienced pandits with complete samagri.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | Best Puja Services in Bangalore`,
    description:
      "Book verified Hindi pandit in Bangalore for Griha Pravesh, Satyanarayan, Marriage, Bhumi Puja & Vedic rituals. Experienced pandits with complete samagri.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* About Us Preview */}
      <AboutPreview />

      {/* Why Choose Us 3-Card Grid */}
      <WhyChooseUs />

      {/* 4-Step Vedic Puja Process */}
      <PujaProcess />

      {/* Our 10 Puja Services */}
      <ServicesSection />

      {/* Devotee Testimonials */}
      <Testimonials />

      {/* Trust Features & Booking Form */}
      <BookingSection />

      {/* Animated Live Counter / Statistics */}
      <StatisticsCounter />

      {/* SEO Content Band */}
      <SeoContentBand />
    </main>
  );
}
