import React from 'react'

const ButtomPrimary = ({ text, onClick }) => {
    return (
        <button className="bg-gray-900 hover:bg-blue-600 uppercase text-white font-bold hover:scale-110 transition-all ease-in-out duration-100 shadow text-xs m-3 px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ButtomPrimary