import React, { useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { useRouter } from 'next/router'

export const LanguageProvider = ({ children }) => {

    const router = useRouter()
    const { locale, asPath, locales } = router

    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push(router.pathname, router.pathname, { locale })
    }

    


    return (
        <LanguageContext.Provider value={{ locale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}