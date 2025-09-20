"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaHome, FaUser, FaProjectDiagram, FaQuoteLeft, FaEnvelope } from "react-icons/fa";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "Home", link: "#", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Quotes", link: "#quotes", icon: <FaQuoteLeft /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  // Show/hide nav based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) setVisible(false);
      else setVisible(direction < 0);
    }
  });

  useEffect(() => {
    const sectionElements = navItems
      .map(item => (item.link === "#" ? null : document.querySelector(item.link)))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      let currentActive = "Home";

      // Very top → Home
      if (window.scrollY < 50) {
        currentActive = "Home";
      }
      // Bottom 1/3 → Contact
      else if (window.scrollY + viewportHeight * (1 / 3) >= pageHeight) {
        currentActive = "Contact";
      }
      // Middle of sections
      else {
        for (const sec of sectionElements) {
          const secTop = sec.offsetTop;
          const secMid = secTop + sec.offsetHeight / 2; // midpoint of the section
          if (scrollMiddle >= secTop && scrollMiddle < secTop + sec.offsetHeight) {
            currentActive = navItems.find(item => item.link === `#${sec.id}`)?.name || "Home";
            break;
          }
        }
      }

      setActiveSection(prev => (prev !== currentActive ? currentActive : prev));

      // Update URL hash
      const hash = currentActive === "Home" ? "#" : `#${currentActive.toLowerCase()}`;
      history.replaceState(null, "", hash);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 sm:px-10 py-3 sm:py-5 items-center justify-center space-x-3 sm:space-x-4 border-white/[0.2] bg-black/90",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = activeSection === navItem.name;
          return (
            <a
              key={idx}
              href={navItem.link}
              className={cn(
                "relative flex items-center justify-center transition-colors duration-300 hover:text-red-300", // <-- hover updated
                isActive
                  ? "text-red-500 font-bold"
                  : "text-neutral-600 dark:text-neutral-50 dark:hover:text-red-300"
              )}
              title={navItem.name}
            >
              <span className="block sm:hidden text-lg">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>

          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
