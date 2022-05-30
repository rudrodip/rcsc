import React from 'react'
import EventGallery from '../components/eventGallery'
import Header from '../components/header/header'
import Card from '../components/card'
import Stats from '../stats.json'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Home() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [visited, setVisit] = useState(false)

  if (!visited && inView) {
    setVisit(true)
  }

  return (

    <div className=''>
      <Header
        title="Rajshahi College Science Club"
        subtitle="Welcome to"
        imageSubtitle="We explore"
        imageTitle="We let others explore! 🔍"
      />

      {/* <div className="stats-short">
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 lg:py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.members} />}</h2>
                <p className="leading-relaxed">Members</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.science_fests} />}</h2>
                <p className="leading-relaxed">Science Fests</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.executives} />}</h2>
                <p className="leading-relaxed">Executives</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.olympiads} />}</h2>
                <p className="leading-relaxed">Olympiads</p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      
      <div className='stats-detailed'>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-6 lg:py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-white">Rajshahi College Science Club</h1>
                <div className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{visited ? <CountUp end={Stats.members} /> : 0}</h2>
                <p className="leading-relaxed">Members</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{visited ? <CountUp end={Stats.science_fests} /> : 0}</h2>
                <p className="leading-relaxed">Science Fests</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{visited ? <CountUp end={Stats.executives} /> : 0}</h2>
                <p className="leading-relaxed">Executives</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{visited ? <CountUp end={Stats.olympiads} /> : 0}</h2>
                <p className="leading-relaxed">Olympiads</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img className="object-cover object-center w-full h-full" src="/background-img/bg1.jpg" alt="stats" />
            </div>
          </div>
        </section>
      </div>

      <div className="flex content-center justify-around m-10 flex-wrap">
        <Card
          title="Card 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="/background-img/bg11.jpg" />

        <Card
          title="Card 2"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="/background-img/bg10.jpg" />

        <Card
          title="Card 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="/background-img/bg12.jpg" />

        <Card
          title="Card 4"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          img="/background-img/bg13.jpg" />
      </div>
      
      <EventGallery
        title="Science Fest 2022"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipit, repudiandae voluptatem, rerum placeat excepturi ipsa recusandae consequuntur nam dolor nobis asperiores error corrupti eum cumque blanditiis optio repellendus. Quis incidunt saepe beatae corporis non quasi omnis adipisci sed dolor expedita, ratione dignissimos unde, maxime error corrupti autem suscipit nostrum!"
        img1="/background-img/bg6.jpg"
        img2="/background-img/bg4.jpg"
        img3="/background-img/bg2.jpg"
        img4="/background-img/bg1.jpg"
        img5="/background-img/bg8.jpg"
        img6="/background-img/bg3.jpg"
      />
    </div>
  )
}
