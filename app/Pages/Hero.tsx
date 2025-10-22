import React, { useState, useEffect, useRef } from 'react';
import Iridescence from '../Components/Iridescence';
import SplitText from '../Components/SplitText';
import { gsap } from 'gsap';

export const Hero = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  // Show first text after 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstText(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show second text after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Fade-in animations
  useEffect(() => {
    if (showFirstText && firstTextRef.current) {
      gsap.fromTo(firstTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' });
    }
  }, [showFirstText]);

  useEffect(() => {
    if (showSecondText && secondTextRef.current) {
      gsap.fromTo(secondTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' });
    }
  }, [showSecondText]);

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Iridescence />
      
      {showFirstText && (
        <div ref={firstTextRef} className="absolute z-100 text-white text-5xl md:text-7xl font-bold text-center">
          <SplitText text="Exploring Creativity" textAlign="center" />
        </div>
      )}

      {showSecondText && (
        <div ref={secondTextRef} className="absolute translate-y-15 z-100 text-white text-5xl md:text-7xl font-bold text-center">
          <SplitText text="Through Code" textAlign="center" className="font-extralight italic text-3xl"/>
        </div>
      )}
    </div>
  );
};
