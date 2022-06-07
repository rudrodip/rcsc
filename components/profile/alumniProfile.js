// this component shows the alumni


// necessary dependencies
import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useRouter } from 'next/router'


const AlumniProfile = (props) => {
  // props properties -> img > name > role > batch > institution > phone > email
  const router = useRouter()
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(1)
  }

  const handleClick = (id) => {
    router.push(`user/${id}`)
  }
  return (
    <div
      className={`cursor-pointer p-4 w-1/2 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}
      onClick={() => handleClick(props?.link)}
    >
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left">
        <img alt="Alumni" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img} />
        <div className="flex-grow sm:pl-8">
          <h2 className="font-medium text-lg text-white text-center lg:text-left">{props.name}</h2>
          <div className='text-sm lg:text-lg'>
            <p className="mb-1">{props.role}</p>
            <p className="mb-1">Batch: {props.batch}</p>
            <p className="mb-1">Current Institution: {props.institution}</p>
            <p className="mb-1">Phone: {props.number}</p>
            <p className="mb-1">Email: {props.mail}</p>
          </div>
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>
  )
}

export default AlumniProfile