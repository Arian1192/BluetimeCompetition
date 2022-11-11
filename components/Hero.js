import React from 'react'

const Hero = ({ message, heading1, heading2, heading3 }) => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] flex flex-col items-center mt-[-10rem]'>
                <h2 className='text-5xl font-bold tracking-wider'>{heading1}</h2>
                <h2 className='text-5xl font-bold'>{heading3}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border'>Contact</button>
            </div>
        </div>
    )
}

export default Hero