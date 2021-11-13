import fs from 'fs'
import path from 'path'
import { OneGraph }     from './../components/OneGraph'
import Meta             from './../components/Meta' 
import { Fragment } from 'react'

export default function Home( { graphsConfig, respAll } ) {
    const respAllFulfilled = respAll.map( one => one.status === 'fulfilled' ? one.value.data : '' )
    const graphsData = respAllFulfilled.map( (value, index) => ( { data: value, ...graphsConfig[index] } ) )
    const metaDesc = graphsData.map( graph => {
        const specificHeader  = graph.specific.map(   spec => spec.header ).join( ', ' )
        const specificHeader2 = graph.specific2 ? graph.specific2.map( spec => spec.header ).join( ', ' ) : ''
        return `${specificHeader}, ${specificHeader2}`
    })

    return (
        <>
            <Meta title={ graphsData[0].common.title } description={ metaDesc.join( ', ' ) } />
            {
                graphsData.map( (graphData, index) => graphData.data && (
                        <Fragment key={index}>
                            <OneGraph key={index--} graphData={graphData}/>
                            { graphData.specific2 && <OneGraph key={index} graphData={ ( { ...graphData, specific: graphData.specific2  } ) }/> }
                        </Fragment>
                    )
                )
            }
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('config'))
    const paths = files.map((filename) => ({
      params: {
        page: filename.replace('.json', ''),
      },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps( { params: { page } } ) {

    const graphsJson = fs.readFileSync( path.join( 'config', page + '.json' ), 'utf-8' )   
    const graphsConfig = JSON.parse( graphsJson )
    const urlList = graphsConfig.map( value => value.common.url )
    const fetchList = urlList.map( url => fetch( url ).then( resp => resp.json() )  )
    const respAll = await Promise.allSettled( fetchList )  

    return {
        props: {
            graphsConfig,
            respAll
        },
        revalidate: 11,
    }
}