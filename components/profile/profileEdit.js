import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FileInputButton } from '../fileInput'
import { upload, useAuth, updateUserData, updateBlogAuthor } from '../../src/config/firebase.config'

const ProfileEdit = (props) => {
    const router = useRouter()

    // initializing all states
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [section, setSection] = useState('')
    const [grade, setGrade] = useState('')
    const [roll, setRoll] = useState('')
    const [institution, setInstitution] = useState('')
    const [image, setImage] = useState('')
    const [laoding, setLoading] = useState(false)

    // custom hook for auth
    const currentUser = useAuth()

    // profile picture change
    const onChange = async (image) => {
        if (image.size > 1048576) {
            toast.warn('File size should be less than 1 MB', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            setImage(image)
        }
    }

    // handles change in form and save in states
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
        else if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'institution') {
            setInstitution(e.target.value)
        }
    }

    // form validation logics
    const validate = () => {
        const data = {}
        if (phone.length == 11) {
            data['phone'] = phone
        }
        if (section.length > 1) {
            data['section'] = section
        }
        if (roll.length >= 1) {
            data['roll'] = roll
        }
        if (grade.length >= 1) {
            data['class'] = grade
        }
        if (name.length >= 1) {
            data["name"] = name
        }
        if (institution.length >= 1) {
            data["institution"] = institution
        }
        return data
    }


    // handling submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = validate()
            if (image) {
                let url = await upload(image, currentUser, setLoading)
                data['photoURL'] = url
            }
            if ("name" in data) {
                updateBlogAuthor(data["name"], currentUser.uid)
            }
            updateUserData(currentUser, data)
            toast('Updated', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setTimeout(() => router.reload(), 1500)
        } catch (error) {
            console.log(error)
        }
        setPhone('')
        setSection('')
        setRoll('')
        setGrade('')
        setName('')

        { props.handleToggle() }
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
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${props.toggle} backdrop-blur-none md:backdrop-blur-sm absolute overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative rounded-lg shadow bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" onClick={props.handleToggle}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-white">Edit your info</h3>
                            <div className='flex flex-wrap flex-row justify-around content-center'>
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0"
                                    src={image ? URL.createObjectURL(image) : currentUser?.photoURL}
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


                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5 mb-5"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    value={name}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Your phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
                                    placeholder="phone number"
                                    onChange={handleChange}
                                    value={phone}
                                    required />
                            </div>
                            {
                                props.isAlumnus ?

                                    <div>
                                        <div>
                                            <label htmlFor="institution" className="block mb-2 text-sm font-medium text-gray-300">Current Institution</label>
                                            <input
                                                type="text"
                                                name="institution"
                                                id="institution"
                                                placeholder="Current Institution"
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
                                                onChange={handleChange}
                                                value={institution}
                                                required />
                                        </div>
                                    </div>

                                    :

                                    <div>
                                        <div>
                                            <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-300">Your Class</label>
                                            <input
                                                type="text"
                                                name="class"
                                                id="class"
                                                placeholder="class"
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
                                                onChange={handleChange}
                                                value={grade}
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="section" className="block mb-2 text-sm font-medium text-gray-300">Your section</label>
                                            <input
                                                type="text"
                                                name="section"
                                                id="section"
                                                placeholder="section"
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
                                                onChange={handleChange}
                                                value={section}
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="roll" className="block mb-2 text-sm font-medium text-gray-300">Your roll</label>
                                            <input
                                                type="text"
                                                name="roll"
                                                id="roll"
                                                placeholder="roll"
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
                                                onChange={handleChange}
                                                value={roll}
                                                required />
                                        </div>
                                    </div>
                            }

                            <button
                                type="submit"
                                className="w-full text-white focus:ring-4 focus:outline-none mb-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                onClick={handleSubmit}
                            >
                                Save changes
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileEdit