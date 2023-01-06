import { useRouter } from 'next/router'
import { Fragment } from 'react'
import englishLanguageTranslations from '../languages/en'
import spanishLanguageTranslations from '../languages/es'
import frenchLanguageTranslations from '../languages/fr'
import LanguageSelector from './languageSelector'

const LegalAdvisorComponent = () => {
    const router = useRouter()
    const { locale, locales, asPath } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en

    return (
        <>
            <div className='w-full h-20 bg-sky-900 z-10'></div>
            <div className="w-2/4 mx-auto max-sm:w-full max-sm:p-5">
                <h2 className="flex flex-row items-center text-2xl justify-center mt-32 mb-20">
                    {t.legalAdvisor.p1}</h2>
                <p className="mb-10">
                    {t.legalAdvisor.p2}</p>
                <p className="mb-10">
                    {t.legalAdvisor.p3}</p>
                <p className="mb-10">
                    {t.legalAdvisor.p4}</p>
                <p className="mb-10">
                    {t.legalAdvisor.p5}</p>
                <p className="mb-10">
                    {t.legalAdvisor.p6}</p>
                <p className="mb-40">
                    {t.legalAdvisor.p7}</p>
            </div>
        </>
    )
}

export default LegalAdvisorComponent