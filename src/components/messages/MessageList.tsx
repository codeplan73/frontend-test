import SearchField from "../common/SearchField";
import ActiveUser from "./ActiveUser";
import { messagesList } from "@/constants/message";
import Message from "./Message";

const MessageList = () => {
  return (
    <div className="w-[266px] bg-[#FAFAFA] rounded-[12px] p-4 flex flex-col gap-8">
      <ActiveUser />

      <SearchField
        className=" h-[40px] w-full rounded-[30px]"
        iconClass="w-[24px] h-[24px] absolute left-2 text-[#CDCDCD] "
      />

      <hr className="border-[#CDCDCD]" />

      <div className="flex flex-col gap-5 cursor-pointer">
        {messagesList.map((message, index) => (
          <Message message={message} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
