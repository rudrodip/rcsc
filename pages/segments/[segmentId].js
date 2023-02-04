import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import Image from 'next/image';

const EventDetails = () => {
    const router = useRouter()
    const [segment, setSegment] = useState(null)
    const { segmentId } = router.query

    useEffect(() => {
        const docRef = doc(db, `segments/${segmentId}`)
        getDoc(docRef).then(
            doc => setSegment(doc.data())
        ).catch(err => console.log(err))
    }, [segmentId])


    return (
        <div>
            <Head>
                <title>RCSC - {segment?.title}</title>
                <meta name="description" content="Event details" />
                <meta property="og:url" content={`https://rcsc.vercel.app/segments/${segmentId}`} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={segment?.title}
                />
                <meta
                    property="og:description"
                    content={`Details about ${segment?.title}`}
                />
                <meta property="og:image" content={segment?.img || 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                <link rel="icon" href="/logo/rcsc-logo.png" />
            </Head>
            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="Segment" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={segment?.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">SEGMENT</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{segment?.title}</h1>
                            <div className="flex mb-4">
                            </div>
                            <p className="leading-relaxed">{segment?.desc}</p>
                            <button className='btn btn-info'>Register</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default EventDetails
