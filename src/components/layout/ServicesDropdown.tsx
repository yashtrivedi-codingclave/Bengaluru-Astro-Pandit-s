"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { servicesCatalogue } from "@/data/services";

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 text-[15px] font-bold text-[#4b3e2f] hover:text-[#b3002d] transition-colors py-2"
      >
        <span>Services</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#b3002d]" : "text-[#8b7355]"
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-72 bg-[#faf6ee] border-[1.5px] border-[#d4c2a5] rounded-2xl shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="px-3 pb-2 mb-2 border-b border-[#e8dfcc] flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest text-[#b89768] uppercase">
              10 Vedic Ceremonies
            </span>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-bold text-[#b3002d] hover:underline"
            >
              View All →
            </Link>
          </div>

          <ul className="space-y-1">
            {servicesCatalogue.map((service, idx) => (
              <li key={service.id}>
                <Link
                  href={`/${service.slug}`}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className="flex items-center gap-2.5 px-3 py-2 text-[14px] font-medium text-[#4b3e2f] hover:text-[#b3002d] hover:bg-[#f3ebd9] rounded-lg transition-colors group"
                >
                  <span className="w-5 h-5 rounded-full bg-[#f4ebd9] group-hover:bg-[#b3002d] text-[#7b1828] group-hover:text-white flex items-center justify-center text-[10px] font-bold transition-colors">
                    {idx + 1}
                  </span>
                  <span className="truncate">{service.shortTitle || service.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
