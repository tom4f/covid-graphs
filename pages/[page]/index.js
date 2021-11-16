import fs from 'fs'
import path from 'path'
import { OnePage } from '../../components/OnePage'

export default function Home( { graphsData } ) {
    return (
        <OnePage graphsData={graphsData} />
    )
}

export const getStaticProps = async ( { params: { page } } ) => {
    const graphsConfigJson = fs.readFileSync( path.join(process.cwd(), 'config', page + '.json' ), 'utf-8' )     
    const graphsConfig = JSON.parse( graphsConfigJson )
    const urlList = graphsConfig.map( graphConfig => graphConfig.common.url )
    const fetchList = urlList.map( url => fetch( url ).then( resp => resp.json() )  )
    const graphsDataSettled = await Promise.allSettled( fetchList )

    const graphsDataFulfilled = graphsDataSettled.map( onePromise =>
        onePromise.status === 'fulfilled' ? onePromise.value.data : ''
    )
    
    const graphsData = graphsDataFulfilled.map( (data, index) =>
        ( { data, ...graphsConfig[index] } )
    )
    

    //const testData = graphsDataSettled[0].value.data
    //const testDataLength = testData.length
    //console.log( testData[testDataLength - 1] )    

    return {
        props: { graphsData },
        revalidate: 30
    }
}

export const getStaticPaths = async () => {
    const graphConfigFiles = fs.readdirSync( path.join( process.cwd(), 'config' ) )
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
