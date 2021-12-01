import React, { createContext } from 'react'
import { graphDataType, GraphsProviderType } from './TypeDefinition'

export const defaultGraphsData: graphDataType[] = 
  [
      {
          data: [
              {
                datum: "2021-01-01",
                jip_celkem: 57,
              },
              {
                datum: "2021-01-02",
                jip_celkem: 57,
              } 
          ],
        common: {
            dateField: "datum",
            isAllDownloaded: true,

            url: "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/ockovani-jip.min.json",
            title: "Covid Vaccination Graphs Czech Republic",
            navName : "JIP",
          },
        specific: [
            [
              {
                sourceField: "jip_celkem",
                color: "red",
                style: "area",
                width: 2,
                header: "jip_celkem",
                group: 1,
                lineStyle: [],
              }
            ]
        ]
      }
  ]

export const GraphsContext = createContext< graphDataType[] >( defaultGraphsData );

export const GraphsProvider = ( { children, graphsData }: GraphsProviderType ) => {

  return(
    <GraphsContext.Provider value={graphsData}>
        { React.cloneElement( children, { graphsData } ) }
    </GraphsContext.Provider>
  )

}