import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/dist/client/router';
import MainProfile from '../../components/profile/mainProfile'

const Profile = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const uid = router.query
    useEffect(() => {
        async function getUser(uid) {
            if (!uid) return
            const userRef = doc(db, `user/${uid}`)
            const docSnap = await getDoc(userRef)
            if (docSnap.exists()) {
                setUser(docSnap.data())
            } else {
                console.log("No such document!");
            }
        }
        getUser(uid?.user?.trim())
    }, [uid?.user])


    return (
        <main className='my-14'>
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
            <MainProfile user={user} />
        </main>
    )
}

export default Profile