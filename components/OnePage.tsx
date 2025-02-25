import { OneGraph } from './../components/OneGraph';
import { Meta } from './../components/Meta';
import { Fragment } from 'react';
import { useGraphsContext } from './GraphsContext';

export const OnePage = () => {
  const graphsData = useGraphsContext();

  const metaDesc = graphsData
    ?.map((graphData) =>
      graphData.specific.map((oneGraphData) =>
        oneGraphData.map((oneLineData) => oneLineData.header)
      )
    )
    .join();

  return (
    graphsData && (
      <section>
        <Meta title={graphsData[0].common.title} keywords={metaDesc} />
        {graphsData?.map((graphData, index) => {
          return (
            <Fragment key={index}>
              {graphData.specific?.map((oneSpecific, index1) => (
                <OneGraph
                  key={index1}
                  graphData={{
                    ...graphData,
                    specific: oneSpecific,
                  }}
                />
              ))}
            </Fragment>
          );
        })}
      </section>
    )
  );
};

export type PureData = {
  [key: string]: number | string;
};

export type SpecificGraphType = {
  sourceField: string;
  color: string;
  style: string;
  width: number;
  header: string;
  group: number;
  lineStyle: number[];
}[];

export type LoadDataFunctionType = (
  startDate?: string,
  endDate?: string,
  index?: number
) => Promise<PureData[]>;

export type CommonDataWithGetDataFnType = {
  index: number;
  dateField: string;
  isAllDownloaded: boolean;
  url: string;
  title: string;
  navName: string;
  data?: PureData[];
  loadDataFunction?: LoadDataFunctionType;
};

export type GraphsDataWithGetDataFn = {
  common: CommonDataWithGetDataFnType;
  specific: SpecificGraphType[];
};

export type OnePageType = {
  graphsDataWithGetDataFn: GraphsDataWithGetDataFn[];
};
