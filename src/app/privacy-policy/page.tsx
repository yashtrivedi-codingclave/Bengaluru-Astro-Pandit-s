import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy and devotee data handling guidelines for ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Notice of Draft Policy */}
        <div className="mb-8 p-4 rounded-xl bg-[#fff2d8] border border-[#ffd700] text-xs text-[#5c0612] flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#b3002d] mt-0.5" />
          <div>
            <strong>Editorial Notice:</strong> This document represents a standard privacy policy draft prepared for {siteConfig.legalName}. It should be reviewed and customized by your legal team upon live business deployment.
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#7b1828] mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-[#4b3e2f] leading-relaxed">
          <p>
            Last Updated: January 2026
          </p>

          <p>
            At <strong>{siteConfig.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting any personal information you share with us through our website. This Privacy Policy explains how we collect, use, and safeguard your details when you enquire about or book our Vedic puja services in Bangalore.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a puja enquiry or contact form on our website, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#5d4f3e]">
            <li>Your full name and contact information (mobile number, email address).</li>
            <li>Ceremony requirements (puja service requested, preferred date, time preference, and venue address in Bangalore).</li>
            <li>Family details voluntarily shared for ritual purposes, such as Gotra, birth star (Nakshatra), or specific ancestral names.</li>
          </ul>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used strictly to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#5d4f3e]">
            <li>Consult with you regarding auspicious Muhurat, Vedic procedures, and samagri requirements.</li>
            <li>Coordinate the arrival of our pandits at your specified venue in Bangalore.</li>
            <li>Respond to your enquiries via Phone or WhatsApp as requested.</li>
            <li>Comply with applicable legal or accounting obligations.</li>
          </ul>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            3. Data Sharing &amp; Third Parties
          </h2>
          <p>
            We respect the sacred and personal nature of family rituals. We do not sell, rent, or trade your personal information to third-party marketing companies. Form details sent via WhatsApp are handled subject to WhatsApp&apos;s end-to-end encryption and privacy standards.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            4. Security of Your Data
          </h2>
          <p>
            We implement reasonable administrative and technological safeguards to prevent unauthorized access or disclosure of your information.
          </p>

          <h2 className="text-xl font-bold font-serif text-[#7b1828] pt-4">
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or wish to have your contact details updated or removed from our records, please contact us at:
          </p>
          <div className="p-4 rounded-xl bg-[#fcf8f0] border border-[#d4c2a5] text-xs space-y-1">
            <p><strong>{siteConfig.legalName}</strong></p>
            <p>Address: {siteConfig.address}</p>
            <p>Email: {siteConfig.contact.email}</p>
            <p>Phone: {siteConfig.contact.phoneDisplay}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
