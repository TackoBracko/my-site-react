import style from "styled-components"

export const HeaderWrapper = style.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background-image: url(Pictures/istockphoto2.jpg);
    background-repeat:no-repeat;
    background-position:100%;

    h1:hover {
        color: #4c9e9e;
    }
`