import style from 'styled-components'

export const MainHeader = style.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    h4 {
        margin-bottom: 1rem;
    }
`

export const SkillsetDiv = style.div`
    display: flex;
    gap:1rem;
`

export const Skillset = style.div `
    border:solid #4c9e9e;
    background-color: black;
    color: #4c9e9e;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2.8rem;
        height: 2.8rem;
    }

    &:hover {
        transform: translateY(-5px);
        transition: all ease 0.2s;
        box-shadow: 0px 10px 20px 2px none;
    }
`