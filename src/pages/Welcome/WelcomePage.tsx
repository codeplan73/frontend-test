import icons from "@/constants/icons";
import { Link } from "react-router";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";

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
      <AuthFormWrapper
        authTypeDescription="Already have an account?"
        authTypeRoute="login"
        authTypeTitle="Login"
        title="Register your account"
      >
        <Link
          to="/register"
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
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
};

export default WelcomePage;
