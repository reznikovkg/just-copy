import { configureStore } from '@reduxjs/toolkit'

import SwitcherSlice from "../features/SwitcherSlice";

export default configureStore({
    reducer: {
        switcher: SwitcherSlice,
    },
})