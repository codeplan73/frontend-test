import { FiHeart, FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import images from "@/constants/images";

const MessageChatHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="relative flex items-center gap-2">
        <img
          src={images.user4}
          className="w-[45px] h-[45px] rounded-full object-cover"
          alt="avatar"
        />
        <p className="text-[#2E2E2E] font-bold text-[15px]">Lisa Roy</p>
        <span className="w-[15px] h-[15px] bg-[#33EC23] rounded-full absolute left-0 bottom-0 z-20"></span>
      </div>
      <div className="flex items-center gap-2">
        <FiSearch className="text-[#8D8D8D] h-[20px] w-[20px]" />
        <FiHeart className="text-[#8D8D8D] h-[20px] w-[20px]" />
        <GoBell className="text-[#8D8D8D] h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default MessageChatHeader;
