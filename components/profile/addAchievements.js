// the component is responsible for adding and deleting achievements in user profile


// necessary dependencies
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { db } from '../../src/config/firebase.config'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react';


// the main component
const AddAchievements = (props) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [achievement, setAchievement] = useState('')
    let achievements = props.achievements

    // setUser and handleChange in the form
    useEffect(() => {
        props.user && setUser(props.user)
    }, [props.user])

    const handleChange = (e) => {
        if (e.target.name == 'achievement') {
            setAchievement(e.target.value)
        }
    }


    // validiting the form
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

    // this function adds the "Achievement" given by the user to store in his profile in DB
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

    // this function delete the "Achievement" given by the user to store in his profile in DB
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

    // handles the delete function
    const handleDelete = async (data, index) => {
        achievements.splice(index, 1)
        await deleteAchievement(user, data)

        // shows the user the state
        toast.warn('Deleted', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    // handle the submit function
    const handleSubmit = async (e) => {
        // set the loading to true so that user can't use the button until the proceess is finished
        setLoading(true)
        achievements.push(achievement)
        // to stop relaoding the page
        e.preventDefault()

        // checking the validation
        if (validate()) {
            try {
                await addAchievements(user, achievement)

            } catch (error) {
                alert(error)
            }
        }

        // setting the loading to false so that user can again use the button
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

                    <div className="bg-gray-700 px-6 py-8 rounded-lg shadow-md w-full">

                        <div className='flex flex-row justify-end'>
                            <h1 className="mb-8 text-xl text-center text-white">Customize your achievements</h1>
                            <button type="button" className="bg-gray-600 mb-7 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" onClick={props.handleToggle}>
                                <svg className="w-5 h-5" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className='my-4 mb-10 text-left'>
                            {achievements && achievements.map((achievement, index) => {
                                return (
                                    <div key={index} className='flex flex-row justify-between border-2 border-gray-600 m-2 rounded-md p-1'>
                                        <p className="text-white text-sm flex items-center justify-start">
                                            {achievement}
                                        </p>
                                        <div>
                                            <button className='pointer-cursor '
                                                onClick={() => handleDelete(achievement, index)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" className='fill-red-500 hover:scale-125 transition duration-200'>
                                                    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Add your achievements</label>
                            <input
                                type="text"
                                name="achievement"
                                id="name"
                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5 mb-5"
                                placeholder="Achievement"
                                onChange={handleChange}
                                value={achievement}
                                required />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white focus:ring-4 focus:outline-none mb-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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

// structure -> Achievements with delete button > Add achievements form > Submit button