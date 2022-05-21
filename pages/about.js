import React from 'react'
import Header from '../components/header/header'
import CountUp from 'react-countup';
import Stats from '../stats.json'

function About() {
  return (
    <div>
      <Header 
        title = "Science Club"
        subtitle = "About Us"
        imageSubtitle = "We conquer"
        imageTitle = "THE MOUNTAINS"
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
        <img src="/background-img/bg11.jpg" alt="picture" className='w-2/3' />
      </div>
      <section className="about_desc">
        <div>
          <h1 className='text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500'>Title goes here</h1>
        </div>
        <div className='w-3/4 m-auto my-10'>
          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>

          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>

          <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa natus obcaecati voluptatibus veritatis? Quaerat necessitatibus corporis qui temporibus eius voluptas deserunt enim molestias, quibusdam culpa velit ullam? Maiores modi soluta aliquam ab tempore quaerat voluptate veniam molestias autem numquam. Officia pariatur vel aliquam cupiditate omnis labore rerum explicabo nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi tempora temporibus dolor exercitationem eos. Animi expedita vero quibusdam et repellat non atque dolore tenetur impedit distinctio sint quisquam, odio rem quo ipsa quasi asperiores voluptatibus facilis. Inventore voluptatum illum nesciunt, asperiores earum nam quasi eius, ducimus laudantium expedita ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolorum veniam doloremque accusamus nam adipisci voluptas harum dignissimos amet animi ipsam dolores temporibus tempora, aperiam alias perferendis, sunt aut architecto ullam illum fugiat. Reiciendis veritatis, optio, fuga cupiditate sit explicabo at blanditiis iusto aliquam adipisci quibusdam quasi voluptatibus, expedita enim eligendi quo. Fugit tempore accusamus harum, voluptates consectetur eveniet eaque tenetur </p>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quos autem perferendis molestiae doloremque ipsum itaque omnis ut! Repellat eveniet illo facere. Obcaecati?</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">I-dont-know</span>
                      <span className="text-gray-500 text-sm">Engineer, Nasa 😎</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">Club e amr chobi o ache 😎 consectetur adipisicing elit. Mollitia ipsum tempore similique adipisci quis recusandae autem, reprehenderit tempora nisi, cum rerum? Ea, laboriosam minus.</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">Einstein</span>
                      <span className="text-gray-500 text-sm">Scientist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam temporibus quidem voluptatem sint fugiat minus, eligendi amet magnam alias id commodi mollitia eveniet, iure sed nostrum totam inventore debitis deleniti consequuntur porro vitae rem harum deserunt? Voluptatem fugit saepe error consectetur tenetur corrupti nam minus a quasi iure, pariatur amet, similique eveniet dignissimos voluptas, eligendi cum ipsum fugiat. Culpa aperiam necessitatibus quasi amet, praesentium natus velit explicabo molestias excepturi sunt deleniti omnis, ipsa laboriosam sit. Blanditiis fugit architecto obcaecati molestias sed autem placeat quae iusto ratione consectetur repellendus possimus impedit, at optio quod laborum quaerat cupiditate ullam voluptas! Aut!</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">Professor Md. Abdul Khaleque</h2>
            <p className="text-gray-500">Principal, Rajshahi College</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About