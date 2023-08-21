import style from "styled-components";

export const PortfolioWrapper = style.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    overflow-x: hidden;
    padding-bottom: 1.25rem;

`

export const PortfolioDiv = style.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const Project = style.div `
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;

    img {
        height: 300px;
        width: 40%;
    }

    &:hover img {
        transform: translateY(-5px);
        transition: all ease 0.2s;
        box-shadow: 0px 10px 20px 2px none;
    }

`

export const Text = style.div `
    width: 45%;
    padding-left: 1%;
    margin: 1%;
    margin-top: 1%;
    margin-left: 1%;
    margin-left: -40px;
    z-index: 3;
    opacity: 1;
    background: #080808;
    padding-top: 10px;
    padding-bottom: 10px;


    p {
        font-size: 16px;
    }
    
    h3 {
        padding-bottom: 15px;
        color:#4c9e9e;
    }
`

export const ProjectBtn = style.button `
    text-align: center;
    background-color: #101010;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;


    a {
        color: white;
        cursor: pointer;
    }

    &:hover {
        background-color: #4c9e9e;

    }
`

