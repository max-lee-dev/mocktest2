import React, {useEffect, useRef} from "react";
import {CustomMessage} from "@/app/utils/types";
import MessageBox from "@/app/components/MessageUI/MessageBox";


interface MessageListProps {
  messages: CustomMessage[];
}

const MessageList: React.FC<MessageListProps> = ({messages}) => {

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom when messages update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [messages]); // Runs when `messages` updates


  if (messages.length === 0 || !messages) {
    return <div className="text-center text-gray-500">No messages yet.</div>;
  }
  return (
    <div className={"overflow-y-scroll h-[80vh] text-black"}>
      {messages.map((message, index) => (
        <div key={index} className="w-full p-2">
          <MessageBox message={message}/>
          <div ref={messagesEndRef}/>
        </div>
      ))}
    </div>
  )
    ;
}

export default MessageList;
