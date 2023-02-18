import React from 'react'
import Head from 'next/head'
import EditBlog from '../components/blog/editBlog'

const WriteBlog = () => {
  return (
    <div className='m-1 p-1 lg:m-5 lg:p-10'>
      <Head>
        <title>RCSC - Writeblog</title>
      </Head>
    <EditBlog />
    </div>
  )
}

export default WriteBlog