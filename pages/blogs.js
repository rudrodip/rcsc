import React from 'react'
import Header from '../components/header/header'
import MiniBlog from '../components/blog/miniBlog'
import { db, useAuth, updateUserData } from '../src/config/firebase.config';
import { getDocs, collection, query, limit, where, deleteDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchBlog from '../components/blog/searchBlog';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Blogs() {
  const router = useRouter()
  const [blogs, setBlogs] = useState(null)
  const [category, setCategory] = useState('All Blogs')
  const currentUser = useAuth()

  const handleCategory = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  const compare = (a, b) => {
    let a_date = a.data().timestamp
    let b_date = b.data().timestamp
    if (a_date > b_date) {
      return -1
    }
    if (a_date < b_date) {
      return 1
    }
    return 0
  }

  async function deleteBlog(id) {
    const docRef = doc(db, `blogs/${id}`)
    await deleteDoc(docRef)
    updateUserData(currentUser, { blogs: user.blogs + 1 })
    toast.warn('Deleted blog', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setTimeout(()=> router.reload(), 2000)
  }

  useEffect(() => {
    async function getAllBlogs() {
      const docRef = collection(db, 'blogs')
      let q = null
      if (category == "My Blogs") {
        q = query(docRef, where("authorProfile", "==", currentUser.uid), limit(30))
      } else if (category == "All Blogs") {
        q = query(docRef, limit(30))
      } else {
        q = query(docRef, where("category", "==", category))
      }
      const docSnaps = await getDocs(q)
      let blogs = docSnaps.docs.sort(compare)
      setBlogs(blogs)
    }

    getAllBlogs()

  }, [category])


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
      <Header
        title="Rajshahi College Science Club"
        subtitle="Blogs"
        imageSubtitle="We work"
        imageTitle="Until we reach"
      />
      <div className='my-5'>
        <h1 className='text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500'>Blogs</h1>
      </div>
      {currentUser ?
        <div className='w-full flex justify-center content-center flex-row'>
          <Link href="/writeBlog">
            <button className="bg-gray-800 hover:bg-cyan-300 uppercase text-white font-semibold hover:scale-110 transition-all ease-in-out duration-100 shadow text-md lg:text-lg p-3 lg:p-5 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
            >
              Write blog
            </button>
          </Link>
        </div> : ''
      }
      <div className='w-full flex flex-row justify-around'>
        <SearchBlog handleCategory={handleCategory} category={category} />
      </div>
      {!blogs ?
        <div className='flex justify-center m-5'>
          <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
            <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
            </svg>
            Loading...
          </button>
        </div>

        : ''}
      <div className="flex m-1 md:m-5 flex-wrap">
        {
          blogs && blogs.map((i, index) => {
            const date = i.data().timestamp.toDate()
            const formatedDate = date.toString().slice(0, 15)

            return (
              <MiniBlog
                title={i.data().title}
                img={i.data().img}
                poster={i.data().author}
                category={i.data().category}
                authorProfile={i.data().authorProfile}
                uid={currentUser?.uid}
                date={formatedDate}
                key={index}
                link={i.id}
                deleteBlog={deleteBlog}
              />
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Blogs
