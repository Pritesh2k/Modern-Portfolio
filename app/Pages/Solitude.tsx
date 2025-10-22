"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Solitude = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                    bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      
      {/* Breathing Solitude Title */}
      <div className='flex justify-center items-center w-full h-[15vh] px-3'>
        <motion.div
          className='text-5xl font-semibold uppercase text-white'
          animate={{
            scale: [1, 1.12, 1, 1],                  // expand, retract, pause
            letterSpacing: ["0.05em", "0.25em", "0.05em", "0.05em"],
            y: [0, -8, 0, 0],
            textShadow: [
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 25px rgba(255,255,255,0.4)",
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 10px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{
            times: [0, 0.5, 0.75, 1],  // expand 50%, retract 25%, pause 25%
            duration: 8,               // total duration including pause
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Solitude
        </motion.div>
      </div>

      {/* Display Section */}
      <div className='flex items-center w-full h-[85vh] px-3'>
        <div className='text-5xl font-semibold uppercase text-white'>
          Display
        </div>
      </div>
    </div>
  )
}
