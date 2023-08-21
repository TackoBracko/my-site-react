import style from 'styled-components'

export const ContactText = style.div `
    text-align: center;
    padding-bottom: 20px;

    span {
        color:#4c9e9e;
    }
`

export const ContactAccessories = style.div `
    display: flex;
    justify-content: center;
    gap:20px;
`

export const Accessories = style.div `
    border: 1px solid #5a5959;
    background-color: black;
    padding: 1.5rem;
    text-align: center;
`

export const FormWrapper = style.div `
    display: flex;
    justify-content: center;
`

export const Form = style.form `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
`

export const InputWrapper = style.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    margin-bottom: 10px;
`

export const InputDiv = style.input`
    color:white;
    padding: 10px;
    background-color: black;
    margin-bottom: 10px;
    border: #5a5959 solid;
`

export const TextArea = style.textarea `
    color:white;
    padding: 10px;
    background-color: black;
    margin-bottom: 10px;
    border: #5a5959 solid;
`

export const Button = style.button `
    padding: 12px;
    background-color: black;
    color: white;
    border: #5a5959 solid;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    width: 10rem;
    cursor: pointer;

    &:hover {
        background-color:#4c9e9e;
    }

`