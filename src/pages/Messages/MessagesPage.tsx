import MessageChat from "@/components/messages/MessageChat";
import MessageList from "@/components/messages/MessageList";

const MessagesPage = () => {
  return (
    <div className="bg-white p-4 rounded-[12px] flex gap-6 w-full ml-4 mt-4 md:w-[1070px]">
      <MessageList />
      <MessageChat />
    </div>
  );
};

export default MessagesPage;
