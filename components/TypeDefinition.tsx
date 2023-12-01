import { ReactElement } from 'react'
import { ParsedUrlQuery } from 'querystring'

export interface urlQueryType extends ParsedUrlQuery {
    page: string
}

export type BigStyledLi = {
    $isactive: boolean;
}

type onePathType = {
    onePath: string;
    navName: string;
    isActivePath: boolean;
}

export type NavType = {
    allPaths: onePathType[];
}





export type specificType = {
    sourceField: string;
    color: string;
    style: string;
    width: number;
    header: string;
    group: number;
    lineStyle: [];
}

export type commonType = {
    dateField: string
    isAllDownloaded: boolean;
    loadDataFunction?: (startDate: string, endDate: string) => Promise<pureData[]>;
    url: string;
    method: string;
    methodData: {};
    title: string;
    navName: string;
}

export type pureData = {
    [key: string]: number | string;
}

export type graphConfigType = {
    common: commonType;
    specific: (specificType[])[];
}

export type graphDataType = {
    common: commonType;
    specific: (specificType[])[];
    data: pureData[];
}

export type oneGraphDataType = {
    common: commonType;
    specific: specificType[];
    data: pureData[];
}

export type graphsDataType = {
    graphsData: graphDataType[];
}

export type OneGraphType = {
    graphData: oneGraphDataType;
}








export type allSettledType = {
    [key in 'status' | 'value' | 'reason']: any
}

export type LayoutType = {
    children: JSX.Element;
    allPaths: onePathType[];
    graphsData: graphsDataType
}

export type showGraphType = (
    canvas: HTMLCanvasElement,
    canvas_pointer: HTMLCanvasElement,
    graphHeight: number
) => void




export type MetaType = {
    title?: string;
    keywords?: string;
    description?: string;
}

export interface isAllDownloaded {
    isAllDownloaded: boolean
}

export type GraphsProviderType = {
    children: ReactElement,
    graphsData: graphDataType[]
}