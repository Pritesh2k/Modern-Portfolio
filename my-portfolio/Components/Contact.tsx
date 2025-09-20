'use client';

import React, { useState } from "react";
import { FlipWords } from "./ui/flip-words";
import Lottie from "lottie-react";
import animationData from '@/data/confetti.json';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('priteshparekh237@gmail.com');
    setCopied(true);
    setPlayAnimation(true);

    setTimeout(() => {
      setCopied(false);
      setPlayAnimation(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-screen min-h-[75vh] overflow-hidden
      bg-gradient-to-br from-white/10 via-white/5 to-transparent
      backdrop-blur-xl shadow-lg
      flex flex-row items-center justify-center"
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
    >

      {/* Left Section: Words + Button */}
      <div className="flex flex-col justify-center items-center w-[60vw] h-full p-4 gap-10 uppercase">
        <FlipWords
          words={[
            "Reach Out",
            "Connect With Me",
            "Send a Message",
            "Talk To Me",
            "Say Hello",
            "Let's Chat",
            "Drop a Line",
            "Get in Touch",
            "Start a Conversation",
            "Reach Me Anytime",
            "Let's Talk",
            "Message Me",
            "Say Hi",
            "Ping Me",
            "Connect Today",
            "Don't Be Shy",
          ]}
          className="text-[clamp(2rem,8vw,6rem)] sm:text-[clamp(3rem,6vw,8rem)] font-bold text-center"
        />

        {/* Button & Lottie */}
        <div className="relative flex flex-col items-center w-full">
          {/* Lottie Confetti */}
          {playAnimation && (
            <div className="absolute -top-24 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 pointer-events-none flex justify-center items-center">
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
              />
            </div>
          )}

          <button
            onClick={handleCopy}
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white px-6 py-3 shadow-lg rounded-full hover:scale-105 transition-transform duration-300"
          >
            {copied ? 'Email Copied' : 'Contact Me'}
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center items-center w-[40vw] h-full p-4">
        <img
          src="/profil-pic.jpg"
          alt="Profile"
          className="rounded-full object-cover aspect-square
                     max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] 
                     shadow-lg"
        />
      </div>
    </section>
  );
};
