import { OnePage } from '../../components/OnePage';
import {
  getStaticPropsLogic,
  getStaticPathsLogic,
} from '../../components/GraphsProvider';

import { urlQueryType } from '../../components/TypeDefinition';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GraphsProvider } from '../../components/GraphsContext';
import { GraphsDataWithGetDataFn } from '../../components/OnePage';

const Home = ({ graphsData }: { graphsData: GraphsDataWithGetDataFn[] }) => (
  <GraphsProvider graphsData={graphsData}>
    <OnePage />
  </GraphsProvider>
);

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticPathsLogic();
};

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsLogic(context.params as urlQueryType);
};
