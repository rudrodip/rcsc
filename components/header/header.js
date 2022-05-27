// it is rendered in almost every page as a header


// import necessary dependencies
import React from 'react'
import { useState, useEffect, useRef } from 'react'

// the main component
function Header(props) {
  // props has 4 properties
  // -> 1. title 2. subTitle (Rendered in the left)
  // -> 1. imageTitle 2. imageSubtitle (Rendered in the right)


  const [index, setIndex] = useState(Math.floor(Math.random() * 13) + 1)
  const timeoutRef = useRef(null)

  // reset timeout function
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }


  // useEffect for the timeout function
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
    <div className='flex' style={{ height: '70vh' }}>
      <img src={`./background-img/bg${index}.jpg`} className='w-full object-cover opacity-60 blur-[1px]' />
      <div className='flex-col md:flex-row'>
        <div className="flex flex-col flex-wrap xl:w-1/3 items-start overflow-hidden absolute left-4 lg:left-48 translate-y-48">
          <h1 className="my-2 text-2xl md:text-4xl text-white font-bold leading-tight text-left">
            {props.subtitle}
          </h1>
          <br></br>
          <span className="font-bold text-4xl tall:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-600">
            {props.title}
          </span>

        </div>
        <div className='p-2 left-4 lg:right-4 lg:translate-y-48 absolute overflow-hidden items-start'>
          <h1 className="my-2 text-xl md:text-4xl text-white opacity-75 font-bold leading-tight text-left md:text-right">
            {props.imageSubtitle}
            <br></br>
            <span className="text-xl md:text-5xl">
              {props.imageTitle}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}


export default Header

// structure -> image -> (subTitle, title) -> (imageSubtitle, imageTitle)