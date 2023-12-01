import Link from 'next/link'
import styled from 'styled-components'
import navStyles from '../styles/Nav.module.scss'
import { BigStyledLi, NavType } from './TypeDefinition'

const StyledLi = styled.li< BigStyledLi >`
    ${({ $isactive }) => `
        
            border-top: 2px solid ${$isactive ? 'red' : 'transparent'};
        
    `}
    &:hover {
        border-top: 2px solid rgba(255, 0, 0, 0.3);
    }
`

export default function Nav({ allPaths }: NavType) {

    return (
        <header className={navStyles.nav_container} >
            <h1 className={navStyles.logo} >
                <span>Covid</span>Graphs
            </h1>

            <nav className={navStyles.nav} >
                <ul>
                    {
                        allPaths?.map((pathData, index) => (
                            // using '$': see https://stackoverflow.com/questions/76935768/react-does-not-recognize-the-isactive-prop-on-a-dom-element
                            <StyledLi key={index} $isactive={pathData.isActivePath} >
                                <Link href={`/${pathData.onePath}`}>{pathData.navName}</Link>
                            </StyledLi>
                        ))
                    }
                    <li className={navStyles.aboutLi} >
                        <Link href='https://tomas-blog.vercel.app'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}