import React from 'react'
import Header from '../components/header/header'

function Events() {
  return (
    <div>
      <Header 
        title = "Science Club"
        subtitle = "Events"
        imageSubtitle = "We dream"
        imageTitle = "We make our dream true"
        img = {
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
    </div>
  )
}

export default Events