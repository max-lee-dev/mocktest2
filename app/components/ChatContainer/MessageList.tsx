import React from "react";
import {CustomMessage} from "@/app/utils/types";
import MessageBox from "@/app/components/MessageUI/MessageBox";


interface MessageListProps {
  messages: CustomMessage[];
}

const MessageList: React.FC<MessageListProps> = ({messages}) => {
  if (messages.length === 0 || !messages) {
    return <div className="text-center text-gray-500">No messages yet.</div>;
  }
  return (
    <div className={" text-black"}>
      {messages.map((message, index) => (
        <div key={index} className="w-full p-2">
          <MessageBox message={message}/>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
