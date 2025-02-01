import React from "react";
import {motion} from "framer-motion";

interface SpringyPopoutBorderProps {
  children: React.ReactNode;
  className?: string;
}

const SpringyPopoutBorder: React.FC<SpringyPopoutBorderProps> = ({children, className = ""}) => {
  return (
    <motion.div
      className={`h-full duration-300 transition-all ${className} border-2 text-black border-black rounded-xl shadow-[4px_6px_0px_0px_rgba(0,0,0,1)]`}
      whileHover={{
        boxShadow: "2px 3px 0px 0px rgba(0,0,0,1)", // Reduces shadow depth for a compressed look
      }}
      transition={{type: "springy", stiffness: 900, damping: 2}} // Responsive spring effect
    >
      {children}
    </motion.div>
  );
};

export default SpringyPopoutBorder;