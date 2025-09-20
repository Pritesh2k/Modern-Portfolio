import React from 'react'
import { projects } from '@/data';
import { PinContainer } from './ui/PinContainer';
import { FaLocationArrow } from 'react-icons/fa';
import { TextHoverEffect } from "./ui/text-hover-effect";

export const RecentProjects = () => {
    return (
        <section
            id="projects"
            className="relative w-screen min-h-screen flex flex-col items-center
                bg-gradient-to-br from-white/10 via-white/5 to-transparent
                backdrop-blur-xl 
                border border-white/20 
                shadow-lg 
                overflow-hidden pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-12 sm:pb-14 md:pb-16 lg:pb-20"
            style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
        >

            {/* Section Title */}
            <h1 className="flex flex-wrap justify-center items-center text-center
                text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl xl:text-7xl
                text-slate-100 font-bold drop-shadow-lg mb-8 sm:mb-10 md:mb-12 lg:mb-14 gap-1">

                {/* TextHoverEffect inherits font size via parent */}
                <TextHoverEffect text="My" />

                {/* Span text slightly smaller for all screens */}
                <span className="text-blue-800 font-bold
                    text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl xl:text-6xl -mt-5">
                    Projects
                </span>
            </h1>

            {/* Projects Grid */}
            <div className='flex flex-col items-center justify-center 
                gap-x-10 sm:gap-x-14 md:gap-x-20 lg:gap-x-24 
                gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 -mt-10 
                w-full px-4 sm:px-6 md:px-8 lg:px-10'>
                {projects.map(({ id, title, des, img, iconLists, link, year }) => (
                    <div
                        key={id}
                        className='text-[20px] h-[30rem] sm:h-[34rem] md:h-[36rem] lg:min-h-[35rem] flex items-center justify-center sm:w-80 md:w-96 w-[90vw] px-4'
                    >
                        <PinContainer title={link} href={link} year={year}>
                            <div className="relative flex items-center justify-center 
                        w-full min-w-[300px] sm:min-w-[440px] md:min-w-[560px] lg:min-w-[680px]
                        h-[20vh] sm:h-[22vh] md:h-[25vh] lg:h-[28vh]
                        overflow-hidden mb-4 sm:mb-6 md:mb-8">

                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src='/bg.png' alt='bg-img' />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:rotate-2 hover:scale-105"
                                />

                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-3'>{des}</p>
                            <div className='flex items-center justify-between mt-4 sm:mt-5 md:mt-6 mb-2'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className='rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-slate-300'>Visit Site</p>
                                    <FaLocationArrow className='ms-3' color='red' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

        </section>
    )
}
