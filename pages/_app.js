import '../styles/globals.css'
import '../src/config/firebase.config'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import LoadingBar from 'react-top-loading-bar'
import Header from '../components/header/header'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/custom_confirm.css'
import { AuthContextProvider } from '../context/AuthContext'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [key, setKey] = useState(0)
  const [headerKey, setHeaderKey] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(40))
    router.events.on('routeChangeComplete', () => setProgress(100))
    try {
      setKey(Math.random())
      setHeaderKey(Math.random())
    } catch (error) {
      console.log(error)
    }
  }, [router.query, router.events])

  return <>
    <AuthContextProvider>
      <LoadingBar
        color='#23b6ed'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />

      <Navbar
        props={Pages}
        key={key || 1}
        path={router.pathname}
      />

      <Header page={Pages[router.pathname]} key={headerKey || 2} />
      <Component {...pageProps} />
      <Footer desc={router.pathname == "/" ? true : false} />
    </AuthContextProvider>
  </>
}

export default MyApp
