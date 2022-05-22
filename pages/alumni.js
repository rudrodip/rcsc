import React from 'react'
import Header from '../components/header/header'
import AlumniProfile from '../components/profile/alumniProfile'

const Alumni = () => {
  return (
    <div>
      <Header
        title="Rajshahi College Science Club"
        subtitle="Alumni"
        imageSubtitle="We explore"
        imageTitle="We let others explore! 🔍"
      />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">Title goes here</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos maxime qui ut cum veniam adipisci voluptas placeat ex consequuntur.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <AlumniProfile
              name="Kaukei to chinina"
              role="Ex-Member"
              batch="HSC-2019"
              institution="BUET"
              number="01778881194"
              mail="amrphnno@gmail.com"
              img="https://dummyimage.com/200x200"
            />
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni