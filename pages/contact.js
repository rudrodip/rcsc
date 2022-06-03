import React from 'react'

function Contact() {

  return (
    <div>


        <div className="flex flex-col text-center w-full my-5 ">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">CONTACT US</h1>
        </div>


      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="h-[75vh] container px-5 py-6 lg:py-24 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="lg:w-2/3 w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4623009405773!2d88.59337991537024!3d24.365216170927003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa83aca4799%3A0xc31ce6d40ec9c0f6!2sRajshahi%20College!5e0!3m2!1sen!2sbd!4v1652174946035!5m2!1sen!2sbd" style={{ filter: 'contrast(1.2) opacity(0.16)' }}></iframe>
          </div>

          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center content-center">

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">

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
    </div>
  )
}

export default Contact