import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import EventCard from '../components/gallery/eventCard'

function GalleryPage() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>RCSC - Gallery</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/gallery" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Gallery"
        />
        <meta
          property="og:description"
          content="Memories of Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>
      <EventCard
        title="6th Rajshahi College Science Fest 2022"
        desc="The legacy was to be brought with due respect and for this we are here to unveil another episode of Science Fest organised by RCSC, but this time with more enthusiasm and much more events so that you may feel the beauty. RCSC presents to you all the 6th Rajshahi College National Science Fest which will take place on 17th and 18th March 2023. "
        photos={[
          './events/6thRCNSF/bg1.jpg',
          './events/6thRCNSF/bg2.jpg',
          './events/6thRCNSF/bg3.jpg',
          './events/6thRCNSF/bg4.jpg',
          './events/6thRCNSF/bg5.jpg',
          './events/6thRCNSF/bg6.jpg']
        }
        router={router}
        url='/gallery/5th%20RCSF'
      />
      <EventCard
        title="5th Rajshahi College Science Fest 2022"
        desc="Explore your entity beyond your imagination স্লোগানকে সামনে রেখে রাজশাহী মহানগরীতে অবস্থিত বিভিন্ন মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীদের জন্য রাজশাহী কলেজ সায়েন্স ক্লাব আয়োজন করেছে '৫ম রাজশাহী কলেজ সায়েন্স ফেস্ট ২০২২'। ফেস্টে ছিলো বিজ্ঞানভিত্তিক নানা অলিম্পিয়াডসহ আরও নানা ধরণের প্রতিযোগিতা যা শিক্ষার্থীদের সৃজনশীল মেধা ও মননের বিকাশে অবদান রাখবে। পঞ্চমবারের মতো এত বড় আকারে রাজশাহীতে অনুষ্ঠিত হয়েছে রাজশাহী কলেজ সায়েন্স ফেস্ট যা প্রসারিত করেছে শিক্ষার্থীদের জ্ঞানের দুয়ার এবং সন্ধান দেবে তাদের নানা অজানা রহস্যের। "
        photos={[
          './events/5thRCSF/bg1.jpg',
          './events/5thRCSF/bg2.jpg',
          './events/5thRCSF/bg3.jpg',
          './events/5thRCSF/bg4.jpg',
          './events/5thRCSF/bg5.jpg',
          './events/5thRCSF/bg6.jpg']
        }
        router={router}
        url='/gallery/5th%20RCSF'
      />
    </div>
  )
}

export default GalleryPage