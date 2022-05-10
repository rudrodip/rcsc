import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-gradient-to-r from-gray-500 to-gray-500 hover:rounded-lg hover:scale-110 transition duration-200 ease-in-out hover:from-cyan-400 hover:to-blue-600 my-10'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={props.img} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.title}</div>
                        <p className="text-white text-base">
                            {props.desc}
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Card