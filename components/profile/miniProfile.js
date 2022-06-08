import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link'

const Profile = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(1)
  }
  return (
    <Link href={props.link ? props.link : "#"}>
      <div className='p-4 w-1/2 transition ease-in-out duration-500 scale-0 cursor-pointer' ref={ref} style={{ transform: `scale(${scale})` }}>
        <div className="h-full flex sm:flex-row flex-col items-center justify-center text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-auto object-cover object-center sm:mb-0 mb-4" src={props.img ? props.img : "https://dummyimage.com/200x200"} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white text-center md:text-left">{props.name}</h2>
            <h3 className="text-gray-500 mb-3">{props.role}</h3>
            <p className="mb-4">{props.desc}</p>
            <span className="inline-flex">

            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Profile