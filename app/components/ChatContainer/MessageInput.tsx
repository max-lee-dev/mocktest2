import React, {useState} from "react"
import {FaPaperPlane} from "react-icons/fa";
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({onSend}) => {
  const [message, setMessage] = useState("");

  // If user presses enter, send the message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };


  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className={"flex flex-row justify-between"}>
      <div className="flex w-full border-2 border-black rounded-lg items-center p-2 ">
        <input
          type="text"
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-1 focus:outline-none and focus:ring-0 rounded "
        />

      </div>
      <PopoutBorder>
        <button
          onClick={handleSend}

          className=" bg-yellow text-white border-black bg-blue-500 rounded flex items-center gap-2"
        >
          <FaPaperPlane/>
        </button>
      </PopoutBorder>
    </div>
  )
    ;
};

export default MessageInput;