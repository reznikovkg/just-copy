import HeaderComponent from "../headerComponent/headerComponent";
import {Route, Routes} from "react-router-dom";
import DepartmentsPage from "./DepartmentsPage";
import React from "react";
import NewsComponent from "../newsComponent/newsComponent";
import ItemsComponent from "../itemComponent/ItemsComponent";
import CategoriesComponent from "../CategoriesComponents/categoriesComponent";
import BestSellerComponent from "../bestSellerComponent/bestSellerComponent";
import CartPage from "./CartPage";

const StorePage = () => {
    return <div className={'store-page'}>
        <HeaderComponent/>
        <Routes >
            <Route path={'/'} element={<><NewsComponent/><CategoriesComponent/><ItemsComponent/><BestSellerComponent/></>}/>
            <Route path ='departments' element={<DepartmentsPage/>}></Route>
            <Route path='cart' element={<CartPage/>}></Route>
        </Routes>
        <div className={'footer'}/>
    </div>
}

export default StorePage