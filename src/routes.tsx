import { createBrowserRouter } from "react-router";
import AuthLayout from "@/components/layout/AuthLayout";

import {
  WelcomePage,
  LoginPage,
  SignUpPage,
  EmailConfirmationPage,
  VerifyOTPPage,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <SignUpPage /> },
      { path: "email-confirmation", element: <EmailConfirmationPage /> },
      { path: "verify-otp", element: <VerifyOTPPage /> },
    ],
  },
]);
