import React from 'react'
import Link from 'next/link'

function Navbar({ props }) {
  return (

    // props --> pages object
    <div className='main'>
      <div className='container'>
        {
          // iterating through every element in pages object and passing them in Nav_button component
          Object.keys(props).map(
            i => (
              <Nav_button name={i} link={props[i]} key={i}/>
            )
          )
        }
      </div>
    </div>
  )
}

function Nav_button(props){
  return (
    <div className='nav-button'>
      <Link href={props.link}>
        <a>{props.name}</a>
      </Link>
    </div>
  )
}

export default Navbar