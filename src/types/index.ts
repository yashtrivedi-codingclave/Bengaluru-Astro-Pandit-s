export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceRitualStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  hindiTitle?: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  cardImage: string;
  imageAlt: string;
  duration?: string;
  introduction: string;
  keyHighlights: string[];
  benefits: string[];
  ritualSteps: ServiceRitualStep[];
  samagri: string[];
  whyChoosePoints: string[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  relatedServices: string[]; // slugs
  ctaText?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceBooked: string;
  review: string;
  rating: number;
  isVerified: boolean;
  avatarLetter: string;
  tagEmoji: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Marriage" | "Griha Pravesh" | "Havan" | "Satyanarayan" | "Mata Ki Chauki" | "Other Rituals";
  imageUrl: string;
  description: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  pujaService: string;
  preferredDate: string;
  preferredTime?: string;
  pujaLocation: string; // e.g. "Home", "Office", "Temple"
  fullAddress: string;
  additionalRequirements?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
