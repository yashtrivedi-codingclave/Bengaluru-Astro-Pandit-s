import React from "react";
import { OmSymbol } from "./SacredIcons";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  showOm?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  showOm = true,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "text-left"} ${className}`}>
      {showOm && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? "justify-center" : "justify-start"}`}>
          <span className="text-sm">🪔</span>
          <span className="text-xl font-black text-[#b89768]">ॐ</span>
          <span className="text-sm">🪔</span>
        </div>
      )}

      {eyebrow && (
        <div className="text-xs sm:text-sm font-bold text-[#b89768] uppercase tracking-[2px] mb-2">
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7b1828] font-serif tracking-tight leading-snug">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#5a4a3a] leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative Gold Underline */}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <div className="w-12 h-0.5 bg-[#d4c2a5]" />
        <div className="w-2 h-2 rotate-45 bg-[#ffd700]" />
        <div className="w-12 h-0.5 bg-[#d4c2a5]" />
      </div>
    </div>
  );
}
