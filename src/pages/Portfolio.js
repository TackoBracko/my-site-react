import React from 'react'
import nycrossfit from './../Pictures/nycrossfit.png'
import quotes from './../Pictures/quotes.png'

import { PortfolioWrapper } from '../Styles/PortfolioWrapper'
import { Project } from '../Styles/PortfolioWrapper'
import { Text } from '../Styles/PortfolioWrapper'
import { ProjectLink } from '../Styles/PortfolioWrapper'

export default function Portfolio(props) {
  return (
    <>
        <h1 className='page-title'>{props.title}</h1>
        <h2 className='page-subtitle'>Checkout a few of my works</h2>

        <Project>
            <img src={nycrossfit} />
            <Text>
                <h3>My first copy/past assignment (Crossfit, NYC)</h3>
                <p>One of the things I enjoy is training. For this reason, my first task was to create a Crossfit page. The assignment was to copy the existing page as successfully as possible using my knowledge of Flexbox or Grid. </p>
                <p><ProjectLink href='https://github.com/TackoBracko/crossfit-site'>View Project</ProjectLink></p>
            </Text>
        </Project>

        <Project>
            <img src={quotes} />
            <Text>
                <h3>Saitove mudrolije</h3>
                <p>Sait is my good friend, who has unique statements or motivational quotes. Each statement came from some funny situation among friends. The statements were collected and turned into an app as a gift for his birthday. The idea was that everyone once a day has the opportunity to be enlightened by these funny statements or just to laugh and wonder. By the way, this is my first, first project. </p>
                <p><ProjectLink href='https://www.saitovemudrolije.com/'>View Project</ProjectLink></p>
            </Text>
        </Project>

    </>
  )
}
