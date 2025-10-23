import React from 'react';

export const Projects = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-2xl overflow-hidden">

            {/* Top Section */}
            <div className='flex w-full h-[15vh] px-3 
                            items-center justify-center'>
                <div className='text-5xl font-semibold uppercase text-white text-center md:text-left'>
                    Projects
                </div>
            </div>

            {/* Display Section */}
            <div className='flex items-center justify-center w-full h-[85vh] px-3'>
                <div className='text-4xl font-semibold uppercase text-white'>
                    Display
                </div>
            </div>
        </div>
    );
};
