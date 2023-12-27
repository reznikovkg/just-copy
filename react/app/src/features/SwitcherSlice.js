import { createSlice } from '@reduxjs/toolkit'

export const switcherSlice = createSlice({
    name: 'switcher',
    initialState: {
        value: false,
    },
    reducers: {
        toggleChange: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { toggleChange } = switcherSlice.actions

export default switcherSlice.reducer