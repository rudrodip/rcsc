import React from 'react'
import Head from 'next/head'
import Header from '../components/header/header'
import EventGallery from '../components/eventGallery'
import useWindowDimensions from '../components/useWindowDimensions'

function Gallery() {
  const { width, height } = useWindowDimensions()

  return (
    <div>

      <Head>
        <title>RCSC</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/gallery" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Gallery"
        />
        <meta
          property="og:description"
          content="Memories of Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

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