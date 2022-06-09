import '../styles/globals.css'
import '../src/config/firebase.config'
import Head from 'next/head'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/config/firebase.config'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const user = useAuth()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(40))
    router.events.on('routeChangeComplete', () => setProgress(100))
    try {
      setKey(Math.random())
    } catch (error) {
      console.log(error)
    }
  }, [router.query, router.events])
  
  return <>
    <div>
      <Head>
        <title>RCSC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>
      {console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)}
      <LoadingBar
        color='#23b6ed'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
      {key && <Navbar props={Pages} key={key} user={user} path={router.pathname} userProfile={user?.photoURL ? user?.photoURL : "https://dummyimage.com/200x200"}/>}
      <Component {...pageProps} />
      <Footer desc={router.pathname == "/" ? true : false}/>
    </div>
  </>
}

export default MyApp
