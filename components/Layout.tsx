import { Meta } from './Meta';
import Nav from './Nav';
import { Footer } from './Footer';
import React from 'react';
import { OnePathType } from './GraphsProvider';
import { JSX } from 'react';
import { GraphsDataWithGetDataFn } from './OnePage';

export const Layout = (props: LayoutType) => {
  const { children, allPaths } = props;

  return (
    <>
      <Meta />
      <Nav allPaths={allPaths} />
      {children}
      <Footer />
    </>
  );
};

type GraphsDataType = {
  graphsData: GraphsDataWithGetDataFn[];
};

type LayoutType = {
  children: JSX.Element;
  allPaths: OnePathType[];
  graphsData: GraphsDataType;
};
