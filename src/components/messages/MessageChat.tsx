import images from "@/constants/images";

import MessageChatHeader from "./MessageChatHeader";
import ChatInput from "./ChatInput";

const MessageChat = () => {
  return (
    <div className="w-[766px] bg-[#FAFAFA] rounded-[12px] p-4  flex flex-col">
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

      <ChatInput />
    </div>
  );
};

export default MessageChat;
