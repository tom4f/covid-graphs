import Link from 'next/link'
import footerStyles from '../styles/Footer.module.scss'

export const Footer = () => {
  return (
    <footer className = { footerStyles.footer_container } >
        <h1 className = { footerStyles.logo } >
        <Link href = 'https://tomas-blog.vercel.app' >
            Tomáš Kučera
        </Link>
        </h1>
    </footer>
  )
}