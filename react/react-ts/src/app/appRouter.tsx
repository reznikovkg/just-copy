import {createBrowserRouter} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import {Layout} from "@/layout/Layout";
import EventPage from "@/pages/EventPage/EventPage";

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
    {
        path: '/events',
        element: <EventPage />,
    }
])