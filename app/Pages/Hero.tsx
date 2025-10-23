import React, { useState, useEffect, useRef } from 'react';
import Iridescence from '../Components/Iridescence';
import SplitText from '../Components/SplitText';
import { gsap } from 'gsap';
import { MotionValue, motion } from 'framer-motion';
import RotatingText from '../Components/RotatingText';

interface HeroProps {
  opacity: MotionValue<number>; // received from Home
}

export const Hero: React.FC<HeroProps> = ({ opacity }) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const secondTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowFirstText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondText(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSecondText && secondTextRef.current) {
      gsap.fromTo(
        secondTextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [showSecondText]);

  // Longest text in RotatingText to calculate fixed width
  const longestText = 'React Bits Is Cool!'; // adjust to your longest phrase
  const fixedWidth = `${longestText.length}ch`;

  return (
    <div className="w-full h-screen relative">
      <Iridescence />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {showFirstText && (
          <motion.div
            className="flex justify-center"
            style={{ width: fixedWidth, opacity }}
            layout
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <RotatingText
              texts={['Expressing', 'Visualising', 'Illustrating', 'Showcasing', 'Articulating']}
              mainClassName="text-[clamp(2rem,5vw,5rem)] md:text-[clamp(3rem,6vw,7rem)] font-bold text-center uppercase text-red-500/30 [-webkit-text-stroke:1px_theme(colors.red.500)] drop-shadow-[0_0_3px_theme(colors.yellow.400)]"
              staggerFrom="last"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              staggerDuration={0.05}
              elementLevelClassName="inline-block"
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              rotationInterval={3000}
              splitBy="characters"
              loop
              auto
            />
          </motion.div>
        )}

        {showSecondText && (
          <motion.div
            ref={secondTextRef}
            style={{ opacity }}
            layout
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <SplitText
              text="Through Code"
              textAlign="center"
              className="font-extralight italic text-[clamp(1.5rem,4vw,3rem)] md:text-[clamp(2rem,5vw,5rem)] text-white"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
