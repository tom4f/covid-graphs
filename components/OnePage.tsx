import { OneGraph } from './../components/OneGraph'
import { Meta }     from './../components/Meta' 
import { useContext } from 'react'
import { GraphsContext } from './GraphsContext'

export const OnePage = () => {

    const graphsData = useContext( GraphsContext )

    const metaDesc = graphsData?.map( graphData =>
        graphData.specific.map( oneGraphData =>
            oneGraphData.map( oneLineData => oneLineData.header ) 
        )
    ).join()

    return (
      graphsData &&
        <>
          <Meta title={ graphsData[0].common.title } keywords={ metaDesc } />
          {graphsData.map( graphData =>
            graphData.specific.map( (oneSpecific, index) => 
              <OneGraph
                  key={index}
                  graphData={ ({ ...graphData, specific: oneSpecific  } ) }
              />
            )
          )}
        </>
    )
}