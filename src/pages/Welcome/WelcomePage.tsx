import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import icons from "@/constants/icons";
import { Link } from "react-router";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";


const WelcomePage = () => {
  return (
    <AuthPageWrapper
     chartIcon={
  <img
    src={icons.chatIcon}
    alt="Chat Icon"
    className="h-[19px] w-[19px] object-contain"
  />
}
    >
      <Card className="w-[489px] shadow-xl drop-shadow-xl rounded-[8px] border border-primary p-[50px] bg-white">
        <CardHeader>
          <CardTitle className="text-xl">Register your account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link
            to=""
            className="border border-[#DDE2E4]  px-4 py-2 rounded-md hover:bg-[#F1F1F1] transition-colors flex items-center justify-center gap-2"
          >
            <img src={icons.mailIcon} alt="" />
            <span className="text-[#5B6871] text-sm font-light">
              Sign up with email
            </span>
          </Link>

          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-t border-[#DDE2E4]" />
            <span className="text-[#5B6871] text-sm">or</span>
            <hr className="flex-grow border-t border-[#DDE2E4]" />
          </div>
          <Link
            to=""
            className="border border-[#DDE2E4]  px-4 py-2 rounded-md hover:bg-[#F1F1F1] transition-colors flex items-center justify-center gap-2"
          >
            <img src={icons.googleIcon} alt="" />
            <span className="text-[#5B6871] text-sm font-light">
              Sign up with google
            </span>
          </Link>

          <p className="text-xs text-[#84919A] text-start mt-4">
            By clicking the button above, you agree to our{" "}
            <span className="text-secondary cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-secondary cursor-pointer">
              Privacy Policy.
            </span>
          </p>
          <p className="text-sm text-[#84919A] text-start mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary cursor-pointer">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </AuthPageWrapper>
  );
};

export default WelcomePage;
