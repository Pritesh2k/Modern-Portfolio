import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Home, Code, Users, Phone } from 'react-feather';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: Home, href: '#' },
  { label: 'Projects', icon: Code, href: '#' },
  { label: 'Traits', icon: Users, href: '#' },
  { label: 'Contact', icon: Phone, href: '#' },
];

// Variants for the list
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger between icons
      delayChildren: 5,     // 5-second delay before animation
    },
  },
};

// Variants for each icon
const itemVariants: Variants = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
};

export const Navbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-transparent flex gap-4 z-50">
      {/* Tooltip label at bottom center */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.h2
            key={hoveredIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 translate-y-25 text-center text-white font-semibold text-3xl z-50"
          >
            {navItems[hoveredIdx].label}
          </motion.h2>
        )}
      </AnimatePresence>

      {/* Icon list */}
      <motion.ul
        className="flex gap-4 relative"
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
              <a
                href={item.href}
                className="relative flex items-center justify-center w-14 h-14 text-white transition-colors duration-200"
              >
                {/* Smooth Gooey Selector */}
                {isHovered && (
                  <motion.span
                    layout
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    exit={{ scale: 1 }}
                    transition={{
                      type: 'spring' as const,
                      stiffness: 200,
                      damping: 25,
                    }}
                    className="absolute top-0 left-0 w-14 h-14 rounded-2xl bg-red-500 z-0"
                  />
                )}

                {/* Icon */}
                <Icon
                  size={20}
                  color={isHovered ? 'white' : 'currentColor'}
                  className="relative z-10"
                />
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
