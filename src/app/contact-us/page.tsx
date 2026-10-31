import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CornerOrnament, DiyaIcon } from "@/components/shared/SacredIcons";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    `Contact ${siteConfig.name} in Bangalore. Book experienced Hindi pandit for Griha Pravesh, Satyanarayan, Marriage, and Vedic ceremonies across Bengaluru.`,
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
};

export default function ContactUsPage() {
  const whatsappUrl = generateQuickWhatsAppUrl();
  const phoneUrl = `tel:${siteConfig.contact.phone}`;

  return (
    <main id="main-content" className="flex-1 bg-[#faf6ee]">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

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
              Connect With Pandit Ji
            </span>
            <DiyaIcon className="w-6 h-5" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Contact &amp; Enquiry
          </h1>

          <p className="text-sm sm:text-base text-[#f3ebd9] leading-relaxed">
            Reach out for auspicious muhurat consultation, puja samagri guidance, or immediate ceremony booking across Bangalore.
          </p>
        </div>
      </section>

      {/* Content Grid: Contact Details Card + Contact Form */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#fcf8f0] border-2 border-[#d4c2a5] rounded-3xl p-7 sm:p-9 shadow-md">
            <span className="text-xs font-bold text-[#b89768] uppercase tracking-wider block mb-1">
              Direct Assistance
            </span>
            <h2 className="text-2xl font-bold font-serif text-[#7b1828] mb-6">
              Get in Touch Directly
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8b7355] uppercase tracking-wider">
                    Phone / Call
                  </div>
                  <a
                    href={phoneUrl}
                    className="text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#6a5a4a] mt-0.5">
                    Available for urgent Muhurat enquiries
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8b7355] uppercase tracking-wider">
                    WhatsApp Chat
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#4b3e2f] hover:text-[#25D366] transition-colors"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                  <p className="text-xs text-[#6a5a4a] mt-0.5">
                    Instant reply with Samagri checklist
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8b7355] uppercase tracking-wider">
                    Email Support
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-xs text-[#6a5a4a] mt-0.5">
                    Replies within 24 business hours
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8b7355] uppercase tracking-wider">
                    Office / Base Address
                  </div>
                  <p className="text-sm font-medium text-[#4b3e2f] mt-0.5 leading-snug">
                    {siteConfig.address}
                  </p>
                  <p className="text-xs text-[#8b7355] mt-0.5">
                    Service available all over Bangalore
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#faf6ee] border border-[#d4c2a5] flex items-center justify-center flex-shrink-0 text-[#7b1828]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8b7355] uppercase tracking-wider">
                    Working Hours
                  </div>
                  <p className="text-sm font-medium text-[#4b3e2f] mt-0.5">
                    {siteConfig.workingHours}
                  </p>
                </div>
              </li>
            </ul>

            {/* Quick Action buttons */}
            <div className="mt-8 pt-6 border-t border-[#d4c2a5] flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#24d366] to-[#075e54] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff2e5b] to-[#b3002d] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow hover:opacity-95 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Map Area Placeholder */}
        <div className="mt-14 rounded-3xl overflow-hidden border-2 border-[#d4c2a5] bg-[#fcf8f0] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-serif font-bold text-lg text-[#7b1828]">
                Service Coverage Across Bengaluru
              </h3>
              <p className="text-xs text-[#5d4f3e]">
                We travel to all localities including Whitefield, Indiranagar, Koramangala, HSR Layout, Jayanagar, Electronic City, Yelahanka, and Marathahalli.
              </p>
            </div>
            <span className="text-xs font-bold text-[#b89768] bg-[#faf6ee] border border-[#d4c2a5] px-3 py-1.5 rounded-full">
              📍 Bengaluru, Karnataka
            </span>
          </div>

          <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-[#f4ebd9] via-[#e8dfcc] to-[#faf6ee] border border-[#d4c2a5] flex flex-col items-center justify-center text-center p-6 text-[#5a4a3a]">
            <MapPin className="w-10 h-10 text-[#b3002d] mb-2 animate-bounce" />
            <h4 className="font-bold text-base text-[#4b3e2f]">
              {siteConfig.name} — Bangalore Central Office
            </h4>
            <p className="text-xs text-[#6a5a4a] max-w-md mt-1">
              {siteConfig.address}
            </p>
            <p className="text-[11px] text-[#8b7355] mt-2 italic">
              Doorstep Vedic puja services available across East, West, North, and South Bangalore.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
