import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesCatalogue, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceVidhi } from "@/components/services/ServiceVidhi";
import { ServiceSamagri } from "@/components/services/ServiceSamagri";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { RelatedServices } from "@/components/services/RelatedServices";
import { BookingForm } from "@/components/forms/BookingForm";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

export async function generateStaticParams() {
  return servicesCatalogue.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `${siteConfig.url}/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  // Generate Schemas
  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", url: "/services" },
    { name: service.title, url: `/${service.slug}` },
  ]);
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Puja Services", href: "/services" },
          { label: service.shortTitle || service.title },
        ]}
      />

      {/* Royal Banner & Intro Section */}
      <ServiceHero service={service} />

      {/* Dual Badged Cards: Benefits & Why Choose Us */}
      <ServiceBenefits service={service} />

      {/* Step-by-Step Puja Vidhi */}
      <ServiceVidhi service={service} />

      {/* Samagri Checklist & Preparation Note */}
      <ServiceSamagri service={service} />

      {/* FAQ Section */}
      <section className="bg-[#faf6ee] py-16 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#b89768] uppercase tracking-wider block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#7b1828]">
              Frequently Asked Questions about {service.shortTitle || service.title}
            </h2>
          </div>

          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentSlug={service.slug} relatedSlugs={service.relatedServices} />

      {/* Booking Form CTA Section (Target of #book anchor) */}
      <section id="book" className="bg-[#faf6ee] py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-xl mx-auto bg-gradient-to-br from-[#a51d24] via-[#7a0e12] to-[#4a0306] border-[6px] border-double border-[#d6a742] outline outline-1 outline-[#d6a742] -outline-offset-12 rounded-3xl p-6 sm:p-9 shadow-[0_15px_35px_rgba(74,3,6,0.35)] text-white relative">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#f3d082] leading-tight mb-2">
              Book Your {service.shortTitle || service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#ffe8cc] leading-snug">
              Fill in your details below to consult with Pandit ji for auspicious muhurat and ceremony arrangements in Bangalore.
            </p>
          </div>

          <BookingForm defaultService={service.title} />
        </div>
      </section>
    </main>
  );
}
