import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

export default function Nav( ) {
  return (
    <header className={navStyles.nav_container} >
        
        <h1 className={navStyles.logo}>
          <span>Covid</span>Graphs
        </h1>
        
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Start</Link>
                </li>
                <li>
                    <Link href='https://tomas-blog.vercel.app'>About me</Link>
                </li>
            </ul>
        </nav>
    
    </header>
  )
}