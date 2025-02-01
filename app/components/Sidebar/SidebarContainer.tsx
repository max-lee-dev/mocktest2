import React from "react";
import OtherChatButton from "@/app/components/Sidebar/OtherChatButton";
import PopuputBorder from "@/app/components/CustomUI/PopoutBorder";

const SidebarContainer = () => {
  return (
    <div className="h-full flex flex-col w-full p-4">


      <PopuputBorder className="p-6 bg-white max-h-[100vh] overflow-y-auto font-bold text-black w-full flex-1">
        <div className="border-b-2 pb-2 border-black flex flex-row justify-between">
          <h1 className="p-4 text-2xl">
            Chatrooms
          </h1>
          <PopuputBorder className="p-2 pt-3 px-6 bg-cyan font-bold text-black">
            <div className="text-2xl">
              <button
                className="flex items-center gap-2"
              >
                +
              </button>
            </div>
          </PopuputBorder>
        </div>

        <div className="flex pt-4 flex-col w-full">
          <div className="flex-1 space-y-4 w-full p-2">
            {Array.from({length: 20}, (_, i) => (
              <OtherChatButton key={i} chatroomID={`Chatroom ${i + 1}`}/>
            ))}
          </div>
        </div>
      </PopuputBorder>
    </div>
  );
};

export default SidebarContainer;