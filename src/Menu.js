import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
    <nav>
    <ul>
    <li><NavLink exact to="SearchAnything-React/"  >Home</NavLink></li>
    <li><NavLink exact to="SearchAnything-React/services"  >Services</NavLink></li>
    <li><NavLink exact to="SearchAnything-React/about"  >About</NavLink></li>
    </ul>
    </nav>
    </>
  )
}

export default Menu
