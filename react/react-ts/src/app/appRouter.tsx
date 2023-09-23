import {createBrowserRouter} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import {Layout} from "@/layout/Layout";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage/>,
            },
        ],
    },
])