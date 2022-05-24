import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FullBlog from '../../components/blog/fullBlog'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'

const Journal = () => {
    const router = useRouter()
    const [blog, setBlog] = useState({})
    const [user, setUser] = useState(null)
    const [date, setDate] = useState()
    const uid = blog?.authorProfile
    const { blogid } = router.query

    useEffect(() => {
        async function getAllBlogs() {
            const docRef = doc(db, `blogs/${blogid}`)
            const docSnaps = await getDoc(docRef)
            setBlog(docSnaps.data())
        }
        getAllBlogs()

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

        const date = blog?.timestamp?.toDate()
        const formatedDate = date?.toString().slice(0, 15)

        setDate(formatedDate)

        uid && getUser(uid.trim())

    }, [uid])



    return (
        <div>
            <FullBlog blog={blog} url={`https://rcscienceclub.vercel.app/blogs/${blogid}`} userImg={user?.photoURL} date={date} />
        </div>
    )
}

export default Journal