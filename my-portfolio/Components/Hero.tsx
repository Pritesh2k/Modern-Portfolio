import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { AuroraBackground } from "./ui/aurora-background";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-white-100">
      {/* AuroraBackground fixed behind all content */}
      <AuroraBackground className="fixed inset-0 z-0 w-full h-screen pointer-events-none">

      {/* Hero content centered */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="uppercase tracking-widest text-xs text-slate-600 opacity-80 mb-4">
          built with Next.js
        </h2>

        <TextGenerateEffect
          className="text-[40px] md:text-5xl lg:text-6xl mb-6"
          words="Transforming Concepts Into Seamless Experiences"
        />

        <p className="text-sm md:text-lg lg:text-2xl md:tracking-wider mb-8 text-slate-600">
          Hi I&apos;m Pritesh, a Web Developer from the UK
        </p>

        <a href="#about">
          <MagicButton
            title="Go To My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
