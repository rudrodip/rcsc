import '../styles/globals.css'
import '../src/config/firebase.config'
import Pages from '../public/jsons/pages.json'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import LoadingBar from 'react-top-loading-bar'
import Header from '../components/header/header'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
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
    <Head>
        <title>Rajshahi College Science Club</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" key="desc" />

        <meta property="og:url" content="https://rcsc.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rajshahi College Science Club" />
        <meta property="og:description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/rcsc-web.appspot.com/o/events%2F5th%20RCSF%2Fbg1.jpg?alt=media&token=7f0f6213-9085-48e3-a60b-74d08025ad6d" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rcsc.vercel.app" />
        <meta property="twitter:url" content="https://rcsc.vercel.app" />
        <meta name="twitter:title" content="Rajshahi College Science Club" />
        <meta name="twitter:description" content="Official Website of Rajshahi College Science Club" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/rcsc-web.appspot.com/o/events%2F5th%20RCSF%2Fbg1.jpg?alt=media&token=7f0f6213-9085-48e3-a60b-74d08025ad6d" />
        <link rel="icon" type="image/x-icon" href="/logo/rcsc-logo.png"></link>
      </Head>
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
