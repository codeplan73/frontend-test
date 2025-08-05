import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ReactNode } from "react";
import { Link } from "react-router";

const AuthFormWrapper = ({
  title,
  description,
  children,
  authTypeDescription,
  authTypeTitle,
  authTypeRoute,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  authTypeDescription: string;
  authTypeTitle: string;
  authTypeRoute: string;
}) => {
  return (
    <Card className="w-[489px] shadow-xl drop-shadow-xl rounded-[8px] border border-[#DDE2E4] p-8 py-12 bg-white">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-xs text-[#5B6871] font-[13px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {children}

        <p className="text-xs text-[#84919A] text-start mt-4">
          By clicking the button above, you agree to our{" "}
          <span className="text-secondary cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-secondary cursor-pointer">Privacy Policy.</span>
        </p>
        <p className="text-sm text-[#84919A] text-start mt-2">
          {authTypeDescription}{" "}
          <Link
            to={`/${authTypeRoute}`}
            className="text-secondary cursor-pointer"
          >
            {authTypeTitle}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default AuthFormWrapper;
