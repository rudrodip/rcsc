import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProfileEdit from '../components/profile/profileEdit'
import MainProfile from '../components/profile/mainProfile'
import { useAuth } from '../context/AuthContext'

const Profile = ({ handleProfile }) => {
  const router = useRouter()
  const [toggle, setToggle] = useState("hidden")
  const [loading, setLoading] = useState(false)
  const {user, userInfo, logout} = useAuth()

  const handleToggle = () => {
    toggle == "" ? setToggle("hidden") : setToggle('')
  }
  const handleLogout = async () => {
    try {
      setLoading(true)
      await logout()
      router.push('/')
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  return (
    <main className="profile-page my-14">
      <Head>
        <title>RCSC - Profile</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Profile"
        />
        <meta
          property="og:description"
          content="See your profile"
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <ProfileEdit
        toggle={toggle}
        handleToggle={handleToggle}
        user={user}
        userInfo={userInfo}
        handleProfile={handleProfile}
      />

      <MainProfile user={userInfo} editProfile={handleToggle} handleLogout={handleLogout} />
    </main>
  )
}


export default Profile