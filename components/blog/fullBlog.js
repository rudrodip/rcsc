import React from 'react'
import Link from 'next/link'

const FullBlog = ({ blog, userImg, date, author, url }) => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="w-full container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                        <div className="rounded-lg h-96 overflow-hidden">
                            {blog?.img ? <img alt="content" className="object-cover object-center h-full w-full" src={blog?.img} /> : ''}
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10 justify-center">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 inline-flex items-center justify-center text-gray-600 cursor-pointer">
                                    <Link href={`/user/${blog?.authorProfile}`}>
                                        <div className="p-4 md:p-6 text-center lg:text-left">
                                            <div className="block rounded-full shadow-xl mx-auto -mt-16 h-36 w-36 bg-cover bg-center hover:scale-105 transition ease-in-out duration-100" style={{ backgroundImage: `url('${userImg}` }}></div>
                                        </div>
                                    </Link>
                                </div>
                                {!blog ?
                                    <div className='w-full flex justify-center p-5'>
                                        <p className="lg:w-2/3 text-center text-md">Loading...</p>
                                    </div>

                                    : ''}
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">{author}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-600 font-semibold">{blog?.category}</p>
                                    <p className="text-base text-gray-400">{date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                        <h2 className="font-medium title-font mt-4 text-white text-5xl mb-5">{blog?.title}</h2>
                        {blog?.paragraphs && blog.paragraphs.map((i, index) => (
                            <React.Fragment key={index}>
                                <p className="font-normal title-font mt-8 text-cyan-300 text-xl mb-4 opacity-80">{i?.subtitle}</p>
                                <p className="leading-relaxed text-lg mb-4 whitespace-pre-line">{i?.content}</p>
                            </React.Fragment>

                        ))}
                        <div id="fb-root"></div>
                        <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small">
                            <a
                                target="_blank"
                                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                className="fb-xfbml-parse-ignore text-indigo-400 hover:bg-green-400 hover:text-black hover:scale-110 inline-flex items-center rounded-sm p-2 transition ease-in-out duration-150"
                                rel="noreferrer">
                                Share
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="E58tXvTF"></script>
        </div>
    )
}

export default FullBlog
