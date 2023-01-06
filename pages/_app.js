
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { LanguageProvider } from '../Provider/LanguageProvider'

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

export default MyApp
