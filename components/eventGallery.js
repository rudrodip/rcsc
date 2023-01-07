import React from 'react'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState, useCallback } from 'react';

const EventGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-5 lg:py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">{props.title}</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{props.desc}</p>
          </div>
          <div className=''>
            <Gallery photos={props?.images} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={props?.images.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
          <button className='bg-blue-600 hover:bg-blue-800 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow text-xs m-3 px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3'
            onClick={()=> console.log('hi')}
          >
            See more!
          </button>
        </div>
      </section>
    </div>
  )
}

export default EventGallery