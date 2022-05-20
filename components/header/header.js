import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Header(props) {
  const [index, setIndex] = useState(0)
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
        setIndex((prevIndex) => prevIndex === props.img.length - 1 ? 0 : prevIndex + 1),
      2000
    )

    return () => resetTimeout()
  }, [index, props.img.length])

  return (
    <div className='flex flex-row justify-around w-full overflow-hidden' style={{height: 650}}>
        <img src={props.img[index].url} className='w-full object-cover opacity-60'/>
      <div className="flex flex-col w-full xl:w-1/3 justify-center lg:items-start overflow-y-hidden absolute left-48 translate-y-48">
          <h1 className="my-2 text-3xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            {props.subtitle}
            <br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-600 text-8xl">
              {props.title}
            </span>
          </h1>
        </div>
        <div className='h-full p-10 flex flex-col absolute right-0 translate-y-48'>
            <h1 className="my-2 text-3xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              {props.imageSubtitle}
              <br></br>
              <span className="text-5xl">
                {props.imageTitle}
              </span>
            </h1>
          </div>
    </div>
  )
}


export default Header