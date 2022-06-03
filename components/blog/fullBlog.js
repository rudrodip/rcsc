// this is a component to render a full blog post


// importing necessary dependencies
import React from 'react'
import Link from 'next/link'


// the component gets all necessary props

const FullBlog = ({ blog, userImg, date, author, url, role }) => {

    // Description of the props  ---->>>

    // blog -> is the main blog post
    // userImg -> author's profile picture
    // date -> date of the blog posted in
    // author -> author name
    // url -> url of this blog post [used in share button]
    // role -> role of the poster


    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="w-full container px-5 py-6 lg:py-24 mx-auto flex flex-col">
                    <div className="lg:w-full mx-10">

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
                                    <div className='flex justify-center m-5'>
                                        <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                            <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                            </svg>
                                            Loading...
                                        </button>
                                    </div>

                                    : ''}


                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-bold text-lg">{author}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-white font-bold">{role}</p>
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
                                className="fb-xfbml-parse-ignore text-indigo-400 hover:bg-cyan-400 hover:text-black hover:scale-110 inline-flex items-center rounded-sm p-2 transition ease-in-out duration-150"
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



// structure of the component ->

// Blog Main Image
// Author Profile image [with link added]
// Loading indicator
// Author's Description
// Main Blog
// Share button