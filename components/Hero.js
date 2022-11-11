import React from 'react'

const Hero = ({ message, heading1, heading2, heading3 }) => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] flex flex-col items-center mt-[-8rem]'>
                <h2 className='text-5xl font-bold tracking-wider max-sm:text-3xl' translate='no'>{heading1}</h2>
                <div className='md:w-[28rem] h-1 bg-sky-700 mt-1 mb-1 max-sm:w-[18rem]'></div>
                <h2 className='text-5xl font-bold tracking-widest max-sm:text-3xl' translate='no'>{heading3}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border'>Contact</button>
            </div>
        </div>
    )
}

export default Hero