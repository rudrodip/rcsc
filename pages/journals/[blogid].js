import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FullBlog from '../../components/blog/fullBlog'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'

const Journal = () => {
    const router = useRouter()
    const [blog, setBlog] = useState({})
    const { blogid } = router.query

    useEffect(() => {
        async function getAllBlogs() {
          const docRef = doc(db, `blogs/${blogid}`)
          const docSnaps = await getDoc(docRef)
          setBlog(docSnaps.data())
        }
        // async function get
        getAllBlogs()
    }, [])

    return (
        <div>
            <FullBlog blog={blog}/>
        </div>
    )
}

export default Journal