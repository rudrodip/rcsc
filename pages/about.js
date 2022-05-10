import React from 'react'
import Header from '../components/header/header'
import CountUp from 'react-countup';
import Stats from '../stats.json'

function About() {
  return (
    <div>
      <Header
        subtitle='Science Club'
        title='About Us'
        img='https://dummyimage.com/600x300'
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
        <img src="https://dummyimage.com/600x300" alt="picture" className='w-2/3'/>
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
    </div>
  )
}

export default About