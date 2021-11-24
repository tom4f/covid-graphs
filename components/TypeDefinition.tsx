export type BigStyledLi = {
    isActivePath: boolean;
}

type onePathType = {
    onePath: string;
    navName: string;
    isActivePath: boolean;
}

export type NavType = {
    allPaths: onePathType[];
}

export type LayoutType = {
    children: JSX.Element;
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
    loadDataFunction: any;
    url: string;
    title: string;
    navName : string;  
}

export type graphConfigType = {
    common: commonType;
    specific: specificType[] ;
    specific2?: specificType[] ;
}

export type pureData = {
    [key: string]:  number | string;
}

export type graphData = {
    common: commonType;
    specific: any;
    specific2: any;
    data: pureData[];
}

export type allSettledType = {
    [key in 'status' | 'value' | 'reason']: any
}

export type OneGraphType = {
    graphData: graphData;
}

export type graphsDataType = {
    graphsData: graphData[];
}


export type showGraphType = (
    canvas: HTMLCanvasElement,
    canvas_pointer: HTMLCanvasElement,
    graphHeight: number
) => void


import { ParsedUrlQuery } from 'querystring'

export interface IParams extends ParsedUrlQuery {
    page: string
}

export type MetaType = {
    title?: string;
    keywords?: string;
    description?: string;
}