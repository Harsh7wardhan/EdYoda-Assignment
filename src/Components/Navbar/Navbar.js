import React from 'react'
import './Navbar.css'
import {AiOutlineSearch,AiOutlineDown} from 'react-icons/ai'
import Logo from '../../assets/LOGO.png'

export const Navbar = () => {
  return (
    <nav className='navigation'>
      <div className='nav-left'>
       
        <img src={Logo} alt="EdYoda" />
        <p className='courses'>Courses <span className='icon'><AiOutlineDown/></span></p>
        <p className='programms'>Programs <span className='icon'><AiOutlineDown/></span></p>
      </div>
      <div className='nav-right'>
        <span className='search-icon'><AiOutlineSearch/></span>
        <button className='login-btn'>Log in</button>
        <button className='signup-btn'>Join Now</button>
      </div>
    </nav>
  )
}
