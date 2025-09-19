"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { AuroraBackground } from "./ui/aurora-background";
import { TextFadeInLeft } from "./ui/TextFadeInLeftProps";

import { motion } from "framer-motion";

function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out faster → reduce denominator (e.g., 0.5 * windowHeight)
      const fadeHeight = windowHeight * 0.5; // half screen height
      const newOpacity = Math.max(1 - scrollTop / fadeHeight, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative w-full h-screen bg-white-100">
      {/* AuroraBackground with scroll-based opacity */}
      <AuroraBackground
        className="fixed inset-0 z-0 w-full h-screen transition-opacity duration-300"
      >
        {/* Hero content */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300"
          style={{ opacity }}
        >
          <TextFadeInLeft
            words="built with Next.js"
            className="uppercase tracking-widest text-xs text-slate-100 opacity-80 mb-4 drop-shadow-lg"
          />

          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl mb-6 drop-shadow-lg"
            words="Welcome To My Portfolio"
          />

          <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Felipa&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>

          <TextFadeInLeft
            words="Pritesh Parekh | DEV"
            className="text-sm md:text-lg lg:text-2xl md:tracking-wider mb-8 drop-shadow-lg"
            wordClassNames={[
              "beau-rivage-regular text-3xl text-slate-100", // Pritesh
              "beau-rivage-regular text-3xl text-slate-100", // Parekh
              "text-blue-800 font-bold relative z-10 [text-shadow:7px_0_15px_rgba(30 64 175,0.3)]", // | pipe with glow
              "text-blue-800 font-bold [text-shadow:2px_0_10px_rgba(30 64 175,0.3)]",                          // DEV
            ]}
          />

          <a href="#projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}      // start slightly below
              animate={{ opacity: 1, y: 0 }}      // fade in and move to final position
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }} // delay before appearing
            >
              <MagicButton
                title="My Work"
                icon={<FaLocationArrow color="rgb(239 68 68)" />}
                position="right"
                otherClasses="text-white"
              />
            </motion.div>
          </a>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
