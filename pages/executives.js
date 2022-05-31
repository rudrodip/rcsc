import React from 'react'
import Header from '../components/header/header'
import MiniProfile from '../components/profile/miniProfile'
import useWindowDimensions from '../components/useWindowDimensions'

function Executives() {
  const { width, height } = useWindowDimensions()

  return (
    <div>
      {width > 1000 &&

        <Header
          title="Rajshahi College Science Club"
          subtitle="Executives"
          imageSubtitle="We dream"
          imageTitle="We make our dream true"
        />
      }

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-6 lg:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500 tracking-widest">Executive Members</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos maxime qui ut cum veniam adipisci voluptas placeat ex consequuntur.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <MiniProfile name="Sheikh Shakil" role="President" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="Mahmud Mahi" role="Lead Programmer" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="ar naam jani na" role="Kijani" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="1st student SIR" role="Mone nai" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="1st student SIR" role="Mone nai" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="1st student SIR" role="Mone nai" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="1st student SIR" role="Mone nai" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

            <MiniProfile name="1st student SIR" role="Mone nai" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />

          </div>
        </div>
      </section>

    </div>
  )
}

export default Executives