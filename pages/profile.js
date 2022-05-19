import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ProfileEdit from '../components/profileEdit'
import { logout, useAuth, db } from '../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'

const Profile = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState("hidden")
  const [profile, setProfile] = useState("https://dummyimage.com/200x200")
  const [user, setUser] = useState(null)
  const currentUser = useAuth()

  const handleToggle = () => {
    toggle == "" ? setToggle("hidden") : setToggle('')
  }

  useEffect(()=>{
    async function getUser(uid) {
      if (!uid) return
      const userRef = doc(db, `user/${uid}`)
      const docSnap = await getDoc(userRef)
      if (docSnap.exists()) {
        setUser(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }
    if (currentUser){
      getUser(currentUser.uid)
    }
    if (currentUser?.photoURL){
      setProfile(currentUser.photoURL)
    }

  }, [currentUser])


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
    <main className="profile-page">
      <ProfileEdit toggle={toggle} handleToggle={handleToggle} user={currentUser}/>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-500">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative cursor-pointer -m-24">
                      <img
                        alt="..."
                        src={profile}
                        className="shadow-xl h-auto align-middle border-none"
                        style={{ maxWidth: "200px" }}
                      />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-green-500 hover:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={handleToggle}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">
                        {user?.blogs}
                      </span>
                      <span className="text-sm text-gray-400">Blogs</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">
                        {user?.likes}
                      </span>
                      <span className="text-sm text-gray-400">Likes</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-400">
                        {user?.likes}
                      </span>
                      <span className="text-sm text-gray-400">Blog Views</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold text-white">
                  {user?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {user?.role}
                </div>
                <div className="mb-2 text-gray-400 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                  Class: {user?.class} <br></br>
                  Section: {user?.section} <br></br>
                  Roll: {user?.roll}
                </div>
                <div className="mb-2 text-gray-400">
                  Rajshahi College
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blue-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-300">
                      {user?.desc}
                    </p>
                    <button
                      className="text-gray-800 font-bold bg-cyan-300 p-2 rounded-md transition ease-in-out duration-100 hover:bg-green-400"
                      onClick={handleLogout}
                      disabled={loading || !currentUser}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


export default Profile