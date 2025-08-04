import { createBrowserRouter } from "react-router";
import AuthLayout from "@/components/layout/AuthLayout";

import { WelcomePage, LoginPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
