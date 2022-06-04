import React from 'react'
import Header from '../components/header/header'
import EventGallery from '../components/eventGallery'
import useWindowDimensions from '../components/useWindowDimensions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCube } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import '../styles/Cube.module.css'

function Gallery() {
  const { width, height } = useWindowDimensions()

  return (
    <div>

      {width > 1000 ?

        <Header
          title="Rajshahi College Science Club"
          subtitle="Gallery"
          imageSubtitle="We dream"
          imageTitle="We make our dream true"
        />

        :

        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">GALLERY</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Find memories 🥰</p>
        </div>
      }

      {
        width < 1000 ?

          <div>
            <div className="flex w-full mb-20 flex-wrap text-gray-400 bg-gray-900 body-font p-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Science Fest 2022</h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!</p>
            </div>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 10,
                shadowScale: 0.94,
              }}
              modules={[EffectCube, Autoplay]}
              autoHeight={true}
              autoplay={{ delay: 2000 }}
              speed={1000}
              loop={true}
              className="mySwiper"
            >
              {
                [...Array(13).keys()].map(i => {
                  return (
                    <SwiperSlide key={i}>
                      <img src={`./background-img/bg${i + 1}.jpg`} />
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
          </div>

          :

          <EventGallery
            title="Science Fest 2022"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
            img1="/background-img/bg6.jpg"
            img2="/background-img/bg4.jpg"
            img3="/background-img/bg2.jpg"
            img4="/background-img/bg1.jpg"
            img5="/background-img/bg8.jpg"
            img6="/background-img/bg3.jpg"
          />
      }


      <EventGallery
        title="Science Fest 2021"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        img1="/background-img/bg10.jpg"
        img2="/background-img/bg11.jpg"
        img3="/background-img/bg12.jpg"
        img4="/background-img/bg13.jpg"
        img5="/background-img/bg5.jpg"
        img6="/background-img/bg2.jpg"
      />
    </div>
  )
}

export default Gallery