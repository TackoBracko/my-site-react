import style from 'styled-components'
import {keyframes} from 'styled-components'
import { breakpoints } from '../components/BreakPoints'

export const Nav = style.nav `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;

    button {
        background-color: #4c9e9e;
        color: #c3c3c3;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        font-size:20px;
        margin-right: 15px;

        @media (min-width: ${breakpoints.lg}){
            display: none;
        }
    }
`

export const LogoWrapper = style.a`
    span{
        font-family: 'Bellota', cursive;
        font-size: 2rem;
        padding-left: 2rem;
    }  
`

export const grow = keyframes `

    10% {
        transform: scale(2);
    }

    20% {
        transform: scale(1);
    }
`

export const Grow = style.div`
    color: #4c9e9e;
    transform: scale(1);
    animation: ${grow} 5s infinite;
`
    
export const NavList = style.ul `
    display: none;
    gap: 1rem;
    font-size: 1.125rem;
    list-style: none;
    margin-right: 1rem;

    @media (min-width: ${breakpoints.lg}) {
        display: flex;
    }

    .active & {
        display: flex;
        flex-direction: column;
        width: calc(100% - 2rem);
        position: absolute;
        top: 80px;
        background-color: #4c9e9e;
        border-radius: 5px;
        margin: 1rem;
        text-align: center;
    }

    a {
        padding: 5px 10px;
    }

    li:nth-child(3) {
        background-color: #4c9e9e; 
        border-radius: 5px;   
    }

    a:hover {
        background-color: #4c9e9e;
        border-radius: 5px;
        transition: 0.3s ease;
        padding: 5px 10px;
    }

`


