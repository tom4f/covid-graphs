import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import React from 'react'

const Layout = ({ children, allPaths }) => {
  
    return (
        <div>
            <Meta />
            <Nav allPaths={allPaths} />
            { children }
            <Footer />
        </div>
    )

}

export default Layout
