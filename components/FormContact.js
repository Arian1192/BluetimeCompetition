import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import englishLanguageTranslations from '../public/locales/en/common.json'
import spanishLanguageTranslations from '../public/locales/es/common.json'
import frenchLanguageTranslations from '../public/locales/fr/common.json'


const FormContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const { locale, locales, asPath } = router
    const es = spanishLanguageTranslations
    const en = englishLanguageTranslations
    const fr = frenchLanguageTranslations
    const t = locale === 'es' ? es : locale === 'fr' ? fr : en

    const onSubmit = (data) => {
        fetch("https://formsubmit.co/ajax/team@bluetimecompetition.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                help: data.help,
                _template: data._template,
            })
        })
            .then(response => response.json())
            .then(data => { router.push('/') })
            .catch(error => console.log(error));
    }
    return (
        <div className='block py-13 px-4 lg:mx-auto lg:max-w-7xl z-[2]  mt-[90px] max-sm:mt-[30%]'>
            <div className='lg:pr-8'>
                <div className='mx-auto max-w-md sm:max-w-lg sm:max-h-sm sm: lg:mx-0 bg-slate-400/60 p-5 rounded'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4l text-slate-800 '>
                        {t.contactSection.title}
                    </h2>
                    <p className='mt-4 text-md text-gray-800 font-medium sm:mt-4'>
                        {t.contactSection.firstParagraph}
                    </p>
                    <form className='mt-6 grid grid-cols-2 gap-3 p-2 gap-y-6 sm:grid text-slate-800' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium'>
                                {t.contactSection.name}
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    autoComplete='given-name'
                                    className='py-1 px-4 block w-full shadow-sm text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
                                    {...register('name', { required: true })}
                                />
                                {errors.name && <span className='text-red-700 text-sm'>???? {t.contactSection.alert}</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium'>
                                {t.contactSection.email}
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    autoComplete='email'
                                    className='py-1 px-4 block w-full shadow-sm text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
                                    {...register('email', { required: true, pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" })}
                                />
                                {errors.email && <span className='text-red-700 text-sm'>???? {t.contactSection.alert}</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor='phone' className='block text-sm font-medium'>
                                {t.contactSection.phone}
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='tel'
                                    name='phone'
                                    id='phone'
                                    autoComplete='tel'
                                    className='py-1 px-4 block w-full shadow-sm text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
                                    aria-describedby='phone-description'
                                    {...register('phone', { required: true })}
                                />
                                {errors.phone && <span className='text-red-700 text-sm'>???? {t.contactSection.alert}</span>}
                            </div>
                        </div>
                        <div className='sm: col-span-2'>
                            <div className='flex justify-between'>


                                <label htmlFor='help' className='block text-sm font-medium'>
                                    {t.contactSection.message}
                                </label>
                                <span>
                                    {t.contactSection.caractersNumber}
                                </span>
                            </div>
                            <div className='mt-1'>
                                <textarea
                                    type='text'
                                    name='help'
                                    id='help'
                                    className='py-2 px-4 block w-full shadow-sm text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 sm: text-sm'
                                    defaultValue={''}
                                    rows={4}
                                    {...register('help', { required: true })}
                                />
                                {errors.help && <span className='text-red-700 text-sm'>???? {t.contactSection.alert}</span>}
                            </div>
                        </div>
                        <div className='text-right sm:col-span-2'>
                            <button
                                type='submit'
                                className='flex justify-center items-center w-full px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            >
                                {t.contactSection.send}
                            </button>
                        </div>
                        {/* <input type="hidden" name="_next" value="https://www.instagram.com/bluetimecompetition/"{...register('_next')}/> */}
                        <input type="hidden" name="_template" value="table" {...register('_template')}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormContact