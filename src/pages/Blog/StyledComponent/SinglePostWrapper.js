import style from 'styled-components'

export const PostWrapper = style.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;

    p {
        text-align: justify;
        line-height: 30px;
    }
`
export const Content = style.div `
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`
    



