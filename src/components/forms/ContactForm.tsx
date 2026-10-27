"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { siteConfig } from "@/config/site";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // Generate mailto or WhatsApp link handoff
    const message = `Namaste, My name is ${data.name}. Phone: ${data.phone}. Subject: ${data.subject}. Message: ${data.message}`;
    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    
    setIsSuccess(true);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      reset();
    }, 1000);
  };

  return (
    <div className="bg-[#faf6ee] border-[1.5px] border-[#d4c2a5] rounded-2xl p-6 sm:p-8 shadow-md">
      {isSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span className="text-sm font-semibold">
            Thank you! Your message is formatted and connecting to WhatsApp for instant reply.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-[#4b3e2f] uppercase tracking-wider mb-1">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Anand Sharma"
            {...register("name")}
            className="w-full bg-[#fcf8f0] border border-[#d4c2a5] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#b3002d]"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#4b3e2f] uppercase tracking-wider mb-1">
              Mobile Number (10 Digits) *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 9876543210"
              maxLength={10}
              {...register("phone")}
              className="w-full bg-[#fcf8f0] border border-[#d4c2a5] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#b3002d]"
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#4b3e2f] uppercase tracking-wider mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. anand@example.com"
              {...register("email")}
              className="w-full bg-[#fcf8f0] border border-[#d4c2a5] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#b3002d]"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-[#4b3e2f] uppercase tracking-wider mb-1">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Enquiry about Griha Pravesh Muhurat"
            {...register("subject")}
            className="w-full bg-[#fcf8f0] border border-[#d4c2a5] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#b3002d]"
          />
          {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#4b3e2f] uppercase tracking-wider mb-1">
            Message / Ceremony Details *
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Please write your questions, dates or requirements here..."
            {...register("message")}
            className="w-full bg-[#fcf8f0] border border-[#d4c2a5] rounded-xl px-4 py-2.5 text-sm text-[#29231f] focus:outline-none focus:ring-2 focus:ring-[#b3002d] resize-none"
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#b3002d] to-[#7a0016] hover:from-[#c9141b] hover:to-[#91001b] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
