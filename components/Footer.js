import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Footer = () => {
    return (
        <div>
            <div className='bg-sky-900 flex  w-full p-8 max-sm:flex-col' >
                <div className='w-full border flex items-center justify-center align-middle'>
                    <h2>
                        Footer
                    </h2>
                </div>
                <div className='w-full justify-between p-4 z-11 lg:text-lg  sm:gap-5 sm:text-[12px] max-sm:text-sm'>
                    <div className='lg:w-full md:w-full flex text-white font-normal justify-center max-sm:w-full'>
                        <div className='lg:w-full flex items-center justify-center max-sm:flex-col w-full '>
                            <div className='max-sm:w-4/6 flex flex-col items-start mb-3 mt-3'>
                                <h2 className='font-extrabold'>Donde estamos ?</h2>
                                <p className='font-medium'>Carrer de la Llobatona, 82, 08840 Viladecans, Barcelona</p>
                                <div className='flex gap-2'>
                                    <p>Telf:</p>
                                    <p> 678859463</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center max-sm:z-[1] justify-center'>
                                <Map />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-zinc-300 w-full p-8 flex flex-col items-center justify-center gap-5 border-t-1 border-black max-sm: text-sm'>
                <p>
                    Made with ❤️ by Arian
                </p>
                <p>
                    © 2022 Todos los derechos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer