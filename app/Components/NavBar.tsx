"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home, Code, Users, Activity, Phone, X, Grid } from "react-feather";
import GlassSurface from "../Components/GlassSurface";

const navItems = [
  { label: "Home", icon: Home, href: "home" },
  { label: "Projects", icon: Code, href: "project" },
  { label: "Skills", icon: Users, href: "traits" },
  { label: "Solitude", icon: Activity, href: "solitude" },
  { label: "Contact", icon: Phone, href: "contact" },
];

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

export const Navbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  const handleScroll = (id: string) => {
    const scrollContainer = document.querySelector(".scroll-container") as HTMLElement;
    if (!scrollContainer) return;
    if (id === "home") scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const el = document.getElementById(id);
      if (el) {
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const elementTop = el.getBoundingClientRect().top;
        const scrollOffset = elementTop - containerTop + scrollContainer.scrollTop;
        scrollContainer.scrollTo({ top: scrollOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        rel="stylesheet"
      />

      <AnimatePresence>
        <motion.div
          key="glass-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-center"
          animate={{
            width: isOpen ? 80 : 64,
            height: isOpen ? "40vh" : 64,
            borderRadius: isOpen ? 24 : 100,
            translateX: isOpen ? -25 : 15,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={isOpen ? 24 : 100}
            backgroundOpacity={0}
            brightness={1}
            className="relative flex flex-col items-center justify-center px-4 pointer-events-auto bg-transparent"
          >
            {isOpen ? (
              <>
                {/* Vertical Navbar Items */}
                <motion.ul
                  className="flex flex-col gap-0 items-center w-full justify-center pt-5"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isHovered = hoveredIdx === idx;
                    return (
                      <motion.li
                        key={idx}
                        className="relative shrink-0"
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        <motion.button
                          onClick={() => {
                            handleScroll(item.href);
                            setIsOpen(false);
                          }}
                          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-white/70 pointer-events-auto rounded-2xl"
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Icon size={20} color={isHovered ? "#ffffff" : "currentColor"} />
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Close Icon */}
                <X size={20} className="text-red-500 absolute top-4 right-3.25 z-10" />
              </>
            ) : (
              <motion.div className="relative w-6 h-6 flex items-center justify-center z-10">
                <Grid size={20} className="text-white z-10" />
                <motion.div
                  className="absolute w-full h-full rounded-full bg-white/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </motion.div>
            )}
          </GlassSurface>
        </motion.div>
      </AnimatePresence>

      {/* Tooltip to the left of navbar */}
      <AnimatePresence>
        {hoveredIdx !== null && isOpen && (
          <motion.div
            key={hoveredIdx}
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ pointerEvents: "none" }}
            className="absolute flex items-center justify-end right-full mr-4 top-1/2 transform -translate-x-8 -translate-y-1/2 w-40 -z-10"
          >
            <span className="flex justify-center items-center w-full text-center font-[Roboto_Flex] font-light text-white tracking-widest drop-shadow-[0_0_10px_var(--color-white)] text-5xl leading-none ">
              {navItems[hoveredIdx].label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
