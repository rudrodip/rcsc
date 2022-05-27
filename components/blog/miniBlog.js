// this component is used to show Blog posts in blog page


// importing necessary dependencies
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useRouter } from 'next/router';


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
            <button
                onClick={() => handleClick(props?.link)}>

                <div className="h-full flex flex-col md:flex-row text-left cursor-pointer">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img ? props.img : "https://dummyimage.com/200x200"} />
                    <div className="flex-grow pl-5 sm:pt-5">
                        <h2 className="title-font font-medium text-xl text-cyan-300 text-left">{props.title}</h2>
                        <h2 className="title-font font-medium text-md text-gray-300 text-left">{props.poster}</h2>
                        <h3 className="text-gray-500 mb-3">{props.category}</h3>
                        <p className="mb-4 text-gray-300">{props.date}</p>
                        <span className="inline-flex">

                        </span>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default MiniBlog


// structure of this component

// Image -> Title -> Poster -> Category -> Date