import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import icons from "@/constants/icons";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
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
        title="Log in to your account"
        description="Proceed to create account and setup your organization"
        authTypeDescription="Don’t have an account?"
        authTypeRoute="register"
        authTypeTitle="Register"
      >
        <LoginForm />
      </AuthFormWrapper>
    </AuthPageWrapper>
  );
};

export default LoginPage;
