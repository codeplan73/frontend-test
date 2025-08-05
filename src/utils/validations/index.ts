import { z } from "zod";

export const signUpFormSchema = z.object({
  firstname: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const loginFormSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
