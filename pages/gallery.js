import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import EventCard from '../components/gallery/eventCard'

function GalleryPage() {
  const router = useRouter()
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
      <EventCard
        title="5th Rajshahi College Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        photos={[
          './events/5thRCSF/bg1.jpg',
          './events/5thRCSF/bg2.jpg',
          './events/5thRCSF/bg3.jpg',
          './events/5thRCSF/bg4.jpg',
          './events/5thRCSF/bg5.jpg',
          './events/5thRCSF/bg6.jpg']
        }
        router={router}
        url={'/gallery/5th%20RCSF'}
      />

      <EventCard
        title="5th Rajshahi College Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        photos={[
          './events/5thRCSF/bg1.jpg',
          './events/5thRCSF/bg2.jpg',
          './events/5thRCSF/bg3.jpg',
          './events/5thRCSF/bg4.jpg',
          './events/5thRCSF/bg5.jpg',
          './events/5thRCSF/bg6.jpg']
        }
        router={router}
        url={'/gallery/5th%20RCSF'}
      />

      <EventCard
        title="5th Rajshahi College Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        photos={[
          './events/5thRCSF/bg1.jpg',
          './events/5thRCSF/bg2.jpg',
          './events/5thRCSF/bg3.jpg',
          './events/5thRCSF/bg4.jpg',
          './events/5thRCSF/bg5.jpg',
          './events/5thRCSF/bg6.jpg']
        }
        router={router}
        url={'/gallery/5th%20RCSF'}
      />

      <EventCard
        title="5th Rajshahi College Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        photos={[
          './events/5thRCSF/bg1.jpg',
          './events/5thRCSF/bg2.jpg',
          './events/5thRCSF/bg3.jpg',
          './events/5thRCSF/bg4.jpg',
          './events/5thRCSF/bg5.jpg',
          './events/5thRCSF/bg6.jpg']
        }
        router={router}
        url={'/gallery/5th%20RCSF'}
      />
    </div>
  )
}

export default GalleryPage