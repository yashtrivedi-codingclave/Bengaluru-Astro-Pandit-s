import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${siteConfig.name}`,
  description: `Terms and conditions for booking Vedic puja services with ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Notice of Draft Terms */}
        <div className="mb-8 p-4 rounded-xl bg-[#fff2d8] border border-[#ffd700] text-xs text-[#5c0612] flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#b3002d] mt-0.5" />
          <div>
            <strong>Editorial Notice:</strong> This document represents a standard terms and conditions draft prepared for {siteConfig.legalName}. It should be reviewed and customized by your legal counsel upon live business deployment.
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#7b1828] mb-6">
          Terms &amp; Conditions
        </h1>

        <div className="space-y-6 text-sm text-[#4b3e2f] leading-relaxed">
          <p>
            Last Updated: January 2026
          </p>

          <p>
            Welcome to <strong>{siteConfig.name}</strong>. By accessing our website or submitting an enquiry to book Vedic puja services in Bangalore, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            1. Nature of Services
          </h2>
          <p>
            {siteConfig.name} facilitates authentic North Indian Vedic religious rituals, including housewarming (Griha Pravesh), weddings, satyanarayan katha, and havans conducted by learned pandits. All ceremonies are performed in good faith following traditional scriptural guidelines.
          </p>
          <p className="text-xs text-[#6a5a4a] italic">
            Disclaimer: Vedic rituals are spiritual practices and sacred traditions. We make no medical, commercial, legal, or supernatural guarantees regarding specific outcomes.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            2. Enquiry and Booking Process
          </h2>
          <p>
            Submitting a form on this website constitutes an initial booking enquiry and does not automatically confirm pandit availability or final booking. A booking is considered confirmed only after direct mutual consultation with our pandit regarding muhurat, venue feasibility, and ceremony specifics.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            3. Samagri &amp; Venue Readiness
          </h2>
          <p>
            Clients are responsible for preparing the puja venue in accordance with guidance provided (such as clean seating, proper ventilation for havan, and access to water/fire safety). If samagri is to be arranged by the client, a checklist will be provided in advance.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            4. Rescheduling and Cancellations
          </h2>
          <p>
            We recognize that family emergencies and astrological changes can occur. We request at least 24 to 48 hours notice for any rescheduling or cancellations so pandit schedules can be adjusted respectfully.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            5. Intellectual Property
          </h2>
          <p>
            The textual content, branding motifs, layout, and original graphics on this website are the intellectual property of {siteConfig.legalName} and protected by applicable copyright laws.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            6. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          </p>
        </div>
      </section>
    </main>
  );
}
