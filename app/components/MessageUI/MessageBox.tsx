import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {CustomMessage} from "@/app/utils/types";

type MessageBoxProps = {
  message: CustomMessage;
}
const AssistantMessageBox = ({message}: MessageBoxProps) => {
  return (
    <div className={"flex flex-col "}>
      <PopoutBorder className={"p-4 bg-gray-100 flex justify-start"}>
        {message.text}
      </PopoutBorder>
      {message.when && (
        <text className={"pl-2 p-4 pt-2 text-gray-500 text-xs"}>
          {message.when.toLocaleString().replace(",", "")}
        </text>
      )}
    </div>

  );
}


const UserMessageBox = ({message}: MessageBoxProps) => {
  return (
    <div className={"flex w-full justify-end"}>
      <PopoutBorder className={"p-4 bg-blue text-white"}>
        {message.text}
      </PopoutBorder>
    </div>

  );
}


const MessageBox: React.FC<MessageBoxProps> = ({message}) => {
  return (
    <div className={"flex w-full"}>
      {message.role === "assistant" ? (
        <AssistantMessageBox message={message}/>
      ) : (
        <UserMessageBox message={message}/>
      )}
    </div>
  );
};

export default MessageBox;