import { configFiles } from '../config';
import { ParsedUrlQuery } from 'querystring';

export const getStaticPropsLogic = async (props: ParsedUrlQuery) => {
  try {
    const { page } = props;
    const graphsConfig = configFiles[page as keyof typeof configFiles];

    if (!graphsConfig) {
      return { notFound: true };
    }

    const fetchList = graphsConfig
      .map((graphConfig) => graphConfig.common)
      .filter((commonData) => commonData.url)
      .map(async (commonData) => {
        try {
          const response = await fetch(commonData.url, {
            headers: { 'Content-Type': 'application/json' },
          });
          if (!response.ok)
            throw new Error(`Failed to fetch: ${response.status}`);

          const json = await response.json();
          return json['hydra:member'] || json;
        } catch (error) {
          console.error('Fetch error:', error);
          return { error: true, message: (error as Error).message };
        }
      });

    const graphsDataSettled = await Promise.allSettled(fetchList);

    const graphsDataFulfilled = graphsDataSettled.map((result) =>
      result.status === 'fulfilled' && !result.value?.error
        ? result.value
        : null
    );

    const graphsData = graphsConfig.map((config, index) => ({
      ...config,
      common: {
        ...config.common,
        data: graphsDataFulfilled[index],
      },
    }));

    const allPaths = Object.entries(configFiles)
      .filter(([, graphs]) => graphs.length > 0)
      .map(([onePath, graphs]) => ({
        onePath,
        navName: graphs[0]?.common?.navName || 'No Graphs',
        isActivePath: onePath === page,
      }))
      .sort((a, b) => a.navName.localeCompare(b.navName));

    return { props: { graphsData, allPaths }, revalidate: 30 };
  } catch (error) {
    console.error('Error in getStaticPropsLogic:', error);
    return { notFound: true };
  }
};

export const getStaticPathsLogic = async () => {
  const paths = Object.keys(configFiles).map((key) => ({
    params: {
      page: key,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export type OnePathType = {
  onePath: string;
  navName: string;
  isActivePath: boolean;
};
