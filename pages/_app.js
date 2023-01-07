
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { LanguageProvider } from '../Provider/LanguageProvider'
import { appWithTranslation, AppWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
