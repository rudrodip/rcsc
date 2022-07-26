import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp, createUserData, useAuth } from '../src/config/firebase.config'
import Decode from '../src/authCode/decode'

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [memberCode, setMemberCode] = useState('')
  const [batch, setBatch] = useState('')
  const [institution, setInstitution] = useState('')
  const [role, setRole] = useState('')
  const [section, setSection] = useState('')
  const [grade, setGrade] = useState('')
  const [roll, setRoll] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isAlumni, setIsAlumni] = useState(false)
  const user = useAuth()

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const handleAlumni = () => {
    setIsAlumni(!isAlumni)
  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name == 'memberCode') {
      setMemberCode(e.target.value)
    }
    else if (e.target.name == 'section') {
      setSection(e.target.value)
    }
    else if (e.target.name == 'class') {
      setGrade(e.target.value)
    }
    else if (e.target.name == 'roll') {
      setRoll(e.target.value)
    }
    else if (e.target.name == 'role') {
      setRole(e.target.value)
    }
    else if (e.target.name == 'batch') {
      setBatch(e.target.value)
    }
    else if (e.target.name == 'institution') {
      setInstitution(e.target.value)
    }
  }

  const validate = () => {
    if (name.length > 2) {
      if (!isAlumni) {
        if (memberCode.length == 7 && phone.length == 11 && Decode(grade, section, roll) == memberCode) {
          return true
        }
        toast.warn('Member Code not matched!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return false
      }
      return true
    }
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

  const createUser = async () => {
    const data = {
      name: name,
      email: email,
      photoURL: "https://dummyimage.com/200x200",
      designation: "Member",
      blogs: 0,
      achievements: [],
      socials: {},
      institution: "Rajshahi College",
      roles: {
        admin: false,
        executive: false
      }
    }
    if (isAlumni) {
      if (phone.length == 11) {
        data["phone"] = phone
      }
      data["role"] = role
      data["batch"] = batch
      data["institution"] = institution
      data["roles"]["alumnus"] = isAlumni
      data["batch"] = batch
    }
    else {
      data["class"] = grade
      data["section"] = section
      data["roll"] = roll
      data["memberCode"] = memberCode
      data["phone"] = phone
    }

    try {
      let { user } = await signUp(email, password)
      createUserData(user, data)
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    if (validate()) {
      await createUser()
    }
    setLoading(false)
  }

  if (!user) {
    return (
      <div>
        <Head>
          <title>RCSC - Signup</title>
        </Head>
        
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-gradient-to-t from-blue-800 to-blue-600 px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
              <div className='text-sm text-gray-200 p-2'>
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  className='mx-2 w-4 h-4 items-center'
                  checked={isAlumni}
                  onChange={handleAlumni}
                />Alumni ?
              </div>

              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={name} />

              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                name="phone"
                placeholder={isAlumni ? "Phone (optional)" : "Phone"}
                onChange={handleChange}
                value={phone} />

              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email} />

              {
                !isAlumni &&
                <div>
                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="class"
                    placeholder="Class"
                    onChange={handleChange}
                    value={grade} />

                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="section"
                    placeholder="Section"
                    onChange={handleChange}
                    value={section} />

                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="roll"
                    placeholder="Roll"
                    onChange={handleChange}
                    value={roll} />

                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="memberCode"
                    placeholder="Member Code"
                    onChange={handleChange}
                    value={memberCode} />
                </div>
              }

              {
                isAlumni &&
                <div>
                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="role"
                    placeholder="Designation: e.g. Ex-President"
                    onChange={handleChange}
                    value={role} />
                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="batch"
                    placeholder="Batch: e.g. 2019-2020"
                    onChange={handleChange}
                    value={batch} />
                  <input
                    type="text"
                    className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                    name="institution"
                    placeholder="Current Institution: e.g. BUET"
                    onChange={handleChange}
                    value={institution} />
                </div>
              }

              <input
                type={isChecked ? 'text' : 'password'}
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={password} />

              <div className='text-sm text-gray-200'>
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  className='mx-2 w-4 h-4'
                  checked={isChecked}
                  onChange={handleOnChange}
                />Show Password
              </div>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-500 text-white hover:scale-105 transition duration-200 focus:outline-none my-1"
                onClick={handleSubmit}
                disabled={loading}
              >
                Create Account
              </button>
              {
                loading &&

                <div className='flex justify-center m-5'>
                  <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
                    <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                    Uploading...
                  </button>
                </div>
              }
            </div>
            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link href="/login">
                <a className="no-underline border-b border-blue text-blue">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div >
    )
  }
  else router.push('/')
}

export default Login