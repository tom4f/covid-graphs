import { Meta } from './Meta'
import Nav from './Nav'
import { Footer } from './Footer'
import React from 'react'
import { LayoutType } from './TypeDefinition'

export const Layout = ( { children, allPaths }: LayoutType ) => {
  
    return (
        <>
            <Meta />
            <Nav allPaths = { allPaths } />
            { children }
            <Footer />
        </>
    )

}