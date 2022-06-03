import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login, useAuth } from '../src/config/firebase.config'

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const user = useAuth()


  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const validate = () => {
    if (email.length > 6 && password.length > 1) {
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
      setLoading(true)
      try {
        await login(email, password)

        setEmail('')
        setPassword('')

        router.push("/")
      } catch (error) {
        alert("No such account")
      }
      setLoading(false)
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
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-8 rounded shadow-md text-white w-full">
              <h1 className="mb-8 text-3xl text-center">Login</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email} />

              <input
                type={isChecked ? 'text' : 'password'}
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={password} />
              <div className='text-md text-gray-200'>
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
                className="w-full text-center py-3 rounded bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:scale-105 transition duration-200 focus:outline-none my-1"
                onClick={handleSubmit}
                disabled={loading}
              >
                Login
              </button>
            </div>
            <div className="text-grey-dark mt-6">
              Do not have an account?
              <Link href="/signup">
                <a className="no-underline border-b border-blue text-blue">
                  Sign up
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
        <p className='text-2xl md:text-4xl text-center tracking-wider p-5'>ভাই কয়বার লগ-ইন করা লাগে? শুধু শুধু website চেক করা</p>
        <p className='text-2xl md:text-4xl text-center tracking-wider p-5'>হোম এ যান</p>
      </div>
    )
  }
}

export default Login