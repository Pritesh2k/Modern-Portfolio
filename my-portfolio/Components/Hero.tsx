"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { AuroraBackground } from "./ui/aurora-background";

function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // How far we have scrolled compared to hero height
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade starts at 0 scroll and goes to 0 at 1 * window height
      const newOpacity = Math.max(0.9 - scrollTop / windowHeight, 1);
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
          <h2 className="uppercase tracking-widest text-xs text-slate-100 opacity-80 mb-4">
            built with Next.js
          </h2>

          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl mb-6"
            words="Transforming Concepts Into Seamless Experiences"
          />

          <p className="text-sm md:text-lg lg:text-2xl md:tracking-wider mb-8 text-slate-100">
            Hi I&apos;m Pritesh, a Web Developer from the UK
          </p>

          <a href="#about">
            <MagicButton
              title="Go To My Work"
              icon={<FaLocationArrow color="rgb(239 68 68"/>}
              position="right"
            />
          </a>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
