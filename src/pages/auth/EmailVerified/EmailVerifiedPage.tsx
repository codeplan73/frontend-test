import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import icons from "@/constants/icons";
import { Button } from "@/components/ui/button";

const EmailVerifiedPage = () => {
  return (
    <AuthPageWrapper>
      <Card className="w-[489px] shadow-xl drop-shadow-xl rounded-[8px] border border-[#DDE2E4] p-8 py-12 bg-white flex flex-col">
        <CardContent className="flex flex-col gap-4 items-center">
          <img
            src={icons.mailSentIcon}
            alt="Email Confirmation"
            className="h-[68.8px] w-[76px] object-contain"
          />
          <CardTitle className="text-[24px] text-[#1D1D18]">
            Email verified !
          </CardTitle>
          <CardDescription className="text-sm text-[#5B6871] font-[13px] text-center px-3">
            The verified email address will be associated with your account.
            Click on the button below to continue
          </CardDescription>

          <Button
            className="w-[160px] rounded-[6px] transition-all duration-300 bg-secondary hover:bg-blue-500 text-white"
            type="submit"
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </AuthPageWrapper>
  );
};

export default EmailVerifiedPage;
