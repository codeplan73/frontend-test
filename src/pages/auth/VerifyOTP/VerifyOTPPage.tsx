import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import VerifyOTPForm from "@/components/auth/VerifyOTPForm";

const VerifyOTPPage = () => {
  return (
    <AuthPageWrapper>
      <Card className="w-[489px] shadow-xl drop-shadow-xl rounded-[8px] border border-[#DDE2E4] p-8 py-12 bg-white flex flex-col">
        <CardContent className="flex flex-col gap-4 items-start">
          <CardTitle className="text-[24px] text-[#1D1D18]">
            Verify your email
          </CardTitle>
          <CardDescription className="text-sm text-[#5B6871] font-[13px]">
            A four digit OTP code has been sent to your email{" "}
            <span className="text-secondary">seyi@zojatech.com</span>
          </CardDescription>

          <VerifyOTPForm />

          <p className="text-sm text-[#84919A] text-start mt-2">
            Didn't get the mail?{" "}
            <Link to="" className="text-secondary cursor-pointer">
              Resend
            </Link>
          </p>
        </CardContent>
      </Card>
    </AuthPageWrapper>
  );
};

export default VerifyOTPPage;
