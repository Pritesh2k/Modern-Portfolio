"use client";
import React, { useState, useEffect, useRef } from "react";
import Iridescence from "../Components/Iridescence";
import { gsap } from "gsap";
import { MotionValue, motion, Variants } from "framer-motion";
import RotatingText from "../Components/RotatingText";

interface HeroProps {
  opacity: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ opacity }) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showSideText, setShowSideText] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  // Fade-in first and second text
  useEffect(() => {
    const timer = setTimeout(() => setShowFirstText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSecondText && secondTextRef.current) {
      gsap.fromTo(
        secondTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, [showSecondText]);

  // IntersectionObserver to toggle side text visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowSideText(entry.isIntersecting));
      },
      { threshold: 0.3 } // trigger when 30% of hero is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 4 } },
  };

  const itemVariants: Variants = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const longestText = "React Bits Is Cool!";
  const fixedWidth = `${longestText.length}ch`;

  return (
    <div ref={heroRef} className="w-full h-screen relative">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
      <Iridescence />

      {/* Center Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {showFirstText && (
          <motion.div
            className="flex justify-center"
            style={{ width: fixedWidth, opacity }}
            layout
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <RotatingText
              texts={["Expressing", "Visualising", "Illustrating", "Showcasing", "Articulating"]}
              mainClassName="text-[clamp(2rem,5vw,5rem)] md:text-[clamp(3rem,6vw,7rem)] font-bold text-center uppercase text-red-500/30 [-webkit-text-stroke:1px_theme(colors.red.500)] drop-shadow-[0_0_3px_theme(colors.yellow.400)]"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              staggerDuration={0.05}
              elementLevelClassName="inline-block"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={4000}
              splitBy="characters"
              loop
              auto
            />
          </motion.div>
        )}

        {showSecondText && (

          <motion.div
            className="flex justify-center"
            style={{ width: fixedWidth, opacity }}
            layout
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <RotatingText
              texts={["Through", "Code"]}
              mainClassName="text-[clamp(2rem,5vw,5rem)] md:text-[clamp(3rem,6vw,7rem)] font-bold text-center uppercase text-white/50"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              staggerDuration={0.05}
              elementLevelClassName="inline-block"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2000}
              splitBy="characters"
              loop
              auto
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
