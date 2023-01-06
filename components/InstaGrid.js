import Image from 'next/image'
import { AiFillWindows, AiOutlineInstagram } from 'react-icons/ai'
import Hover from 'react-3d-hover'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import englishLanguageTranslations from '../languages/en.json'
import spanishLanguageTranslations from '../languages/es.json'
import frenchLanguageTranslations from '../languages/fr.json'

export const InstaGrid = (props) => {
    const data = props
    const router = useRouter()
    const { locale } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en

    const handleClick = (link) => {
        if (!link) {
            return window.open('https://www.instagram.com/bluetimecompetition/', '_blank')
        }
        if (link) {
            return window.open(link, '_blank')
        }
    }
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.5 })

    return (
        <>

            <div className='mt-[2rem] max-sm:mt-[20%] max-sm:mb-[2rem]'>
                <motion.div ref={ref}>
                    <motion.div
                        whileTap={{ scale: 0.8 }}
                        onClick={() => handleClick()}
                        className='cursor-pointer transform'>
                        <div className='flex flex-row items-center justify-center gap-4'>
                            <motion.div
                                className='font-bold text-lg gap-3 '
                                style={{
                                    transform: isInView ? 'none' : 'translateX(-200px)',
                                    opacity: isInView ? 1 : 0,
                                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                                }}>
                                <h2 translate='no' className='text-slate-600'>
                                    BLUETIMECOMPETITION
                                </h2>
                            </motion.div>
                            <motion.div
                                className='font-bold text-lg gap-3 '
                                style={{
                                    transform: isInView ? 'none' : 'translateX(200px)',
                                    opacity: isInView ? 1 : 0,
                                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                                }}>
                                <AiOutlineInstagram size={'2rem'} className='text-slate-600' />
                            </motion.div>

                        </div>
                        <div className='flex mt-3 items-center justify-center'>
                            {t.instagramSection.title}
                        </div>
                    </motion.div>
                </motion.div>
                <div className='rounded mt-5px-8 py-8 mx-auto items-center  lg:w-3/6 lg:h-2/4 sm:w-full md:w-2/3 xl:w-2/5 max-sm:w-4/5'>
                    {/* <div className='grid grid-cols-3 grid-rows-2 grid-flow-col gap-4  mx-auto max-sm:w-5/6 max-sm:gap-1'> */}
                    <div className='grid grid-cols-4 grid-rows-2 gap-24 max-sm:gap-10'>

                        <div className='col-span-2 w-full' onClick={() => handleClick(props.data.data[0].permalink)} style={{
                            transform: isInView ? 'none' : 'translatex(-900px)',
                            overflow: isInView ? 'visible' : 'hidden',
                            opacity: isInView ? 1 : 0,
                            transition: 'all 0.9s cubic-bezier(0.2, 0.55, 0.55, 1) 0.7s'

                        }}>
                            <img
                                src={data.data.data[0].media_url}
                                alt={data.data.data[0].caption}
                                className='inset-0 h-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer'
                            />
                        </div>

                        <div className='col-span-2' onClick={() => handleClick(props.data.data[1].permalink)} style={{
                            transform: isInView ? 'none' : 'translatex(900px)',
                            opacity: isInView ? 1 : 0,

                            transition: 'all 0.9s cubic-bezier(0.2, 0.55, 0.55, 1) 0.7s'
                        }}>
                            <img
                                src={data.data.data[1].media_url}
                                alt={data.data.data[1].caption}
                                className='inset-0 h-full w-full object-cover  object-center rounded opacity-75 hover:opacity-100  cursor-pointer' />
                        </div>
                        <div className='col-span-2' onClick={() => handleClick(props.data.data[2].permalink)} style={{
                            transform: isInView ? 'none' : 'translatey(1000px)',
                            opacity: isInView ? 1 : 0,

                            transition: 'all 0.9s cubic-bezier(0.2, 0.55, 0.55, 1) 0.7s'
                        }}>
                            <img
                                src={data.data.data[2].media_url}
                                alt={data.data.data[2].caption}
                                className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 cursor-pointer ' />
                        </div>
                        <div className='col-span-2' onClick={() => handleClick(props.data.data[3].permalink)} style={{
                            transform: isInView ? 'none' : 'translatey(800px)',
                            opacity: isInView ? 1 : 0,

                            transition: 'all 0.9s cubic-bezier(0.14, 0.65, 0.55, 1) 0.9s'
                        }}>
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