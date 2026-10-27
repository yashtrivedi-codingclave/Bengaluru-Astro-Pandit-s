import type { MetadataRoute } from "next";
import { servicesCatalogue } from "@/data/services";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const buildDate = new Date("2026-10-27T00:00:00.000Z");

  // Main static routes
  const mainRoutes = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 10 Individual service routes
  const serviceRoutes = servicesCatalogue.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainRoutes, ...serviceRoutes];
}
