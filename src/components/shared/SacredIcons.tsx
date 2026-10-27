import React from "react";

export function OmSymbol({ className = "w-6 h-6 text-amber-600" }: { className?: string }) {
  return (
    <span className={`inline-block font-serif font-black select-none ${className}`} aria-hidden="true">
      ॐ
    </span>
  );
}

export function DiyaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="diyaGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </radialGradient>
      </defs>
      <path
        d="M5,18 C5,12 15,12 20,12 C25,12 35,12 35,18 C35,24 25,26 20,26 C15,26 5,24 5,18 Z"
        fill="none"
        stroke="url(#diyaGold)"
        strokeWidth="1.8"
      />
      <path d="M20,12 C18,10 20,3 20,3 C20,3 22,10 20,12 Z" fill="#ff3300" stroke="#ffd700" strokeWidth="0.8" />
      <circle cx="20" cy="11" r="1.5" fill="#ffd700" />
    </svg>
  );
}

export function KalashIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#d4a347" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>
      {/* Coconut peak */}
      <path d="M32 6 L26 18 H38 Z" fill="url(#kalashGold)" />
      {/* Mango leaves */}
      <path d="M20 22 C14 16 18 10 26 18" stroke="url(#kalashGold)" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 22 C50 16 46 10 38 18" stroke="url(#kalashGold)" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20 C32 12 32 10 32 18" stroke="url(#kalashGold)" strokeWidth="2" strokeLinecap="round" />
      {/* Pot neck */}
      <path d="M24 22 H40 V26 H24 Z" fill="url(#kalashGold)" />
      {/* Pot belly */}
      <path d="M24 26 C16 30 16 46 22 52 H42 C48 46 48 30 40 26 Z" fill="url(#kalashGold)" opacity="0.85" />
      {/* Swastik / Motif on pot */}
      <path d="M32 34 V44 M27 39 H37" stroke="#7a0016" strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <path d="M25 52 H39 V56 H25 Z" fill="url(#kalashGold)" />
    </svg>
  );
}

export function LotusDivider({ className = "w-8 h-8 text-amber-700" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6C14,7.1 13.1,8 12,8A2,2 0 0,1 10,6C10,4.9 10.9,4 12,4M12,18C8.69,18 6,15.31 6,12C6,10.9 6.29,9.88 6.81,9C8.62,11.22 10.14,12.56 12,13.78C13.86,12.56 15.38,11.22 17.19,9C17.71,9.88 18,10.9 18,12C18,15.31 15.31,18 12,18Z" />
    </svg>
  );
}

export function CornerOrnament({ className = "w-24 h-24 pointer-events-none" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#ffd700" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10,10 H90 V30 C90,30 70,35 60,60 C50,85 10,90 10,90 Z" />
      <path d="M20,20 H80 V35 Q60,40 50,65 Q40,90 20,80 Z" strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill="#ffd700" />
    </svg>
  );
}

export function StepDivider({ className = "w-6 h-40 hidden md:block" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 20 0 Q 10 50 20 100 T 20 200 T 20 300" stroke="#b3002d" strokeWidth="1.5" />
      <g transform="translate(20, 60)">
        <path d="M0,0 C-10,-5 -15,5 0,15 C15,5 10,-5 0,0" fill="#b3002d" />
        <circle cx="0" cy="-5" r="2" fill="#ffd700" />
      </g>
      <g transform="translate(20, 150) scale(0.8)">
        <path d="M0,0 C-10,-5 -15,5 0,15 C15,5 10,-5 0,0" fill="#b3002d" />
        <circle cx="0" cy="-5" r="2" fill="#ffd700" />
      </g>
      <g transform="translate(20, 240)">
        <path d="M0,0 C-10,-5 -15,5 0,15 C15,5 10,-5 0,0" fill="#b3002d" />
        <circle cx="0" cy="-5" r="2" fill="#ffd700" />
      </g>
    </svg>
  );
}
