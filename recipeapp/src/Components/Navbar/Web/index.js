import React from 'react'
import { NavLink } from 'react-router-dom'
import './web.css'

function Web() {
  return (
    <div className='web-nav-items'>
          <NavLink to='/' className="web-nav-item">Home</NavLink>
          <NavLink to='/about' className="web-nav-item" >About</NavLink>
          <NavLink to='/recipes' className="web-nav-item" >Recipes</NavLink>
          <NavLink to='/blogs' className="web-nav-item" >Blogs</NavLink>
    </div>
  )
}

export default Web