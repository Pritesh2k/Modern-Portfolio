import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Home, Code, Users, Activity, Phone } from 'react-feather';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: Home, href: 'home' },
  { label: 'Projects', icon: Code, href: 'project' },
  { label: 'Traits', icon: Users, href: 'traits' },
  { label: 'Activity', icon: Activity, href: 'solitude' },
  { label: 'Contact', icon: Phone, href: 'contact' },
];

// Variants for the list
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2, // 2s delay before icons animate
    },
  },
};

// Variants for each icon
const itemVariants: Variants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export const Navbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Tooltip animation variants
  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const handleScroll = (id: string) => {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    if (id === 'home') {
      // Scroll to top
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const elementTop = el.getBoundingClientRect().top;
        const scrollOffset = elementTop - containerTop + scrollContainer.scrollTop;
        scrollContainer.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full bottom-5 left-0 flex flex-col items-center z-50 pointer-events-none">
      {/* Icon list */}
      <motion.ul
        className="flex gap-4 relative pointer-events-auto"
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
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <button
                onClick={() => handleScroll(item.href)}
                className="relative flex items-center justify-center
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                   text-white/70 transition-colors duration-200"
              >
                {/* Smooth Gooey Selector */}
                {isHovered && (
                  <motion.span
                    layout
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    exit={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="absolute top-0 left-0 rounded-2xl bg-black/20 backdrop-blur-md
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 z-0"
                  />
                )}

                {/* Icon */}
                <Icon
                  size={18}
                  className="relative z-10"
                  color={isHovered ? 'white' : 'currentColor'}
                />
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* Tooltip label with fixed position above navbar */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.h2
            key={hoveredIdx}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed z-50 text-red-600 font-semibold text-center
               text-2xl sm:text-3xl md:text-3xl pointer-events-none left-1/2 mb-20 transform -translate-x-1/2 -translate-y-15"
          >
            {navItems[hoveredIdx].label}
          </motion.h2>
        )}
      </AnimatePresence>
    </nav>
  );
};
