"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  number: number; // number for bottom-right
};

type CardStackProps = {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
};

export const CardStack = ({
  items,
  offset = 5,
  scaleFactor = 0.05,
  className = "",
}: CardStackProps) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.push(newArray.shift()!);
        return newArray;
      });
    }, 7000); // slower flipping
  };

  return (
    <div className={`relative h-48 w-96 md:h-56 md:w-[500px] ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`absolute h-48 w-96 md:h-56 md:w-[500px] rounded-3xl p-[2px] flex justify-center items-center overflow-hidden
                      ${index !== 0 ? "shadow-lg shadow-slate-700/40 dark:shadow-black/50" : ""}`} 
          style={{ transformOrigin: "top center" }}
          animate={{
            y: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Gradient glow for front card only */}
          {index === 0 && (
            <div className="absolute inset-0 z-0 flex justify-center items-center">
              <span className="absolute inset-0 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-3xl scale-[1.25] blur-[12px]" />
            </div>
          )}

          {/* Modern card background */}
          <div className="absolute top-[2px] bottom-[2px] left-[2px] right-[2px] bg-slate-300/80 rounded-3xl shadow-inner shadow-black/20 z-10 backdrop-blur-[12px] border border-slate-400/20" />

          {/* Inner content */}
          <div className="relative h-full w-full rounded-3xl flex flex-col items-center justify-center z-20 p-4">
            <p className="text-center font-extrabold text-gray-800 text-2xl md:text-3xl lg:text-4xl drop-shadow-md">
              {card.content}
            </p>

            {/* Number in bottom-right */}
            <span className="absolute bottom-3 right-3 text-white-200-400 font-extrabold text-4xl md:text-5xl select-none pointer-events-none drop-shadow-lg">
              #{card.number}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
