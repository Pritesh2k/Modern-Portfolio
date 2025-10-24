"use client";

import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Mountain from '../../public/Mountain.png'

export const Solitude = () => {
    // Responsive breakpoints
    const isSmall = useMediaQuery({ maxWidth: 640 }); // mobile
    const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1024 }); // tablet

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
    bg-black/5 backdrop-blur-xl border border-white/10 overflow-hidden">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />

            {/* Display Section */}
            <div className="relative w-full h-screen">
                <Image
                    src={Mountain}
                    alt="Cherry Blossom"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom", scale: 1.2 }} // full width, top aligned
                    className="w-full h-full translate-y-50"
                />

                <div className="absolute flex justify-center items-center top-15 left-0 w-full h-80 text-center">
                    <span className='text-[15vw] text-white uppercase tracking-widest'>Solitude</span>
                </div>

                <Image
                    src={Mountain}
                    alt="Cherry Blossom"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom", scale: 1.2 }} // full width, top aligned
                    className="w-full h-full translate-y-50"
                />
            </div>
        </div>
    );
};
