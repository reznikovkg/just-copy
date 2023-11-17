export type MatrixState = {
    matrix: number[][][];
    m: number;
    n: number;
    l: number;
    currentLayer: number;
}

export enum UpdateType {
    add = 'add',
    sub = 'sub'
}

export enum Dimension {
    m = 'm',
    n = 'n',
    l = 'l'
}

export type Cell = {
    i: number,
    j: number,
    v: number
}