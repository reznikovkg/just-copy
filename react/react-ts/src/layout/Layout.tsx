import React from "react";
import "./Layout.scss"
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={"layout"}>
            <Outlet/>
        </div>
    )
}
