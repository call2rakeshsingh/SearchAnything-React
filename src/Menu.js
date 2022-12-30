import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
    <nav>
    <ul>
    <li><NavLink exact to="/" activeClassName >Home</NavLink></li>
    <li><NavLink exact to="/services" activeClassName >Services</NavLink></li>
    <li><NavLink exact to="/about" activeClassName >About</NavLink></li>
    </ul>
    </nav>
    </>
  )
}

export default Menu
