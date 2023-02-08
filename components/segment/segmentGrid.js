import React from 'react'
import SegmentCard from './segmentCard'

const SegmentGrid = ({ name, segments }) => {
  return (
    <div className='my-10 overflow-hidden'>
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500">
          {name}
        </h1>
      </div>
      <div className='flex flex-wrap my-5 justify-around xl:mx-40'>
        {
          segments && Object.keys(segments).map(seg => {
            return (
              <SegmentCard
                key={seg}
                name={segments[seg].name}
                desc={segments[seg].desc}
                img={segments[seg].img}
                link={segments[seg].url}
                details={segments[seg].details}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default SegmentGrid