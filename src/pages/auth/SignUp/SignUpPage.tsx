import icons from "@/constants/icons";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import SignupForm from "@/components/auth/SignupForm";

const SignUpPage = () => {
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
        title="Register your account"
        description="Proceed to create account and setup your organization"
        authTypeDescription="Already have an account?"
        authTypeRoute="login"
        authTypeTitle="Login"
      >
        <SignupForm />
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
};

export default SignUpPage;
