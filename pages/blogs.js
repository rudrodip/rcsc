import React from 'react'
import Header from '../components/header/header'
import MiniBlog from '../components/blog/miniBlog'
import { db, useAuth } from '../src/config/firebase.config';
import { getDocs, doc, collection, query, orderBy, limit } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Link from 'next/link'

function Blogs() {
  const [blogs, setBlogs] = useState(null)
  const currentUser = useAuth()
  

  useEffect(() => {
    async function getAllBlogs() {
      const docRef = collection(db, 'blogs')
      const q = query(docRef, limit(30))
      const docSnaps = await getDocs(q)
      setBlogs(docSnaps.docs.reverse())
    }
    getAllBlogs()
  }, [])

  return (
    <div>
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
      {!blogs ?
        <div className='w-full flex justify-center p-5'>
          <p className="lg:w-2/3 text-center text-md">Loading...</p>
        </div>

        : ''}
      <div className="flex content-center justify-around m-5 flex-wrap">
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
                date={formatedDate}
                key={index}
                link={i.id}
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
