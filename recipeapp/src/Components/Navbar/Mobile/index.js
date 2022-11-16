import React from 'react'
import {GiCancel} from 'react-icons/gi';
import './mobile.css'

function Mobile({isOpen}) {
  return (
    <div className="mob-nav">
      <span className='mob-icon'>{isOpen && <GiCancel size='24px'/>}</span>
      <div className='mob-nav-items'>
        <a className="mob-nav-item" href="#home">Home</a>
        <a className="mob-nav-item" href="#about">About</a>
        <a className="mob-nav-item" href="#skills">Skills</a>
        <a className="mob-nav-item" href="#projects">Projects</a>
        <a className="mob-nav-item" href="#blogs">Blogs</a>
        <a className="mob-nav-item" href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Mobile