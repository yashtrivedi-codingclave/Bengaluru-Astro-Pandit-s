import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesCatalogue } from "@/data/services";

export function RelatedServices({ currentSlug, relatedSlugs }: { currentSlug: string; relatedSlugs: string[] }) {
  const related = servicesCatalogue
    .filter((s) => s.slug !== currentSlug && (relatedSlugs.includes(s.slug) || true))
    .slice(0, 3);

  return (
    <section className="bg-[#faf6ee] py-14 sm:py-20 px-4 sm:px-6 border-b-[1.5px] border-[#d4c2a5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#b89768] uppercase tracking-wider block mb-1">
            Explore More Ceremonies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#7b1828]">
            Related Vedic Puja Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((service) => (
            <div
              key={service.id}
              className="bg-[#f4ebd9] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group card-devotional"
            >
              <div className="w-24 h-24 rounded-full border border-[#b89768] bg-white p-1.5 overflow-hidden mb-4 shadow-inner">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={service.cardImage}
                    alt={service.imageAlt}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="font-serif font-bold text-lg text-[#7b1828] mb-2 leading-snug">
                {service.shortTitle || service.title}
              </h3>

              <p className="text-xs text-[#5d4f3e] leading-relaxed mb-4 flex-1 line-clamp-2">
                {service.shortDescription}
              </p>

              <Link
                href={`/${service.slug}`}
                className="inline-flex items-center gap-1.5 font-bold text-xs text-[#b3002d] hover:text-[#7b1828] transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
