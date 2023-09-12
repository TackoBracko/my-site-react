import style from 'styled-components'
import { breakpoints } from '../components/BreakPoints'

export const LayoutWrapper = style.main `
    flex-grow: 1;
`
export const PageContainer = style.div `
    margin-left: 1rem;
    margin-right: 1rem;

    @media (min-width: ${breakpoints.lg}) {
        width: 60ch;
        margin-left: auto;
        margin-right: auto;

        &.full {
            width: 100%;
        }
    }

    .page-title {
        text-align: center;
        margin-top: 2rem;
        color: #4c9e9e;
    }

    .page-subtitle {
        text-align: center;
    }
`

