import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white px-5 flex items-baseline py-2 justify-between'>
      <h1>Web Logo</h1>
      <nav className='space-x-4'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

    </div>
  )
}

export default Header
