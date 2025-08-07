import MessageList from "@/components/messages/MessageList";

const MessagesPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-[12px] flex gap-6">
      <MessageList />
      <div className="w-[821px] bg-[#FAFAFA] rounded-[12px] p-4"></div>
    </div>
  );
};

export default MessagesPage;
