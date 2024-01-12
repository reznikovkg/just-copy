import { configureStore } from '@reduxjs/toolkit'

import ModalWindowSlice from "../features/ModalWindowSlice";
import CartReducer from "../store/CartSlice";
import ItemReducer from "../store/ItemsSlice";

export default configureStore({
    reducer: {
        modalWindow: ModalWindowSlice,
        cart: CartReducer,
        items: ItemReducer
    }
})