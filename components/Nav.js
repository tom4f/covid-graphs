import Link from 'next/link'
import styled, { css } from 'styled-components'
import navStyles from '../styles/Nav.module.scss'


const StyledLi = styled.li`

    ${ ({isActivePath}) => isActivePath && css`
        & {
            border-top: 2px solid red;
        }
    `}

    &:hover {
        border-top: 2px solid rgba(255, 0, 0, 0.3);
    }

`

export default function Nav( { allPaths } ) {



    return (
        <header className={navStyles.nav_container} >
            
            <h1 className={navStyles.logo}>
            <span>Covid</span>Graphs
            </h1>
            
            <nav className={navStyles.nav}>
                <ul>
                    {
                        allPaths && allPaths.map( (pathData, index) => (
                            <StyledLi key={index} isActivePath={pathData.isActivePath}  >
                                <Link href={ `/${pathData.onePath}` }>{ pathData.navName }</Link>
                            </StyledLi>
                        ))
                    }
                    <li className={navStyles.aboutLi}> 
                        <Link href='https://tomas-blog.vercel.app'>About</Link>
                    </li>
                </ul>
            </nav>
        
        </header>
  )
}