import React from 'react'
import Head from 'next/head'
import EventGallery from '../components/eventGallery'

function GalleryPage() {
  return (
    <div>
      <Head>
        <title>RCSC - Gallery</title>
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

      <EventGallery
        title="Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        images={photos}
      />

      <EventGallery
        title="Science Fest 2021"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        images={photos}
      />

      <EventGallery
        title="Science Fest 2021"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        images={photos}
      />
    </div>
  )
}

const photos = [
  {
    src: "/background-img/bg1.jpg",
    width: 16,
    height: 9
  },
  {
    src: "/background-img/bg2.jpg",
    width: 16,
    height: 9
  },
  {
    src: "/background-img/bg3.jpg",
    width: 16,
    height: 9
  },
  {
    src: "/background-img/bg4.jpg",
    width: 16,
    height: 9
  },
  {
    src: "/background-img/bg5.jpg",
    width: 16,
    height: 9
  },
  {
    src: "/background-img/bg6.jpg",
    width: 16,
    height: 9
  }
]

export default GalleryPage