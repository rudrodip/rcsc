// this is a component to render a full blog post

// importing necessary dependencies
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from '../../src/config/firebase.config';
import { doc, updateDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import RichTextEditor from '../RichText';

const warningToastConfig = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const successToastConfig = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

// the component gets all necessary props

const FullBlog = ({ blog, userImg, date, author, url, role, editable }) => {
  // Description of the props  ---->>>

  // blog -> is the main blog post
  // userImg -> author's profile picture
  // date -> date of the blog posted in
  // author -> author name
  // url -> url of this blog post [used in share button]
  // role -> role of the poster

  const [blogText, setBlogText] = useState("")
  const [blogImg, setBlogImg] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [loading, setLoading] = useState(false)

  const editHandler = () => {
    if (editMode) setEditMode(!editMode)
    if (!editMode) {
      setEditMode(!editMode)
      setLoading(true)

      const docRef = doc(db, `blogs/${blog?.title}by${blog?.authorProfile}`)
      try{
        updateDoc(docRef, {
          text: blogText
        })
        toast('Edited', successToastConfig)
      } catch (error) {
        toast.warn('Error', warningToastConfig)
        console.log(error)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    blog.img
      ? setBlogImg(blog.img)
      : setBlogImg(
        "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    blog?.text && setBlogText(blog?.text)
  }, [blog.img, blog?.text]);

  return (
    <div>
      <div className="container px-6 mx-auto text-center">
        <div className="flex justify-center mt-10">
          <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src={blogImg} />
        </div>
        <div className="w-20 h-20 inline-flex items-center justify-center text-gray-600 cursor-pointer">
          <Link href={`/user/${blog?.authorProfile}`}>
            <div className="p-4 md:p-6 text-center lg:text-left">
              <div
                className="block rounded-full shadow-xl mx-auto -mt-16 h-36 w-36 bg-cover bg-center hover:scale-105 transition ease-in-out duration-100"
                style={{ backgroundImage: `url('${userImg}` }}
              ></div>
            </div>
          </Link>
        </div>
      </div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="w-full container px-4 pb-6 mx-auto flex flex-col">
          <div className="lg:w-full">
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font text-white text-bold text-lg">
                    {author}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded m-2"></div>
                  <p className="text-base text-cyan-300 font-bold">{role}</p>
                  <p className="mb-5 text-gray-300">{`Category: ${blog?.category}, Published: ${date}`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
            <h2 className="font-bold title-font mt-4 text-white text-2xl mb-5">
              {blog?.title}
            </h2>
            {
              blog?.text && <RichTextEditor
                value={blogText}
                onChange={setBlogText}
                id="rte"
                controls={[
                  ['bold', 'italic', 'underline', 'link'],
                  ['unorderedList', 'h1', 'h2', 'h3', 'h4'],
                  ['sup', 'sub'],
                  ['code', 'codeBlock'],
                  ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
                stickyOffset={70}
                className='bg-gray-800 text-white border-0'
                readOnly={editMode}
              />
            }

            {editable &&
              <button className="btn btn-info mt-4" disabled={loading} onClick={editHandler}>{editMode ? 'Edit' : 'Save'}</button>
            }
            <div id="fb-root"></div>
            <div
              className="fb-share-button"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-layout="button"
              data-size="small"
            >
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                className="fb-xfbml-parse-ignore text-indigo-400 hover:bg-cyan-400 hover:text-black hover:scale-110 inline-flex items-center rounded-sm p-2 transition ease-in-out duration-150"
                rel="noreferrer"
              >
                Share
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"
        nonce="E58tXvTF"
      ></script>
    </div>
  );
};

export default FullBlog;

// structure of the component ->

// Blog Main Image
// Author Profile image [with link added]
// Loading indicator
// Author's Description
// Main Blog
// Share button
