import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import englishLanguageTranslations from '../public/locales/en/common.json'
import spanishLanguageTranslations from '../public/locales/es/common.json'
import frenchLanguageTranslations from '../public/locales/fr/common.json'
import LanguageSelector from './languageSelector'
import { LanguageContext } from '../Context/LanguageContext'
import { useRouter } from 'next/router'




const Navbar = () => {
    const router = useRouter()
    const { locale, asPath, locales } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textcolor, setTextColor] = useState('white')
    const NavbarSections = [
        {
            title: `${t.navbar.home}`,
            path: `/`,
        },
        {
            title: `${t.navbar.about}`,
            path: `#about`,
        },
        {
            title: `${t.navbar.services}`,
            path: `#services`,
        },
        {
            title: `${t.navbar.contact}`,
            path: `/contact`,
        },
    ]

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 80) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-200'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <div className='flex items-center h-11'>
                    <Link href='/'>
                        <Image src='/bluetimeLogo3.png' width={200} height={150} alt="Bluetime Competition Logo" className='sm:mr-60' />
                    </Link>
                </div>
                <ul style={{ color: `${textcolor}` }} className='hidden sm:flex  '>
                    {NavbarSections.map((section, index) => (
                        <li key={index} className='p-4 font-bold hover:text-sky-700'>
                            <Link href={`${section.path}`} translate='no' >{section.title}</Link>
                        </li>
                    ))}
                </ul>
                <LanguageSelector />
                {/*Mobile Button*/}
                <div className='block sm:hidden z-10' onClick={() => handleNav()}>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} style={{ color: `${textcolor}` }} />}
                </div>
                {/*Mobile Menu*/}
                <div className={nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-900 text-center ease-in duration-300 '
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-900 text-center ease-in duration-300 '}>
                    <ul>
                        {NavbarSections.map((section, index) => (
                            <li key={index} className='p-4 text-4xl hover:text-gray-600' onClick={() => handleNav()}>
                                <a href={`/${section.path}`}>
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Navbar