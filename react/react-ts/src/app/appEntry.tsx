import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {appRouter} from "./appRouter";
import './index.scss';
import {appStore} from "@/app/appStore";
import {Provider as ReduxProvider} from "react-redux";

export const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ReduxProvider store={appStore}>
        <RouterProvider router={appRouter}/>
    </ReduxProvider>
);
