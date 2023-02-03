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
  const { user } = useAuth()
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
        <title>Rajshahi College Science Club</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" key="desc" />

        <meta property="og:url" content="https://rcsc.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rajshahi College Science Club" />
        <meta property="og:description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/rcsc-web.appspot.com/o/events%2F5th%20RCSF%2Fbg1.jpg?alt=media&token=7f0f6213-9085-48e3-a60b-74d08025ad6d" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rcsc.vercel.app" />
        <meta property="twitter:url" content="https://rcsc.vercel.app" />
        <meta name="twitter:title" content="Rajshahi College Science Club" />
        <meta name="twitter:description" content="Official Website of Rajshahi College Science Club" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/rcsc-web.appspot.com/o/events%2F5th%20RCSF%2Fbg1.jpg?alt=media&token=7f0f6213-9085-48e3-a60b-74d08025ad6d" />
        <link rel="icon" type="image/x-icon" href="/logo/rcsc-logo.png"></link>
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
            quote="ব্রিটিশ আমলে প্রতিষ্ঠিত সার্ধশতাব্দী প্রাচীন রাজশাহী কলেজ শিক্ষা, সংস্কৃতি ও জাতীয় ঐতিহ্যের স্মারক। বহু বিদগ্ধ ব্যক্তি ও মনীষী এই কলেজ থেকে শিক্ষাগ্রহণ করে নানা পেশায় যুক্ত হয়ে অত্যন্ত দক্ষতার সাথে তাদের যথাযথ দায়িত্ব ও কর্তব্য পালনের মাধ্যমে দেশসেবায় নিরন্তর ভূমিকা রেখে চলেছেন। শিক্ষা ও সংস্কৃতি চর্চায় অনন্য রাজশাহী কলেজ গুণগত শিক্ষার পাশাপাশি শিক্ষার্থীদের নানামুখী প্রতিভার বিকাশ ও দক্ষতা বৃদ্ধির লক্ষ্যে নানা সংগঠন ও ক্লাব গড়ে তুলেছে। বর্তমানে কলেজে ৫০ টিরও অধিক ক্লাব ও সংগঠন অত্যন্ত নিষ্ঠা ও সফলতার সাথে তাদের কার্যক্রম পরিচালনা করছে। তাদের মধ্যে উচ্চমাধ্যমিক শ্রেণির বিজ্ঞান বিভাগের শিক্ষার্থীদের দ্বারা পরিচালিত 'রাজশাহী কলেজ সায়েন্স ক্লাব' উল্লেখযোগ্য। বিগত বছরগুলোতে ক্লাবটি সফলভাবে ৫টি সায়েন্স ফেস্ট আয়োজন, নানা বিষয়ে ওয়ার্কশপ ও শিক্ষার্থীদের বিজ্ঞানমনস্ক করে তোলার জন্য বিভিন্ন ধরণের কার্যক্রম পরিচালনা করে আসছে।"
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

      {!user ?
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
