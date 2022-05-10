import '../styles/globals.css'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }) {
  return <>
    <div>
      <Navbar props={Pages} />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
