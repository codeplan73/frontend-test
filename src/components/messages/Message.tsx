import { IoCheckmarkSharp } from "react-icons/io5";

type MessageProps = {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
  unread: number;
  userImage: string;
  active: boolean | string;
};
const Message = ({
  message,
  index,
}: {
  message: MessageProps;
  index: number;
}) => {
  return (
    <div
      key={index}
      className={`flex items-center justify-between w-full px-2 ${
        !message.active ? "bg-white rounded-[10px] p-2 drop-shadow-xl " : ""
      }`}
    >
      <div className="flex items-center gap-2 ">
        <img
          src={message.userImage}
          alt="chat-user"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="text-[15px] font-semibold text-secondary text-nowrap">
            {message.sender}
          </p>
          <p className="text-[#959595] text-[9px] font-semibold">
            {message.content}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end space-y-1">
        <p className="text-[#959595] text-[9px] font-semibold text-nowrap">
          {message.timestamp}
        </p>
        {!message.active ? (
          message.unread > 0 ? (
            <p className="text-white text-[9px] font-semibold bg-secondary h-[12px] w-[12px] text-center rounded-full">
              {message.unread}
            </p>
          ) : (
            <IoCheckmarkSharp className="text-secondary text-[9px] font-semibold bg-[#DCE8FF] h-[12px] w-[12px] text-center rounded-full" />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Message;
