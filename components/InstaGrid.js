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
            <div id='about' className='h-8 max-sm'>
            </div>
            <div className='mt-[8rem] max-sm:mt-[20%] max-sm:mb-[20rem]'>
                <div onClick={() => handleClick()} className='cursor-pointer '>
                    <div className='flex flex-row items-center justify-center font-bold text-lg gap-3 '>
                        <h2 translate='no'>BLUETIMECOMPETITION</h2>
                        <AiOutlineInstagram size={'2rem'} />
                    </div>
                    <div className='flex mt-3 items-center justify-center'>
                        ¡Follow on Instagram!
                    </div>
                </div>
                <div className=' rounded mt-5 mb-64 px-8 py-8 mx-auto items-center lg:border shadow-xl w-4/6 max-sm:w-full   '>
                    {/* <div className='grid grid-cols-3 grid-rows-2 grid-flow-col gap-4  mx-auto max-sm:w-5/6 max-sm:gap-1'> */}
                    <div className='grid grid-cols-4 grid-rows-2 w-full gap-10 max-sm:gap-3'>

                        <div className=' col-span-2 hover:shadow-2xl' onClick={() => handleClick(props.data.data[0].permalink)}>
                                <img
                                    src={props.data.data[0].media_url}
                                    alt={props.data.data[0].caption}
                                    className='inset-0 h-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer'
                                />
                        </div>

                        <div className='w-full col-span-2  hover:shadow-2xl' onClick={() => handleClick(props.data.data[1].permalink)}>
                            <img
                                src={props.data.data[1].media_url}
                                alt={props.data.data[1].caption}
                                className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100  cursor-pointer ' />
                        </div>
                        <div className='w-full col-span-2 hover:shadow-2xl' onClick={() => handleClick(props.data.data[2].permalink)}>
                            <img
                                src={props.data.data[2].media_url}
                                alt={props.data.data[2].caption}
                                className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer' />
                        </div>
                        <div className='w-full hover:shadow-2xl col-span-2' onClick={() => handleClick(props.data.data[3].permalink)}>
                            <img
                                src={props.data.data[3].media_url}
                                alt={props.data.data[3].caption}
                                className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer ' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}



export default InstaGrid