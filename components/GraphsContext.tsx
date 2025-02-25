import React, { createContext, ReactNode, useContext } from 'react';
import { GraphsDataWithGetDataFn } from './OnePage';

export const GraphsContext = createContext<GraphsDataWithGetDataFn[] | null>(
  null
);

type GraphsProviderType = {
  children: ReactNode;
  graphsData: GraphsDataWithGetDataFn[];
};

export const GraphsProvider = ({
  children,
  graphsData,
}: GraphsProviderType) => (
  <GraphsContext.Provider value={graphsData}>{children}</GraphsContext.Provider>
);

export const useGraphsContext = () => {
  const context = useContext(GraphsContext);
  if (context === null) {
    throw new Error('useGraphsContext must be used within a GraphsProvider');
  }
  return context;
};
