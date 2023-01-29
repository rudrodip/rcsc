import React from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CustomCountdown from '../components/customCountdown'
import SegmentGrid from '../components/segment/segmentGrid'
import Segments from '../segments.json'

function Events() {
  const segmentRef = useRef(null)
  const contactRef = useRef(null)
  const executeScroll = () => segmentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const contactScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      <Head>
        <title>6th Rajshahi College Science Fest</title>
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
              <p className="mb-5">Welcome to the <span className='text-blue-500'>6th Rajshahi College Science Fest 2023</span> official website. <span className='text-blue-500 font-bold'>RCSC</span> is one of the leading science clubs at the national level. Every year we have arranged Rajshahi College Science Fest since 2017. Like before we now organized the <span className='text-blue-500'>6th Rajshahi College Science Fest 2023</span> for you. Please join us as an individual or a team.</p>
              <h1 className="mb-2 text-2xl font-bold text-cyan-400">Date: <span className='text-blue-500'>March 3rd - 4th, 2023</span></h1>
              <h1 className="mb-2 text-2xl font-bold text-cyan-400">Venue: <span className='text-blue-500'>Rajshahi College, Rajshahi</span></h1>
              <h1 className="mb-5 text-4xl font-bold text-cyan-400">Registration ending in</h1>
              <CustomCountdown date={new Date('2023-03-3')} />
              <button role="button" onClick={executeScroll} className="btn bg-cyan-500 border-blue-400 text-gray-800 hover:text-gray-200 hover:bg-blue-800 m-6">Register now!</button>
            </div>
          </div>
        </div>
      </div >
      <main ref={segmentRef}>
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
              <p className="py-6 text-white font-bold text-3xl">Dr. Muhammad Jafar Iqbal</p>
              <p className="py-2">Science fiction Author, Physicist, Academic, Activist</p>
              <p className="py-2">Former professor of Computer Science and Engineering and former head of the department of Electrical and Electronic Engineering at Shahjalal University of Science and Technology (SUST)</p>
              <button role="button" onClick={executeScroll} className="btn bg-cyan-500 border-blue-400 text-gray-200 hover:text-gray-200 hover:bg-blue-800 m-6">Join now!</button>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="hero min-h-[50vh] bg-transparent">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/logo/rcsc-logo.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-white">Organized by</h1>
              <p className="py-6 text-white font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Rajshahi College Science Club</p>

              <div>
                <Link href="/user/JPnOqZNq5hMZXinLbJv5pxMgVYV2">
                  <div className="avatar items-center">
                    <div className="w-16 rounded-full">
                      <img src="/members/reza.png" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <p className="p-2 text-white text-xl break-words">
                      Mahmud E Reza (President)
                    </p>
                  </div>
                </Link>
                <p className="py-2 text-gray-400">Contact: <a href="tel:01783458427" className='text-white'>01783458427</a></p>
              </div>
              <div>
                <Link href="/user/fyyF4QXnvKZGCbSUX2ts8hj0RJi1">
                  <div className="avatar items-center">
                    <div className="w-16 rounded-full">
                      <img src="/members/umam.png" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <p className="p-2 text-white text-xl break-words">
                      Saotul Umam (General Secretary)
                    </p>
                  </div>
                </Link>
                <p className="py-2 text-gray-400">Contact: <a href="tel:01701086202" className='text-white'>01701086202</a></p>
              </div>
              <button role="button" onClick={contactScroll} className="btn bg-cyan-500 border-blue-400 text-gray-200 hover:text-gray-200 hover:bg-blue-800 m-6">Contact</button>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div ref={contactRef} className="container my-24 px-6 mx-auto">
          <h1 className="text-5xl font-medium title-font py-8 text-white text-center">VENUE</h1>
          <section className="mb-32">
            <div className="block rounded-lg shadow-lg bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                  <div className="map-container-2 w-full h-[500px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4623009405773!2d88.59337991537024!3d24.365216170927003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa83aca4799%3A0xc31ce6d40ec9c0f6!2sRajshahi%20College!5e0!3m2!1sen!2sbd!4v1652174946035!5m2!1sen!2sbd" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div className="flex flex-wrap pt-12 lg:pt-0">
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Contact</p>
                          <p className="text-gray-400"><a href='mailto:rcsc.3.22@gmail.com'>rcsc.3.22@gmail.com</a></p>
                          <p className="text-gray-400"><a href="tel:01783458427">+8801783458427</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                              className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path fill="currentColor"
                                d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Olympiad Questions</p>
                          <p className="text-gray-400"><a href='mailto:rcsc.3.22@gmail.com'>rcsc.3.22@gmail.com</a></p>
                          <p className="text-gray-400"><a href="tel:01783458427">+8801783458427</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Bug report</p>
                          <p className="text-gray-400"><a href='mailto:rcsc.3.22@gmail.com'>official.rudrodipsarker@gmail.com</a></p>
                          <p className="text-gray-400"><a href="tel:01783458427">+8801778881194</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  )
}

export default Events