import { z } from "zod";

export const signUpFormSchema = z.object({
  first_name: z.string().min(2, {
    message: "first name is required.",
  }),
  last_name: z.string().min(2, {
    message: "last name is required.",
  }),
  email: z.string().min(2, {
    message: "email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const loginFormSchema = z.object({
  email: z.string().min(2, {
    message: "email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const OTPFormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 6 characters.",
  }),
});
