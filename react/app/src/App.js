
import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import SwitchPage from "./components/pages/SwitchPage";
import ModalWindowReduxPage from "./components/pages/ModalWindowReduxPage";

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
        </Routes>
    </div>
  );
}

export default App;
