"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export function StatisticsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { target: siteConfig.stats.yearsExperience, label: "Years Of Experience", suffix: "+" },
    { target: siteConfig.stats.happyCustomers, label: "Happy Customers", suffix: "+" },
    { target: siteConfig.stats.pujasDone, label: "Pujas Done", suffix: "+" },
    { target: siteConfig.stats.verifiedPandits, label: "Verified Pandits", suffix: "+" },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out quad
      const factor = 1 - (1 - progress) * (1 - progress);

      setCounts(
        stats.map((stat) => Math.min(stat.target, Math.floor(stat.target * factor)))
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats.map((s) => s.target));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="bg-[#faf6ee] border-y-2 border-[#ffd700] py-10 px-4 sm:px-6 relative overflow-hidden"
      aria-label="Experience and Trust Statistics"
    >
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-around items-center gap-6 sm:gap-4">
        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 min-w-[180px] text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#b3002d] leading-none mb-2">
                <span>{hasAnimated ? counts[idx] : stat.target}</span>
                <span className="text-[#ffd700] ml-1 drop-shadow-sm">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4b3e2f]">
                {stat.label}
              </div>
            </div>

            {/* Vertical Divider (Hidden on small screens) */}
            {idx < stats.length - 1 && (
              <div className="hidden md:block w-px h-14 bg-gradient-to-b from-transparent via-[#ffd700] to-transparent" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
