import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'
import { useState } from 'react'

export default function Nav( { allPaths } ) {

    const activeStyle = (pathData) => ({
        borderTopColor: `${pathData.isActivePath ? 'red' : 'transparent'}`
    })

    return (
        <header className={navStyles.nav_container} >
            
            <h1 className={navStyles.logo}>
            <span>Covid</span>Graphs
            </h1>
            
            <nav className={navStyles.nav}>
                <ul>
                    {
                        allPaths.map( (pathData, index) => (
                            <li key={index}
                                style={ activeStyle(pathData) }
                            >
                                <Link href={ `/${pathData.onePath}` }>{ pathData.navName }</Link>
                            </li>
                        ))
                    }
                    <li>
                        <Link href='https://tomas-blog.vercel.app'>About</Link>
                    </li>
                </ul>
            </nav>
        
        </header>
  )
}