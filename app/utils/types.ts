import {CoreMessage} from "ai";

export type CustomMessage = {
  text: string;
  role: "user" | "assistant";
  timestamp: Date;
  chatroomID: string;
}

export type ChatGPTProps = {
  message: CustomMessage;
  context?: CoreMessage[];
}