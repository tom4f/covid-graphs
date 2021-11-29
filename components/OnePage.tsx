import { OneGraph } from './../components/OneGraph'
import { Meta }     from './../components/Meta' 
import { Fragment, useContext } from 'react'
import { specificType } from './TypeDefinition'
import { GraphsContext } from './GraphsContext'

export const OnePage = () => {

    const graphsData = useContext( GraphsContext )

    const metaDesc = graphsData.map( graph => {      

        const specificHeader  = graph.specific[0].map( (specific: specificType) => specific.header ).join( ', ' )
        return specificHeader

    })

    return (
        <>
            <Meta title={ graphsData[0].common.title } keywords={ metaDesc.join( ', ' ) } />
            {
                graphsData.map( (graphData, index) => (
                    <Fragment key={index}>          
                        {
                            graphData.specific.map( oneSpecific => 
                                <OneGraph
                                    key={index--}
                                    graphData={ ({ ...graphData, specific: oneSpecific  } ) }
                                />
                            )
                        }              
                    </Fragment>
                ))
            }
        </>
    )
}