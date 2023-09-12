import React, { useState } from 'react'

import { Grow, Nav } from '../Styles/NavBarWrapper'
import { LogoWrapper } from '../Styles/NavBarWrapper'
import { NavList } from '../Styles/NavBarWrapper'
import {HiMenu} from 'react-icons/hi'

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <Nav className={showLinks ? 'active' : '' }>
      <LogoWrapper 
        href='/'><Grow><span>tatjana</span></Grow>
      </LogoWrapper>
            
      <button onClick={() => {setShowLinks(!showLinks)}}>
        <HiMenu />
      </button>
      
      <NavList >
          <li><a href='/about'>About</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contact'>Contact</a></li>
      </NavList>

    </Nav>
  )
}



