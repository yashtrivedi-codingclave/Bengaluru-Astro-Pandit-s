import React from "react";
import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="flex-1 bg-[#faf6ee] flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-md w-full text-center bg-[#fcf8f0] border-2 border-[#d4c2a5] rounded-3xl p-8 sm:p-10 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff2e5b] to-[#b3002d] text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4 shadow">
          ॐ
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-serif text-[#7b1828] mb-2">
          404
        </h1>

        <h2 className="text-lg sm:text-xl font-bold font-serif text-[#4b3e2f] mb-3">
          Page or Ceremony Not Found
        </h2>

        <p className="text-xs sm:text-sm text-[#6a5a4a] leading-relaxed mb-8">
          The page you are looking for might have been moved or does not exist. Explore our authentic Vedic services or return to the home page.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b3002d] to-[#7a0016] text-white font-bold text-sm px-6 py-3 rounded-full shadow hover:opacity-95 transition-opacity"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#f4ebd9] border border-[#d4c2a5] text-[#7b1828] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#e8dfcc] transition-colors"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
