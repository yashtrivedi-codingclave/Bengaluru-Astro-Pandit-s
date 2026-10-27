"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, type BookingFormValues } from "@/lib/validation";
import { generateWhatsAppBookingUrl } from "@/lib/whatsapp";
import { servicesCatalogue } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Calendar, Clock, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface BookingFormProps {
  defaultService?: string;
  onSuccess?: () => void;
  className?: string;
}

export function BookingForm({ defaultService, onSuccess, className = "" }: BookingFormProps) {
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    // Set minimum date to today on client mount
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      pujaService: defaultService || "",
      preferredDate: "",
      preferredTime: "Morning (8:00 AM – 11:00 AM)",
      pujaLocation: "Home",
      fullAddress: "",
      additionalRequirements: "",
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    setSubmittedData(data);
    setIsRedirecting(true);

    // Generate WhatsApp handoff URL
    const whatsappUrl = generateWhatsAppBookingUrl({
      ...data,
      email: data.email || undefined,
      preferredTime: data.preferredTime || undefined,
      additionalRequirements: data.additionalRequirements || undefined,
    });

    // In placeholder mode, let user choose to open WhatsApp or review the structured enquiry
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsRedirecting(false);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Success Notification / Redirect Modal State */}
      {submittedData && (
        <div className="mb-6 p-4 rounded-xl bg-[#2e0005] border-2 border-[#ffd700] text-white animate-in fade-in duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#24d366] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#ffd700] text-base">
                Enquiry Prepared Successfully!
              </h4>
              <p className="text-xs text-[#ffe8cc] mt-1 leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. Your request for{" "}
                <strong>{submittedData.pujaService}</strong> on{" "}
                <strong>{submittedData.preferredDate}</strong> is formatted for WhatsApp direct consultation.
              </p>
              {siteConfig.contact.isPlaceholderContact && (
                <div className="mt-2.5 p-2 rounded bg-black/40 border border-[#b89768]/50 text-[11px] text-[#ffd700] flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#ffd700]" />
                  <span>
                    Note: WhatsApp handoff uses placeholder contact ({siteConfig.contact.phoneDisplay}). Update in <code>src/config/site.ts</code> for live operations.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Kumar"
            {...register("fullName")}
            className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          />
          {errors.fullName && (
            <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.fullName.message}</p>
          )}
        </div>

        {/* Mobile Number & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mobileNumber" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
              Mobile Number (10 Digits) *
            </label>
            <input
              id="mobileNumber"
              type="tel"
              maxLength={10}
              placeholder="e.g. 9876543210"
              {...register("mobileNumber")}
              className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
            />
            {errors.mobileNumber && (
              <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.mobileNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
              Email Address (Optional)
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. ramesh@example.com"
              {...register("email")}
              className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
            />
            {errors.email && (
              <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Puja Service Selection */}
        <div>
          <label htmlFor="pujaService" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
            Desired Puja Ceremony *
          </label>
          <select
            id="pujaService"
            {...register("pujaService")}
            className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          >
            <option value="">-- Select a Puja Service --</option>
            {servicesCatalogue.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.pujaService && (
            <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.pujaService.message}</p>
          )}
        </div>

        {/* Date and Time preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
              Preferred Date *
            </label>
            <div className="relative">
              <input
                id="preferredDate"
                type="date"
                min={minDate || undefined}
                {...register("preferredDate")}
                className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
              />
            </div>
            {errors.preferredDate && (
              <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
              Preferred Time / Muhurat
            </label>
            <select
              id="preferredTime"
              {...register("preferredTime")}
              className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
            >
              <option value="Morning (6:00 AM – 9:00 AM)">Early Morning (6:00 AM – 9:00 AM)</option>
              <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
              <option value="Afternoon (12:00 PM – 3:00 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
              <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
              <option value="Consult Pandit ji for Auspicious Muhurat">Consult Pandit ji for Auspicious Muhurat</option>
            </select>
          </div>
        </div>

        {/* Puja Location & Address */}
        <div>
          <label htmlFor="pujaLocation" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
            Ceremony Venue *
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["Home", "Office / Business", "Temple / Hall"].map((venue) => (
              <label
                key={venue}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#faf6ee] border border-[#d6a742] text-xs font-bold text-[#29231f] cursor-pointer hover:bg-[#fff2d8] transition-colors"
              >
                <input
                  type="radio"
                  value={venue}
                  {...register("pujaLocation")}
                  className="accent-[#b3002d]"
                />
                <span>{venue}</span>
              </label>
            ))}
          </div>
          {errors.pujaLocation && (
            <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.pujaLocation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="fullAddress" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
            Full Address / Area in Bangalore *
          </label>
          <input
            id="fullAddress"
            type="text"
            placeholder="e.g. Flat 302, Green Glen Layout, Bellandur, Bangalore"
            {...register("fullAddress")}
            className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          />
          {errors.fullAddress && (
            <p className="text-xs text-[#ffb4b4] mt-1 font-semibold">{errors.fullAddress.message}</p>
          )}
        </div>

        {/* Additional requirements */}
        <div>
          <label htmlFor="additionalRequirements" className="block text-xs font-bold text-[#ffe8cc] uppercase tracking-wider mb-1">
            Special Requirements / Gotra (Optional)
          </label>
          <textarea
            id="additionalRequirements"
            rows={2}
            placeholder="Any specific family traditions, samagri requests, or language preference..."
            {...register("additionalRequirements")}
            className="w-full bg-[#faf6ee] border border-[#d6a742] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#ffd700] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isRedirecting}
          className="w-full mt-2 py-3.5 px-6 rounded-full text-white font-bold text-base bg-gradient-to-b from-[#e52d27] to-[#b31217] hover:from-[#ff4137] hover:to-[#c9141b] shadow-[0_4px_15px_rgba(179,18,23,0.4)] hover:shadow-[0_6px_20px_rgba(179,18,23,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          <Send className="w-4 h-4" />
          <span>{isRedirecting ? "Preparing WhatsApp Enquiry..." : "Submit Booking Enquiry"}</span>
        </button>

        <p className="text-[11px] text-center text-[#ffe8cc] opacity-80 mt-2">
          🔒 Zero commitment enquiry. Pandit ji will confirm muhurat and ceremony details before finalization.
        </p>
      </form>
    </div>
  );
}
