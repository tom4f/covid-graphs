import { OneGraph } from './../components/OneGraph'
import { Meta }     from './../components/Meta' 
import { Fragment, useContext } from 'react'
import { specificType } from './TypeDefinition'
import { GraphsContext } from './GraphsContext'

export const OnePage = () => {

    const graphsData = useContext( GraphsContext )

    let metaDesc = ''

    graphsData.map( graphData =>
        graphData.specific.map( oneCurve =>
            oneCurve.map( oneCurve => metaDesc += `${oneCurve.header}, `) 
        )
    )

    return (
        <>
            <Meta title={ graphsData[0].common.title } keywords={ metaDesc } />
            {
                graphsData[0].data && graphsData.map( (graphData, index) => (
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