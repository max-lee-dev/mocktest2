import {CoreMessage} from "ai";

export type CustomMessage = {
  text: string;
  role: "user" | "assistant";
  when: number;
  chatroomID: string;
}

export type ChatGPTProps = {
  message: CustomMessage;
  context?: CoreMessage[];
}