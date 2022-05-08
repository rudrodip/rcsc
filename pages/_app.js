import '../styles/globals.css'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar props={Pages}/>
    <Component {...pageProps} />
  </> 
}

export default MyApp
