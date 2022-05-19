import React from 'react'
import { useRouter } from 'next/router';
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FileInputButton } from './fileInput'
import { upload, useAuth, updateUserData } from '../src/config/firebase.config'

const ProfileEdit = (props) => {
    const router = useRouter()
    const [phone, setPhone] = useState('')
    const [section, setSection] = useState('')
    const [grade, setGrade] = useState('')
    const [roll, setRoll] = useState('')
    const [image, setImage] = useState('')
    const [laoding, setLoading] = useState(false)
    const currentUser = useAuth()

    const onChange = async (image) => {
        setImage(image)
    }


    const handleChange = (e) => {
        if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'section') {
            setSection(e.target.value)
        }
        else if (e.target.name == 'roll') {
            setRoll(e.target.value)
        }
        else if (e.target.name == 'class') {
            setGrade(e.target.value)
        }
    }

    const validate = () => {
        if (phone.length == 11) {
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
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validate()) {
            const data = {
                phone: phone,
                class: grade,
                section: section,
                roll: roll,
              }
            try {
                upload(image, currentUser, setLoading)
                updateUserData(currentUser, data)
                toast('Updating data..', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
                setTimeout(()=> router.reload(), 1500)
            } catch (error) {
                console.log(error)
            }
            setPhone('')
            setSection('')
            setRoll('')
            setGrade('')

            { props.handleToggle() }
        }
    }

    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${props.toggle} absolute overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={props.handleToggle}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit your info</h3>
                            <div className='flex flex-wrap flex-row justify-around content-center'>
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0"
                                    src={image ? URL.createObjectURL(image) : "https://dummyimage.com/200x200"}
                                />
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    <FileInputButton
                                        label="Change profile pic"
                                        uploadFileName="theFiles"
                                        onChange={onChange}
                                        laoding={laoding}
                                    />
                                </div>
                            </div>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        placeholder="phone number"
                                        onChange={handleChange}
                                        value={phone}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Class</label>
                                    <input
                                        type="text"
                                        name="class"
                                        id="class"
                                        placeholder="class"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        onChange={handleChange}
                                        value={grade}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="section" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your section</label>
                                    <input
                                        type="text"
                                        name="section"
                                        id="section"
                                        placeholder="section"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        onChange={handleChange}
                                        value={section}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="roll" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your roll</label>
                                    <input
                                        type="text"
                                        name="roll"
                                        id="roll"
                                        placeholder="roll"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        onChange={handleChange}
                                        value={roll}
                                        required />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleSubmit}
                                >
                                    Save changes
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit