import React from 'react'
import { Link, NavLink } from 'react-router'
import About from './About'

function Home() {
  return (
    <div>
      <h1 className='text-xl'>HOME</h1>
      <nav>
        <Link to={"/about"} target='blank'>About</Link>
        <NavLink to={"/Contact"} className={({isActive}) => isActive ? "text-blue-500 font-bold" : "text-black"}>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Home
