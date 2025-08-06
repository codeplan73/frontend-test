import { createBrowserRouter } from "react-router";
import { AuthLayout, AppLayout } from "@/components/layout";

import {
  WelcomePage,
  LoginPage,
  SignUpPage,
  EmailConfirmationPage,
  VerifyOTPPage,
  EmailVerifiedPage,
  Dashboard,
  MessagesPage,
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
      { path: "email-verified", element: <EmailVerifiedPage /> },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "messages", element: <MessagesPage /> },
    ],
  },
]);
