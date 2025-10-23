import React from 'react'

export const Traits = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className='flex w-full h-[15vh] px-3 
                            items-center md:items-end justify-center md:justify-start'>
                <div className='text-5xl font-semibold uppercase text-white text-center md:text-left'>
                    Traits
                </div>
            </div>
            <div className='flex items-center w-full h-[85vh] px-3'>
                <div className='text-5xl font-semibold uppercase text-white'>
                    Display
                </div>
            </div>
        </div>
    )
}
