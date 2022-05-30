import React from 'react'
import Header from '../components/header/header'
import EventGallery from '../components/eventGallery'
import FullBlog from '../components/blog/fullBlog'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import useWindowDimensions from '../components/useWindowDimensions'


function Events() {
  const [blog, setBlog] = useState({})
  const [user, setUser] = useState(null)
  const [date, setDate] = useState()
  const { width, height } = useWindowDimensions()

  const uid = blog?.authorProfile

  useEffect(() => {
    async function getBlog() {
      const docRef = doc(db, `blogs/Science Fest 2022byvf5vRJ8JyqWbQKBRjMHaUScg63g2}`)
      const docSnaps = await getDoc(docRef)
      setBlog(docSnaps.data())
    }
    getBlog()

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

    const date = blog?.timestamp?.toDate()
    const formatedDate = date?.toString().slice(0, 15)
    setDate(formatedDate)

    uid && getUser(uid.trim())
  }, [uid])

  return (
    <div>
      {width > 1000 &&

        <Header
          title="Rajshahi College Science Club"
          subtitle="Events"
          imageSubtitle="_explore!"
          imageTitle="Science Fest 2022"
        />
      }

      <div className=" container px-5 py-4 lg:py-24 mx-auto flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">EVENTS</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos maxime qui ut cum veniam adipisci voluptas placeat ex consequuntur.</p>
      </div>

      <EventGallery
        title="Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        img1="/background-img/bg6.jpg"
        img2="/background-img/bg4.jpg"
        img3="/background-img/bg2.jpg"
        img4="/background-img/bg1.jpg"
        img5="/background-img/bg8.jpg"
        img6="/background-img/bg3.jpg"
      />

      {blog && user && <FullBlog blog={blog} url={`https://rcscienceclub.vercel.app/blogs`} userImg={user?.photoURL} author={user?.name} date={date} role={user?.role} />}
    </div>
  )
}

export default Events