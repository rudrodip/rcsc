import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link'

const RouteCard = ({ link, name, img, desc, props }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const [scale, setScale] = useState(0)

    if (scale == 0 && inView) {
        setScale(1)
    }
    return (

        <div className='p-4 w-1/2 transition ease-in-out duration-500 scale-0' ref={ref} style={{ transform: `scale(${scale})` }}>
            <div className="h-full flex flex-col lg:flex-row items-center justify-center text-left">
                <Link legacyBehavior href={link ? link : "#"}>
                    <img alt="team" className="flex-shrink-0 rounded-lg w-36 h-36 md:w-48 md:h-48 object-cover object-center mb-4 lg:mb-0 cursor-pointer" src={img ? img : "https://dummyimage.com/200x200"} />
                </Link>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white text-center md:text-left break-word">{name}</h2>
                    <p className="mb-4 md:text-left text-center break-all">{desc}</p>
                    {
                        props && Object.keys(props).map((prop, key) => {
                            return (
                                <p className="mb-4 text-left break-all" key={key}>
                                    <span className='font-bold'>
                                        {prop}:
                                    </span>
                                    {props[prop]}
                                </p>
                            )
                        })
                    }
                    <span className="inline-flex">
                    </span>
                </div>
            </div>
        </div>

    )
}

export default RouteCard