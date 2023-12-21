import { createSlice } from '@reduxjs/toolkit'

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: {
        modals: {}
    },
    reducers: {
        closeModal: (state, action) => {
            const id = action.payload;
           delete state.modals[id];
        },
        openModal: (state, action) => {
            const { id } = action.payload;
            state.modals[id] = action.payload;
        }
    },
})

export const { openModal, closeModal, addModal } = modalWindowSlice.actions

export const modalDataByIdSelector = (id) => (state) => state.modalWindow.modals[id];

export const getModalIds = (state) => Object.values(state.modalWindow.modals).map(({id}) => id);

export default modalWindowSlice.reducer