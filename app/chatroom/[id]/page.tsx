"use client";

import React from "react";
import {useParams} from "next/navigation";
import SidebarContainer from "@/app/components/Sidebar/SidebarContainer";
import ChatContainer from "@/app/components/ChatContainer/ChatContainer";

const Id = () => {
  const params = useParams(); // Get route parameters
  const id = params.id; // Extract the ID

  return (
    <div className={"flex flex-row w-full h-full"}>
      <div className={"w-[30%] min-h-[80vh] p-4"}>
        <SidebarContainer/>
      </div>

      <div className={"p-8 w-[70%] min-h-[80vh] justify-end flex"}>
        <ChatContainer chatroomID={id as string}/>
      </div>
    </div>

  );
};

export default Id;