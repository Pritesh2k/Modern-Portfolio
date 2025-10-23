"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVelocity from "../Components/ScrollVelocity";
import Image from "next/image";

import TerraWaterImg from '../../public/terraWATER.png'

export const Projects = () => {
    const projectItems = [
        { title: "Portfolio v.2", description: "Description for Project 1" },
        {
            title: "Terra Water Indonesia",
            description: "Had the pleasure to traveled to Bali - Indonesia and help the social enterprise Terra Water to develop their website using WIX increasing viewership and sales",
            image: TerraWaterImg,
            date: "July / 2024",
            link: "https://www.terrawaterindonesia.com/"
        },
        { title: "Portfolio v.1", description: "Description for Project 3" },
        { title: "...In the works", description: "Description for Project 4" },
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
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
                    {projectItems.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`} // 🔥 This links the grid item to the modal
                            className="flex items-center justify-center bg-red-500 text-white text-2xl font-semibold uppercase font-[Roboto_Flex] rounded-2xl cursor-pointer"
                            onClick={() => setSelectedProject(index)}
                            whileHover={{ scale: 1.02 }}
                        >
                            {item.title}
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Project Modal */}
                <AnimatePresence>
                    {selectedProject !== null && (
                        <motion.div
                            layoutId={`card-${selectedProject}`} // 🔥 Same ID as the clicked card
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 rounded-2xl z-50 font-[Roboto_Flex]"
                        >
                            {projectItems[selectedProject].image && (
                                <Image
                                    src={projectItems[selectedProject].image}
                                    alt={projectItems[selectedProject].title}
                                    className="w-full h-auto max-h-[60vh] object-contain rounded-2xl mt-8"
                                />
                            )}

                            <h3 className="absolute top-5 text-3xl text-white font-[Roboto_Flex] font-bold mb-4 uppercase">
                                {projectItems[selectedProject].date}
                            </h3>
                            <h2 className="absolute top-15 text-3xl text-white font-[Roboto_Flex] font-semibold mb-4">
                                {projectItems[selectedProject].title}
                            </h2>
                            <p className=" text-white text-xl text-justify mt-6">
                                {projectItems[selectedProject].description}
                            </p>
                            <button
                                onClick={() => {
                                    const url = projectItems[selectedProject]?.link;
                                    if (url) window.open(url, "_blank", "noopener,noreferrer");
                                }}
                                className="absolute top-5 right-5 px-8 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-white hover:text-red-500 transition"
                            >
                                Visit
                            </button>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-20 right-5 px-8 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-white hover:text-red-500 transition"
                            >
                                Close
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
