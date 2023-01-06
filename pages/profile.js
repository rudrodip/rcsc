import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProfileEdit from '../components/profile/profileEdit'
import { logout } from '../src/config/firebase.config'
import ButtomPrimary from '../components/button-primary'

const Profile = ({ user, userInfo, handleProfile }) => {
  const router = useRouter()
  const [toggle, setToggle] = useState("hidden")
  const [loading, setLoading] = useState(false)

  const handleToggle = () => {
    toggle == "" ? setToggle("hidden") : setToggle('')
  }
  const handleLogout = async () => {
    try {
      setLoading(true)
      await logout()
      router.push('/')
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  return (
    <main className="profile-page my-14">
      <Head>
        <title>RCSC - Profile</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Profile"
        />
        <meta
          property="og:description"
          content="See your profile"
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <ProfileEdit
        toggle={toggle}
        handleToggle={handleToggle}
        user={user}
        userInfo={userInfo}
        handleProfile={handleProfile}
      />


      <div>
        <div className="flex items-center mx-auto justify-center w-full md:w-2/3 xl:w-1/2 content-center">
          <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-800 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block rounded-full shadow-xl m-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url('${userInfo?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}')` }}></div>
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">{userInfo?.name}</h1>
              <div className='flex flex-wrap'>
                {
                  userInfo?.roles && Object.keys(userInfo?.roles).map(elem => {
                    return (
                      <p className='text-blue-500 font-mono font-medium mr-3 mt-2' key={elem}>{userInfo?.roles[elem] && `✅ ${elem.toUpperCase()}`}</p>
                    )
                  })
                }
              </div>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg className="h-4 fill-current text-cyan-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                {userInfo?.designation}
              </p>
              {!userInfo ?
                <div className='flex justify-center m-5'>
                  <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
                    <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                    Loading...
                  </button>
                </div>

                :
                <div>
                  <p className="pt-2 text-cyan-400 font-bold text-xl lg:text-lg">
                    {userInfo ? userInfo.institution : ''}
                  </p>
                  {userInfo?.roles["alumnus"] ?
                    <div className='flex flex-col justify-start items-start'>
                      <p className="pt-2 text-gray-200 text-xs lg:text-sm ml-8 lg:ml-0" ><span className='text-sm font-semibold'>Batch: </span>{userInfo?.batch}</p>
                      <p className="pt-2 text-gray-200 text-xs lg:text-sm ml-8 lg:ml-0" ><span className='text-sm font-semibold'>Phone: </span>{userInfo?.phone}</p>
                      <p className="pt-2 text-gray-200 text-xs lg:text-sm ml-8 lg:ml-0" ><span className='text-sm font-semibold'>E-mail: </span>{userInfo?.email}</p>
                    </div>
                    :
                    <div className='flex flex-col justify-start items-start'>
                      <p><span className='text-sm font-semibold'>Class: </span>{userInfo?.class}</p>
                      <p><span className='text-sm font-semibold'>Section: </span>{userInfo?.section}</p>
                      <p><span className='text-sm font-semibold'>Roll: </span>{userInfo?.roll}</p>
                    </div>
                  }
                </div>
              }

              <div className="p-5 flex flex-wrap">
                <ButtomPrimary text="Edit Profile" onClick={handleToggle} />
              </div>

              <div className="w-4/5 lg:w-full flex flex-wrap items-center justify-between text-gray-400">
                <p>Blogs: {userInfo?.blogs}</p>
              </div>

              {userInfo?.achievements.length > 0 &&
                <div>
                  <h1 className='mt-4 text-md text-blue-500 text-left font-semibold'>Achievements</h1>
                  <div className='text-left'>
                    {userInfo?.achievements && userInfo.achievements.map((achievement, index) => {
                      return (
                        <div key={index}>
                          <p className="pt-2 text-gray-200 text-xs lg:text-sm flex items-center justify-start">
                            <span>🔹 </span>
                            {achievement}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              }

              {userInfo?.socials && Object.keys(userInfo?.socials).length > 0 &&
                <div>
                  <h1 className='mt-4 text-md text-blue-500 font-semibold text-left'>Social Media</h1>
                  <div className='text-left mr-2 flex flex-wrap'>
                    {userInfo?.socials && Object.keys(userInfo.socials).map((i, index) => {
                      return (
                        <div key={index} className='ml-3'>
                          <p className="pt-2 text-gray-200 text-sm lg:text-sm flex items-center justify-start italic underline">
                            <a href={userInfo.socials[i]} className='text-cyan-500' target={'_blank'} rel="noreferrer">
                              {i.charAt(0).toUpperCase() + i.slice(1)}
                            </a>
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              }
              <button
                className="bg-gray-900 my-5 hover:bg-blue-600 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
                onClick={handleLogout}
                disabled={loading}
              >
                Logout
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default Profile