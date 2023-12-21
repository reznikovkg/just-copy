import {compose, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {rootReducer} from "@/app/rootReducer";
import {baseApi} from "@/shared/api";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = configureStore({
    reducer: rootReducer,
    devTools: composeEnhancers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({})
        .concat([baseApi.middleware]),
});

setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
