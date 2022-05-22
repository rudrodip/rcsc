import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/dist/client/router';

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
        getUser(uid.user.trim())

    }, [])


    return (
        <main className="profile-page">
            <div>
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-700 opacity-75 mx-6 lg:mx-0">
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url('${user ? user.photoURL : "https://dummyimage.com/200x200"}')` }}></div>

                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user?.name}</h1>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-500 opacity-25"></div>
                            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                <svg className="h-4 fill-current text-cyan-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                </svg>
                                {user?.role}
                            </p>
                            <p className="pt-2 text-gray-200 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                <svg className="h-4 fill-current text-cyan-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>
                                {`Class: ${user ? user.class : ''}   Section: ${user ? user.section : ''}   Roll: ${user ? user.roll : ''}`}
                            </p>
                            <p className="pt-8 text-sm">Rajshahi College</p>


                            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between text-gray-400">
                                <p>Blogs: {user?.blogs}</p>
                                <p>Likes: {user?.likes}</p>
                                <p>Views: {user?.views}</p>
                            </div>
                            <div className='mt-4 text-left'>
                                {user && user.achievements.map((achievement, index) => {
                                    return (
                                        <div key={index}>
                                            <p className="pt-2 text-gray-200 text-xs lg:text-sm flex items-center justify-start">
                                                <svg className="h-4 fill-current text-cyan-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                                </svg>
                                                {achievement}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='h-1/2 w-full lg:w-2/5'>
                        <img src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Profile