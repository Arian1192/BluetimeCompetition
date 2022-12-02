import React from 'react'
import Image from 'next/image'
import {useRef} from 'react'
import { useInView } from 'framer-motion'

const Hero = ({ message, heading1, heading2, heading3 }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.5 })
    return (
        <div ref={ref} className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img overflow-hidden '>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] flex flex-col items-center mt-[-8rem]'>
                <h2 className='text-5xl font-bold tracking-wider max-sm:text-3xl' translate='no'
                style={{
                                transform: isInView ? 'none' : 'translatey(-200px)',
                                
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                            }}>{heading1}</h2>
                <div className='md:w-[28rem] h-1 bg-sky-700 mt-1 mb-1 max-sm:w-[18rem]' style={{
                                transform: isInView ? 'none' : 'translateX(400px)',
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                                
                            }}></div>
                <h2 className='text-5xl font-bold tracking-widest max-sm:text-3xl' translate='no'style={{
                                transform: isInView ? 'none' : 'translatey(200px)',
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                            }}>{heading3}</h2>
                <p className='py-5 text-xl text-center'style={{
                                transform: isInView ? 'none' : 'translatey(200px)',
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                            }}>{message}</p>
                {/* <button className='px-8 py-2 border'>Contact</button> */}
            </div>
        </div>
    )
}

export default Hero