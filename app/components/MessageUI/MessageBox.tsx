import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {CustomMessage} from "@/app/utils/types";

const AssistantMessageBox = ({message}: CustomMessage) => {
  return (
    <PopoutBorder className={"bg-gray-100 justify-start"}>
      {message.text}
    </PopoutBorder>
  );
}

const UserMessageBox = ({message}: CustomMessage) => {
  return (
    <PopoutBorder
      className={"bg-blue justify-end text-white"}
    >
      {message.text}
    </PopoutBorder>
  );
}
const MessageBox = ({message}: CustomMessage) => {
  return (
    <div className={"flex justify-end"}>
      {message.role === "assistant" ? (
        <AssistantMessageBox message={message}/>
      ) : (
        <UserMessageBox message={message}/>
      )}
    </div>
  );
};

export default MessageBox;