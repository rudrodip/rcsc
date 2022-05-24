import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const TeachersProfile = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(1)
  }
  return (
    <div className={`p-4 w-1/2 lg:w-1/3 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}>
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img} />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white">{props.name}</h2>
          <p className="mb-1">{props.role}</p>
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeachersProfile
