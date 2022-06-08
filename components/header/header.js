// it is rendered in almost every page as a header


// import necessary dependencies
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import useDimension from '../useWindowDimensions'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

// the main component
function Header(props) {
  // props has 4 properties
  // -> 1. title 2. subTitle (Rendered in the left)
  // -> 1. imageTitle 2. imageSubtitle (Rendered in the right)

  const { width, height } = useDimension()

  return (
    <div className='flex h-[100vh] md:h-[75vh]'>
      <div className='flex w-full justify-between items-start md:items-center flex-col md:flex-row' style={{ position: "absolute", zIndex: "25" }}>

        <div className="xl:w-1/3 overflow-hidden md:p-5 md:m-5 p-0 m-3">
          <h1 className="my-2 text-2xl md:text-4xl text-white font-bold leading-tight text-left">
            {props.subtitle}
          </h1>
          <br></br>
          <span className="font-bold text-[5vh] lg:text-[9vh] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-600">
            {props.title}
          </span>
        </div>

        <div className='xl:w-1/3 overflow-hidden md:p-5 md:m-5 p-0 m-3'>
          <h1 className="my-2 text-2xl md:text-4xl text-white font-bold leading-tight text-left md:text-right">
            {props.imageSubtitle}
            <br></br>
            <span className="text-xl md:text-5xl">
              {props.imageTitle}
            </span>
          </h1>
        </div>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        speed={1000}
        loop={true}
      >
        {
          [...Array(13).keys()].map(i => {
            return (
              <SwiperSlide style={{ width: '100%', height: '100%' }} key={i}>
                <Image
                  src={`/background-img/bg${i + 1}.jpg`}
                  alt="image"
                  width={width}
                  height={width < 1024 ? height : height / 1.4}
                  objectFit='cover'
                  style={{ opacity: "0.7" }}
                  loading='lazy'
                />
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}


export default Header

// structure -> image -> (subTitle, title) -> (imageSubtitle, imageTitle)