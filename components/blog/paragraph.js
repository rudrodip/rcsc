// this component render a repeated portion of a write blog form


// importing necessary dependencies
import React from 'react'
import { useState, useEffect } from 'react'

const Paragraph = (props) => {
  // props has a function from parent component - write blog -> addParagraph

  const [subtitle, setSubtitle] = useState('')
  const [paragraph, setParagraph] = useState('')

  useEffect(() => {
    props.addParagraph(props.index, subtitle, paragraph)
  }, [paragraph, subtitle])

  const handleChange = (e) => {
    if (e.target.name == 'subtitle') {
      setSubtitle(e.target.value)
    }
    if (e.target.name == 'paragraph') {
      setParagraph(e.target.value)
    }
  }

  return (
    <div>
      <div className='ml-1 lg:ml-5'>
        <div className="md:flex md:items-center mb-6">
          <div className="">
            <label className="text-gray-400 font-bold mb-1 md:mb-0 pr-4">
              Subtitle
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-800 appearance-none rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none"
              id="inline-full-name"
              name="subtitle"
              type="text"
              placeholder='optional'
              value={subtitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-gray-400 font-bold mb-1 md:mb-0 pr-4">
            Paragraph
          </h1>
        </div>

        <div className="flex md:items-center mb-6">

          <div className="w-full h-auto">
            <textarea
              name="paragraph"
              type="text"
              cols="30"
              rows="10"
              placeholder='write here'
              className='bg-gray-800 appearance-none rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none'
              onChange={handleChange}
            >
            </textarea>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Paragraph

// structure and how it works

// there are two input forms -> 1. Subtitle 2. Paragraph
// React listens to each of them and in any changes, it handle changes with function handleChange()

// handleChange function then calls a function of parent component "addParagraph" to set the text to the parent data file

// i know its a bit complicated 😅