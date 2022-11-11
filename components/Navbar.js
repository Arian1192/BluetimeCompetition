import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



const NavbarSections = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About Us',
        path: '/about',
    },
    {
        title: 'Services',
        path: '/#services',
    },
    {
        title: 'Contact Us',
        path: '/contact',
    },
]

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <Image src='/bluetimeLogo.png' width={200} height={200} alt="Bluetime Competition Logo" className='sm:mr-60' />
                </Link>
                <ul className='hidden sm:flex '>
                    {NavbarSections.map((section, index) => (
                        <li key={index} className='p-4'>
                            <Link href={section.path}>{section.title}</Link>
                        </li>
                    ))}
                </ul>
                {/*Mobile Button*/}
                <div className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {/*Mobile Menu*/}
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-900 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-900 text-center ease-in duration-300'}>
                    <ul>
                        {NavbarSections.map((section, index) => (
                            <li key={index} className='p-4 text-4xl hover:text-gray-600'>
                                <Link href={section.path}>{section.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar