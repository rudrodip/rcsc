// import React from 'react'
// import Link from 'next/link'

// const MiniBlog = (props) => {
//     return (
//         <div className='bg-gradient-to-r from-gray-500 to-gray-500 hover:rounded-lg hover:scale-110 transition duration-200 ease-in-out hover:from-blue-600 hover:to-cyan-400 my-10 cursor-pointer'>
//             <Link href={props.link}>
//                 <div className="max-w-sm rounded overflow-hidden shadow-lg">
//                     {props?.img ? <img className="w-full" src={props.img} alt="" /> : <img className="w-full" src='' alt="" />}

//                     <div className="px-6 py-4">
//                         <div className="font-bold text-xl mb-2">
//                             {props.title}
//                         </div>
//                         <p className='text-2 text-gray-600 font-bold'>Posted by {props.poster}</p>
//                         <p className='text-2 text-gray-400'>Category: {props.category}</p>
//                         <p className='text-2 text-gray-400'>{props.date}</p>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default MiniBlog

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link'

const MiniBlog = (props) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const [scale, setScale] = useState(0)

    if (scale == 0 && inView) {
        setScale(1)
    }
    return (
        <div className={`p-4 w-1/2 transition ease-in-out duration-500 scale-0`} ref={ref} style={{ transform: `scale(${scale})` }}>

            <Link
            href={{
                pathname: '/blogs/[blogid]',
                query: { blogid: props.link }
            }}
            >
                <div className="h-full flex sm:flex-row flex-col items-center justify-center text-left cursor-pointer">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={props.img ? props.img : "https://dummyimage.com/200x200"} />
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-white text-left">{props.poster}</h2>
                        <h2 className="title-font font-medium text-lg text-white text-left">{props.title}</h2>
                        <h3 className="text-gray-500 mb-3">{props.category}</h3>
                        <p className="mb-4">{props.date}</p>
                        <span className="inline-flex">

                        </span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default MiniBlog