import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import clsx from "clsx";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function Hero() {
    return (
        // Hero.tsx
        <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
            {/* Spotlights */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="h-[80vh] w-[50vw] top-25 left-full" fill="purple" />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

            {/* Background overlay / radial gradient */}
            <div className="absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
                <div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Main content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                <h2 className="uppercase tracking-widest text-xs text-blue-100 opacity-30 mb-4">
                    built with Next.js
                </h2>

                <TextGenerateEffect
                    className="text-[40px] md:text-5xl lg:text-6xl mb-6"
                    words="Transforming Concepts Into Seamless Experiences"
                />

                <p className="text-sm md:text-lg lg:text-2xl md:tracking-wider mb-8">
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
        </div>

    );
}

export default Hero;
