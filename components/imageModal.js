import React from 'react'

const ImageModal = (props) => {
    return (
        <div className={`${props.toggle} absolute w-1/2 h-1/2 mt-16 flex justify-center content-center z-50`}>
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
        </div>
    )
}

export default ImageModal