import React from 'react'
import Header from '../components/header/header'
import AlumniProfile from '../components/profile/alumniProfile'
import { db } from '../src/config/firebase.config';
import { getDocs, doc, collection, query, orderBy, limit } from 'firebase/firestore'
import { useState, useEffect } from 'react';

const Alumni = () => {
  const [alumni, setAlumni] = useState(null)

  useEffect(() => {
    async function getAlumniCollection() {
      const docRef = collection(db, 'alumnus')
      const q = query(docRef, limit(3))
      const docSnaps = await getDocs(q)
      setAlumni(docSnaps.docs.reverse())
    }
    getAlumniCollection()
  }, [])

  return (
    <div>
      <Header
        title="Rajshahi College Science Club"
        subtitle="Alumni"
        imageSubtitle="We explore"
        imageTitle="We let others explore! 🔍"
      />

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">Title goes here</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos maxime qui ut cum veniam adipisci voluptas placeat ex consequuntur.</p>
          </div>
          {!alumni ?
            <div className='w-full flex justify-center p-5'>
              <p className="lg:w-2/3 text-center text-md">Loading...</p>
            </div>

            : ''}
          {
            alumni && alumni.map(year => {
              return (
                <div key={year.id} className="mb-20">
                  <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">{year.id}</h1>
                  <div className="flex flex-wrap -m-4">
                    {
                      Object.keys(year.data()).map((i, index) => {
                        return (
                          <AlumniProfile
                            name={year.data()[i].name}
                            role={year.data()[i].role}
                            batch={year.data()[i].batch}
                            institution={year.data()[i].institution}
                            number={year.data()[i].phone}
                            mail={year.data()[i].mail}
                            img="https://dummyimage.com/200x200"
                            key={index}
                          />
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section >
    </div >
  )
}

export default Alumni