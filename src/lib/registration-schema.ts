import { z } from "zod";

export const registrationSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone_number: z.string(),
  team_name: z.string(),
  group_size: z.number(),
  project_topic: z.string(),
  category: z.number(),
  privacy_policy_accepted: z.boolean(),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
