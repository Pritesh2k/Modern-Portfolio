"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export const AestheticDivider = () => {
  return (
            <section
            id="projects"
            className="relative w-screen min-h-[26vh] flex flex-col items-center
                bg-gradient-to-br from-white/10 via-white/5 to-transparent
                backdrop-blur-xl 
                shadow-lg -mb-5
                overflow-hidden pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-12 sm:pb-14 md:pb-16 lg:pb-20 -mt-1"
        ></section>
  );
};
