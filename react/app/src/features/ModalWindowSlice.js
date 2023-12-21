import { createSlice } from '@reduxjs/toolkit'

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: {
        value: false,
        message: "Вы открыли модальное окно"
    },
    reducers: {
        toggleChange: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { toggleChange } = modalWindowSlice.actions

export default modalWindowSlice.reducer