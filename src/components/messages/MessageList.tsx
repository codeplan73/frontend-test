import SearchField from "../common/SearchField";
import ActiveUser from "./ActiveUser";
import { IoCheckmarkSharp } from "react-icons/io5";

import images from "@/constants/images";

const MessageList = () => {
  return (
    <div className="w-[284px] bg-[#FAFAFA] rounded-[12px] p-4 flex flex-col gap-4">
      <ActiveUser />

      <SearchField
        className=" h-[40px] w-[280] rounded-[30px]"
        iconClass="w-[24px] h-[24px] absolute left-2 text-[#CDCDCD] "
      />

      <hr className="border-[#CDCDCD]" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full bg-white rounded-[10px] p-2 drop-shadow-xl">
          <div className="flex items-center gap-2 ">
            <img
              src={images.user6}
              alt="chat-user"
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <p className="text-[15px] font-semibold text-secondary text-nowrap">
                David Peters
              </p>
              <p className="text-[#959595] text-[9px] font-semibold">
                Senior Developer
              </p>
            </div>
          </div>
          <p className="text-[#959595] text-[9px] font-semibold text-nowrap">
            10:35 AM
          </p>
        </div>

        <div className="flex items-center justify-between w-full px-2">
          <div className="flex items-center gap-2 ">
            <img
              src={images.user5}
              alt="chat-user"
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <p className="text-[15px] font-semibold text-secondary text-nowrap">
                David Peters
              </p>
              <p className="text-[#959595] text-[9px] font-semibold">
                That’s Great. I am Looking forward to having a great start.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end space-y-1">
            <p className="text-[#959595] text-[9px] font-semibold text-nowrap">
              10:35 AM
            </p>
            <p className="text-white text-[9px] font-semibold bg-secondary h-[12px] w-[12px] text-center rounded-full">
              3
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-2">
          <div className="flex items-center gap-2 ">
            <img
              src={images.user5}
              alt="chat-user"
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <p className="text-[15px] font-semibold text-secondary text-nowrap">
                David Peters
              </p>
              <p className="text-[#959595] text-[9px] font-semibold">
                That’s Great. I am Looking forward to having a great start.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end space-y-1">
            <p className="text-[#959595] text-[9px] font-semibold text-nowrap">
              10:35 AM
            </p>
            <IoCheckmarkSharp className="text-secondary text-[9px] font-semibold bg-[#DCE8FF] h-[12px] w-[12px] text-center rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
