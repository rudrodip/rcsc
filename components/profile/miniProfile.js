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
    <div className='p-2 lg:p-4 w-1/2 transition ease-in-out duration-500 scale-0' ref={ref} style={{ transform: `scale(${scale})` }}>
      <div className="h-full flex flex-col lg:flex-row items-center justify-center text-left">
        <Link legacyBehavior href={props.link ? props.link : "#"}>
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 lg:mb-0 cursor-pointer" src={props.img ? props.img : "https://dummyimage.com/200x200"} />
        </Link>
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white text-center md:text-left">{props.name}</h2>
          <h3 className="mb-3 md:text-left text-center text-blue-500 break-word">{props.role}</h3>
          <p className="mb-4 md:text-left text-center break-word">{props.desc}</p>
          <p className="mb-1 break-word">Batch: {props.batch}</p>
          <p className="mb-1 break-word"><span className='text-imp-text-2'>{props.institution}</span></p>
          <p className="mb-1 break-all">Phone: <a href={`tel:${props.number}`} >{props.number}</a></p>
          <p className="mb-1 break-all">Email: <a href={`mailto:${props.mail}`} >{props.mail}</a></p>
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>

  )
}

export default Profile