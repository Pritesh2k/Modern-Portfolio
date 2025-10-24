"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVelocity from "../Components/ScrollVelocity";
import Image from "next/image";

import TerraWaterImg from '../../public/terraWATER.png'
import Bali_Img from '../../public/Bali-Image.jpg'

import PortfolioImg from '../../public/villa.jpg'
import PortfolioSC from '../../public/portfolio-v1.png'

import Portfolio2Img from '../../public/fluid.jpg'
import Portfolio2SC from '../../public/portfolio_2.png'

import InProgress from '../../public/gears.jpg'

export const Projects = () => {
    const projectItems = [
        {
            title: "Portfolio v.2",
            description: "New Design, Improved UX, Design Focused",
            extraInfo: "Made with Next.js & Tailwind CSS",
            image: Portfolio2SC,
            coverImage: Portfolio2Img,
            date: "October / 2025",
            link: "#",
        },
        {
            title: "Terra Water Indonesia",
            description: "Increased Site Traffic, Sales, Improved SEO",
            extraInfo: "Made with Wix",
            image: TerraWaterImg,
            coverImage: Bali_Img,
            date: "July / 2024",
            link: "https://www.terrawaterindonesia.com/",
        },
        {
            title: "Portfolio v.1",
            description: "Scarface Inspired Portfolio",
            extraInfo: "Made with React.js",
            link: "https://master.d1miri9ffluv3o.amplifyapp.com/",
            image: PortfolioSC,
            coverImage: PortfolioImg,
            date: "June / 2023",
        },
        {
            title: "...In the works",
            description: "More Projects Coming Soon!",
            extraInfo: "Stay Tuned!",
            image: InProgress,
            coverImage: InProgress,
            date: "July / 2024",
            link: "https://www.terrawaterindonesia.com/",
        },
    ];

    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                bg-black/5 backdrop-blur-xl border border-white/10 rounded-t-2xl overflow-hidden">
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
                rel="stylesheet"
            />

            {/* Top Section */}
            <div className="flex w-full h-[15vh] px-3 items-center justify-center">
                <div className="text-5xl pt-5 font-semibold uppercase text-white text-center md:text-left font-[Roboto_Flex]">
                    <ScrollVelocity texts={["Projects / "]} velocity={150} className="custom-scroll-text" />
                </div>
            </div>

            {/* 2x2 Grid Section */}
            <div className="w-full h-[85vh] p-3 flex items-center justify-center relative">
                <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-full">
                    {projectItems.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            className="relative flex items-center justify-center h-full w-full text-gray-700 text-5xl font-semibold uppercase font-[Roboto_Flex] rounded-2xl cursor-pointer shadow-2xl overflow-hidden group border"
                            onClick={() => setSelectedProject(index)}
                            whileHover={{ scale: 1.03 }}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                const rotateX = ((y - rect.height / 2) / rect.height) * -10; // tilt up/down
                                const rotateY = ((x - rect.width / 2) / rect.width) * 10; // tilt left/right

                                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            {item.image && (
                                <Image
                                    src={item.coverImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:opacity-90 group-hover:scale-110 group-hover:blur-sm transition-all text-shadow-black duration-500 ease-out"
                                />
                            )}

                            <span className="relative z-10 drop-shadow-xl group-hover:scale-110 group-hover:text-white group-hover:tracking-widest transition-all duration-500 ease-out">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Project Modal */}
                <AnimatePresence>
                    {selectedProject !== null && (
                        <motion.div
                            layoutId={`card-${selectedProject}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            className="absolute inset-0 flex items-center justify-center z-50 p-6"
                        >
                            <motion.div
                                className="relative w-[90vw] md:w-[70vw] lg:w-[80vw] h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                                    e.currentTarget.style.transform = `perspective(1200px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) scale(1.01)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`;
                                }}
                                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            >
                                {/* Full Background Image */}
                                {projectItems[selectedProject].coverImage && (
                                    <Image
                                        src={projectItems[selectedProject].image}
                                        alt={projectItems[selectedProject].title}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                )}

                                {/* Gradient overlay for readability */}
                                <div className="absolute inset-0 bg-linear-to-b from-black/60 to-white/20" />

                                {/* Content on top */}
                                <div className="relative z-10 flex flex-col items-center justify-start text-center p-6 h-full overflow-y-auto text-white font-[Roboto_Flex]">
                                    <motion.h2
                                        className="absolute w-full text-right text-3xl md:text-4xl font-bold uppercase mt-2 pr-3"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {projectItems[selectedProject].title}
                                    </motion.h2>

                                    <motion.h3
                                        className="absolute w-full text-right mt-13 pr-3 text-xl md:text-2xl font-semibold uppercase tracking-wide text-white/80"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {projectItems[selectedProject].date}
                                    </motion.h3>

                                    <motion.p
                                        className="absolute w-full mt-30 pr-3 text-lg md:text-xl leading-relaxed text-white/90 text-right"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {projectItems[selectedProject].extraInfo}
                                    </motion.p>
                                    <motion.h3
                                        className="absolute w-full text-right mt-38 pr-3 text-xl md:text-2xl font-semibold uppercase tracking-wide text-white/80"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {projectItems[selectedProject].description}
                                    </motion.h3>

                                    <div className="flex gap-6 mt-8 items-center justify-center w-full h-full">
                                        {projectItems[selectedProject]?.link && (
                                            <motion.button
                                                onClick={() => window.open(projectItems[selectedProject].link, "_blank", "noopener,noreferrer")}
                                                className="px-8 py-3 bg-linear-to-r from-red-600 to-red-400 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 hover:tracking-widest transition-all"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Visit Project
                                            </motion.button>
                                        )}

                                        <motion.button
                                            onClick={() => setSelectedProject(null)}
                                            className="px-8 py-3 bg-black/80 text-white font-bold rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all hover:scale-105"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Close
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
