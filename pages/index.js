import React from 'react'
import EventGallery from '../components/eventGallery'
import Header from '../components/header/header'
import Card from '../components/card'
import Stats from '../stats.json'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../src/config/firebase.config'
import Pages from '../pages.json'

export default function Home() {
  const currentUser = useAuth()
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

      {!currentUser ?
        <div className='w-full flex justify-center content-center flex-row'>
          <Link href="/login">
            <button className="bg-gray-800 hover:bg-blue-400 uppercase text-white font-semibold hover:scale-110 transition-all ease-in-out duration-100 shadow text-md lg:text-lg p-3 lg:p-5 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
            >
              Login
            </button>
          </Link>
        </div> : ''
      }

      <div className="flex content-center justify-around m-10 flex-wrap">

        <Card
          title="About Us"
          desc="About Page"
          img="/background-img/bg1.jpg"
          link='/about'
        />

        <Card
          title="Blogs"
          desc="Read Blogs"
          img="/background-img/bg7.jpg"
          link='/blogs'
        />

        <Card
          title="Executives"
          desc="Executives Page"
          img="/background-img/bg2.jpg"
          link='/executives'
        />

        <Card
          title="Alumni"
          desc="Alumni Page"
          img="/background-img/bg10.jpg"
          link='/'
        />

        <Card
          title="Events"
          desc="Events Page"
          img="/background-img/bg6.jpg"
          link='/events'
        />

        <Card
          title="Gallery"
          desc="Look at the gallery"
          img="/background-img/bg5.jpg"
          link='/gallery'
        />

        <Card
          title="Contact"
          desc="Contact us"
          img="/background-img/bg4.jpg"
          link='/contact'
        />

      </div>



      <EventGallery
        title=""
        desc=""
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
