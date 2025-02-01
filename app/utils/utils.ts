import {createOpenAI} from '@ai-sdk/openai';
import {CoreAssistantMessage, CoreMessage, CoreSystemMessage, CoreUserMessage, generateText} from 'ai';

import {ChatGPTProps, CustomMessage} from "@/app/utils/types";

const openai = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  compatibility: 'strict', // strict mode, enable when using the OpenAI API

});

export async function GetChatResponse({message, context}: ChatGPTProps): Promise<string> {
  if (!context) context = [];


  // Ensure system message is always at the start
  const messages: CoreMessage[] = [
    {role: "system", content: "You are a helpful assistant."}, // Static system message
    ...context, // Previous messages
    {role: "user", content: message.text}, // Add latest user message
  ];

  try {
    const {text} = await generateText({
      model: openai("gpt-4-turbo"),
      messages, // Pass updated message history
    });

    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I couldn't generate a response.";
  }
}


export async function convertMyMessagesToContext(messages: CustomMessage[]): Promise<CoreMessage[]> {
  return messages.map((message): CoreMessage => {
    if (message.role === "user") {
      return {role: "user", content: message.text} as CoreUserMessage;
    } else if (message.role === "assistant") {
      return {role: "assistant", content: message.text} as CoreAssistantMessage;
    } else if (message.role === "system") {
      return {role: "system", content: message.text} as CoreSystemMessage;
    }
    throw new Error(`Invalid role: ${message.text}`);
  });

}
