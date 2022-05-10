import React from 'react'

const Blog = (props) => {
    return (
        <div className='bg-gradient-to-r from-gray-500 to-gray-500 hover:rounded-lg hover:scale-110 transition duration-200 ease-in-out hover:from-blue-600 hover:to-cyan-400 my-10 cursor-pointer'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={props.img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {props.title}
                    </div>
                    <p className='text-2 text-gray-600 font-bold'>Posted by {props.poster}</p>
                    <p className='text-2 text-gray-400'>Catagory: {props.catagory}</p>
                    <p className='text-2 text-gray-400'>{props.date}</p>
                    <p className="text-white text-base">
                        {props.desc}
                    </p>
                    <p className='text-5 text-blue-400 hover:text-red-400 font-bold transition ease-in-out duration-100'>Read more!</p>
                </div>
            </div>
        </div>
    )
}

export default Blog