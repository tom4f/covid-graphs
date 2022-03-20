import { Meta } from './Meta'
import Nav from './Nav'
import { Footer } from './Footer'
import React from 'react'
import { LayoutType } from './TypeDefinition'

export const Layout = ( props: LayoutType ) => {
  
    const { children, allPaths } = props

    return (
        <>
            <Meta />
            <Nav allPaths = { allPaths } />
            { children }
            <Footer />
        </>
    )

}