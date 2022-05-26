import Link from "next/link";
import Image from 'next/image'
import ProfileSVG from '../../public/svg/profile.svg'
import { useState } from "react";
import { Transition } from "@headlessui/react"
import { useRef } from "react";

const Navbar = ({ props, user, path, userProfile }) => {
  const divRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-40'>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-row">
                <Link href="/">
                  <img
                    className="h-12 w-12 cursor-pointer"
                    src="/logo/rcsc-logo.png"
                    alt="RCSC"
                  />
                </Link>
                <p className="text-xl lg:text-2xl block px-3 py-2 rounded-md font-medium">RCSC</p>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-center space-x-4">
                  {Object.keys(props).map(i => (
                    path != props[i] ? <Navbutton name={i} link={props[i]} key={i} /> : <Navbutton name={i} link={props[i]} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500" />
                  ))}
                  {user ? <ProfileButton userProfile={userProfile} /> : <Navbutton name="Login" link="/login" />}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Object.keys(props).map(i => (
                  path != props[i] ? <Navbutton name={i} link={props[i]} key={i} /> : <Navbutton name={i} link={props[i]} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500" />
                ))}
                {user ? <ProfileButton userProfile={userProfile} /> : <Navbutton name="Login" link="/login" />}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

const Navbutton = (props) => {
  return (
    <div>
      <Link href={props.link}>
        <a
          href="#"
          className={`text-gray-300 hover:bg-gray-700 ${props.classname} hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
        >
          {props.name}
        </a>
      </Link>
    </div>
  )
}

const ProfileButton = (props) => {
  return (
    <div>
      <Link href="/profile">
        <div className="p-2 md:p-2 text-center lg:text-left cursor-pointer">
          <div className="block rounded-full shadow-xl mx-auto h-10 w-10 bg-cover bg-center hover:scale-125 transition ease-in-out duration-100" style={{ backgroundImage: `url('${props.userProfile}` }}></div>
        </div>
      </Link>
    </div>
  )
}


export default Navbar