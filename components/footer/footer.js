import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo/rcsc-logo.png'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-1/2 lg:w-64 flex-shrink-0 md:mx-0 mx-auto text-left">
                        <Link href='/'>
                            <a className="flex title-font font-medium items-center text-white mb-0 lg:mb-4 md:mb-0">
                                <Image
                                    src={Logo}
                                    alt="RCSC"
                                    width={50}
                                    height={50}
                                />
                                <span className="ml-3 text-xl">RCSC</span>
                            </a>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500">Rajshahi College Science Club</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <Catagories 
                            props = {
                                {'name': "Official Website",
                                'links': {
                                    'RC': 'http://rc.edu.bd/'
                                }}
                            }
                        />
                        <Catagories 
                            props = {
                                {'name': "Executives",
                                'links': {
                                    'Current Executives': '/executives',
                                    'Alumni': '/alumni'
                                }}
                            }
                        />
                        <Catagories 
                            props = {
                                {'name': "Blogs",
                                'links': {
                                    'Blogs': '/blogs'
                                }}
                            }
                        />
                        <Catagories 
                            props = {
                                {'name': "Upcoming Events",
                                'links': {
                                    'Events': '/events',
                                    'New Blogs': '/blogs'
                                }}
                            }
                        />
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© RCSC-web - developed by
                            <a href="https://github.com/rudrodip/" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@rudrodip</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href="https://facebook.com/enthusiast.math" passHref>
                                <a className="text-gray-400" target="_blank">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="fill-current hover:fill-blue-500 transition ease-in-out duration-100 hover:scale-110 w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://twitter.com/RudrodipS" passHref>
                                <a className="ml-3 text-gray-400" target="_blank">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="fill-current hover:fill-blue-400 transition ease-in-out duration-100 hover:scale-110 w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path> 
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/rudrodipsarker/" passHref>
                                <a className="ml-3 text-gray-400" target="_blank">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="hover:stroke-pink-400 transition ease-in-out duration-100 hover:scale-110 w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://linkedin.com" passHref>
                                <a className="ml-3 text-gray-400" target="_blank">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="fill-current hover:fill-cyan-400 transition ease-in-out duration-100 hover:scale-110 w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const Catagories = ({ props }) => (
    <>
        <div className="lg:w-1/4 w-1/2 px-2">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{props.name}</h2>
            <nav className="list-none mb-10">
                {Object.keys(props.links).map(i => (
                    <li key={i}>
                        <Link href={props.links[i]} key={i} passHref>
                            <a className="text-gray-400 hover:text-white" target="_blank">{i}</a>
                        </Link>
                    </li>
                ))}
            </nav>
        </div>
    </>
)

export default Footer