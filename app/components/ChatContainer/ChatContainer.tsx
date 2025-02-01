"use client";
import React, {useEffect, useState} from 'react';

import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import MessageInput from "@/app/components/ChatContainer/MessageInput";
import {fetchMessages, sendMessage} from "@/app/utils/firebaseUtils";

import {convertMyMessagesToContext, GetChatResponse} from "@/app/utils/utils";
import {CoreMessage} from "ai";
import {CustomMessage} from "@/app/utils/types";
import MessageList from "@/app/components/ChatContainer/MessageList";

export default function ChatContainer() {

  const [context, setContext] = useState<CoreMessage[]>([]);
  const [messages, setMessages] = useState<CustomMessage[]>([]);

  useEffect(() => {
    // Fetch initial messages from Firestore

    const updateData = async () => {
      // Fetch messages from Firestore
      const messages = await fetchMessages();
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
    const chatroomID = "someChatroomID"; // Replace with actual chatroom ID
    const messageData: CustomMessage = {
      text: message,
      when: new Date(),
      chatroomID,
      role: "user",
    }
    setMessages([...messages, messageData]);
    await sendMessage(messageData);


    const response = await GetChatResponse({message: messageData, context: context}); // Adjust context as needed
    const assistantMessage: CustomMessage = {
      text: response,
      when: new Date(),
      chatroomID,
      role: "assistant",
    }
    await sendMessage(assistantMessage);
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
    <div className={"min-h-[100%] w-[70%]"}>
      <PopoutBorder className={"text-black bg-white"}>
        ChatContainer
        <div className={"flex flex-col h-full"}>
          <div className={"flex-1"}>MessageList</div>
          <MessageList messages={messages}/>
          <div className={"flex-none py-4"}>
            <MessageInput onSend={handleSend}/>
          </div>
        </div>
      </PopoutBorder>
    </div>
  );
}

