import style from 'styled-components'
import headerimg1 from './../../../Images/headerimg1.jpg'
import {breakpoints} from './../../../components/BreakPoints'

export const BlogWrapper = style.section `
    display: grid;
    grid-template-columns: 1fr;
    color: #4c9e9e;

    @media (min-width: ${breakpoints.lg}) {
        grid-template-columns: 1fr 1fr;
    }
` 

export const Splash = style.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${headerimg1});
    background-size: cover;

    @media (min-width: ${breakpoints.xs}) {
        height: 300px;
    }


    @media (min-width: ${breakpoints.md}) {
        position: sticky;
        height: calc(100vh - 90px);
    }

    @media (min-width: ${breakpoints.lg}) {
        position: sticky;
        top: 90px;
    }
`

export const Content = style.div `
    
    @media (min-width: ${breakpoints.lg}) {
        padding:30px;
        text-align:center;
    }
`

export const Text = style.div `
    @media (min-width: ${breakpoints.md}) {
        h1 {
            font-size: 50px;
        }
    }

    @media (min-width: ${breakpoints.lg}) {
        h1 {
            font-size: 50px;
        }
    }
`

export const SecondText = style.div`
    @media (min-width: ${breakpoints.lg}) {
        text-align: center;
        
        p {
            font-size: 30px;
        }
    }
`

export const BlogList = style.div`
    @media (min-width: ${breakpoints.md}) {
        padding: 40px;
    }
    
    @media (min-width: ${breakpoints.lg}) {
        padding: 40px;
    }
`