import {MatrixState} from "@/entities/Matrix/model/types";
import {create3dMatrix} from "@/shared/lib/util";

const DEFAULT_SIZE = 3;

export const initialState: MatrixState = {
    matrix: create3dMatrix(DEFAULT_SIZE, DEFAULT_SIZE, DEFAULT_SIZE),
    currentLayer: 0,
    m: DEFAULT_SIZE,
    n: DEFAULT_SIZE,
    l: DEFAULT_SIZE
}