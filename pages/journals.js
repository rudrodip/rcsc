import React from 'react'
import Header from '../components/header/header'
import Blog from '../components/blog'

function Journals() {
  return (
    <div>
      <Header 
        title = "Science Club"
        subtitle = "Journals"
        imageSubtitle = "We work"
        imageTitle = "Until we reach"
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

      <div className="flex content-center justify-around m-10 flex-wrap">
        {/* {
          props.blogs.map(i => (
            <Blog
              title={i.title}
              desc={i.paragraphs[0] && `${i.paragraphs[0].content.substring(0, 40)}...`}
              img="https://dummyimage.com/600x300"
              poster={i.userId}
              category="Physics"
              date="12/12/2021"
              key={i._id}
              link={`/journals/${i._id}`}
            />
          )
          )
        } */}
      </div>
    </div>
  )
}

export default Journals