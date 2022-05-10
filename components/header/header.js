import React from 'react'
import ImageStyle from '../../styles/imagestyle.module.css'

function Header(props) {
  const img_url =  props.img
  return (
    <div className='flex flex-row justify-around content-center m-5 tracking-wide'>
      <div className='flex flex-col text-5xl content-center justify-center'>
        <div className={`p-2 m-2 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-white to-purple-400`}>{props.subtitle}</div>
        <div className={`p-2 m-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500`}>{props.title}</div>
      </div>
      <img className="w-1/2" src={img_url} alt="Sunset in the mountains"/>
    </div>
  )
}

export default Header