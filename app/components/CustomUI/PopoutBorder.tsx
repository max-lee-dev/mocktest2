import React from "react";

interface PopoutBorderProps {
  children: React.ReactNode;
  className?: string;
}

const PopoutBorder: React.FC<PopoutBorderProps> = ({children, className = "",}) => {
  return (
    <div
      className={`h-full ${className} border-2 text-black border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
      {children}
    </div>

  );
};


export default PopoutBorder;