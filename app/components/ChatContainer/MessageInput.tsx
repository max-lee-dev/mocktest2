import React, {useState} from "react"
import {FaPaperPlane} from "react-icons/fa";

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
    <div className="flex border-2 border-black rounded-lg items-center p-2 border-t">
      <input
        type="text"
        value={message}
        onKeyDown={handleKeyDown}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-grow p-1 focus:outline-none and focus:ring-0 rounded "
      />
      <button
        onClick={handleSend}

        className="ml-2 px-4 py-2 bg-blue-500 text-black rounded flex items-center gap-2"
      >
        <FaPaperPlane/>
      </button>
    </div>
  );
};

export default MessageInput;