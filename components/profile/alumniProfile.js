import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const AlumniProfile = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(1)
  }
  return (
    <div className={`p-4 w-1/2 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}>
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img} />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white text-center lg:text-left">{props.name}</h2>
          <p className="mb-1">{props.role}</p>
          <p className="mb-1">{props.batch}</p>
          <p className="mb-1">Current Institution: {props.institution}</p>
          <p className="mb-1">Phone: {props.number}</p>
          <p className="mb-1">Email: {props.mail}</p>
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>
  )
}

export default AlumniProfile