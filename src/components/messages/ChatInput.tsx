import { IoMicOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { FiCamera } from "react-icons/fi";
import { GoSmiley } from "react-icons/go";
import icons from "@/constants/icons";

const ChatInput = () => {
  return (
    <form className="bg-[#D9D9D9] w-[716px] h-[96px] rounded-[12px] flex gap-3 items-center pl-[40px]">
      <div className="relative">
        <input
          type="text"
          className="bg-white w-[595px] h-[40px] rounded-[30px] text-[15px] text-[#CDCDCD] font-semibold pl-10"
          placeholder="Write Something..."
        />
        <IoMicOutline className="w-[22px] h-[24px] absolute top-2 left-4 text-[#D9D9D9] cursor-pointer" />
        <div className="absolute  top-2 right-4 flex gap-4">
          <GrAttachment className="w-[24px] h-[24px] text-[#D9D9D9] cursor-pointer" />
          <FiCamera className="w-[24px] h-[24px] text-[#D9D9D9] cursor-pointer" />
          <GoSmiley className="w-[24px] h-[24px] text-[#D9D9D9] cursor-pointer" />
        </div>
      </div>
      <button type="submit">
        <img
          src={icons.send}
          className="w-[36px] h-[36px] bg-secondary text-white rounded-full p-[2px] cursor-pointer"
          alt="send"
        />
      </button>
    </form>
  );
};

export default ChatInput;
