"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const headerId = `faq-header-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div
            key={index}
            className="border-2 border-[#b3002d] rounded-xl overflow-hidden bg-[#fdfbf7] shadow-[0_4px_15px_rgba(179,0,45,0.03)] transition-all"
          >
            <button
              id={headerId}
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className={`w-full flex items-center justify-between text-left px-5 py-4 cursor-pointer transition-colors ${
                isOpen ? "bg-[#fff2d8] border-b border-[#ffd700]" : "bg-[#fffaf1] hover:bg-[#fff6e6]"
              }`}
            >
              <span className="font-serif font-bold text-sm sm:text-base text-[#4b3e2f] group-hover:text-[#b3002d] pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#b3002d] flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 py-4 text-xs sm:text-sm text-[#4b3e2f] leading-relaxed bg-white"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
