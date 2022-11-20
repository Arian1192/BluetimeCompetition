import Image from 'next/image'
import { AiFillWindows, AiOutlineInstagram } from 'react-icons/ai'
import Hover from 'react-3d-hover'

export const InstaGrid = (props) => {

    const handleClick = (link) => {
        if (!link) {
            return window.open('https://www.instagram.com/bluetimecompetition/', '_blank')
        }
        if (link) {
            return window.open(link, '_blank')
        }
    }
    return (
        <>
            {/* <div className='h-10 max-sm'>
            </div> */}

            <div className='mt-[2rem] max-sm:mt-[20%] max-sm:mb-[2rem]'>
                
                    <div onClick={() => handleClick()} className='cursor-pointer '>
                        <div className='flex flex-row items-center justify-center font-bold text-lg gap-3 '>
                            <h2 translate='no' className='text-slate-600'>BLUETIMECOMPETITION</h2>
                            <AiOutlineInstagram size={'2rem'} className='text-slate-600' />
                        </div>
                        <div className='flex mt-3 items-center justify-center'>
                            ¡Follow on Instagram!
                        </div>
                    </div>
                <div className='rounded mt-5px-8 py-8 mx-auto items-center  lg:w-3/6 lg:h-1/4 sm:w-full md:w-2/3 xl:w-1/3 max-sm:w-4/5 '>
                    {/* <div className='grid grid-cols-3 grid-rows-2 grid-flow-col gap-4  mx-auto max-sm:w-5/6 max-sm:gap-1'> */}
                    <div className='grid grid-cols-4 grid-rows-2 gap-24 max-sm:gap-10'>

                        <div className='col-span-2' onClick={() => handleClick(props.data.data[0].permalink)}>
                            <img
                                src={props.data.data[0].media_url}
                                alt={props.data.data[0].caption}
                                className='inset-0 h-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer'
                            />
                        </div>

                        <div className='col-span-2' onClick={() => handleClick(props.data.data[1].permalink)}>
                            <img
                                src={props.data.data[1].media_url}
                                alt={props.data.data[1].caption}
                                className='inset-0 h-full w-full object-cover  object-center rounded opacity-75 hover:opacity-100  cursor-pointer' />
                        </div>
                        <div className='col-span-2' onClick={() => handleClick(props.data.data[2].permalink)}>
                            <img
                                src={props.data.data[2].media_url}
                                alt={props.data.data[2].caption}
                                className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer ' />
                        </div>
                        <div className='col-span-2' onClick={() => handleClick(props.data.data[3].permalink)}>
                            <img
                                src={props.data.data[3].media_url}
                                alt={props.data.data[3].caption}
                                className='inset-0 h-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer ' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}



export default InstaGrid