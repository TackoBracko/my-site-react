import React from 'react'
import {BsFiletypeHtml} from 'react-icons/bs'
import {BsFiletypeCss} from 'react-icons/bs'
import {RiJavascriptLine} from 'react-icons/ri'

import { MainHeader, AboutPrgh, AboutSkillset, SkillsetDiv, Skillset } from '../Styles/AboutWrapper'

export default function About(props) {
  return (
    <>
        <h1 className='page-title'>{props.title}</h1>

        <MainHeader className='app-'>
            
            <AboutPrgh>
                <p>Hi, my name is Tatjana and I'm future web developer</p>
                <p>I started this journey a year ago by quitting my old job as a kindergarden teacher to change my future.
                <abbr title="just kidding :)"> They told me that there is no big difference between kids and clients so let's try this.</abbr></p>
                <p>I enjoy working, being outdoors and drinking coffee, so this is a great combination.
                    I'm making some nice things with my knowledge of HTML and CSS and adding JavaScript to it. 
                    This place is a little part of me where I'll write about my projects, things I'm currently working on and learning. And this is just the beginning...  
                </p>
            </AboutPrgh>

        </MainHeader>

        <AboutSkillset>    
            <h4>My skillset:</h4>
            
            <SkillsetDiv>

                <Skillset>
                    <BsFiletypeHtml />
                </Skillset>

                <Skillset>
                    <BsFiletypeCss />
                </Skillset>

                <Skillset>
                    <RiJavascriptLine />
                </Skillset>
            </SkillsetDiv>

        </AboutSkillset>

    </>

  )
}
