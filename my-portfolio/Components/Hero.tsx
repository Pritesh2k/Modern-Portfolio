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
      const fadeHeight = windowHeight * 0.5;
      setOpacity(Math.max(1 - scrollTop / fadeHeight, 0));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white-100">
      <AuroraBackground className="fixed inset-0 z-0 w-full h-screen transition-opacity duration-300">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300"
          style={{ opacity }}
        >
          {/* Small upper text */}
          <TextFadeInLeft
            words="built with Next.js"
            className="uppercase tracking-widest text-[clamp(0.6rem,1.5vw,0.9rem)] sm:text-[clamp(0.7rem,2vw,1rem)] md:text-[clamp(0.8rem,2vw,1.1rem)] text-slate-100 opacity-80 mb-4 drop-shadow-lg"
          />

          {/* Main headline */}
          <TextGenerateEffect
            className="text-[clamp(1.8rem,5vw,2.5rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2.2rem,5vw,3.5rem)] lg:text-[clamp(2.5rem,5vw,4rem)] mb-6 drop-shadow-lg"
            words="Welcome To My Portfolio"
          />

          <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Felipa&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>

          {/* Subtitle */}
          <TextFadeInLeft
            words="Pritesh Parekh | DEV"
            className="text-[clamp(0.8rem,2vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,2.5vw,1.2rem)] lg:text-[clamp(1.1rem,2.5vw,1.3rem)] md:tracking-wider mb-8 drop-shadow-lg"
            wordClassNames={[
              "beau-rivage-regular text-[clamp(1.8rem,4vw,2rem)] text-slate-100", // Pritesh
              "beau-rivage-regular text-[clamp(1.8rem,4vw,2rem)] text-slate-100", // Parekh
              "text-blue-800 font-bold relative z-10 [text-shadow:7px_0_15px_rgba(30 64 175,0.3)]", // |
              "text-blue-800 font-bold [text-shadow:2px_0_10px_rgba(30 64 175,0.3)]", // DEV
            ]}
          />

          {/* Button */}
          <a href="#projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <MagicButton
                title="My Work"
                icon={<FaLocationArrow color="rgb(239 68 68)" />}
                position="right"
                otherClasses="text-white text-[clamp(0.8rem,1.8vw,1rem)] sm:text-[clamp(0.9rem,2vw,1.1rem)] md:text-[clamp(1rem,2vw,1.2rem)] px-4 py-2 sm:px-6 sm:py-3"
              />
            </motion.div>
          </a>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
