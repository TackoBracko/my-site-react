import style from 'styled-components'
import { breakpoints } from '../../../components/BreakPoints'

export const CardWrapper = style.div`
    @media (min-width: ${breakpoints.md}) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`
    
export const CardPost = style.div`
    @media (min-width: ${breakpoints.lg}) {
        display: flex;
        gap: 1rem;

        &:nth-child(2n + 1) {
            flex-direction: row-reverse;
        }
    }
`

export const CardImg = style.div`
    flex: 1;

    img {
        filter: drop-shadow(0 0 0.75rem white);
    }

    @media (min-width: ${breakpoints.xs}) {
        margin-top: 1rem;
    }
`

export const CardContent = style.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1, p {
        color: #c3c3c3;
    }
`

export const CardButton = style.button`
    margin: 10px 20px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: max-content;
`

/*
export const CardGrid = style.div`
    @media (min-width: ${breakpoints.md}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        margin-top: 20px;
    }

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin-top: 20px;
    }
`

export const CardWrapper = style.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
    h2 {
        font-size: 1rem ;
        color: #c3c3c3;
    }
`


`


 */