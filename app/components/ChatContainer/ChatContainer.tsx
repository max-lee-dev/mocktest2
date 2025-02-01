"use client";
import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import MessageInput from "@/app/components/ChatContainer/MessageInput";

export default function ChatContainer() {
  function handleSend(message: string) {
    console.log(message);
  }

  return (
    <div className={"min-h-[100%] w-[70%]"}>
      <PopoutBorder className={" text-black"}>
        ChatContainer
        <div className={"flex flex-col h-full"}>
          <div className={"flex-1"}>MessageList</div>
          <div className={"flex-none pb-4"}>
            <MessageInput onSend={handleSend}/>
            
          </div>
        </div>
      </PopoutBorder>
    </div>
  );
}

