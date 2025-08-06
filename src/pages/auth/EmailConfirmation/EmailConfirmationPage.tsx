import { Link, useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import icons from "@/constants/icons";
import { Button } from "@/components/ui/button";

const EmailConfirmationPage = () => {
  const navigate = useNavigate();
  const handleConfirmEmail = () => {
    // Logic to confirm email goes here
    navigate("/verify-otp");
  };
  return (
    <AuthPageWrapper>
      <Card className="w-[489px] shadow-xl drop-shadow-xl rounded-[8px] border border-[#DDE2E4] p-8 py-12 bg-white flex flex-col">
        <CardContent className="flex flex-col gap-4 items-center">
          <img
            src={icons.mailConfirmation}
            alt="Email Confirmation"
            className="h-[117px] w-[117px] object-contain"
          />
          <CardTitle className="text-[24px] text-[#1D1D18]">
            Check your mailbox!
          </CardTitle>
          <CardDescription className="text-sm text-[#5B6871] font-[13px] text-center">
            We’ve sent an email to seyi@zojatech.com with a an OTP to confirm
            your account. Check your inbox to activate your account.
          </CardDescription>

          <Button
            className="w-[160px] rounded-[6px] transition-all duration-300 bg-secondary hover:bg-blue-500 text-white"
            type="submit"
            onClick={handleConfirmEmail}
          >
            Confirm Email
          </Button>

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

export default EmailConfirmationPage;
