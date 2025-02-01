import React from "react";
import {CustomMessage} from "@/app/utils/types";


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
        <div key={index} className="p-2">
          <p>{message.text}</p>
          <span className="text-gray-500 text-sm">{message.timestamp.toString()}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
