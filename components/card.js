import React from 'react'
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={props.link}>
            <div className='bg-gradient-to-r from-gray-500 to-gray-500 hover:rounded-lg hover:scale-110 transition duration-200 ease-in-out hover:from-cyan-400 hover:to-blue-600 my-5 md:my-10 cursor-pointer'>
                <div className="max-w-sm rounded overflow-hidden">
                    <img className="w-full" src={props.img} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.title}</div>
                        <p className="text-white text-base">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card