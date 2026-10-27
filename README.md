# Bengaluru Astro Pandit's — Vedic Puja Services in Bangalore

**Live Website**: [https://bengaluru-astro-pandit-s.vercel.app/](https://bengaluru-astro-pandit-s.vercel.app/)

A production-ready, commercial-grade Next.js web application for Bengaluru Astro Pandit's, inspired by the structure and user journeys of Vedic spiritual service platforms. Built with modern Next.js App Router architecture, TypeScript (strict mode), Tailwind CSS, Lucide icons, and React Hook Form + Zod validation.

---

## 🌟 Key Features

- **Devotional Visual Identity**: Warm cream backgrounds (`#FAF6EE`), deep royal maroon headers (`#7B1828` / `#5C0612`), saffron/gold accents (`#FFD700`, `#B89768`), and ornamental sacred motifs (ॐ, Diyas, Kalash, Lotus dividers).
- **All 17 Specified Routes Fully Implemented**:
  - `GET /` — Homepage with all 10 major sections
  - `GET /about-us` — Business story, North Indian Vedic expertise, values, and FAQ accordion
  - `GET /services` — Master catalogue of all 10 Vedic ceremonies
  - `GET /gallery` — Responsive category-filtered photo gallery with image lightbox modal
  - `GET /contact-us` — Contact card, direct WhatsApp/Call links, enquiry form, and Bangalore coverage map area
  - `GET /privacy-policy` — Draft policy for devotee data handling
  - `GET /terms-and-conditions` — Draft service agreement and traditional disclaimer
  - **10 Individual Service Detail Pages**:
    1. `/marriage-puja` — Vivah Sanskar, Saptapadi, Kanyadaan, and Havan
    2. `/gruh-pravesh-puja` — Housewarming, Vastu Shanti, Kalash Yatra, Milk boiling
    3. `/bhumi-puja` — Land blessing, Shila Sthapana, foundation consecration
    4. `/navgrah-shanti-puja` — 9 Planetary dosha pacification with specific samidha woods
    5. `/mahamrityunjay-jaap` — Devotional Shiva chanting, Rudrabhishek, and Havan
    6. `/ramayan-sunderkand` — Musical chaupai recitation and Hanuman Ji puja
    7. `/mata-ki-chauki` — Maa Durga devotional gathering, Akhand Jyot, and Bhents
    8. `/satyanarayan-puja` — Lord Vishnu Katha, banana pillar altar, and Panchamrit
    9. `/namkaran-puja` — Newborn naming ceremony, Nakshatra calculation, cradle blessing
    10. `/shraddh-karma` — Ancestral Tarpan, Pind Daan, and Pitru Paksha rites
- **Interactive Booking Enquiry Flow**:
  - Validated with React Hook Form + Zod.
  - Automatically formats structured enquiry details into a pre-filled WhatsApp click-to-chat message (`https://wa.me/...`).
  - Gracefully alerts when placeholder contact data is active.
- **Sticky & Floating Lead Actions**:
  - Sticky mobile lead bar on mobile viewports (< 768px) with one-tap Call and WhatsApp actions.
  - Floating WhatsApp chat widget on desktop viewports.
- **Technical & On-Page SEO**:
  - JSON-LD structured data for `LocalBusiness`, `Service`, `BreadcrumbList`, and `FAQPage`.
  - Dynamic `sitemap.xml` and `robots.txt`.
  - Pre-rendered static pages using `generateStaticParams()`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom devotional tokens
- **Typography**: Google Fonts via `next/font/google` (`Playfair Display` + `Montserrat`)
- **Icons**: Lucide React + Custom Devotional SVG Components
- **Form Management**: React Hook Form
- **Validation**: Zod
- **SEO & Metadata**: Next.js Metadata API + Schema.org JSON-LD

---

## 📁 Project Directory Structure

```text
src/
├── app/
│   ├── layout.tsx                # Root layout with Fonts, Header, Footer, Lead Bar, Schema
│   ├── page.tsx                  # Complete Homepage (All 10 sections)
│   ├── globals.css               # Devotional color tokens and utility classes
│   ├── sitemap.ts                # Dynamic XML sitemap for all 17 routes
│   ├── robots.ts                 # Robots.txt configuration
│   ├── not-found.tsx             # Custom devotional 404 page
│   ├── about-us/page.tsx         # About Us page
│   ├── services/page.tsx         # Full Services catalogue
│   ├── gallery/page.tsx          # Responsive photo gallery with Lightbox modal
│   ├── contact-us/page.tsx       # Contact information and enquiry form
│   ├── privacy-policy/page.tsx   # Draft privacy policy
│   ├── terms-and-conditions/     # Draft terms and conditions
│   └── [serviceSlug]/page.tsx    # Dynamic template pre-rendering all 10 service routes
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with logo and navigation
│   │   ├── Footer.tsx            # Royal footer with 3 cards and legal links
│   │   ├── MobileMenu.tsx        # Responsive slide-out navigation drawer
│   │   ├── ServicesDropdown.tsx  # Desktop services dropdown with 10 services
│   │   └── FloatingLeadBar.tsx   # Sticky mobile lead bar and desktop WhatsApp CTA
│   ├── home/
│   │   ├── Hero.tsx              # Devotional hero with Kalash artwork and CTAs
│   │   ├── AboutPreview.tsx      # About snippet with Om ornaments and story
│   │   ├── WhyChooseUs.tsx       # 3 benefit cards grid
│   │   ├── PujaProcess.tsx       # 4-step numbered timeline with dividers
│   │   ├── ServicesSection.tsx   # 6 rectangular + 4 capsule cards grid
│   │   ├── Testimonials.tsx      # Devotee reviews and Google rating badge
│   │   ├── BookingSection.tsx    # 2x2 trust features + royal red booking form card
│   │   ├── StatisticsCounter.tsx # Animated live counter (10+ Years, 5620+ Customers, etc.)
│   │   └── SeoContentBand.tsx    # SEO summary band
│   ├── services/
│   │   ├── ServiceHero.tsx       # Banner, medallion artwork, and booking CTAs
│   │   ├── ServiceBenefits.tsx   # Dual gold-badged cards for benefits & why choose us
│   │   ├── ServiceVidhi.tsx      # Step-by-step ceremony ritual steps
│   │   ├── ServiceSamagri.tsx    # Checklist of essential samagri items
│   │   └── RelatedServices.tsx   # Related ceremony recommendations
│   ├── forms/
│   │   ├── BookingForm.tsx       # Booking enquiry form with Zod validation
│   │   └── ContactForm.tsx       # General contact form with validation
│   └── shared/
│       ├── Breadcrumbs.tsx       # Accessible breadcrumb trail
│       ├── SectionHeading.tsx    # Heading with traditional gold ornaments
│       ├── FAQAccordion.tsx      # Accessible accordion with ARIA attributes
│       ├── GalleryLightbox.tsx   # Filterable gallery with full-screen lightbox
│       └── SacredIcons.tsx       # Om, Diya, Kalash, Lotus, and Corner ornaments
├── config/
│   └── site.ts                   # Centralized business name, address, phone, and stats
├── data/
│   ├── services.ts               # Complete rich catalogue of all 10 services
│   ├── testimonials.ts           # Devotee reviews
│   ├── gallery.ts                # Gallery photos across 6 categories
│   └── faqs.ts                   # General site FAQs
├── lib/
│   ├── utils.ts                  # cn class merger and phone formatting
│   ├── validation.ts             # Zod validation schemas
│   ├── whatsapp.ts               # WhatsApp click-to-chat URL generators
│   └── seo.ts                    # Schema.org JSON-LD generators
└── types/
    └── index.ts                  # TypeScript interfaces and types
```

---

## ⚙️ Centralized Configuration (`src/config/site.ts`)

To replace placeholder contact details with real business details, update `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Ghar Ka Pandit",
  legalName: "Ghar Ka Pandit — Vedic Puja Services",
  city: "Bangalore",
  address: "24, Temple View Road, Jayanagar 4th Block, Bengaluru, Karnataka 560011",
  contact: {
    phone: "+91 90000 00000",       // Replace with real phone number
    whatsapp: "919000000000",      // Replace with real WhatsApp number (digits only)
    email: "bookings@example.com", // Replace with real business email
    isPlaceholderContact: false,   // Set to false once real numbers are configured
  },
  // ...
};
```

All headers, footers, booking forms, floating lead bars, and schema markup will immediately update without editing component files.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.17` or higher (`v20+` or `v24+` recommended)
- npm `v9+` or higher

### Installation

```bash
# Clone the repository and navigate to root
cd "Bengaluru Astro Pandit's"

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📋 Definition of Done Checklist

- [x] All 17 specified routes exist and pre-render without errors.
- [x] All 10 services have unique, rich detail pages with Vidhi, Samagri, Benefits, and FAQs.
- [x] Navigation header features an accessible Services dropdown showing all 10 services.
- [x] Homepage contains all sections in exact reference order: Hero, About, Why Choose Us, 4-Step Process, Services Grid, Testimonials, Trust Features + Booking Form, Statistics Counter, SEO Band, and Footer.
- [x] Sticky mobile lead bar and desktop floating WhatsApp button work seamlessly.
- [x] Forms validate correctly using Zod and format WhatsApp booking enquiries.
- [x] Zero TypeScript errors, zero lint warnings, and clean production build.
