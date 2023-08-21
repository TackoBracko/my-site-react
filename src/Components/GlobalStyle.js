import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 1.25rem;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color:black;
        color: #c3c3c3;
        line-height: 1.5;
        font-weight: bold;
    }

    img {
        width:100%;
        max-width:100%;
    }

    a {
        text-decoration: none;
        color: white;
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