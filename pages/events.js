import React from 'react'
import Header from '../components/header/header'
import EventGallery from '../components/eventGallery'
import FullBlog from '../components/fullBlog'
import { useEffect } from 'react'
import { useState } from 'react'

function Events() {
  const [journal, setJournal] = useState({})

  return (
    <div>
      <Header
        title="Science Club"
        subtitle="Events"
        imageSubtitle="_explore!"
        imageTitle="Science Fest 2022"
        img={
          [
            {
              url: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              caption: 'Slide 1'
            },
            {
              url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              caption: 'Slide 2'
            },
            {
              url: 'https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              caption: 'Slide 3'
            }
          ]
        }
      />
      <EventGallery
        title="Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        img1="https://dummyimage.com/500x300"
        img2="https://dummyimage.com/600x300"
        img3="https://dummyimage.com/500x300"
        img4="https://dummyimage.com/700x300"
        img5="https://dummyimage.com/600x300"
        img6="https://dummyimage.com/500x300"
      />

      <FullBlog journal={journal} />
    </div>
  )
}

export default Events