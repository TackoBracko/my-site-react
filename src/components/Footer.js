import React from 'react'
import {FooterWrapper} from '../Styles/FooterWrapper'
import SocialButtons from './SocialButtons'

export default function Footer() {
  const isHome = window.location.pathname === '/'

  return (
    <FooterWrapper>
       {!isHome && <SocialButtons />}
      <p>Designed by Tatjana Oljača 2023 - All Rights Reserved</p>
    </FooterWrapper>
  )
}
