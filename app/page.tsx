"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from './Pages/Hero';
import { Navbar } from "./Components/NavBar";
import { Projects } from "./Pages/Projects";
import { Traits } from "./Pages/Traits";
import { Solitude } from "./Pages/Solitude";
import { Contact } from "./Pages/Contact";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Attach scrollYProgress to the scroll container
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Map scroll to text opacity (fade out when scrolling down)
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero opacity={textOpacity} />
      </section>

      {/* Scrollable Content */}
      <motion.div
        ref={scrollRef}
        className="scroll-container absolute top-0 left-0 w-full h-screen overflow-y-scroll scroll-smooth z-10"
      >
        {/* Spacer for Hero */}
        <section className="h-screen w-full bg-transparent" />

        {/* Projects Section */}
        <section id="project" className="h-screen w-full flex items-center justify-center">
          <Projects />
        </section>

        {/* Traits Section */}
        <section id="traits" className="h-screen w-full flex items-center justify-center">
          <Traits />
        </section>

        {/* Solitude Section */}
        <section id="solitude" className="h-screen w-full flex items-center justify-center">
          <Solitude />
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-[40vh] w-full flex items-center justify-center">
          <Contact />
        </section>
      </motion.div>
    </div>
  );
}
