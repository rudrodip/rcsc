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
    <div className='flex flex-row justify-around content-center tracking-wide' style={{height: 500}}>
      <div className="container pt-4 md:pt-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-1/3 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-2 text-3xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            {props.subtitle}
            <br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-6xl">
              {props.title}
            </span>
          </h1>
        </div>
        <div className="h-full w-2/3 bg-no-repeat bg-center bg-cover opacity-70" style={{ backgroundImage: `url(${props.img[index].url})` }}>
          <div className='h-full p-10 flex flex-col'>
            <h1 className="my-2 text-3xl md:text-4xl text-black opacity-75 font-bold leading-tight text-center md:text-left">
              {props.imageSubtitle}
              <br></br>
              <span className="text-5xl">
                {props.imageTitle}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header