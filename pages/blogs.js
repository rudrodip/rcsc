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
      setBlogs(docSnaps.docs)
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
            <button className="bg-gray-800 hover:bg-cyan-300 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow text-lg px-5 py-5 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
            >
              Write blog
            </button>
          </Link>
        </div> : ''

      }
      <div className="flex content-center justify-around m-5 flex-wrap">
        {
          blogs && blogs.map((i, index) => {
            return (
              <MiniBlog
                title={i.data().title}
                img={i.data().img}
                poster={i.data().author}
                category={i.data().category}
                date="12/12/2021"
                key={index}
                link={`/journals/${i.id}`}
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