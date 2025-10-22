import React, { useState, useEffect, useRef } from 'react';
import Iridescence from '../Components/Iridescence';
import SplitText from '../Components/SplitText';
import { gsap } from 'gsap';

export const Hero = () => {
  const [showText, setShowText] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showText && textRef.current) {
      // Smooth fade-in for the container
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, [showText]);

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Iridescence />
      {showText && (
        <div
          ref={textRef}
          className="absolute z-100 text-white text-5xl md:text-7xl font-bold"
        >
          <SplitText text="Welcome to My Portfolio" textAlign="center" />
        </div>
      )}
    </div>
  );
};
