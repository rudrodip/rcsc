import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FullBlog from '../../components/blog/fullBlog'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'

const Journal = () => {
    const router = useRouter()
    const [blog, setBlog] = useState({})
    const [author, setAuthor] = useState(null)
    const [date, setDate] = useState()
    const uid = blog?.authorProfile
    const { blogid } = router.query
    const {user, userInfo} = useAuth()

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
                setAuthor(docSnap.data())
            } else {
                console.log("No such document!");
            }
        }

        const date = blog?.timestamp?.toDate()
        const formatedDate = date?.toString().slice(0, 15)

        setDate(formatedDate)

        uid && getUser(uid.trim())

    }, [blogid, uid])


    if (author) {
        return (
            <div>
                <Head>
                    <title>RCSC - {blog.title}</title>
                    <meta name="description" content="Blog written by RCSC members" />
                    <meta property="og:url" content={`https://rcsc.vercel.app/blogs/${blogid}`} />
                    <meta property="og:type" content="Science Club" />
                    <meta
                        property="og:title"
                        content={blog.title}
                    />
                    <meta
                        property="og:description"
                        content={`Read blog about ${blog.title}`}
                    />
                    <meta property="og:image" content={blog.img || 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                    <link rel="icon" href="/logo/rcsc-logo.png" />
                </Head>
                <FullBlog
                    blog={blog}
                    url={`https://rcsc.vercel.app/blogs/${blogid}`}
                    userImg={author.photoURL}
                    author={author.name}
                    date={date}
                    role={author.designation}
                    editable={user?.uid == uid || (userInfo?.roles && 'admin' in userInfo?.roles)}
                />
            </div>
        )
    } else {
        return (
            <div className='flex justify-center m-5'>
                <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
                    <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                    Loading...
                </button>
            </div>
        )
    }
}

export default Journal
