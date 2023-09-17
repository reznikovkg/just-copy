import {createBrowserRouter} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import AccordionPage from "@/pages/AсcordionPage/AсcordionPage";
import {Layout} from "@/layout/Layout";
import {RatingStarsPage} from "@/pages/RatingStarsPage/RatingStarsPage";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/main',
                element: <MainPage/>,
            },
            {
                path: '/',
                element: <MainPage/>,
            },
            {
                path: '/accordions',
                element: <AccordionPage/>,
            },
            {

                path: "/ratings",
                element: <RatingStarsPage/>
            }
        ],
    },
])