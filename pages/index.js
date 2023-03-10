import React,{useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import InstaGrid from '../components/InstaGrid'
import dynamic from 'next/dynamic'
import About from './about'
import { useRouter } from 'next/router'
import englishLanguageTranslations from '../public/locales/en/common.json'
import spanishLanguageTranslations from '../public/locales/es/common.json'
import frenchLanguageTranslations from '../public/locales/fr/common.json'
import LanguageSelector from '../components/languageSelector'
import Services from './services'
import { LanguageContext } from '../Context/LanguageContext'

const token = process.env.NEXT_PUBLIC_OAUTHTOKEN
const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=${token}`

const DynamicSlider = dynamic(() => import('../components/Slider'), { ssr: false })

export default function Home({ data }) {
  const { locale } = useContext(LanguageContext)
  const es = spanishLanguageTranslations
  const en = englishLanguageTranslations
  const fr = frenchLanguageTranslations
  const t = locale === 'es' ? es : locale === 'fr' ? fr : en

  return (
    <>
      <div>
        <Head>
          <title translate='no'>Bluetime - Competition</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero heading1='BLUETIME' heading2='' heading3='COMPETITION' message={t.firstSlogan} />
      </div>
      <div id='about' className=' overflow-hidden'>
        <About />
        <InstaGrid data={data} />
      </div>
      <div id='services'>
        <div className='w-full  flex flex-col text-4xl items-center justify-center '>
          <h2 className='flex mt-40 items-center justify-center text-3xl font-extrabold text-slate-700 text-center max-sm:text-lg'>{t.serviceSection.title}</h2>
          <p className='m-10 text-slate-700 p-10 text-base text-center'>{t.serviceSection.firstParagraph}</p>
          <Services />
          {typeof window !== 'undefined' && <DynamicSlider />}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(url)
  const data = await res.json()

  if(!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
