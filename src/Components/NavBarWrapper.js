import style from 'styled-components'
import {keyframes} from 'styled-components'

export const Nav = style.nav `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:15px;
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
    display: flex;
    gap: 1rem;
    font-size: 1.125rem;
    list-style: none;

    a {
        padding: 5px 10px;
    }

    li:last-child {
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