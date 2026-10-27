import { z } from "zod";

// Phone validation: Indian mobile format 10 digits starting with 6, 7, 8, or 9
const phoneRegex = /^[6-9]\d{9}$/;

export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  mobileNumber: z
    .string()
    .regex(phoneRegex, { message: "Please enter a valid 10-digit Indian mobile number." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  pujaService: z
    .string()
    .min(1, { message: "Please select a puja service." }),
  preferredDate: z
    .string()
    .min(1, { message: "Please select your preferred date." })
    .refine(
      (val) => {
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
      },
      { message: "Date cannot be in the past." }
    ),
  preferredTime: z.string().optional(),
  pujaLocation: z
    .string()
    .min(1, { message: "Please select the venue (Home / Office / Temple)." }),
  fullAddress: z
    .string()
    .min(5, { message: "Please provide the complete address or landmark in Bangalore." })
    .max(300, { message: "Address is too long (max 300 characters)." }),
  additionalRequirements: z
    .string()
    .max(500, { message: "Special requests must not exceed 500 characters." })
    .optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(phoneRegex, { message: "Please enter a valid 10-digit Indian phone number." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
