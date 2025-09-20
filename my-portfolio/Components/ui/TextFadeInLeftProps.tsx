"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface TextFadeInLeftProps {
  words: string;
  className?: string;
  duration?: number;
  delayPerWord?: number;
  wordClassNames?: string[];
}

export const TextFadeInLeft: React.FC<TextFadeInLeftProps> = ({
  words,
  className,
  duration = 0.5,
  delayPerWord = 0.15,
  wordClassNames = [],
}) => {
  const wordsArray = words.split(" ");

  // Explicitly type variants
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: delayPerWord } },
  };

  const child: Variants = {
    hidden: { opacity: 0, x: -30, willChange: "opacity, transform" },
    visible: { opacity: 1, x: 0, transition: { duration, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          variants={child}
          className={wordClassNames[idx] || ""}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
