import React from 'react'
import { projects } from '@/data';

export const RecentProjects = () => {
  return (
    <div className='text-center text-[40px] md:text-5xl lg:text-6xl py-20'>
        <h1>A Small Selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='text-[20px] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    {title}
                </div>
            ))}
        </div>
    </div>
  )
}
