export type BigStyledLi = {
    isActivePath: boolean;
}

type AllPaths = {
    onePath: string;
    navName: string;
    isActivePath: boolean;
}

export type NavType = {
    allPaths: AllPaths[];
}

export type graphData = {
    [key in 'common' | 'specific' | 'specific2' | 'data']: any
}

export type OneGraphType = {
    graphData: graphData;
}

export type graphsDataType = {
    graphsData: graphData[];
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

export type showGraphType = ( canvas: any, canvas_pointer: any, graphHeight: number ) => void