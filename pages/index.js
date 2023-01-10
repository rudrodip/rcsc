import React from 'react'
import Head from 'next/head'
import RouteCard from '../components/profile/routeCards'
import Stats from '../stats.json'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import useWindowDimensions from '../components/useWindowDimensions'
import Quote from '../components/quote'
import Testimonial from '../components/testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

export default function Home() {
  const { width, height } = useWindowDimensions()
  const currentUser = useAuth()
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [visited, setVisit] = useState(false)

  if (!visited && inView) {
    setVisit(true)
  }

  return (
    <div>

      <Head>
        <title>RCSC - Home</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Rajshahi College Science Club"
        />
        <meta
          property="og:description"
          content="Official Website of Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <div className='stats-detailed'>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-6 lg:py-24 mx-auto flex flex-wrap justify-center text-center lg:text-left">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-white">Rajshahi College Science Club</h1>
                <div className="leading-relaxed mb-3 text-gray-300">
                  Rajshahi College Science Club is one of the most renowned co-organizations affiliated to Rajshahi College which works to uphold the contributions of Bangladeshi geniuses and encourage the new generation in scientific practices emphasizing on both theoretical and practical fields.
                </div>
                <div className='font-bold text-white text-left text-md'>
                  Club motives:
                </div>
                <div className='flex flex-col flex-wrap text-left text-gray-300'>
                  <span>1. Enlightening the society by the flame of science.</span>
                  <span>2. Exploring the latent talents from our college by providing platforms and facilities.</span>
                  <span>3. Upholding the contributions of Bangladeshi science pioneers.</span>
                </div>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium lg:text-4xl text-2xl text-white">{visited ? <CountUp end={Stats.members} /> : 0}</h2>
                <p className="leading-relaxed">Members</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium lg:text-4xl text-2xl text-white">{visited ? <CountUp end={Stats.science_fests} /> : 0}</h2>
                <p className="leading-relaxed">Science Fests</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium lg:text-4xl text-2xl text-white">{visited ? <CountUp end={Stats.executives} /> : 0}</h2>
                <p className="leading-relaxed">Executives</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2" ref={ref}>
                <h2 className="title-font font-medium lg:text-4xl text-2xl text-white">{visited ? <CountUp end={Stats.olympiads} /> : 0}</h2>
                <p className="leading-relaxed">Olympiads</p>
              </div>
            </div>
            {
              width > 1000 &&
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img className="object-cover object-center w-full h-full" src="/background-img/bg1.jpg" alt="stats" loading='lazy' />
              </div>
            }

          </div>
        </section>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        speed={1000}
        loop={true}
      >
        <SwiperSlide>
          <Quote
            author="Professor Abdul Khaleque"
            role="Principal, Rajshahi College"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam temporibus quidem voluptatem sint fugiat minus, eligendi amet magnam alias id commodi mollitia eveniet, iure sed nostrum totam inven "
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Testimonial
              author="Ke jani bolesilo"
              role="ki jeno koren uni"
              desc="club ta valoi, onk kichu kore, class bunk deya jay...(ar kichu mathay asche na 😑)"
              img="https://dummyimage.com/200x200"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Testimonial
              author="Ke jani bolesilo"
              role="ki jeno koren uni"
              desc="club ta valoi, onk kichu kore, class bunk deya jay...(ar kichu mathay asche na 😑)"
              img="https://dummyimage.com/200x200"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {!currentUser ?
        <div className='w-full flex justify-center content-center flex-col items-center'>
          <Link href="/login">
            <button className="w-24 bg-gradient-to-r from-blue-600 to-cyan-500 uppercase text-white font-semibold hover:scale-110 transition-all ease-in-out duration-100 shadow text-md lg:text-lg p-3 lg:p-5 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
            >
              Login
            </button>
          </Link>
          <p className='text-sm text-gray-400'>For members only</p>
        </div> : ''
      }

      <div className='w-full m-0 md:w-3/4 md:m-auto'>
        <div className="flex content-center justify-start m-auto lg:m-10 flex-wrap text-gray-400">
          <RouteCard name="About Us" desc="About Rajshahi College Science Club" link="/about" img="/pagesPhoto/aboutUs.png" />
          <RouteCard name="Read Blogs" desc="Read blogs here" link="/blogs" img="/pagesPhoto/blogs.png" />
          <RouteCard name="Executives" desc="Our executive committee" link="/executives" img="/pagesPhoto/executives.png" />
          <RouteCard name="Alumni" desc="Ex-members of Rajshahi College Science Club" link="/alumni" img="/pagesPhoto/alumni.png" />
          <RouteCard name="Events" desc="Events organized by Rajshahi College Science Club" link="/events" img="/pagesPhoto/events.png" />
          <RouteCard name="Gallery" desc="Special memories of our activities" link="/gallery" img="/pagesPhoto/gallery.png" />
          <RouteCard name="Contact Us" desc="Feel free to contact us" link="/contact" img="/pagesPhoto/contact.png" />
        </div>
      </div>

    </div>
  )
}
