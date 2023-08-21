import React from 'react'
import logo1 from './../Pictures/logo1.png'
import logo2 from './../Pictures/logo2.png'
import me from './../Pictures/me.jpg'

import { Grow, Nav } from '../Components/NavBarWrapper'
import { LogoWrapper } from '../Components/NavBarWrapper'
import { NavList } from '../Components/NavBarWrapper'

export default function NavBar() {
  return (
    <Nav>
      <LogoWrapper 
        href='/'><Grow><span>tatjana</span></Grow>
      </LogoWrapper>
      
      <NavList>
          <li><a href='/about'>About</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contact'>Contact</a></li>
      </NavList>
      

    </Nav>
  )
}



