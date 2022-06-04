// this component is used to show Blog posts in blog page


// importing necessary dependencies
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { db } from '../../src/config/firebase.config'
import { getDoc, doc } from 'firebase/firestore'


// here's the main component
const MiniBlog = (props) => {
    // props property -->
    // poster -> title -> date -> img

    const router = useRouter()
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const [scale, setScale] = useState(0)

    if (scale == 0 && inView) {
        setScale(1)
    }
    const handleClick = (id) => {
        router.push(`${router.pathname}/${id}`)
    }
    return (
        <div className={`p-1 sm:p-4 w-1/2 xl:w-1/3 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}>
            <button>
                <div className="h-full flex flex-col md:flex-row text-left">
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 cursor-pointer"
                        src={props.img ? props.img : "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        onClick={() => handleClick(props?.link)}
                    />
                    <div className="flex flex-col pl-5 sm:pt-5">
                        <h2 className="title-font font-medium text-xl text-cyan-300 text-left">{props.title}</h2>
                        <h2 className="title-font font-medium text-md text-gray-300 text-left">{props.poster}</h2>
                        <h3 className="text-gray-500 mb-3">{props.category}</h3>
                        <p className="mb-4 text-gray-300">{props.date}</p>
                        <span className="inline-flex">
                        </span>

                        {props?.authorProfile == props?.uid &&
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                className='fill-gray-300 transition ease-in-out duration-150 hover:scale-125 hover:fill-red-500 mb-4'
                                onClick={() => props.deleteBlog(props?.link)}
                            >
                                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                            </svg>
                        }
                    </div>
                </div>
            </button>
        </div>
    )
}

export default MiniBlog


// structure of this component

// Image -> Title -> Poster -> Category -> Date