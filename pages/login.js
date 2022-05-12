import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      const data = {
        email: email,
        password: password,
      }
      let res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      let response = await res.json()
      console.log(response)

      setEmail('')
      setPassword('')
      if (response.success){
        localStorage.setItem('token', response.token)
        toast('You\'re logged in!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout( () => {router.push("http://localhost:3000")}, 2000)
      } else {
        toast.warn('Invalid Credentials', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }) 
      }
    }
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
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-sky-400 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={email} />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={password} />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:scale-105 transition duration-200 focus:outline-none my-1"
              onClick={handleSubmit}
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

export default Login