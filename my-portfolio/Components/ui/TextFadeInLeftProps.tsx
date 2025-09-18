"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextFadeInLeftProps {
  words: string;               // The text you want to animate
  className?: string;          // Tailwind classes for styling
  duration?: number;           // Animation duration per word
  delayPerWord?: number;       // Stagger delay between words
  wordClassNames?: string[];   // Optional: per-word classes
}

export const TextFadeInLeft: React.FC<TextFadeInLeftProps> = ({
  words,
  className,
  duration = 0.5,
  delayPerWord = 0.15,
  wordClassNames = [],
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration,
            delay: idx * delayPerWord,
            ease: "easeOut",
          }}
          className={wordClassNames[idx] || ""}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
