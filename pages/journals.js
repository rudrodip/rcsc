import React from 'react'
import Header from '../components/header/header'
import MiniBlog from '../components/blog/miniBlog'

function Journals() {
  return (
    <div>
      <Header 
        title = "Rajshahi College Science Club"
        subtitle = "Blogs"
        imageSubtitle = "We work"
        imageTitle = "Until we reach"
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