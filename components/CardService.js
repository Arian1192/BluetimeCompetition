import React, { useContext } from 'react'
import Hover from 'react-3d-hover'
import englishLanguageTranslations from '../public/locales/en/common.json'
import spanishLanguageTranslations from '../public/locales/es/common.json'
import frenchLanguageTranslations from '../public/locales/fr/common.json'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
import { LanguageContext } from '../Context/LanguageContext'


const mappingCards = (arr) => {
    console.log(arr)
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0 }
}

const CardService = () => {
    const { locale } = useContext(LanguageContext)
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en
    const ref = useRef()
    const isInView = useInView(ref, { once: true, threshold: 0.5 })
    const Services = [
        {
            id: 1,
            title: 'International Racing Services',
            description: `${t.cardDescriptionOne.description}`,
            image: 'https://images.unsplash.com/photo-1615752232150-f841b186f3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80'
        },
        {
            id: 2,
            title: 'Race Car Builds',
            description: `${t.cardDescriptionTwo.description}`,
            image: 'https://images.unsplash.com/photo-1543747255-94b72995ac74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 3,
            title: 'Porsche Corner',
            description: `${t.cardDescriptionThree.description}`,
            image: 'https://images.unsplash.com/photo-1500509356004-46b18c90ea71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnNjaGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            title: 'Gearbox Services',
            description: `${t.cardDescriptionFour.description}`,
            image: 'https://www.historikaprototypes.com/files/Images/PartItem/31/5a019084-92b4-4c3f-ae71-0bd20898ab13.jpg?width=2000'
        },
        {
            id: 5,
            title: 'Engine Services',
            description: `${t.cardDescriptionFive.description}`,
            image: 'http://buildraceparty.com/wp-content/uploads/2014/05/LF13_r145_03-1024x681.jpg'
        },
        {
            id: 6,
            title: 'Auction Support - Expertise',
            description: `${t.cardDescriptionSix.description}`,
            image: 'https://images.unsplash.com/photo-1564758316866-432196a42030?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsYXNzaWMlMjBwb3JzY2hlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 7,
            title: 'Full Car Restoration',
            description: `${t.cardDescriptionSeven.description}`,
            image: 'https://images.squarespace-cdn.com/content/v1/59efb2d9fe54ef0b9ad57bf6/1514403499606-YFQM3QMLA5VPJ9MXY5L9/20171213_161240.jpg?format=1000w'
        },
    ]


    return (
        <motion.div ref={ref}
            className='max-sm:w-full mb-40 container md:3/6 px-10 max-md:w-3/6 xl:w-4/5 2xl:w-2/3  gap-5 flex flex-row flex-wrap justify-around items-start'
            variants={container}
            initial="hidden"
            animate="visible">
            {Services.map((service, index) => (
                <Hover key={service.id} speed={500}>
                    <motion.div
                        variants={item}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        key={service.id}
                        className='max-w-sm rounded font-medium shadow-lg flex flex-col items-center text-center gap-4
                        sm:mb-8 max-sm:mb-8 md:mb-8 transition ease-in-out delay-150 bg-slate-200 hover:scale-110 hover:bg-slate-500 duration-300  hover:text-white'>
                        <div
                            className='w-full  bg-slate-100 flex justify-center items-center'>
                            {service.image === null ?
                                <p className='text-2xl font-bold text-slate-500'>Coming Soon</p> :
                                <img src={service.image} alt={service.title} className='object-cover w-full h-60 ' />}
                        </div>
                        <div
                            className='w-full h-72 flex flex-col items-center justify-center'>
                            <h3
                                className='text-lg text-center p-2 font-bold text-slate-700 max-md:text-md'>
                                {service.title}
                            </h3>
                            <p
                                className='p-5 text-base md:text-xs lg:text-base'>
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                </Hover>
            ))}
        </motion.div>
    )
}


export default CardService