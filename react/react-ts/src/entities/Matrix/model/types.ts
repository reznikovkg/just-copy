export type MatrixState = {
    matrix: number[][][];
    m: number;
    n: number;
    l: number;
    currentLayer: number;
    i_cur: number;
    R: number;
    phi_m1: number;
    tabu: number;
    step: number;
    score?: number;
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