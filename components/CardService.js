import React from 'react'
import Hover from 'react-3d-hover'
import { useRouter } from 'next/router'
import Services from '../utils/servicesOptions'
import englishLanguageTranslations from "../languages/en"
import spanishLanguageTranslations from "../languages/es"
import frenchLanguageTranslations from "../languages/fr"
import { mapTermsState } from 'git-falcon9'


const mappingCards = (arr) =>{
    console.log(arr)
}

const CardService = () => {
    const router = useRouter()
    const { locale } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en
    const Services = [
        {
            id: 1,
            title: 'International Racing Services', 
            description: `${t.cardDescriptionOne.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 2,
            title: 'Race Car Builds',
            description: `${t.cardDescriptionTwo.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 3,
            title: 'Porsche Corner',
            description: `${t.cardDescriptionThree.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 4,
            title: 'Gearbox Services',
            description: `${t.cardDescriptionFour.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 5,
            title: 'Engine Services',
            description: `${t.cardDescriptionFive.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 6,
            title: 'Auction Support - Expertise',
            description: `${t.cardDescriptionSix.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
        {
            id: 7,
            title: 'Full Car Restoration',
            description: `${t.cardDescriptionSeven.description}`,
            image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
        },
    ]

    
    return (
        <div className='max-sm:w-full mb-40  md:3/6 px-10 max-md:w-3/6 xl:w-4/5 2xl:w-2/3 md:grid grid-cols-3 gap-10 place-items-center'>
            {Services.map((service) => (
                <Hover key={service.id} speed={500}>
                    <div key={service.id} className='max-w-sm h-5/6 rounded font-medium shadow-lg flex flex-col items-center text-center  gap-4 sm:mb-8 max-sm:mb-8 md:mb-8 transition ease-in-out delay-150 bg-slate-200 hover:scale-110 hover:bg-slate-500 duration-300  hover:text-white'>
                        {/* <img src={service.image} alt={service.title} className='w-20 h-20 m-5 '/> */}
                        <div className='w-full h-64  bg-slate-100 flex justify-center items-center'>
                            Imagen
                        </div>
                        <div className='w-full h-72 flex flex-col items-center justify-center'>
                            <h3 className='text-lg text-center p-2 font-bold text-slate-700 max-md:text-xs'>{service.title}</h3>
                            <p className='p-5 text-base md:text-xs lg:text-base'>{service.description}</p>
                        </div>
                    </div>
                </Hover>
            ))}
        </div>
    )
}


export default CardService