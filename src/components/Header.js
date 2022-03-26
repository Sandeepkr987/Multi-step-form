import React from 'react'
import './Header.css'

function Header() {

  return (
    <div>
    <div className='topnav'>
  <a className='active' href="#Home"><u>Home</u></a>
  <a href="#Services"><u>Services</u></a>
  <a href="#Portfolio"><u>Portfolio</u></a>
  <a href="#Team"><u>Team</u></a>
  <a href="#Blog"><u>Blog</u></a>
</div>
    </div>
  )
}

export default Header