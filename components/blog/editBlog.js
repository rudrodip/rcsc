import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { FileInputButton } from '../fileInput'
import Categories from '../../public/jsons/categories.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { db, storage } from '../../src/config/firebase.config';
import { useRouter } from 'next/dist/client/router';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
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

const EditBlog = (props) => {
  const { user, userInfo } = useAuth()
  const router = useRouter()
  const [title, setTitle] = useState(props.title || '')
  const [category, setCategory] = useState(props.category || 'All Blogs')
  const [image, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState(props.imageUrl || null)
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [text, onTextChange] = useState(props.text || '');

  const validate = () => {
    let isValidated = true
    if (text.length < 40) isValidated = false
    return isValidated
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleChange = (e) => {
    if (e.target.name == 'title') {
      setTitle(e.target.value)
    }
  }

  const handleCategory = (e) => {
    e.preventDefault()
    handleToggle()
    setCategory(e.target.value)
  }

  const onChange = async (image) => {
    if (image.size > 2097152) {
      toast.warn('File size should be less than 2 MB', warningToastConfig)
    } else {
      setImage(image)
    }
  }

  const addBlog = async () => {
    if (!validate()) return false
    setLoading(true)
    try {
      const data = {
        author: userInfo.name,
        authorProfile: user.uid,
        category: category,
        title: title,
        text: text,
        views: 0,
        timestamp: serverTimestamp(),
        approved: false
      }
      const blogref = doc(db, `blogs/${title}by${user.uid}`)
      const blogImgRef = ref(storage, `blogImg/${title}by${user.uid}`)
      const metadata = {
        contentType: 'image/jpeg',
      }
      if (image) {
        const snapshot = await uploadBytes(blogImgRef, image, metadata)
        let photoURL = await getDownloadURL(blogImgRef)
        data["img"] = photoURL
      }

      setDoc(blogref, data)
      toast('Uploaded, Wait for approval 😊', successToastConfig)
      setTimeout(() => router.push('/blogs'), 2500)
      setLoading(false)

    } catch (error) {
      toast.warn('Error while uploading', warningToastConfig)
    }
  }

  if (!user) return ''
  return (
    <div className='m-1 p-1 lg:m-5 lg:p-10'>
      <Head>
        <title>RCSC - Writeblog</title>
      </Head>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />

      <div className='mb-0 lg:mb-16'>
        <h1 className="text-4xl font-medium title-font mb-4 text-white tracking-widest text-left">Write blog 📃</h1>
      </div>
      <div>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-600 appearance-none rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none"
                id="inline-full-name"
                name="title"
                type="text"
                placeholder='title'
                value={title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex justify-end m-5'>
            <div className="relative inline-block text-left z-30">
              <div>
                <button
                  type="button"
                  className="flex justify-end rounded-md border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-500 outline-none"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  {category}
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div
                className={`category origin-top-right ${toggle ? 'absolute' : 'hidden'} right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto`} role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1">
                <div className="py-1 h-48" role="none">
                  {Object.keys(Categories).map(i => {
                    return (
                      i != "My Blogs" && <div key={i}>
                        <button
                          className="w-full text-gray-100 text-left block px-4 py-2 text-sm hover:bg-gray-400"
                          name="category"
                          onClick={handleCategory}
                          value={Categories[i]}
                        >
                          {Categories[i]}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {
            imageUrl &&
            <div>
              <label htmlFor="oreview_img" className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Previous Image</label>
              <img src={imageUrl} className='p-2 lg:p-5 m-2 lg:m-3' id='preview_img' />
            </div>
          }
          {
            image &&
            <div>
              <label htmlFor="oreview_img" className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Preview</label>
              <img src={image && URL.createObjectURL(image)} className='p-2 lg:p-5 m-2 lg:m-3' id='preview_img' />
            </div>
          }
        </form>

        <div className='ml-0 lg:ml-32 flex flex-row'>
          <FileInputButton
            label="Add image"
            uploadFileName="theFiles"
            onChange={onChange}
            loading={loading}
            acceptedFileTypes="image/png, image/jpeg, image/jpg"
            allowMultipleFiles={false}
          />
          <button
            className='bg-blue-500 hover:scale-110 transition ease-in-out duration-150 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 mx-3 rounded outline-none focus:outline-none sm:mr-2 mb-1'
            onClick={() => setImage(null)}
          >
            Remove
          </button>
        </div>
        <p className='text-sm text-gray-400 ml-0 lg:ml-32'>Image size must be less than 2 MB</p>
        <p className="my-3 lg:my-5 fond-bold text-xl lg:text-3xl mx-auto leading-relaxed text-white">Blog</p>

        <RichTextEditor
          value={text}
          onChange={onTextChange}
          id="rte"
          stickyOffset={70}
          className='bg-gray-800 text-white'
        />

        <div className="buttons">
          <button
            type="submit"
            className="w-20 lg:w-20 m-3 text-center py-1 lg:py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={addBlog}
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </div>
      {
        loading &&

        <div className='flex justify-center m-5'>
          <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
            <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
            </svg>
            Uploading...
          </button>
        </div>
      }
    </div>
  )
}

export default EditBlog