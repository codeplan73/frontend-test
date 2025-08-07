import type { ReactNode } from "react";
import { Link } from "react-router";
const SidebarMenuWrapper = ({
  title,
  link,
  children,
}: {
  title: string;
  link?: string;
  children: ReactNode;
}) => {
  return (
    <div className="bg-white w-full flex flex-col gap-[20px] rounded-[16px] p-[20px]">
      <div className="flex items-center justify-between w-full">
        <p className="text-[#3B3B45] text-[20px] leading-2 font-extrabold">
          {title}
        </p>
        {link && (
          <Link to={link} className="text-secondary text-[12px] font-bold">
            VIEW ALL
          </Link>
        )}
      </div>

      {children}
    </div>
  );
};

export default SidebarMenuWrapper;
