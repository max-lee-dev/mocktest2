import React, {JSX} from "react";
import {useRouter} from "next/navigation";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";

type OtherChatButtonProps = {
  chatroomID: string;
}
export default function OtherChatButton({chatroomID}: OtherChatButtonProps): JSX.Element {

  const router = useRouter();

  function handleClick() {
    router.push(`/chatroom/${chatroomID}`);
  }

  return (
    <div onClick={handleClick}>
      <SpringyPopoutBorder className={"p-4 py-6 bg-yellow/20 font-bold text-black w-full flex-1"}>
        <div className={"flex flex-col h-full"}>
          <div className={"flex flex-col h-full"}>
            {chatroomID}
          </div>
          <div className={"flex text-gray-500 font-light text-sm flex-col h-full"}>
            2/1/2025
          </div>
        </div>

      </SpringyPopoutBorder>
    </div>

  );
}