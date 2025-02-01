import React from "react";
import {CustomMessage} from "@/app/utils/types";
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";


interface MessageListProps {
  messages: CustomMessage[];
}

function MessageList({messages}: React.FC<MessageListProps>) {
  if (messages.length === 0 || !messages) {
    return <div className="text-center text-gray-500">No messages yet.</div>;
  }
  return (
    <PopoutBorder className={"text-black"}>
      hi
      {messages.map((message, index) => (
        <div key={index} className="p-2">
          <p>{message.text}</p>
          <span className="text-gray-500 text-sm">{message.timestamp.toString()}</span>
        </div>
      ))}
    </PopoutBorder>
  );
}

export default MessageList;
