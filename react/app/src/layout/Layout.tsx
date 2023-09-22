import React from "react";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={"p-5 h-full"}>
            <Outlet/>
        </div>
    )
}
