import Link from "next/link";
import Image from 'next/image'
import ProfileSVG from '../../public/svg/profile.svg'
import { useState } from "react";
import { Transition } from "@headlessui/react"

const Navbar = ({ props, user, path }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    if (toggle == 'hidden') {
      setToggle('block')
    } else {
      setToggle('hidden')
    }
  }
  return (
    <div className='sticky top-0 z-40'>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img
                    className="h-12 w-12 cursor-pointer"
                    src="/logo/rcsc-logo.png"
                    alt="RCSC"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  {Object.keys(props).map(i => (
                    path != props[i] ? <Navbutton name={i} link={props[i]} key={i} /> : <Navbutton name={i} link={props[i]} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500" />
                  ))}
                  {user ? <ProfileButton /> : <Navbutton name="Login" link="/login" />}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
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
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Object.keys(props).map(i => (
                  path != props[i] ? <Navbutton name={i} link={props[i]} key={i} /> : <Navbutton name={i} link={props[i]} key={i} classname="bg-gradient-to-r from-blue-600 to-cyan-500" />
                ))}
                {user ? <ProfileButton /> : <Navbutton name="Login" link="/login" />}
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

const ProfileButton = () => {
  return (
    <div>
      <Link href="/profile">
        <a className="transition ease-in-out duration-200 hover:bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full p-2 flex justify-center content-center">
          <Image src={ProfileSVG} alt="Profile" width={30} height={30} />
        </a>
      </Link>
    </div>
  )
}


export default Navbar