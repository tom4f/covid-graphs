import { OneGraph } from './../components/OneGraph';
import { Meta } from './../components/Meta';
import { useContext } from 'react';
import { GraphsContext } from './GraphsContext';
import { Fragment } from 'react';

export const OnePage = () => {
  const graphsData = useContext(GraphsContext);

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
