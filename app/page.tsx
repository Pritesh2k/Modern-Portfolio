"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from './Pages/Hero';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Optional: smooth transition for scroll effects
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="w-full h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen relative z-0">
        <Hero />
      </div>

      {/* Scrollable Content */}
      <motion.div
        ref={scrollRef}
        className="absolute top-0 left-0 w-full h-screen overflow-y-scroll scroll-smooth z-10"
      >
        {/* Spacer for Hero */}
        <section className="h-screen w-full bg-transparent" />

        {/* Traits Section */}
        <motion.section
          className="h-screen w-full bg-white flex items-center justify-center px-4 box-border"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center">Traits Section</h2>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="h-screen w-full bg-gray-100 flex items-center justify-center px-4 box-border"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center">Projects Section</h2>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="h-screen w-full bg-gray-200 flex items-center justify-center px-4 box-border"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center">Contact Section</h2>
        </motion.section>
      </motion.div>
    </div>
  );
}
