import React from 'react'

const FullBlog = ({ journal }) => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="w-full container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10 justify-center">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">{journal.userId}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-600 font-semibold">{journal.category}</p>
                                    <p className="text-base text-gray-400">{journal.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <h2 className="font-medium title-font mt-4 text-white text-5xl mb-5">{journal.title}</h2>
                        {journal.paragraphs && journal.paragraphs.map((i, index) => (
                            <React.Fragment key={index}>
                                <p className="font-normal title-font mt-8 text-cyan-300 text-xl mb-4 opacity-80">{i.subtitle}</p>
                                <p className="leading-relaxed text-lg mb-4">{i.content}</p>
                            </React.Fragment>

                        ))}

                        <a className="cursor-pointer text-indigo-400 hover:bg-green-400 hover:text-black hover:scale-110 inline-flex items-center rounded-sm p-2 transition ease-in-out duration-150">
                            Share
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FullBlog