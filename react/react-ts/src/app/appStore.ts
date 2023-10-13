import {compose, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {rootReducer} from "@/app/rootReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = configureStore({
    reducer: rootReducer,
    devTools: composeEnhancers
});

setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
