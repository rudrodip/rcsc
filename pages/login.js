import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
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
      })
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
        toast.warn('Something went wrong!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
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
        <div className="min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center text-white">Login</h1>
              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email} />

              <input
                type={isChecked ? 'text' : 'password'}
                className="block border border-gray-500 w-full p-3 rounded mb-4 outline-none text-gray-300 bg-gray-800"
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
              {
                loading &&

                <div className='flex justify-center m-5'>
                  <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
                    <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                    Logging in...
                  </button>
                </div>
              }
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
  else router.push('/')
}

export default Login