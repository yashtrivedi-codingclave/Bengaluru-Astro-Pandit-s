export const siteConfig = {
  name: "Bengaluru Astro Pandit's",
  legalName: "Bengaluru Astro Pandit's — Vedic Puja & Astro Services",
  tagline: "Authentic Vedic Rituals at Your Doorstep in Bangalore",
  description:
    "Book verified South Indian Hindi pandit with Bengaluru Astro Pandit's for Griha Pravesh, Satyanarayan Puja, Marriage Puja, Bhumi Puja, Navgrah Shanti & Vedic rituals. Experienced pandits with complete samagri guidance.",
  url: "https://bengaluru-astro-pandit-s.vercel.app",
  ogImage: "/images/og-image.jpg",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  pincode: "560011",
  address: "24, Temple View Road, Jayanagar 4th Block, Bengaluru, Karnataka 560011",
  workingHours: "Monday – Saturday: 9:00 AM – 6:00 PM (Emergency muhurat services available on Sunday)",
  
  // Contact Configuration (Centralized placeholders)
  contact: {
    phone: "+91 90000 00000",
    phoneDisplay: "+91 90000 00000",
    whatsapp: "919000000000", // Country code without +
    whatsappDisplay: "+91 90000 00000",
    email: "bookings@example.com",
    isPlaceholderContact: true, // Flag to indicate placeholder mode until client provides live numbers
  },

  // Key stats shown on trust counters
  stats: {
    yearsExperience: 10,
    happyCustomers: 5620,
    pujasDone: 5002,
    verifiedPandits: 20,
  },

  // Social Links
  links: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export type SiteConfig = typeof siteConfig;
