import React from 'react';

export const Projects = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className='flex items-end w-full h-[15vh] px-3'>
                <div className='text-5xl font-semibold uppercase text-white'>
                    Projects
                </div>
            </div>
            <div className='flex items-center w-full h-[85vh] px-3'>
                <div className='text-5xl font-semibold uppercase text-white'>
                    Display
                </div>
            </div>
        </div>
    );
};
