"use client";
import React, {useEffect, useState} from 'react';

import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import MessageInput from "@/app/components/ChatContainer/MessageInput";
import {fetchMessages, sendMessage} from "@/app/utils/firebaseUtils";

import {convertMyMessagesToContext, GetChatResponse} from "@/app/utils/utils";
import {CoreMessage} from "ai";
import {CustomMessage} from "@/app/utils/types";
import MessageList from "@/app/components/ChatContainer/MessageList";

type ChatContainerProps = {
  chatroomID: string;
}
export default function ChatContainer({chatroomID}: ChatContainerProps) {

  const [context, setContext] = useState<CoreMessage[]>([]);
  const [messages, setMessages] = useState<CustomMessage[]>([]);

  useEffect(() => {
    // Fetch initial messages from Firestore

    const updateData = async () => {
      // Fetch messages from Firestore
      const messages = await fetchMessages({chatroomID});
      // Update the state with the fetched messages
      setMessages(messages);
      const context = await convertMyMessagesToContext(messages);
      setContext(context);
      console.log(context)
      // Update the context with the fetched messages

    }
    updateData().catch((error) => {
      console.error("Error fetching messages:", error);
    });
  }, []);

  async function handleSend(message: string) {
    // Replace with actual chatroom ID
    const messageData: CustomMessage = {
      text: message,
      when: new Date(),
      chatroomID,
      role: "user",
    }
    setMessages([...messages, messageData]);
    await sendMessage({messageData, chatroomID});


    const response = await GetChatResponse({message: messageData, context: context}); // Adjust context as needed
    const assistantMessage: CustomMessage = {
      text: response,
      when: new Date(),
      chatroomID,
      role: "assistant",
    }
    await sendMessage({messageData: assistantMessage, chatroomID});
    setMessages([...messages, messageData, assistantMessage]);

    const UserMessage: CoreMessage = {
      content: message,
      role: "user",
    }
    setContext([...context, UserMessage, {content: response, role: "assistant"}]);
    console.log("Message sent:", messageData);
    console.log(context)
    console.log("Assistant message sent:", assistantMessage);


  }


  return (
    <div className={"min-h-[90%] w-full"}>
      <PopoutBorder className={"p-4 text-black bg-white"}>
        <h1 className={"text-4xl font-extrabold border-b-2 border-black mx-4 py-4"}>{chatroomID}</h1>

        <div className={"flex flex-col h-full"}>
          <MessageList messages={messages}/>
          <div className={"flex-none py-4"}>
            <MessageInput onSend={handleSend}/>
          </div>
        </div>
      </PopoutBorder>
    </div>
  );
}

