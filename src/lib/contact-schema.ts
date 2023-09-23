import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone_number: z.string(),
  first_name: z.string(),
  message: z.string(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
