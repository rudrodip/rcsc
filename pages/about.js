import React from 'react'
import Header from '../components/header/header'
import CountUp from 'react-countup';
import Stats from '../stats.json'
import TeachersProfile from '../components/profile/teachersProfile'
import Testimonial from '../components/testimonial';
import Quote from '../components/quote';

function About() {
  return (
    <div>
      <Header
        title="Rajshahi College Science Club"
        subtitle="About Us"
        imageSubtitle="We conquer"
        imageTitle="THE MOUNTAINS"
      />
      <h1 className='text-5xl text-white text-center my-20'>Our Story</h1>
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
          <h1 className='p-2 lg:p-4 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>Title goes here</h1>
        </div>
        <div className='w-full lg:w-3/4 p-3 lg:m-auto my-4 lg:my-10 text-left'>
          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>

          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>

          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>
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
              role="Mone nai sotti 😥"
              img="https://dummyimage.com/200x200"
            />

          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-6 lg:py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
            <div className="flex flex-wrap -m-4">

              <Testimonial
                author="Ke jani bolesilo"
                role="ki jeno koren uni"
                desc="club ta valoi, onk kichu kore, class bunk deya jay...(ar kichu mathay asche na 😑)"
                img="https://dummyimage.com/200x200"
              />


              <Testimonial
                author="Ke jani bolesilo"
                role="ki jeno koren uni"
                desc="club ta valoi, onk kichu kore, class bunk deya jay...(ar kichu mathay asche na 😑)"
                img="https://dummyimage.com/200x200"
              />

            </div>
          </div>
        </section>
        
        <Quote
          author="Professor Abdul Khaleque"
          role="Principal, Rajshahi College"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam temporibus quidem voluptatem sint fugiat minus, eligendi amet magnam alias id commodi mollitia eveniet, iure sed nostrum totam inventore debitis deleniti consequuntur porro vitae rem harum deserunt? Voluptatem fugit saepe error consectetur tenetur corrupti nam minus a quasi iure, pariatur amet, similique eveniet "
        />

      </section>
    </div>
  )
}

export default About
