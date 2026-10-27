import React from "react";

export default function ServiceDetailLoading() {
  return (
    <main className="flex-1 bg-[#faf6ee] animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="bg-[#efe5d5] border-b border-[#e2d5c3] py-2.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <div className="h-4 w-16 bg-[#d9c7af] rounded"></div>
          <span className="text-[#a8967e]">/</span>
          <div className="h-4 w-28 bg-[#d9c7af] rounded"></div>
          <span className="text-[#a8967e]">/</span>
          <div className="h-4 w-36 bg-[#d9c7af] rounded"></div>
        </div>
      </div>

      {/* Royal Banner Skeleton */}
      <section className="bg-gradient-to-b from-[#7a0e12] via-[#5c0612] to-[#3a0208] text-white py-12 sm:py-16 px-4 border-b-4 border-[#d6a742]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="h-6 w-32 bg-[#a51d24] rounded-full"></div>
            <div className="h-10 w-3/4 bg-white/20 rounded"></div>
            <div className="h-5 w-full bg-white/10 rounded"></div>
            <div className="h-5 w-5/6 bg-white/10 rounded"></div>
            <div className="pt-4 flex gap-4">
              <div className="h-12 w-40 bg-[#d6a742]/40 rounded-xl"></div>
              <div className="h-12 w-36 bg-white/10 rounded-xl"></div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/10 border-4 border-[#d6a742]/30"></div>
          </div>
        </div>
      </section>

      {/* Body Skeleton */}
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-[#f3ebd9] rounded-2xl border border-[#d9c7af]"></div>
          <div className="h-64 bg-[#f3ebd9] rounded-2xl border border-[#d9c7af]"></div>
        </div>
        <div className="h-72 bg-[#f3ebd9] rounded-2xl border border-[#d9c7af]"></div>
      </div>
    </main>
  );
}
