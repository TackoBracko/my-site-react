import style from "styled-components";
import { breakpoints } from "../components/BreakPoints";

export const Project = style.div `
    margin-top: 1rem;

    &:hover img {
        transform: translateY(-5px);
        transition: all ease 0.2s;
        box-shadow: 0px 10px 20px 2px none;
    }

    @media (min-width: ${breakpoints.xs}) {
        flex-direction: column;
    }
`

export const Text = style.div `
    margin-top: 10px;
    padding-bottom: 10px;
    
    h3 {
        margin-bottom: 1rem;
        margin-left: 1rem;
        color:#4c9e9e;
    }

    p {
        margin-top: 1rem;
        margin-left: 1rem;
    }
`

export const ProjectLink = style.a `
    text-align: center;
    background-color: #101010;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 20px; 
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #4c9e9e;
    }
 
`

