import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const LanguageSelector = () => {

    const router = useRouter()
    const { locale, locales, asPath } = router

    const handleLanguageChange = (e) => {
        const locale = e.target.value
        router.push(router.pathname, router.pathname, { locale })
        
    }

    return (
        <div>
            <ul className='flex gap-3'>
                <li>
                    <button value={'es'} onClick={e => handleLanguageChange(e)}>🇪🇸</button>
                </li>
                <li>
                    <button value={'fr'} onClick={e => handleLanguageChange(e)}>🇫🇷</button>
                </li>
                <li>
                    <button value={'en'} onClick={e => handleLanguageChange(e)}>🇬🇧</button>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSelector