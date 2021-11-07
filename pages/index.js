import { OneGraph } from '../components/OneGraph'
import { graphsConfig } from './../config/graphsConfig'

export default function Home( { graphs } ) {
    return (
        <>
            { graphs.map( (oneGraphData, index) => oneGraphData.data && <OneGraph key={index} graphsConfig={oneGraphData}/> ) }
        </>
    )
}

export const getStaticProps = async () => { 

    const urlList = graphsConfig.map( value => value.common.url )

    const fetchList = urlList.map( url => fetch( url ).then( resp => resp.json() )  )

    const respAll = await Promise.allSettled( fetchList )

    const respAllFulfilled = respAll.map( one => {
        return one.status === 'fulfilled' ? one.value.data : false
    })

    const graphs = graphsConfig.map( (value, index) => ( { data: respAllFulfilled[index], ...value } ) )

    return {
        props: { graphs },
        revalidate: 10,
    }
}