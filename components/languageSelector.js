import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { LanguageContext } from '../Context/LanguageContext'


const flagLanguages = {
    es: '🇪🇸',
    fr: '🇫🇷',
    en: '🇬🇧'
}

const LanguageSelector = () => {
    const { changeLanguage } = useContext(LanguageContext)
    return (
        <div>
            <ul className='flex gap-3'>
                {Object.keys(flagLanguages).map((language) => (
                    <li key={language}>
                        <button value={language} onClick={e => changeLanguage(e)}>{flagLanguages[language]}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageSelector