import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';


const Profile = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [scale, setScale] = useState(0)

  if (scale == 0 && inView) {
    setScale(100)
  }
  return (
    <div className={`p-4 lg:w-1/2 transition ease-in-out duration-500 scale-${scale}`} ref={ref}>
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white">{props.name}</h2>
          <h3 className="text-gray-500 mb-3">{props.role}</h3>
          <p className="mb-4">{props.desc}</p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile