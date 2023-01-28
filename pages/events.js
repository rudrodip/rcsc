import React from 'react'
import Head from 'next/head'
import CustomCountdown from '../components/customCountdown'
import Link from 'next/link'
import SegmentGrid from '../components/segment/segmentGrid'
import Segments from '../segments.json'

function Events() {

  return (
    <div>
      <Head>
        <title>RCSC - Events</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/events" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Events"
        />
        <meta
          property="og:description"
          content="Events organized by Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <div>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url("/background-img/bg.png")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content p-2 m-0">
            <div className="max-w-xl">
              <h1 className="mb-5 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 leading-tight">6<sup className='text-cyan-500 text-2xl md:text-4xl'>th</sup> Rajshahi College Science Fest</h1>
              <p className="mb-5">Welcome to the 6th Rajshahi College Science Fest 2023 official website. RCSC is one of the leading science clubs at the national level. Every year we have arranged Rajshahi College Science Fest since 2017. Like before we now organized the “6th Rajshahi College Science Fest 2023” for you. Please join us as an individual or a team.</p>
              <h1 className="mb-2 text-2xl font-bold text-cyan-500">Date: March 1, 2023</h1>
              <h1 className="mb-5 text-4xl font-bold text-cyan-400">Registration ending in</h1>
              <CustomCountdown date={new Date('2023-03-1')} />
              <Link legacyBehavior href="/registration">
                <button role="button" className="btn bg-cyan-500 border-blue-400 text-gray-800 hover:text-gray-200 hover:bg-blue-800 m-6">Register now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div >
      <main>
        {
          Object.keys(Segments).map(
            seg => {
              return (
                <SegmentGrid key={seg} name={seg} segments={Segments[seg]} />
              )
            }
          )
        }

        <div className="divider"></div>

        <div className="hero min-h-[50vh] bg-transparent">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/segments/jaforsir.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-white">Chief Guest</h1>
              <p className="py-6 text-white font-bold">Dr. Muhammad Jafar Iqbal</p>
              <p className="text-white font-bold">Provident cupiditate voluptatem et in. In deleniti eaque aut repudiandae et a id nisi.</p>
              <p className="">Professor, SUST</p>
              <p className="">Random infos</p>
              <p className="">Random infos</p>
              <p className="pb-6">Random infos</p>
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>

        <div className="divider"></div>


        <section className="text-gray-400 bg-gray-900 body-font relative">
          <h1 className="text-5xl font-medium title-font py-8 text-white text-center">VENUE</h1>
          <div className="h-[75vh] container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap">

            <div className="lg:w-2/3 w-full bg-transparent rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4623009405773!2d88.59337991537024!3d24.365216170927003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa83aca4799%3A0xc31ce6d40ec9c0f6!2sRajshahi%20College!5e0!3m2!1sen!2sbd!4v1652174946035!5m2!1sen!2sbd" style={{ filter: 'opacity(0.5)' }}></iframe>
            </div>

            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center content-center">

              <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">

                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Rajshahi College, Rajshahi-6100</p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-400 leading-relaxed">
                    rcsc.3.22@gmail.com</a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">+88 0721-770080 (Office)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Events