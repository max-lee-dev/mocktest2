"use client";
import React, {useEffect, useState} from "react";
import PopuputBorder from "@/app/components/CustomUI/PopoutBorder";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import OtherChatButton from "@/app/components/Sidebar/OtherChatButton";
import {createNewChatroom, retrieveChatroomIDs} from "@/app/utils/firebaseUtils";
import {useRouter} from "next/navigation";

const SidebarContainer = () => {
  const [chatroomIDs, setChatroomIDs] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchChatroomIDs() {
      const chatroomIDs = await retrieveChatroomIDs();
      setChatroomIDs(chatroomIDs);
    }

    fetchChatroomIDs().catch((error) => {
      console.error("Error fetching chatroom IDs:", error);
    });

  }, []);

  async function handleNewRoom() {
    await createNewChatroom().then((res) => {
      console.log("hi: " + res)
      router.push(`/chatroom/${res}`);

    })
  }

  return (
    <div className="h-full flex flex-col w-full p-4">

      <PopuputBorder className="p-6 bg-white max-h-[100vh] overflow-y-auto font-bold text-black w-full flex-1">
        <div className="border-b-2 pb-2 border-black flex flex-row justify-between">
          <h1 className="p-4 text-2xl">
            Chatrooms
          </h1>
          <div onClick={handleNewRoom}>
            <SpringyPopoutBorder className="cursor-pointer m-1 p-1  h-12 px-4 font-bold text-black">
              <div className="justify-center self-center items-center flex flex-col text-2xl">
                +
              </div>
            </SpringyPopoutBorder>
          </div>
        </div>

        <div className="flex pt-4 flex-col w-full">
          <div className="flex-1 space-y-4 w-full p-2">
            {chatroomIDs.map((chatroomID, index) => (
              <OtherChatButton key={index} chatroomID={chatroomID}/>
            ))}
          </div>
        </div>
      </PopuputBorder>
    </div>
  );

}
export default SidebarContainer;