import React, {JSX} from "react";

import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";

type SidebarContainerProps = {
  chatroomID: string;
}
export default function SidebarContainer({chatroomID}: SidebarContainerProps): JSX.Element {
  return (
    <PopoutBorder className={"p-4 py-8 bg-yellow font-bold text-black w-full flex-1"}>
      <div className={"flex flex-col h-full"}>
        {chatroomID}
      </div>
    </PopoutBorder>
  );
}