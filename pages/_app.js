import '../styles/globals.css'
import '../src/config/firebase.config'
import Pages from '../pages.json'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth, useUser } from '../src/config/firebase.config'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const [profile, setProfile] = useState('https://dummyimage.com/200x200')
  const user = useAuth()
  const userInfo = useUser()

  const handleProfile = (image) => {
    if (userInfo){
      userInfo.photoURL = image
    }
    setProfile(image)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(40))
    router.events.on('routeChangeComplete', () => setProgress(100))
    try {
      setKey(Math.random())
    } catch (error) {
      console.log(error)
    }
    handleProfile(userInfo?.photoURL)
  }, [router.query, router.events, userInfo?.photoURL])

  return <>
    <div>
      <LoadingBar
        color='#23b6ed'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />

      <Navbar
        props={Pages}
        key={key || 1}
        user={user}
        path={router.pathname}
        userProfile={profile} 
      />
        
      <Component {...pageProps} user={user} userInfo={userInfo} handleProfile={handleProfile}/>
      <Footer desc={router.pathname == "/" ? true : false} />
    </div>
  </>
}

export default MyApp
