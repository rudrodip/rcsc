import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Header(props) {
  const [index, setIndex] = useState(Math.floor(Math.random() * 13) + 1)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => prevIndex === 13 ? 1 : prevIndex + 1),
      2500
    )
    return () => resetTimeout()
  }, [index])

  return (
    <div className='flex flex-row justify-around w-fullflex-wrap' style={{ height: 650 }}>
      <img src={`./background-img/bg${index}.jpg`} className='w-full object-cover opacity-60 blur-[1px]' />
      <div className='hidden lg:block'>
        <div className="flex flex-col flex-wrap w-full xl:w-1/3 justify-center lg:items-start overflow-hidden absolute left-48 translate-y-48">
          <h1 className="my-2 text-3xl md:text-4xl text-white font-bold leading-tight text-center md:text-left">
            {props.subtitle}
            <br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-600 text-8xl">
              {props.title}
            </span>
          </h1>
        </div>
        <div className='p-10 flex flex-col flex-wrap right-0 translate-y-48 absolute overflow-hidden'>
          <h1 className="my-2 text-3xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            {props.imageSubtitle}
            <br></br>
            <span className="text-5xl">
              {props.imageTitle}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}


export default Header