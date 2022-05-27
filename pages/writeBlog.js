import React from 'react'
import { useState, useEffect } from 'react'
import { FileInputButton } from '../components/fileInput'
import Paragraph from '../components/blog/paragraph'
import Categories from '../categories.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth, db, storage, updateBlogNo } from '../src/config/firebase.config';
import { useRouter } from 'next/dist/client/router';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore'

const WriteBlog = () => {
  const router = useRouter()
  const currentUser = useAuth()
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('All Blogs')
  const [image, setImage] = useState('')
  const [laoding, setLoading] = useState(false)
  const [paragraphNo, setParagraphNo] = useState(1)
  const [paragraphs, setParagraphs] = useState([{
    'subtitle': '',
    'content': ''
  }])
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    async function getUser(uid) {
      if (!uid) return
      const userRef = doc(db, `user/${uid}`)
      const docSnap = await getDoc(userRef)
      if (docSnap.exists()) {
        setUser(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }
    if (currentUser) {
      getUser(currentUser.uid)
    }

  }, [currentUser])

  const addParagraph = (index, subtitle, paragraph) => {
    let data = paragraphs[index]
    subtitle ? data["subtitle"] = subtitle : ''
    paragraph ? data["content"] = paragraph : ''
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

  const addParagraphNo = () => {
    paragraphs.push({
      'subtitle': '',
      'content': ''
    })
    console.log(paragraphs)
    setParagraphNo(paragraphNo + 1)
  }

  const removeParagraph = () => {
    paragraphs.pop()
    console.log(paragraphs)
    paragraphNo > 1 ? setParagraphNo(paragraphNo - 1) : setParagraphNo(1)
  }

  const onChange = async (image) => {
    if (image.size > 2097152) {
      toast.warn('File size should be less than 2 MB', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      setImage(image)
    }
  }

  const addBlog = async () => {
    setLoading(true)
    try {
      const data = {
        author: user.name,
        authorProfile: currentUser.uid,
        category: category,
        title: title,
        paragraphs: paragraphs,
        views: 0,
        timestamp: serverTimestamp()
      }
      const blogref = doc(db, `blogs/${title}by${currentUser.uid}}`)
      const blogImgRef = ref(storage, `blogImg/${title}by${currentUser.uid}`)
      const metadata = {
        contentType: 'image/jpeg',
      }
      if (image) {
        const snapshot = await uploadBytes(blogImgRef, image, metadata)
        let photoURL = await getDownloadURL(blogImgRef)
        data["img"] = photoURL
      }

      setDoc(blogref, data)
      updateBlogNo(currentUser, 1)
      toast('Uploaded', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setTimeout(() => router.push('/blogs'), 2500)
    } catch (error) {
      toast.warn('Error while uploading', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    setLoading(false)
  }

  return (
    <div className='m-1 p-1 lg:m-5 lg:p-10'>
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
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
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
                className={`origin-top-right ${toggle ? 'absolute' : 'hidden'} right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto`} role="menu"
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
            laoding={laoding}
          />
          <button
            className='bg-green-500 hover:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 mx-3 rounded outline-none focus:outline-none sm:mr-2 mb-1'
            onClick={() => setImage(null)}
          >
            Remove
          </button>
        </div>

        <p className="my-3 lg:my-5 fond-bold text-xl lg:text-3xl mx-auto leading-relaxed text-white">Paragraphs</p>
        {
          [...Array(paragraphNo)].map((e, i) => {
            return (
              <div key={i}>
                <Paragraph index={i} addParagraph={addParagraph} />
              </div>
            )
          })
        }
        <div className="buttons">
          <button
            type="submit"
            className="w-20 lg:w-20 m-3 text-center py-1 lg:py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={addParagraphNo}
          >
            Add
          </button>
          <button
            type="submit"
            className="w-20 lg:w-20 m-3 text-center py-1 lg:py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={removeParagraph}
          >
            Remove
          </button>
          <button
            type="submit"
            className="w-20 lg:w-20 m-3 text-center py-1 lg:py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={addBlog}
            disabled={laoding}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteBlog