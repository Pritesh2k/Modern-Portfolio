"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  year,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  year?: string | number;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  const onMouseLeave = () => setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");

  return (
    <a
      href={href}
      target="_blank"
      className={cn("relative group/pin z-50 cursor-pointer block", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0deg)" }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.2] group-hover/pin:border-white/[0.5] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>

      <PinPerspective title={title} href={href} year={year} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
  year,
}: {
  title?: string;
  href?: string;
  year?: string | number;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // only render on client

  const textShadow = "0 0 6px rgba(0,0,0,0.8)";

  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {year && (
          <div className="absolute -top-14 inset-x-0 flex justify-center">
            <span
              style={{ textShadow }}
              className="relative flex items-center z-10 rounded-full bg-red-900/40 backdrop-blur-md ring-1 ring-red-500/20 px-4 py-1 text-white text-xs hover:text-white transition-colors duration-300"
            >
              {year}
            </span>
          </div>
        )}

        <div className="absolute -top-5 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            className="relative flex items-center z-10 rounded-full bg-black/10 backdrop-blur-md ring-1 ring-white/20 px-4 py-1 hover:bg-red-500 hover:ring-red-400 transition-all duration-300"
          >
            <span
              style={{ textShadow }}
              className="text-white text-xs whitespace-nowrap truncate hover:text-white transition-colors duration-300"
            >
              {title}
            </span>
            <span className="absolute mt-7 left-4 h-px w-[calc(100%-2rem)] bg-gradient-to-r from-red-500/0 via-red-500/80 to-red-500/0 transition-opacity duration-500 group-hover:opacity-40" />
          </a>
        </div>

        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/[0.8] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-red-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
        <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-red-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </motion.div>
  );
};
