import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

import { SocialBtn } from '../Components/SocialBtn'
import { SocialLinks } from '../Components/SocialBtn'

export default function SocialButtons() {
  return (
    <SocialLinks>

      <SocialBtn href='#'>
          <BsLinkedin /><span>@tatjana_oljaca</span>
      </SocialBtn>

        <SocialBtn href='https://github.com/TackoBracko'>
          <BsGithub /><span>tatjana_oljaca</span>
        </SocialBtn>
      
        <SocialBtn href='#'>
          <BsTwitter /><span>tatjana_oljaca</span>
        </SocialBtn>
      
        
    </SocialLinks>
  )
}
