import { configureStore } from '@reduxjs/toolkit'

import ModalWindowSlice from "../features/ModalWindowSlice";
import CartReducer from "../features/CartSlice";
import ItemReducer from "../features/ItemsSlice";

export default configureStore({
    reducer: {
        modalWindow: ModalWindowSlice,
        cart: CartReducer,
        items: ItemReducer
    }
})