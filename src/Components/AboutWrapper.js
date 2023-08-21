import style from 'styled-components'

export const MainWrapper = style.main`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
    }

`

export const MainHeader = style.div`
    display:flex;
    align-items: center;
    width:60ch;
    min-height:60vh;
    
`

export const AboutPrgh = style.div`
    abbr {
        text-decoration: none;
        font-style: italic;
    }

    :nth-child(2) {
        margin-bottom: 20px;
    }

    :first-child {
        text-align: center;
        margin-bottom: 20px;
    }

`

export const AboutSkillset = style.div `
    margin-left: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        margin-bottom: 1rem;
    }
    
`

export const SkillsetDiv = style.div`
    display: flex;
    gap:1rem;

`

export const Skillset = style.div `
    span {
        border:solid #4c9e9e;
        background-color: black;
        color: #4c9e9e;
        height: 6rem;
        width: 6rem;
        display: block;
        line-height: 7.5rem;
        font-size: 2.25rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        transform: translateY(-5px);
        transition: all ease 0.2s;
        box-shadow: 0px 10px 20px 2px none;
    }
`