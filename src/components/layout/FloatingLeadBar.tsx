"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQuickWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingLeadBar() {
  const whatsappUrl = generateQuickWhatsAppUrl();
  const phoneUrl = `tel:${siteConfig.contact.phone}`;

  return (
    <>
      {/* Mobile Sticky Bottom Lead Bar (< 768px) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-white via-[#fffaf1] to-[#fffaf1] border-t border-[#d4c2a5] shadow-[0_-10px_25px_rgba(35,24,8,0.15)] p-2 grid grid-cols-2 gap-2"
        role="region"
        aria-label="Quick contact actions"
      >
        <a
          href={phoneUrl}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-white font-bold text-xs bg-gradient-to-r from-[#ff2e5b] via-[#a01a58] to-[#8b1d5a] shadow-md active:scale-95 transition-transform"
          aria-label={`Call ${siteConfig.name} now`}
        >
          <Phone className="w-4 h-4 fill-white" />
          <div className="flex flex-col text-left">
            <span className="leading-tight text-xs">Call Now</span>
            <span className="text-[9px] font-normal opacity-90 leading-tight">Book Puja Today</span>
          </div>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-white font-bold text-xs bg-gradient-to-r from-[#24d366] via-[#0a9f75] to-[#047857] shadow-md active:scale-95 transition-transform"
          aria-label={`WhatsApp ${siteConfig.name} now`}
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <div className="flex flex-col text-left">
            <span className="leading-tight text-xs">WhatsApp</span>
            <span className="text-[9px] font-normal opacity-90 leading-tight">Fast Reply</span>
          </div>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button (>= 768px) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all"
          aria-label={`Chat on WhatsApp with ${siteConfig.name}`}
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
