import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell, Dimension} from "@/entities/Matrix/model/types";
import {initialState} from "@/entities/Matrix/model/defaultState";
import {RootState} from "@/app/appStore";
import {create3dMatrix} from "@/shared/lib/util";

export const matrixSlice = createSlice({
    name: 'matrixSlice',
    initialState,
    reducers: {
        updateToNextStep(state) {
            switch (state.step) {
                // Приведение матрицы по слоям j=1,...,m+1
                case 1: {
                    // 1. найти b
                    let b = []
                    for (let j = 0; j < state.n; j++) {
                        let b_min = state.matrix[0][j][0]
                        for (let i = 0; i < state.n; i++) {
                            for (let k = 0; k < state.l; k++) {
                                if (state.matrix[i][j][k] < b_min) {
                                    b_min = state.matrix[i][j][k];
                                }
                            }
                        }
                        b.push(b_min);
                    }

                    // 2. Привести матрицу
                    let updatedMatrix = state.matrix;
                    for (let j = 0; j < state.n; j++) {
                        for (let i = 0; i < state.n; i++) {
                            for (let k = 0; k < state.l; k++) {
                                updatedMatrix[i][j][k] = updatedMatrix[i][j][k] - b[j];
                            }
                        }
                    }
                    state.matrix = updatedMatrix;

                    // 3. Посчитать оценку
                    let score = 0;
                    for (let i = 0; i < b.length; i++) {
                        score += b[i];
                    }
                    state.score = score;

                    state.step = state.step + 1;
                    break;
                }
            }
        },
        updateMatrix(state, action: PayloadAction<Cell>) {
            const {i, j, v} = action.payload;
            let updatedMatrix = state.matrix;
            updatedMatrix[i][j][state.currentLayer] = v;
            state.matrix = updatedMatrix;
        },
        updateLayer(state, action: PayloadAction<number>) {
            state.currentLayer = state.currentLayer + action.payload;
        },
        updateDimension(state, action: PayloadAction<{ dimension: Dimension, value: number }>) {
            if (action.payload.dimension == Dimension.m) {
                state.m = state.m + action.payload.value;
            } else if (action.payload.dimension == Dimension.n) {
                state.n = state.n + action.payload.value;
            } else {
                state.l = state.l + action.payload.value;
                let t = Math.min(state.currentLayer, state.l);
                state.currentLayer = t == state.l ? t - 1 : t;
            }
            const newMatrix = create3dMatrix(state.m, state.n, state.l);
            state.matrix = newMatrix;
        }
    },
})

export const viewLayer = (state: RootState) => state.matrixSlice.matrix.map(row => row.map(col => col[state.matrixSlice.currentLayer]));
export const dimensions = (state: RootState) => {
    return {
        m: state.matrixSlice.m,
        n: state.matrixSlice.n,
        l: state.matrixSlice.l
    }
};
export const currentLayer = (state: RootState) => state.matrixSlice.currentLayer;
export const matrixSliceActions = matrixSlice.actions;
export const matrixSliceReducer = matrixSlice.reducer;