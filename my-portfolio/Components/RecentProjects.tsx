import React from 'react'
import { projects } from '@/data';
import { PinContainer } from './ui/PinContainer';
import { FaLocationArrow } from 'react-icons/fa';

export const RecentProjects = () => {
    return (
        <div id='projects' className='text-center text-[40px] md:text-5xl lg:text-6xl py-20 bg-white w-screen min-h-screen -translate-y-20 -mt-1 rounded-bl-[50px] rounded-br-[50px]'>
            
            <h1 className='text-slate-900'>Selection of {' '}
                <span className='text-red-500 font-bold'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-x-24 -gap-y-10 w-full'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='text-[20px] sm:h-[41rem] lg:min-h-[35rem] h-[32rem] flex items-center justify-center sm:w-96 w-[90vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[400px] w-[30rem] overflow=hidden h-[20vh] lg:h-[25vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src='/bg.png' alt='bg-img' />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className='z-10 absolute bottom-0'
                                />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border=white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2'/>
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}
