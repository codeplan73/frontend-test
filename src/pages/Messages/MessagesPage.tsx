import MessageChat from "@/components/messages/MessageChat";
import MessageList from "@/components/messages/MessageList";

const MessagesPage = () => {
  return (
    <div className="  p-4 rounded-[12px] flex gap-6 w-full">
      <MessageList />
      <MessageChat />
    </div>
  );
};

export default MessagesPage;
