import style from 'styled-components'

export const SocialLinks = style.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialBtn = style.a `
    cursor: pointer;
    height: 50px;
    width: 50px;
    color: #4c9e9e;
    border: #090909 solid;
    border-radius: 10px;
    background: black;
    margin: 5px;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        width: 0px;
        overflow: hidden;
        transition: 1s;
        text-align: center;
    }

    &:hover {
        width: 200px;
        border-radius: 5px;
    }

    &:hover span {
        padding: 3px;
        width: max-content;
    }

`