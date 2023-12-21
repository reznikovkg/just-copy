import { configureStore } from '@reduxjs/toolkit'

import ModalWindowSlice from "../features/ModalWindowSlice";

export default configureStore({
    reducer: {
        modalWindow: ModalWindowSlice
    },
})