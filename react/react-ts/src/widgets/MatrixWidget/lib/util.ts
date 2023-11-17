export const convert = (v: number, m: number, n: number) => {
    const i = Math.floor(v / n);
    const j = v % n;
    return {i, j}
}