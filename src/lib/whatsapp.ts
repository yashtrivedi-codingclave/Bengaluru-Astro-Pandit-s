import { siteConfig } from "@/config/site";
import type { BookingFormData } from "@/types";

export function generateWhatsAppBookingUrl(data: BookingFormData): string {
  const lines = [
    `*🕉️ New Puja Booking Enquiry — ${siteConfig.name}*`,
    ``,
    `*Devotee Name:* ${data.fullName}`,
    `*Contact Number:* ${data.mobileNumber}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Puja Service:* ${data.pujaService}`,
    `*Preferred Date:* ${data.preferredDate}`,
    data.preferredTime ? `*Preferred Time / Muhurat:* ${data.preferredTime}` : null,
    `*Venue:* ${data.pujaLocation}`,
    `*Address / Landmark:* ${data.fullAddress}`,
    data.additionalRequirements
      ? `*Special Requirements:* ${data.additionalRequirements}`
      : null,
    ``,
    `_Sent via ${siteConfig.name} Bangalore Website_`,
  ]
    .filter(Boolean)
    .join("\n");

  const encodedMessage = encodeURIComponent(lines);
  const whatsappNumber = siteConfig.contact.whatsapp;

  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

export function generateQuickWhatsAppUrl(customNote?: string): string {
  const message =
    customNote ||
    `Namaste, I am visiting the ${siteConfig.name} website and would like to enquire about Vedic puja services in Bangalore. Please share details.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded}`;
}
