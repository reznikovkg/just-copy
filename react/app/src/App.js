import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import SwitchPage from "./components/pages/SwitchPage";
import ModalWindowReduxPage from "./components/pages/ModalWindowReduxPage";
import StorePage from "./components/pages/StorePage";
import ModalWindowPage from "./components/pages/ModalWindowPage";
import DepartmentsPage from "./components/pages/DepartmentsPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route path='/main' element={<MainPageComponent />}/>
            <Route path='/acсordions' element={<AсcordionPageComponent />}/>
            <Route path ='/modalWindow' element={<ModalWindowPage />}/>
            <Route exact path={'/switch'} element={<SwitchPage/>}/>
            <Route path ='/modalWindowRedux' element={<ModalWindowReduxPage/>}/>
            <Route path ='/store/*' element={<StorePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
