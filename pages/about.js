import React from 'react'
import Head from 'next/head';
import CountUp from 'react-countup';
import Stats from '../stats.json'
import TeachersProfile from '../components/profile/teachersProfile'

function About({ user }) {
  return (
    <div>
      <Head>
        <title>RCSC - About</title>
        <meta name="description" content="Official Website of Rajshahi College Science Club" />
        <meta property="og:url" content="https://rcsc.vercel.app/about" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="About us"
        />
        <meta
          property="og:description"
          content="About Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <div className="stats-short" style={{ marginTop: '1rem' }}>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto">
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
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.years} />}</h2>
                <p className="leading-relaxed">Years of Glory</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='flex justify-center content-center my-10'>
        <img src="/background-img/bg11.jpg" alt="picture" className='w-full lg:w-2/3' />
      </div>
      <section className="about_desc">
        <div>
          <h1 className='p-2 lg:p-4 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400 tracking-widest'>OUR STORY</h1>
        </div>
        <div className='w-full lg:w-3/4 p-3 lg:m-auto my-4 lg:my-10 text-left'>
          <p className='font-medium text-xl text-white'>
            রাজশাহী কলেজ সায়েন্স ক্লাব রাজশাহী কলেজের অধিভুক্ত সবচেয়ে স্বনামধন্য সংগঠনসমূহের মধ্যে অন্যতম। ২০১৫ সালে ক্লাবটি আনুষ্ঠানিকভাবে যাত্রা শুরু করে। বিজ্ঞানকে চমকপ্রদভাবে সকলের মাঝে ছড়িয়ে দেয়ার প্রয়াস থেকেই ক্লাবটি প্রতিষ্ঠা করা হয়। এখন অব্দি সেই মূলমন্ত্রকে ধরে রেখে প্রধানত ৩টি উদ্দেশ্যে ক্লাবের সকল কার্যক্রম পরিচালিত হচ্ছে।
          </p>
          <div className='flex flex-col flex-warp text-gray-300'>
            <span className='m-2'>১। একটি বিজ্ঞানমনষ্ক, উদ্ভাবনী ও চিন্তাশীল প্রজন্ম গড়ে তোলা।</span>
            <span className='m-2'>২। নিজেদের সৃজনশীলতা প্রকাশের একটি প্ল্যাটফর্ম এবং বিভিন্ন সুবিধা প্রদান করে আমাদের কলেজের শিক্ষার্থীদের মধ্যে থেকে সুপ্ত প্রতিভা অন্বেষণ করা।</span>
            <span className='m-2'>৩। বাংলাদেশের বিজ্ঞানীদের বিভিন্ন উদ্ভাবন ও তাদের অবদান সম্পর্কে সকলকে জানানো।</span>
          </div>

          <p className='font-medium text-xl mt-5'>
            এই লক্ষ্যে ক্লাব যেসকল কর্মকান্ড পরিচালিত করে :
          </p>
          <br></br>
          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            রাজশাহী কলেজ বিজ্ঞান উৎসব:
          </span>
          <p className='m-2 text-gray-300'>
            রাজশাহী কলেজ সায়েন্স ক্লাব প্রতিবছর আয়োজন করে রাজশাহীর সবচেয়ে বড় বিজ্ঞান উৎসব 'রাজশাহী কলেজ সায়েন্স ফেস্ট'। ২০১৬ সালে এই আয়োজনের প্রথম আসর বসে। এরপর প্রতিবছর রাজশাহীর শিক্ষার্থীদের আকর্ষণের কেন্দ্রবিন্দুতে থাকে এই উৎসব। সর্বশেষ ২০২২ সালের ২৪-২৫শে মার্চ দুইদিনব্যাপী অনুষ্ঠিত হয় '৫ম রাজশাহী কলেজ সায়েন্স ফেস্ট ২০২২'। এই উৎসবে সারাদেশ থেকে ৯ম-১২শ শ্রেণি পর্যন্ত প্রায় ৬০০ জন শিক্ষার্থী অংশগ্রহণ করে। অনুষ্ঠানে অতিথি হিসেবে উপস্থিত দেশবরেণ্য বিজ্ঞানী প্রোফেসর ড.মোহাম্মদ কায়কোবাদ স্যার। ২ দিন ব্যাপী শিক্ষার্থীরা ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি, এস্ট্রোনমির মতো বিষয়ভিত্তিক বিভিন্ন অলিম্পিয়াডে অংশগ্রহণ করে। এছাড়াও অনলাইন কম্পিটিটিভ প্রোগ্রামিং, ডিজিটাল ইলাস্ট্রেশন, ইনোভেটিভ আইডিয়া শেয়ারিং, প্রব্লেম সলভিং,সায়েন্স ফিকশন রাইটিং, সায়েন্টিফিক ফটোগ্রাফিতে সারা দেশ থেকে শিক্ষার্থীরা অংশগ্রহণ করে।
          </p>

          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            কর্মশালা এবং সেমিনার:
          </span>
          <p className='m-2'>
            শিক্ষার্থীদের বিজ্ঞানের প্রতি আগ্রহ বাড়াতে রাজশাহী কলেজ সায়েন্স ক্লাব কলেজ ও বিশ্ববিদ্যালয়ের সম্মানিত শিক্ষক বা ক্লাব ও কলেজের প্রাক্তন ছাত্রদের দ্বারা গৃহীত বিভিন্ন বিজ্ঞান সম্পর্কিত বিষয়ের উপর কর্মশালা ও সেমিনারের আয়োজন করে।
          </p>
          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            অলিম্পিয়াডঃ
          </span>
          <p className='m-2'>
            প্রায় প্রতিটি অলিম্পিয়াডে রাজশাহী কলেজের একটি মর্যাদাপূর্ণ উপস্থিতি রয়েছে। এই কলেজের শিক্ষার্থীরা গর্বের সাথে বিভিন্ন অলিম্পিয়াডে জাতীয় ও আন্তর্জাতিক পর্যায়ে বাংলাদেশের প্রতিনিধিত্ব ও দেশের জন্য পদক অর্জন করেছে। রাজশাহী কলেজ সায়েন্স ক্লাব তাদের সহায়তার জন্য প্রব্লেম সলভিং ওয়ার্কশপ আয়োজন করাসহ অন্যান্য সুবিধা দেয়।
          </p>
          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            প্রকল্প প্রদর্শনী:
          </span>
          <p className='m-2'>
            রাজশাহী কলেজ প্রকল্প প্রদর্শনী ও বিজ্ঞান মেলায় অসংখ্য পুরস্কার অর্জন করেছে। রাজশাহী কলেজ সায়েন্স ক্লাব প্রকল্পগুলির তত্ত্বাবধায়ন করে এবং আঞ্চলিক এবং জাতীয় প্রতিযোগিতায় শিক্ষার্থীদের অংশগ্রহণ নিশ্চিত করে।
          </p>
          <p className='font-medium text-xl text-white'>
            বর্তমানে ক্লাবের বিভিন্ন কার্যক্রম পরিচালনার জন্য রয়েছে ১০ সদস্য বিশিষ্ট কোর কমিটি এবং তাদের সাথে ১৫ জন এক্সিকিউটিভ মেম্বার। ক্লাবের কনভেনর পদার্থবিজ্ঞান বিভাগের সহযোগী অধ্যাপক মোঃ আলাউদ্দিন স্যারের নেতৃত্বে  বর্তমানে ক্লাবের সকল কার্যক্রম পরিচালনা করা হয়।
          </p>
        </div>
      </section>
      <section>
        <div className="container px-5 py-6 lg:py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeachersProfile
              name="Hobibur Rahman"
              role="Ex-principle"
              img="https://dummyimage.com/200x200"
            />
            <TeachersProfile
              name="Shamim Ara"
              role="First president"
              img="https://dummyimage.com/200x200"
            />
            <TeachersProfile
              name="Prof. Md Al-Momin Chowdhury"
              role="Convenor"
              img="https://dummyimage.com/200x200"
            />

          </div>
        </div>
      </section>


    </div>
  )
}

export default About
