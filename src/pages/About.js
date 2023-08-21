import React from 'react'
import Footer from './Footer'
import NavBar from '../components/NavBar'
//import istockphoto from './../Pictures/istockphoto2.jpg'
import {BsFiletypeHtml} from 'react-icons/bs'
import {BsFiletypeCss} from 'react-icons/bs'
import {RiJavascriptLine} from 'react-icons/ri'

import { MainHeader, MainWrapper, AboutPrgh, AboutSkillset, SkillsetDiv, Skillset } from '../Components/AboutWrapper'

export default function About() {
  return (
    <>
        <NavBar />

        <MainWrapper>
            <h1>So, Who am I</h1>

            <MainHeader>
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
                        <span><BsFiletypeHtml /></span>
                    </Skillset>

                    <Skillset>
                        <span><BsFiletypeCss /></span>
                    </Skillset>

                    <Skillset>
                        <span><RiJavascriptLine /></span>
                    </Skillset>
                </SkillsetDiv>

            </AboutSkillset>

        </MainWrapper>

        <Footer/>
    </>

  )
}
