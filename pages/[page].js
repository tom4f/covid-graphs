import fs from 'fs'
import path from 'path'
import { OnePage } from './../components/OnePage'

export default function Home( { graphsConfig, graphsDataSettled } ) {
    return (
        <OnePage graphsConfig={graphsConfig} graphsDataSettled={graphsDataSettled} />
    )
}

export const getStaticPaths = async () => {
    const graphConfigFiles = fs.readdirSync( path.join( 'config' ) )
    const paths = graphConfigFiles.map( filename => ({
      params: {
        page: filename.replace( '.json', '' )
      }
    }))
    
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ( { params: { page } } ) => {
    const graphsConfigJson = fs.readFileSync( path.join( 'config', page + '.json' ), 'utf-8' )     
    const graphsConfig = JSON.parse( graphsConfigJson )
    
    const urlList = graphsConfig.map( graphConfig => graphConfig.common.url )
    const fetchList = urlList.map( url => fetch( url ).then( resp => resp.json() )  )
    const graphsDataSettled = await Promise.allSettled( fetchList )  

    return {
        props: {
            graphsConfig,
            graphsDataSettled
        },
        revalidate: 11,
    }
}