import images from "@/constants/images";
import icons from "@/constants/icons";
import AuthPageWrapperItem from "./AuthPageWrapperItem";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface AuthPageWrapperProps {
  children: ReactNode;
  chartIcon?: ReactNode;
}

const AuthPageWrapper = ({ children, chartIcon }: AuthPageWrapperProps) => {
  return (
    <div className="flex h-screen w-screen relative">
      <div className="hidden md:flex w-1/2 bg-white h-full flex-col items-start justify-start md:p-12 lg:px-32 lg:py-22 gap-32 z-0 overflow-hidden">
        <Link to="/">
          <img src={images.logo} alt="logo" className="w-[120px] h-[36px]" />
        </Link>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-6">
            <AuthPageWrapperItem
              image={icons.checkIcon}
              label="Track real-time overview of company’s financial performance."
            />
            <AuthPageWrapperItem
              image={icons.checkIcon}
              label="Track created projects budget against actual revenue and expenses."
            />
            <AuthPageWrapperItem
              image={icons.checkIcon}
              label="Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation."
            />
          </div>

          <p className="text-xs ">© 2022 Revvex. All rights reserved</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full bg-primary flex flex-col gap-6 items-center justify-center z-0 overflow-auto pb-20 pt-40">
        {children}

        {chartIcon && (
          <div className="w-full flex items-end justify-end pr-28 pt-20">
            <div className=" z-50 bg-secondary shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-2 rounded-full gap-2 w-fit h-fit">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white">
                <p className="text-xs font-medium">Get help</p>
                {chartIcon}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPageWrapper;
