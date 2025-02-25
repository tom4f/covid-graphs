import { OnePage } from '../../components/OnePage';
import {
  getStaticPropsLogic,
  getStaticPathsLogic,
} from '../../components/GraphsProvider';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GraphsProvider } from '../../components/GraphsContext';
import { GraphsDataWithGetDataFn } from '../../components/OnePage';
import { ParsedUrlQuery } from 'querystring';

type HomeType = {
  graphsData: GraphsDataWithGetDataFn[];
};

const Home = ({ graphsData }: HomeType) => (
  <GraphsProvider graphsData={graphsData}>
    <OnePage />
  </GraphsProvider>
);

export default Home;

export const getStaticPaths: GetStaticPaths = async () => getStaticPathsLogic();

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const result = await getStaticPropsLogic(context.params as ParsedUrlQuery);
    return result.notFound ? { notFound: true } : { props: result.props ?? {} };
  } catch (error) {
    console.error('Error during data fetching:', error);
    return { notFound: true };
  }
};
