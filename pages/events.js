import React from 'react'
import Header from '../components/header/header'
import EventGallery from '../components/eventGallery'
import FullBlog from '../components/blog/fullBlog'
import { useEffect } from 'react'
import { useState } from 'react'

function Events() {
  const [journal, setJournal] = useState({})

  return (
    <div>
      <Header
        title="Rajshahi College Science Club"
        subtitle="Events"
        imageSubtitle="_explore!"
        imageTitle="Science Fest 2022"
      />
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

      <FullBlog journal={journal} />
    </div>
  )
}

export default Events