import React from 'react'
import Header from '../components/header/header'
import Blog from '../components/blog'
import blog from '../models/blog'
import mongoose from 'mongoose'

function Journals(props) {
  return (
    <div>
      <Header
        subtitle='RC Science Club'
        title='Journals'
        img='https://dummyimage.com/600x300'
      />

      <div className="flex content-center justify-around m-10 flex-wrap">
        {
          props.blogs.map(i => (
            <Blog
              title={i.title}
              desc={i.paragraphs[0]}
              img="https://dummyimage.com/600x300"
              poster={i.userId}
              category="Physics"
              date="12/12/2021"
              key={i._id}
            />
          )
          )
        }
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let blogs = await blog.find()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Journals