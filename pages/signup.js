import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Decode from '../src/authCode/decode'
import TextFormField from '../components/form/textFormField'
import PasswordInputField from '../components/form/passwordField'
import { FileInputButton } from '../components/fileInput';
import { useAuth } from '../context/AuthContext';

const toast_warn_config = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const Signup = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  // profile picture
  const [image, setImage] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("https://dummyimage.com/200x200")
  // form values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [memberCode, setMemberCode] = useState('')
  const [batch, setBatch] = useState('')
  const [institution, setInstitution] = useState('')
  const [role, setRole] = useState('')
  const [grade, setGrade] = useState('')
  const [roll, setRoll] = useState('')
  const [isAlumni, setIsAlumni] = useState(false)

  // if the user is alumnus, then isAlumni is set to true
  const { user, signup, createUserData, upload, setUserInfo } = useAuth()

  // profile picture change
  const onImageChange = async (image) => {
    if (image.size > 5242880) {
      toast.warn("File size should be less than 5MB", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setImage(image);
      setTempImageUrl(URL.createObjectURL(image))
    }
  };

  // isAlumni check hanlder
  const handleAlumni = () => {
    setIsAlumni(!isAlumni)
  }

  // form value change handler
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

  const validateMemberCode = () => {
    if (!isAlumni) {
      let year;
      try {
        year = parseInt(batch.split('-').pop().trim())
      } catch (error) {
        toast.warn('Batch format is not valid, try again', toast_warn_config)
        return false
      }
      if (Decode(memberCode, grade, year) == roll) return true
      toast.warn('Member Code not matched!', toast_warn_config)
      return false
    }
    return true
  }

  // validates from data
  const validate = () => {
    if (name.length > 2 && validateMemberCode()) {
      return true;
    }
    toast.warn('Form not valid! Please check again', toast_warn_config)
    return false;
  }

  // create user-data in db
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
      },
      batch: batch
    }
    if (isAlumni) {
      data["phone"] = phone
      data["designation"] = role
      data["institution"] = institution
      data["roles"]["alumnus"] = isAlumni
    }
    else {
      data["class"] = grade
      data["roll"] = roll
      data["memberCode"] = memberCode
      data["phone"] = phone
    }

    try {
      let { user } = await signup(email, password)
      if (image) {
        let url = await upload(image, user);
        data["photoURL"] = url;
      }
      createUserData(user, data)
      setUserInfo(data)
    } catch (error) {
      console.log(error)
      toast.warn('Error!', toast_warn_config)
    }
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      if (validate()) {
        await createUser()
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  if (user && !loading) {
    router.push('/profile')
  }
  return (
    <div>
      <Head>
        <title>RCSC - Signup</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Rajshahi College Science Club"
        />
        <meta
          property="og:description"
          content="Official Website of Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
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
      <section className="max-w-4xl p-6 mx-auto bg-gray-800 rounded-md shadow-md my-10">
        <h1 className="text-xl font-bold text-white capitalize">Sign up</h1>
        <div className='text-sm text-gray-200 mt-3'>
          <div className="block mx-auto rounded-full h-40 w-40 bg-cover bg-center" style={{ backgroundImage: `url('${tempImageUrl}`}}></div>
          <p>Alumni?</p>
          <input type="checkbox" className="toggle toggle-success" checked={isAlumni} onChange={handleAlumni} />
        </div>
        <div className="py-6 px-3 flex justify-center">
          <FileInputButton
            label="Upload avatar"
            uploadFileName="theFiles"
            onChange={onImageChange}
            loading={loading}
            acceptedFileTypes="image/png, image/jpeg, image/jpg"
            allowMultipleFiles={false}
          />
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <TextFormField
              label="Fullname"
              placeholder="Fullname"
              name="name"
              handleChange={handleChange}
            />
            <TextFormField
              label="Phone"
              placeholder="e.g. 01771122334"
              name="phone"
              handleChange={handleChange}
            />
            <TextFormField
              label="Session"
              placeholder="e.g. 2020-2021"
              name="batch"
              handleChange={handleChange}
            />
            {isAlumni &&
              <TextFormField
                label="Designation"
                placeholder="e.g. Ex President"
                name="role"
                handleChange={handleChange}
              />
            }
            {isAlumni &&
              <TextFormField
                label="Current Institution"
                placeholder="e.g. BUET"
                name="institution"
                handleChange={handleChange}
              />
            }
            {!isAlumni &&
              <TextFormField
                label="Class"
                placeholder="e.g. 11"
                name="class"
                handleChange={handleChange}
              />
            }
            {!isAlumni &&
              <TextFormField
                label="Roll"
                placeholder="e.g. 155"
                name="roll"
                handleChange={handleChange}
              />
            }
            {!isAlumni &&
              <TextFormField
                label="Member Code"
                placeholder="e.g. 898923213"
                name="memberCode"
                handleChange={handleChange}
              />
            }
            <TextFormField
              label="Email Address"
              placeholder="e.g. example@gmail.com"
              name="email"
              handleChange={handleChange}
            />
            <PasswordInputField
              name='password'
              handleChange={handleChange}
              showPassToggle={true}
            />
          </div>
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
        </form>
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 leading-5 text-white transition-all duration-200 transform bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md hover:scale-110 focus:outline-none focus:bg-gray-600"
            onClick={handleSubmit}
          >Create Account
          </button>
        </div>
        <div className="text-grey-dark mt-6 text-center">
          Already have an account?
          <Link legacyBehavior href="/login">
            <a className="no-underline border-b border-blue text-blue">
              Log in
            </a>
          </Link>
        </div>
      </section>

    </div >
  )
}

export default Signup