import React from 'react'
import { useRouter } from 'next/router'
import englishLanguageTranslations from '../languages/en'
import spanishLanguageTranslations from '../languages/es'
import frenchLanguageTranslations from '../languages/fr'

export default function About() {

    const router = useRouter()

    const { locale } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations

    const t = locale === 'es' ? es : locale === 'fr' ? fr : en

    return (
    <>
            <h2 className='flex items-center justify-center text-3xl font-extrabold mt-10 text-slate-700 text-center max-sm:text-lg'>{t.about.title} ?</h2>
            <div className='flex flex-col items-center justify-center mt-10 p-4 text-center'>
                <p className='text-slate-500 text-xl max-sm:text-base'><span className='font-semibold' translate='no'>Bluetime Competition</span> {t.about.firstParagraph}</p>
                <br/>
                <p className='text-slate-500 text-xl w-2/3 text-center max-sm:text-base mb-2'>
                    {t.about.secondParagraph}
                </p>
                <br />
                <p className='text-slate-500 text-xl w-2/3 text-center max-sm:text-base mb-2'>
                    {t.about.thirdParagraph}
                </p>
                <br />
                <p className='text-slate-500 text-xl w-2/3 text-center max-sm:text-base '>
                    {t.about.fourthParagraph}
                </p>
                <p className='text-slate-500 text-xl w-2/3 text-center'>

                </p>
            </div>
    </>
            )
}
