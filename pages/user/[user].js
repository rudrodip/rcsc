import React from 'react'
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


    return (<MainProfile custom_user={user}/>)
}

export default Profile