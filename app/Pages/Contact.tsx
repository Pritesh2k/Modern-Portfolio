"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextPressure from "../Components/TextPressure";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("priteshparekh237@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full h-[40vh] bg-black/80 backdrop-blur-xl border border-white/50 rounded-b-2xl overflow-hidden p-4 md:p-10 gap-10">

      {/* Text Section */}
      <div className="flex items-center justify-center rounded-lg p-4 h-screen -translate-y-10 w-[60vw]">
        <TextPressure text="Contact" />
      </div>

      {/* Button Section */}
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center justify-center bg-red-500 text-white font-[Roboto_Flex] tracking-widest border rounded-2xl w-[40vw] h-40 translate-y-15
                  md:px-8 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl
                  z-10 relative"
      >
        <span>{copied ? "Copied!" : "Email"}</span>
      </motion.button>
    </div>
  );
};
