import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { db } from '../../src/config/firebase.config'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react';
import { async } from '@firebase/util';

const AddAchievements = (props) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [achievement, setAchievement] = useState('')

    useEffect(() => {
        props.user && setUser(props.user)
    }, [props.user])

    const handleChange = (e) => {
        if (e.target.name == 'achievement') {
            setAchievement(e.target.value)
        }
    }

    const validate = () => {
        if (achievement.length > 1) {
            return true
        } else {
            toast.warn('Form not valid! Please check again', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    async function addAchievements(user, data) {
        setLoading(true)
        if (!user) return
        const userRef = doc(db, `user/${user.uid}`)
        try {
            await updateDoc(userRef, {
                achievements: arrayUnion(data)
            })
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    async function deleteAchievement(user, data) {
        setLoading(true)
        if (!user) return
        const userRef = doc(db, `user/${user.uid}`)
        try {
            await updateDoc(userRef, {
                achievements: arrayRemove(data)
            })
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const handleDelete = async (data) => {
        await deleteAchievement(user, data)
        toast.warn('Deleted', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setTimeout(() => router.reload(), 2000)
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (validate()) {
            try {
                await addAchievements(user, achievement)
                toast('Added', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setTimeout(() => router.reload(), 2000)
            } catch (error) {
                alert(error)
            }
            setAchievement('')
        }
        setLoading(false)
    }
    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            <div className={`${props.toggle} backdrop-blur-none md:backdrop-blur-sm absolute overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">

                    <div className="dark:bg-gray-700 px-6 py-8 rounded shadow-md w-full">
                        <div className='my-4 text-left'>
                            {props.achievements && props.achievements.map((achievement, index) => {
                                return (
                                    <div key={index} className='flex flex-row items-end justify-between'>
                                        <p className="pt-2 text-gray-300 text-xs lg:text-sm flex items-center justify-start">
                                            {/* <img src="https://img.icons8.com/material-outlined/24/000000/circled-dot.png" className='pr-2' /> */}
                                            <p>{index+1}. </p>
                                            {achievement}
                                        </p>
                                        <div>
                                            <button className='pointer-curson'
                                                onClick={() => handleDelete(achievement)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" className='fill-gray-300'>
                                                    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-full h-1 bg-blue-400 rounded mt-2 mb-4"></div>
                        <div className='flex flex-row justify-end'>
                            <h1 className="mb-8 text-2xl text-center text-gray-200">Add your achievements</h1>
                            <button type="button" className="mb-7 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={props.handleToggle}>
                                <svg className="w-5 h-5" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 outline-none text-gray-700"
                            name="achievement"
                            placeholder="Achievement"
                            onChange={handleChange}
                            value={achievement} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-cyan-500 text-white hover:scale-105 transition duration-200 focus:outline-none my-1"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAchievements