import React,{useState} from 'react'
import {TiThMenu} from 'react-icons/ti';
import Mobile from './Mobile'
import Web from './Web'
import Logo from '../../Images/yumma_logo.png'
import './navbar.css';

function Navbar() {
    const[isOpen, setIsOpen]=useState(false)
  return (
    <header className="header">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav className="menu">
            <div className="web-menu">
                <Web/>
            </div>
            <div className="mobile-menu" onClick={()=>setIsOpen(!isOpen) } >
                {isOpen && <Mobile isOpen={isOpen}/>}  
                <span className='mob-icon'>{(!isOpen) && <TiThMenu size='24px' color='#c63f7b'/>}</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;