import React, { useMemo } from "react";
import { CardStack } from "./ui/card-stack";
import quotesData from "../data/quotes.json";
import { WavyBackground } from "./ui/wavy-background";
import { TextHoverEffect } from "./ui/text-hover-effect";

export const RandomQuotes = () => {
    const cards = useMemo(() => {
        const shuffledQuotes = [...quotesData.quotes].sort(() => Math.random() - 0.5);
        return shuffledQuotes.slice(0, 5).map((quote) => ({
            id: quote.number,
            number: quote.number,
            name: "Quote",
            designation: "",
            content: quote.text,
        }));
    }, []);

    return (
        <div
            id="quotes"
            className="relative w-screen min-h-screen flex flex-col items-center justify-between
                bg-gradient-to-br from-white/10 via-white/5 to-transparent
                backdrop-blur-xl 
                border border-white/20 
                shadow-lg 
                overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20 gap-10"
            style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
            {/* Wavy background behind cards - always slow now */}
            <WavyBackground
                containerClassName="absolute inset-0 w-full h-full"
                waveWidth={40}
                blur={10}
                waveOpacity={0.6}
                backgroundFill="transparent"
                colors={[
                    "#ddd6fe",
                    "#a5b4fc",
                    "#ddd6fe",
                    "#fff",
                ]}
            />

            {/* Title Section */}
            <h1 className="flex flex-wrap justify-center items-center text-center
                text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl xl:text-7xl
                text-slate-100 font-bold drop-shadow-lg gap-2">

                <TextHoverEffect text="Some" />

                <span className="text-blue-800 font-bold
                    text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl xl:text-6xl">
                    Quotes
                </span>
            </h1>

            <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Felipa&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>
            <div
                className="beau-rivage-regular 
             text-[clamp(1.5rem,5vw,3rem)] 
             text-center 
             -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40
             [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]"
            >
                ~ Randomly Generated ~
            </div>


            {/* CardStack Section */}
            <div className="relative z-20 flex justify-center items-center -mt-32">
                <CardStack items={cards} offset={15} scaleFactor={0.05} />
            </div>

            {/* Subtitle Section */}
            <h2 className="relative z-20 text-center text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl text-slate-100 drop-shadow-lg font-light italic -translate-y-40 [text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]">
                To Get You By
            </h2>
        </div>
    );
};
