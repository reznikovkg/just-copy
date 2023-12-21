import { createSlice } from '@reduxjs/toolkit'

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: {
        values: [false],
        message: "Вы открыли модальное окно"
    },
    reducers: {
        openModal: (state, action) => {
            state.values[action.payload] = true
        },
        closeModal: (state, action) => {
           if(action.payload !== 0) {
               state.values = state.values.slice(0, action.payload)
           } else {
               state.values[action.payload] = false
           }
        },
        addModal: (state) => {
            state.values.push(true)
        }
    },
})

export const { openModal, closeModal, addModal } = modalWindowSlice.actions

export default modalWindowSlice.reducer