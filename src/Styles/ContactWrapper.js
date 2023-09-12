import style from 'styled-components'
import { breakpoints } from '../components/BreakPoints'

export const ContactText = style.div `
    text-align: center;
    padding-bottom: 20px;
`

export const ContactAccessories = style.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Accessories = style.div `
    border: 1px solid #5a5959;
    background-color: black;
    padding: 1rem;
    text-align: center;

    @media (min-width: ${breakpoints.lg}) {
        flex: 1 1 45%;
    }

    a:hover {
        background-color:#4c9e9e;
        padding: 5px 10px;
        border-radius: 5px;
    }
`

export const Form = style.form `
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
 
`

export const InputDiv = style.input`
    color:white;
    padding: 15px;
    background-color: black;
    margin-bottom: 1rem;
    border: #5a5959 solid;
    font-size: 1rem;
`

export const TextArea = style.textarea `
    color:white;
    padding: 10px;
    background-color: black;
    margin-bottom: 1rem;
    border: #5a5959 solid;
`

export const Button = style.button `
    padding: 10px;
    background-color: black;
    color: white;
    border: #5a5959 solid;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;

    &:hover {
        background-color:#4c9e9e;
    }
`