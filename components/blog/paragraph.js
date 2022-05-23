import React from 'react'
import { useState } from 'react'

const Paragraph = (props) => {
  const [subtitle, setSubtitle] = useState('')
  const [paragraph, setParagraph] = useState('')

  const handleChange = (e) => {
    if (e.target.name == 'subtitle') {
      setSubtitle(e.target.value)
      props.addParagraph(props.index, subtitle, paragraph)
    }
    if (e.target.name == 'paragraph') {
      setParagraph(e.target.value)
      props.addParagraph(props.index, subtitle, paragraph)
    }
  }

  return (
    <div>
      <div className='ml-1 lg:ml-5'>
        <div className="md:flex md:items-center mb-6">
          <div className="">
            <label className="text-gray-500 font-bold mb-1 md:mb-0 pr-4">
              Subtitle
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
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
          <h1 className="text-gray-500 font-bold mb-1 md:mb-0 pr-4">
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none'
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