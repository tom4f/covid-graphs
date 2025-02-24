import React, { createContext } from 'react';
import { GraphsDataWithGetDataFn } from './OnePage';
import { ReactElement } from 'react';

export const GraphsContext = createContext<GraphsDataWithGetDataFn[] | null>(
  null
);

export const GraphsProvider = ({
  children,
  graphsData,
}: GraphsProviderType) => (
  <GraphsContext.Provider value={graphsData}>
    {React.cloneElement(children, { graphsData })}
  </GraphsContext.Provider>
);

type GraphsProviderType = {
  children: ReactElement;
  graphsData: GraphsDataWithGetDataFn[];
};
