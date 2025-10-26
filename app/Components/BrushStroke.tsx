"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrushStroke: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <svg
      className="pointer-events-none absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M0,250 C200,350 400,150 600,280 C800,380 1000,200 1200,260"
        stroke="url(#grad1)"
        strokeWidth="18"
        fill="transparent"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="50%" stopColor="#ff9900" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrushStroke;
