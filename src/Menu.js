import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
    <nav>
    <ul>
    <li><NavLink exact to="SearchAnything-React/" activeClassName >Home</NavLink></li>
    <li><NavLink exact to="SearchAnything-React/services" activeClassName >Services</NavLink></li>
    <li><NavLink exact to="SearchAnything-React/about" activeClassName >About</NavLink></li>
    </ul>
    </nav>
    </>
  )
}

export default Menu
