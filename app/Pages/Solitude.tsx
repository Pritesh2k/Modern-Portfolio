"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export const Solitude = () => {
  // Responsive breakpoints
  const isSmall = useMediaQuery({ maxWidth: 640 }); // mobile
  const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1024 }); // tablet
  const isLarge = useMediaQuery({ minWidth: 1025 }); // desktop

  // Dynamic animation values based on screen size
  const scaleValues = isSmall
    ? [1, 1.05, 1, 1] // subtle for mobile
    : isMedium
    ? [1, 1.1, 1, 1] // medium intensity
    : [1, 1.15, 1, 1]; // strong for desktop

  const spacingValues = isSmall
    ? ["0.02em", "0.15em", "0.02em", "0.02em"]
    : isMedium
    ? ["0.05em", "0.20em", "0.05em", "0.05em"]
    : ["0.05em", "0.30em", "0.05em", "0.05em"];

  const floatValues = isSmall ? [0, -4, 0, 0] : [0, -8, 0, 0];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                    bg-white/5 backdrop-blur-xl border border-white/10 rounded-b-2xl overflow-hidden">

      {/* Responsive Breathing Solitude Title */}
      <div className='flex justify-center items-center w-full h-[15vh] px-3'>
        <motion.div
          className='text-5xl sm:text-5xl md:text-5xl font-semibold uppercase text-white tracking-widest'
          animate={{
            scale: scaleValues,            // responsive expansion
            letterSpacing: spacingValues, // responsive spacing
            y: floatValues,              // responsive floating
            textShadow: [
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 25px rgba(255,255,255,0.4)",
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 10px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{
            times: [0, 0.5, 0.75, 1], // expand 50%, retract 25%, pause 25%
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Solitude
        </motion.div>
      </div>

      {/* Display Section */}
      <div className='flex items-center justify-center w-full h-[85vh] px-3'>
        <div className='text-4xl sm:text-5xl md:text-6xl font-semibold uppercase text-white'>
          Display
        </div>
      </div>
    </div>
  );
};
