// this component shows the alumni


// necessary dependencies
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'

const AlumniProfile = (props) => {
  // props properties -> img > name > role > batch > institution > phone > email
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(1)
  }
  return (
    <div
      className={`p-4 w-1/2 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}
    >
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left">
        <Link legacyBehavior href={props.link ? props.link : "#"}>
          <img alt="team" className="flex-shrink-0 rounded-lg w-36 h-36 md:w-48 md:h-48 object-cover object-center mb-4 lg:mb-0 cursor-pointer" src={props.img} />
        </Link>
        <div className="flex-grow sm:pl-8">
          <h2 className="font-medium text-lg text-white text-center lg:text-left">{props.name}</h2>
          <div className='text-sm lg:text-lg'>
            <p className="mb-1">{props.role}</p>
            <p className="mb-1">Batch: {props.batch}</p>
            <p className="mb-1">Current Institution: <span className='text-imp-text-2'>{props.institution}</span></p>
            <p className="mb-1">Phone: <a href={`tel:+880${props.number}`} >{props.number}</a></p>
            <p className="mb-1">Email: <a href={`mailto:${props.mail}`} >{props.mail}</a></p>
          </div>
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>
  )
}

export default AlumniProfile