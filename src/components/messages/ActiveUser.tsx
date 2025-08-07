import images from "@/constants/images";
import { RiPencilLine } from "react-icons/ri";

const ActiveUser = () => {
  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex items-center gap-2 ">
        <img
          src={images.user1}
          alt="chat-user"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="text-[15px] font-semibold text-secondary text-nowrap">
            David Peters
          </p>
          <p className="text-[#2E2E2E] text-[9px] font-semibold">
            Senior Developer
          </p>
        </div>
      </div>
      <RiPencilLine className="w-[16.47px] h-[15px]" />
    </div>
  );
};

export default ActiveUser;
