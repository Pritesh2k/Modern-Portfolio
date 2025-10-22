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
  { label: 'Solitude', icon: Activity, href: 'solitude' },
  { label: 'Contact', icon: Phone, href: 'contact' },
];

// Variants for the list
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2,
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

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const handleScroll = (id: string) => {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    if (id === 'home') {
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
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex flex-col items-center z-50 pointer-events-none">
      
      {/* Icon list */}
      <motion.ul
        className="flex justify-center w-full gap-6 pointer-events-auto"
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
              <motion.button
                onClick={() => handleScroll(item.href)}
                className="relative flex items-center justify-center
                           w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14
                           text-white/70 transition-colors duration-200 mx-auto pointer-events-auto"
                whileHover={{ scale: 1.1, y: -7 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Background Glow */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      layout
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/30 backdrop-blur-md shadow-lg z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <Icon
                  size={18}
                  className="relative z-10"
                  color={isHovered ? 'white' : 'currentColor'}
                />
              </motion.button>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* Tooltip label */}
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
