import React from 'react'
import { useState, useEffect } from 'react'
import { FileInputButton } from '../components/fileInput'
import Paragraph from '../components/blog/paragraph'
import { useAuth, db, storage } from '../src/config/firebase.config';
import { useRouter } from 'next/dist/client/router';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDoc, doc, setDoc, collection } from 'firebase/firestore'

const WriteBlog = () => {
  const router = useRouter()
  const currentUser = useAuth()
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [laoding, setLoading] = useState(false)
  const [paragraphNo, setParagraphNo] = useState(1)
  const [paragraphs, setParagraphs] = useState([{
    'subtitle': '',
    'content': ''
  }])

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
    if (e.target.name == 'category') {
      setCategory(e.target.value)
    }
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
    setParagraphNo(paragraphNo - 1)
  }

  const onChange = async (image) => {
    setImage(image)
  }

  const addBlog = async () => {
    const data = {
      author: user.name,
      authorProfile: currentUser.uid,
      category: category,
      title: title,
      paragraphs: paragraphs
    }
    const blogref = doc(db, `blogs/${title}by${currentUser.uid}}`)
    const blogImaRef = ref(storage, `blogImg/${title}by${currentUser.uid}`)
    const metadata = {
      contentType: 'image/jpeg',
    }
    const snapshot = await uploadBytes(blogImaRef, image, metadata)
    let photoURL = await getDownloadURL(blogImaRef)
    data["img"] = photoURL

    setDoc(blogref, data)
    alert("uploaded")
  }

  return (
    <div className='m-1 p-1 lg:m-5 lg:p-10'>
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
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Category
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                id="inline-password"
                type="text"
                name="category"
                placeholder="category"
                value={category}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className='ml-0 lg:ml-32'>

          <FileInputButton
            label="Add image"
            uploadFileName="theFiles"
            onChange={onChange}
            laoding={laoding}
          />
        </div>

        <p className="my-3 lg:my-5 fond-bold text-xl lg:text-3xl mx-auto leading-relaxed text-white">Paragraphs</p>
        {
          [...Array(paragraphNo)].map((e, i) => {
            return (
              <div key={i}>
                <Paragraph index={i} addParagraph={addParagraph}/>
              </div>
            )
          })
        }
        <div className="buttons">
          <button
            type="submit"
            className="w-20 m-3 text-center py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={addParagraphNo}
          >
            Add
          </button>
          <button
            type="submit"
            className="w-20 m-3 text-center py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={removeParagraph}
          >
            Remove
          </button>
          <button
            type="submit"
            className="w-20 m-3 text-center py-3 rounded bg-blue-500 text-white hover:scale-105 transition duration-200 focus:outline-none"
            onClick={addBlog}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteBlog