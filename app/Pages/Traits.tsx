"use client";
import ScrollVelocity from "../Components/ScrollVelocity";

export const Traits = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                bg-black/5 backdrop-blur-xl border border-white/10 overflow-hidden">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />

            <div className='flex w-full h-[15vh] 
                            items-center justify-center'>
                <div className='text-5xl font-semibold uppercase text-white text-center md:text-left font-[Roboto_Flex]'>
                    <ScrollVelocity
                        texts={['Traits / Traits / Traits / Traits / Traits / Traits / ']}
                        velocity={150}
                        className="custom-scroll-text" />
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-[85vh] px-3'>
                <div className='text-4xl font-semibold uppercase text-white font-[Roboto_Flex]'>
                    Display
                </div>
            </div>
        </div>
    )
}
