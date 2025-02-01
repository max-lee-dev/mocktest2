import {CoreMessage} from "ai";

export type CustomMessage = {
  text: string;
  role: "user" | "assistant";
  when: Date;
  chatroomID: string;
}

export type ChatGPTProps = {
  message: CustomMessage;
  context?: CoreMessage[];
}