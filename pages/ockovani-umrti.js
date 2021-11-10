import { OneGraph }      from '../components/OneGraph'
import Meta              from './../components/Meta' 
import { graphsConfig } from './../config/ockovaniUmrti'

export default function Home( { graphsData } ) {
    return (
        <>
            <Meta title="Covid Death Graphs Czech Republic" description="daily updated number of covid deaths" />
            {graphsData.map( (graphData, index) =>
                graphData.data && <OneGraph key={index} graphData={graphData}/>
            )}
            
            {graphsConfig.map( (graphData, index) =>
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

export const getStaticProps = async () => { 

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