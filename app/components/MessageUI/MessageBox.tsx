import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {CustomMessage} from "@/app/utils/types";


const AssistantMessageBox: React.FC<{ message: CustomMessage }> = ({message}) => {
  return (
    <PopoutBorder className={"bg-green-100 flex justify-start"}>
      {message.text}
    </PopoutBorder>
  );
}


const UserMessageBox: React.FC<{ message: CustomMessage }> = ({message}) => {
  return (
    <PopoutBorder className={"bg-blue-100 flex justify-end"}>
      {message.text}
    </PopoutBorder>
  );
}

interface MessageBoxProps {
  message: CustomMessage;
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