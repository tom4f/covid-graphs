import { OneGraph }     from '../components/OneGraph'
import { graphsConfig } from './../config/graphsConfig_hospitalizace'

export default function Home( { graphsData } ) {
    return (
        <>
            { graphsData.map( (graphData, index) =>
                graphData.data && <OneGraph key={index} graphData={graphData}/>
            )}
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