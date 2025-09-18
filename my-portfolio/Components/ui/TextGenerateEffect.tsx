"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  // container variant for stagger
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // child variant: opacity + slight upward motion
  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration } },
  };

  return (
    <motion.div
      className={cn("font-bold", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`${idx > 2 ? "text-red-500" : "dark:text-white text-black"} mr-1`}
              variants={child}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
