import style from "styled-components"

export const HeaderWrapper = style.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    text-align: center;

    h1:hover {
        color: #4c9e9e;
    }
`