
import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import ModalWindowPage from "./components/pages/ModalWindowPage";
import SwitchPage from "./components/pages/SwitchPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route  path='/main' element={<MainPageComponent />}/>
            <Route  path='/acсordions' element={<AсcordionPageComponent />}/>
            <Route  path ='/modalWindow' element={<ModalWindowPage />}/>
            <Route exact path={'/switch'} element={<SwitchPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
