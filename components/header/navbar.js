import Link from "next/link";
import Image from 'next/image'
import Logo from '../../public/logo/rcsc-logo.png'
import { useState } from "react";
import ProfileSVG from '../../public/svg/profile.svg'

const Navbar = ({ props, user }) => {

  return (
    <div className="sticky top-0 flex z-40">
      <div className="bg-gray-900 body-font flex flex-row w-full back">
        <Link href='/'>
          <a className="flex title-font font-medium items-center text-interactive mb-4 md:mb-0">
            <Image
              src={Logo}
              alt="RCSC"
              width={80}
              height={80}
            />
            <span className="ml-3 text-xl">RCSC</span>
          </a>
        </Link>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {Object.keys(props).map(i => (
              <Navbutton name={i} link={props[i]} key={i} />
            ))}
            {user.value ? <ProfileButton /> : <Navbutton name="Login" link="/login" />}
          </nav>
        </div>
      </div>
    </div>
  );
};

const Navbutton = (props) => {
  return (
    <>
      <Link href={props.link}>
        <a className="mr-5 hover:text-cyan-300">{props.name}</a>
      </Link>
    </>
  )
}

const ProfileButton = () => {
  return (
    <div>
      <Link href="/profile">
        <a className="flex justify-center content-center">
          <Image src={ProfileSVG} alt="Profile" width={30} height={30}/>
        </a>
      </Link>
    </div>
  )
}


export default Navbar