import { Link, useLocation } from "react-router";
import { FiUser, FiUsers } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import images from "@/constants/images";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    link: "/dashboard",
    label: "My Portfolio",
    icon: <FiUser className="text-[14px]" />,
  },
  {
    id: 2,
    link: "#",
    label: "My Group",
    icon: <FiUsers className="text-md" />,
  },
  {
    id: 3,
    link: "/messages",
    label: "Messages",
    icon: <TfiEmail className="text-md" />,
  },
  {
    id: 4,
    link: "#",
    label: "Analytics",
    icon: <IoTrendingUpOutline className="text-md" />,
  },
  {
    id: 5,
    link: "#",
    label: "Pack",
    icon: <CiDollar className="text-md" />,
  },
  {
    id: 6,
    link: "#",
    label: "Settings",
    icon: <IoSettingsOutline className="text-md" />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="bg-white w-[250px] h-[1080px] flex flex-col items-center justify-start">
      <Link to="/dashboard" className="mt-[28px]">
        <img src={images.logo} alt="logo" className="w-[120px] h-[36px]" />
      </Link>

      <div className="w-full flex flex-col justify-between h-full py-6">
        <ul className="flex flex-col gap-2 w-full">
          {menuItems.map((item) => {
            const isActive = item.link === currentPath;

            return (
              <li
                key={item.id}
                className="w-full flex items-center transition-all relative px-4"
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[60%] bg-secondary rounded-r-md" />
                )}
                <Link
                  to={item.link}
                  className={`flex items-center gap-2 pl-6 py-4 w-full rounded-xl transition-all
                    ${
                      isActive
                        ? "bg-white text-secondary shadow-md font-semibold"
                        : "text-gray-500 hover:text-secondary hover:bg-white hover:shadow-md"
                    }
                  `}
                >
                  {item.icon}
                  <span className="text-[14px] font-semibold">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative flex flex-col items-center justify-center bg-white shadow-xl drop-shadow-2xl rounded-2xl mx-4 p-4 pt-8">
          <img
            src={images.user1}
            alt="user"
            className="object-cover w-[60px] h-[60px] rounded-full absolute -top-8"
          />
          <span className="text-lg text-[#3B3B45] font-semibold">
            Theresa milly
          </span>
          <span className="text-sm text-[#818187]">Influencer</span>
          <Button className="bg-[#FF860029] hover:bg-[#FF860029] text-white flex items-center gap-2 w-full mt-2">
            <RiLoginBoxLine className="text-xl text-secondary" />
            <span className="text-secondary"> Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
