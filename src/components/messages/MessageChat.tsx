import images from "@/constants/images";
import icons from "@/constants/icons";
import MessageChatHeader from "./MessageChatHeader";
import { IoMicOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { FiCamera } from "react-icons/fi";
import { GoSmiley } from "react-icons/go";

const MessageChat = () => {
  return (
    <div className="w-[776px] bg-[#FAFAFA] rounded-[12px] p-4 flex flex-col">
      <MessageChatHeader />
      <hr className="my-4 border-[#D9D9D9]" />

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-end justify-start gap-2">
          <img
            src={images.user4}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <p className="font-normal text-[16px] text-[#2E2E2E] bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-br-xl">
            Hi David, have you got the project report pdf?
          </p>
        </div>
        <div className="flex items-end justify-end gap-2">
          <p className="font-normal text-[16px] text-secondary bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-bl-xl">
            NO. I did not get it
          </p>
          <img
            src={images.user5}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-t border-[#DDE2E4]" />
          <span className="text-[##D9D9D9] text-[15px]">Yesterday</span>
          <hr className="flex-grow border-t border-[#DDE2E4]" />
        </div>

        <div className="flex items-end justify-start gap-2">
          <img
            src={images.user4}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <p className="font-normal text-[16px] text-[#2E2E2E] bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-br-xl">
            Ok, I will just sent it here. Plz be sure to fill the details by
            today end of the day.
          </p>
        </div>

        <div className="flex items-end justify-start gap-2">
          <img
            src={images.user4}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <div className="max-w-[153px] rounded-t-xl rounded-br-xl overflow-hidden">
            <img
              src={images.fileSend}
              className="h-[44px] w-full object-cover object-center"
              alt=""
            />
            <p className="font-normal text-[16px] text-[#2E2E2E] bg-[#F1F1F1] max-w-[256px] p-4 ">
              project_report.pdf
            </p>
          </div>
        </div>

        <div className="flex items-end justify-end gap-2">
          <p className="font-normal text-[16px] text-secondary bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-bl-xl">
            Ok. Should I send it over email as well after filling the details.
          </p>
          <img
            src={images.user5}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
        </div>

        <div className="flex items-end justify-start gap-2">
          <img
            src={images.user4}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <p className="font-normal text-[16px] text-[#2E2E2E] bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-br-xl">
            Ya. I’ll be adding more team members to it.
          </p>
        </div>

        <div className="flex items-end justify-end gap-2">
          <p className="font-normal text-[16px] text-secondary bg-[#F1F1F1] max-w-[256px] p-4 rounded-t-xl rounded-bl-xl">
            OK
          </p>
          <img
            src={images.user5}
            alt="avatar"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
        </div>
      </div>

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
    </div>
  );
};

export default MessageChat;
