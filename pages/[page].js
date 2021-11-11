import fs from 'fs'
import path from 'path'
import { OneGraph }     from './../components/OneGraph'
import Meta             from './../components/Meta' 

export default function Home( { graphsData } ) {
    return (
        <>
            <Meta title="Covid Test Graphs Czech Republic" description="daily updated covid testing" />
            { graphsData.map( (graphData, index) =>
                graphData.data && <OneGraph key={index} graphData={graphData}/>
            )}

            {graphsData.map( (graphData, index) =>
                graphData.specific2 && <OneGraph key={index} graphData={ (
                    {
                        ...graphsData[index],
                        specific: graphData.specific2
                    }
                ) }/>)
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
    
    const respAllFulfilled = respAll.map( one => one.status === 'fulfilled' ? one.value.data : false )
    const graphsData = graphsConfig.map( (value, index) => ( { data: respAllFulfilled[index], ...value } ) )

    return {
        props: { graphsData },
        revalidate: 10,
    }
}