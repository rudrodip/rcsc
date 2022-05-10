import '../styles/globals.css'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'
import Social from '../components/social'
import Social_media from '../social_media.json'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }) {
  return <>
    <div>
      <Navbar props={Pages} />
      <Component {...pageProps} />
      <Social props = {Social_media}/>
      <Footer />
    </div>
  </>
}

export default MyApp
