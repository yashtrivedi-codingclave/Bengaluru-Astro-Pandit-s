import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 max-w-[1240px] mx-auto text-xs">
      <ol className="flex items-center gap-1.5 flex-wrap text-[#6b5a4e]">
        <li className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:text-[#b3002d] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 text-[#b89768]" />
              {isLast || !item.href ? (
                <span className="font-bold text-[#b3002d]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#b3002d] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
