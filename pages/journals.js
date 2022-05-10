import React from 'react'
import Header from '../components/header/header'
import Blog from '../components/blog'

function Journals() {
  return (
    <div>
      <Header
        subtitle='RC Science Club'
        title='Journals'
        img='https://dummyimage.com/600x300'
      />
      <div className="flex content-center justify-around m-10 flex-wrap"> 
        <Blog 
          title="Blog title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="https://dummyimage.com/600x300"
          poster="Name"
          catagory="Physics"
          date="12/12/2021"
        />
        <Blog 
          title="Blog title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="https://dummyimage.com/600x300"
          poster="Name"
          catagory="Physics"
          date="12/12/2021"
        />
        <Blog 
          title="Blog title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="https://dummyimage.com/600x300"
          poster="Name"
          catagory="Physics"
          date="12/12/2021"
        />
        <Blog 
          title="Blog title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="https://dummyimage.com/600x300"
          poster="Name"
          catagory="Physics"
          date="12/12/2021"
        />
        <Blog 
          title="Blog title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="https://dummyimage.com/600x300"
          poster="Name"
          catagory="Physics"
          date="12/12/2021"
        />
      </div>
    </div>
  )
}

export default Journals