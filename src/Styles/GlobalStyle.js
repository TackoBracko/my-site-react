import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 18px;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color:black;
        color: #c3c3c3;
        line-height: 1.5;
        font-weight: bold;
        font-size: 1rem;
    }

    img {
        width:100%;
        max-width:100%;
    }

    a {
        text-decoration: none;
        color: #c3c3c3;
    }   

    .app-root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .app-main {
        flex-grow:1;
    }
`