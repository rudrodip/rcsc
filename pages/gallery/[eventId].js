import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EventGallery from '../../components/gallery/eventGallery'
import { db, storage } from '../../src/config/firebase.config';
import { getDoc, doc } from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Event = () => {
	const router = useRouter()
	const [event, setEvent] = useState({})
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)
	const { eventId } = router.query

	useEffect(() => {
		const docRef = doc(db, `events/${eventId}`);
		const listRef = ref(storage, `events/${eventId}`);

		getDoc(docRef).then((doc) => setEvent(doc.data()))
		listAll(listRef).then(
			result => result.items.forEach(imgRef =>
				getDownloadURL(imgRef).then(url => {
					let photoObj = {
						src: url,
						width: 16,
						height: 9
					}
					images.push(photoObj)
				}
				)
			)
		)
		setLoading(false)
	}, [eventId])

	if (!loading) {
		return (
			<div>
				<Head>
					<title>RCSC - {event?.basic_info?.main_title}</title>
					<meta name="description" content="Event gallery" />
					<meta property="og:url" content={`https://rcsc.vercel.app/gallery/${eventId}`} />
					<meta property="og:type" content="Science Club" />
					<meta
						property="og:title"
						content={event?.basic_info?.main_title}
					/>
					<meta
						property="og:description"
						content={`Glimpse of ${event?.basic_info?.main_title}`}
					/>
					<meta property="og:image" content={event?.basic_info?.featuredImage || 'https://scontent.frjh1-1.fna.fbcdn.net/v/t1.6435-9/116879071_2269908906479017_7298844159314812082_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gwaeup2kg5oAX9pY3Hz&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAUPnHUf9kVRGo--FWLE5R4MpylxIwPus348b2QErLVPg&oe=63E9D41E'} />
					<link rel="icon" href="/logo/rcsc-logo.png" />
				</Head>

				{images.length ?
					<EventGallery
						title={event?.basic_info?.main_title}
						desc={event?.basic_info?.desc}
						images={images}
					/> : ''
				}
			</div>
		)
	} else {
		return (
			<div className='flex justify-center m-5'>
				<button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
					<svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
					</svg>
					Loading...
				</button>
			</div>
		)
	}
}

export default Event
