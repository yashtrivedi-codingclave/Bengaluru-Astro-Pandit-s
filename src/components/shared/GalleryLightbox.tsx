"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/types";

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Marriage",
    "Griha Pravesh",
    "Havan",
    "Satyanarayan",
    "Mata Ki Chauki",
    "Other Rituals",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [activeImageIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! === 0 ? filteredItems.length - 1 : prev! - 1
    );
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#b3002d] to-[#7a0016] text-white shadow-md border-2 border-[#ffd700]"
                : "bg-[#f4ebd9] text-[#4b3e2f] border border-[#d4c2a5] hover:bg-[#e8dfcc]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden bg-[#f4ebd9] border-[1.5px] border-[#d4c2a5] shadow-md hover:shadow-xl transition-all cursor-pointer card-devotional"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffd700] block mb-1">
                    {item.category}
                  </span>
                  <p className="text-sm font-bold leading-tight">{item.title}</p>
                </div>
                <div className="ml-auto w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#fcf8f0]">
              <div className="text-[11px] font-bold text-[#b89768] uppercase tracking-wider mb-1">
                {item.category}
              </div>
              <h3 className="font-serif font-bold text-base text-[#7b1828] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#5a4a3a] line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={filteredItems[activeImageIndex].imageUrl}
                alt={filteredItems[activeImageIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-bold text-[#ffd700] uppercase tracking-wider block mb-1">
                {filteredItems[activeImageIndex].category}
              </span>
              <h4 className="text-lg font-bold font-serif">
                {filteredItems[activeImageIndex].title}
              </h4>
              <p className="text-xs text-white/80 mt-1">
                {filteredItems[activeImageIndex].description}
              </p>
              <div className="text-[11px] text-white/50 mt-2">
                Image {activeImageIndex + 1} of {filteredItems.length} • Use Arrow Keys to Navigate
              </div>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
