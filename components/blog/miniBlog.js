import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const MiniBlog = (props) => {
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
        <div className={`p-4 w-full lg:w-1/2 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}>

                <button
                onClick={()=> handleClick(props?.link)}>

                <div className="h-full flex sm:flex-row flex-col items-center justify-center text-left cursor-pointer">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img ? props.img : "https://dummyimage.com/200x200"} />
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-white text-left">{props.poster}</h2>
                        <h2 className="title-font font-medium text-lg text-white text-left">{props.title}</h2>
                        <h3 className="text-gray-500 mb-3">{props.category}</h3>
                        <p className="mb-4">{props.date}</p>
                        <span className="inline-flex">

                        </span>
                    </div>
                </div>
                </button>


        </div>
    )
}

export default MiniBlog
