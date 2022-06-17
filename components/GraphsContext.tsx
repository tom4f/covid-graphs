import React, { createContext } from 'react'
import { graphDataType, GraphsProviderType } from './TypeDefinition'

export const GraphsContext = createContext< graphDataType[] | null >( null );

export const GraphsProvider = ( { children, graphsData }: GraphsProviderType ) =>
    <GraphsContext.Provider value={graphsData}>
        { React.cloneElement( children, { graphsData } ) }
    </GraphsContext.Provider>