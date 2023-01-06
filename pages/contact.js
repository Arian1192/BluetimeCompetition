import React from 'react'
import ContactFormImage from '../public/contactFormImage.png'
import { useForm } from 'react-hook-form'
import FormContact from '../components/FormContact'


export default function Contact() {
    
    return (
        <div className='flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img2'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <FormContact />
        </div>
    )
}

