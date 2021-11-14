import { OneGraph }     from './../components/OneGraph'
import Meta             from './../components/Meta' 
import { Fragment } from 'react'

export const OnePage = ( { graphsData } ) => {

    const metaDesc = graphsData.map( graph => {
        const specificHeader  = graph.specific.map(  spec => spec.header ).join( ', ' )
        if ( !graph.specific2 ) return specificHeader
        
        const specificHeader2 = graph.specific2.map( spec => spec.header ).join( ', ' )
        return `${specificHeader}, ${specificHeader2}`
    })

    return (
        <>
            <Meta title={ graphsData[0].common.title } description={ metaDesc.join( ', ' ) } />
            {
                graphsData.map( (graphData, index) => graphData.data && (
                        <Fragment key={index}>
                            <OneGraph key={index--} graphData={graphData}/>
                            { graphData.specific2 &&
                                <OneGraph
                                    key={index}
                                    graphData={ ({
                                        ...graphData,
                                        specific: graphData.specific2
                                    } ) }
                                />
                            }
                        </Fragment>
                    )
                )
            }
        </>
    )
}