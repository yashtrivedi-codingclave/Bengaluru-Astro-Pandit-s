import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingLeadBar } from "@/components/layout/FloatingLeadBar";
import { siteConfig } from "@/config/site";
import { generateOrganizationSchema } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best Vedic Puja Services in Bangalore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pandit in bangalore",
    "hindi pandit bangalore",
    "south indian pandit bangalore",
    "griha pravesh puja bangalore",
    "marriage puja pandit",
    "satyanarayan puja bangalore",
    "vedic puja services bangalore",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  },
  openGraph: {
    title: `${siteConfig.name} | Best Vedic Puja Services in Bangalore`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Best Vedic Puja Services in Bangalore`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf6ee] text-[#4b3e2f] pb-mobile-lead">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#b3002d] text-white px-4 py-2 rounded-md font-bold text-sm"
        >
          Skip to main content
        </a>

        {/* Global Devotional Header */}
        <Header />

        {/* Main Content Area */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick Action Contact Bar */}
        <FloatingLeadBar />
      </body>
    </html>
  );
}
