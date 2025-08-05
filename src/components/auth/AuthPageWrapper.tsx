import images from "@/constants/images";
import icons from "@/constants/icons";
import type { ReactNode } from "react";

const AuthPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen relative">
      <div className="hidden md:flex w-1/2 bg-white h-full flex-col items-start justify-start p-12 md:px-32 py-22 gap-32">
        <img src={images.logo} alt="logo" className="w-[120px] h-[36px]" />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              src={icons.checkIcon}
              alt="check"
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#5B6871] text-md">
              Track real-time overview of company’s financial performance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={icons.checkIcon}
              alt="check"
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#5B6871] text-md">
              Track real-time overview of company’s financial performance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={icons.checkIcon}
              alt="check"
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#5B6871] text-md">
              Track real-time overview of company’s financial performance.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full bg-primary flex flex-col gap-6 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthPageWrapper;
