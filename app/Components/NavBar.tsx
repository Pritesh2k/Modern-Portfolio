"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home, Code, Users, Activity, Phone, X, Grid } from "react-feather";

const navItems = [
    { label: "Home", icon: Home, href: "home" },
    { label: "Projects", icon: Code, href: "project" },
    { label: "Traits", icon: Users, href: "traits" },
    { label: "Solitude", icon: Activity, href: "solitude" },
    { label: "Contact", icon: Phone, href: "contact" },
];

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

export const Navbar: React.FC = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const tooltipVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
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
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
            {/* Collapsed Circle / Close Button */}
            <AnimatePresence>
                <motion.button
                    key="circle"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg shadow-black/20 pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-50"
                    animate={{
                        x: isOpen ? "315%" : "0%", // moves right when open
                        y: -9,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                >
                    {isOpen ? (
                        <X size={20} className="text-white" />
                    ) : (
                        <motion.div className="relative w-6 h-6 flex items-center justify-center">
                            <Grid size={20} className="text-white z-10" />
                            {/* Glow pulse behind the icon */}
                            <motion.div
                                className="absolute w-full h-full rounded-full bg-white/20"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                        </motion.div>
                    )}
                </motion.button>
            </AnimatePresence>

            {/* Expanded Navbar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        key="expanded"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        className="flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20 rounded-3xl pr-10 pointer-events-auto"
                        style={{ width: "90vw", maxWidth: 480, height: 80 }}
                    >
                        {/* Icons */}
                        <motion.ul
                            className="flex gap-4 sm:gap-6 items-center"
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
                                                setIsOpen(false); // <-- Close the navbar on click
                                            }}
                                            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-white/70 pointer-events-auto rounded-2xl"
                                            whileHover={{ scale: 1.15 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        >
                                            <Icon size={20} color={isHovered ? "#fb2c36" : "currentColor"}/>
                                        </motion.button>

                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Tooltip above navbar */}
            <AnimatePresence>
                {hoveredIdx !== null && isOpen && (
                    <motion.h2
                        key={hoveredIdx}
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed bottom-25 left-1/2 transform -translate-x-1/2 font-light flex items-center justify-center bg-white/10 backdrop-blur-xl border rounded-2xl p-4 border-white/20 shadow-lg shadow-black/20 rounded-3xlr text-white text-lg pointer-events-none font-[Roboto_Flex] tracking-widest drop-shadow-[0_0_10px_var(--color-white)]"
                    >
                        {navItems[hoveredIdx].label}
                    </motion.h2>
                )}
            </AnimatePresence>
        </div>
    );
};
