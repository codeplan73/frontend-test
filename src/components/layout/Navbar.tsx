import { NavLink } from "react-router";
import { FiPlus } from "react-icons/fi";
import { LiaBell } from "react-icons/lia";
import SearchField from "../common/SearchField";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath.split("/")[1];
  const formmattedPath =
    pathSegments.charAt(0).toUpperCase() + pathSegments.slice(1);

  return (
    <nav className="h-[50px] flex items-center justify-between px-8 pt-12 pb-2">
      <p className="text-[#3B3B45] text-[25px] font-bold mulish-bold">
        {formmattedPath === "Dashboard" ? "My Portfolio" : formmattedPath}
      </p>
      <ul className="flex items-center gap-[16px]">
        <SearchField
          className=" h-[40px] w-[422px]  rounded-[16px]"
          iconClass="w-[18px] h-[18px] absolute left-2"
        />
        <li className="relative">
          <NavLink
            to="#"
            className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center"
          >
            <FiPlus className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="#"
            className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center"
          >
            <LiaBell className="w-[20px] h-[20px]" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
