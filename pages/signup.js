import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp, createUserData, useAuth } from '../src/config/firebase.config';

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [memberCode, setMemberCode] = useState('')
  const [section, setSection] = useState('')
  const [grade, setGrade] = useState('')
  const [roll, setRoll] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const user = useAuth()


  const handleOnChange = () => {
    setIsChecked(!isChecked)
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
  }

  const validate = () => {
    if (name.length > 2 && phone.length == 11 && memberCode.length == 6) {
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
        name: name,
        email: email,
        phone: phone,
        class: grade,
        section: section,
        roll: roll,
        memberCode: memberCode,
        blogs: 0,
        role: "Member",
        photoURL: "https://dummyimage.com/200x200"
      }
      try {
        setLoading(true)
        let { user } = await signUp(email, password)
        createUserData(user, data)
        toast('Signed in successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => { router.push("/") }, 2000)
      } catch (error) {
        console.log(error)
      }

      // set all states to default
      setLoading(false)
      setName('')
      setEmail('')
      setPhone('')
      setPassword('')
      setMemberCode('')
      setSection('')
      setRoll('')
      setGrade('')
    }
  }

  if (!user) {
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
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-gradient-to-t from-blue-600 to-cyan-500 px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={name} />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={phone} />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email} />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="class"
                placeholder="Class"
                onChange={handleChange}
                value={grade} />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="section"
                placeholder="Section"
                onChange={handleChange}
                value={section} />

              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="roll"
                placeholder="Roll"
                onChange={handleChange}
                value={roll} />

              <input
                type={isChecked ? 'text' : 'password'}
                className="block border border-grey-light w-full p-3 rounded mb-2 outline-none"
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

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="memberCode"
                placeholder="Member Code"
                onChange={handleChange}
                value={memberCode} />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-500 text-white hover:scale-105 transition duration-200 focus:outline-none my-1"
                onClick={handleSubmit}
                disabled={loading}
              >
                Create Account
              </button>
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
      </div>
    )
  }
  else {
    return (
      <div className='flex w-full h-48 justify-center items-center flex-col'>
        <p className='text-2xl md:text-4xl text-center tracking-wider'>ভাই কয়বার সাইন-ইন করা লাগে? শুধু শুধু website চেক করা</p>
        <p className='text-2xl md:text-4xl text-center tracking-wider'>হোম এ যান</p>
      </div>
    )
  }
}

export default Login