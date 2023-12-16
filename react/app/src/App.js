
import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import ModalWindowComponent from "./components/modalWindowComponent/modalWindowComponent";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route  path='/main' element={<MainPageComponent />}/>
            <Route  path='/acсordions' element={<AсcordionPageComponent />}/>
            <Route path = 'modalWindow' element={<ModalWindowComponent />}/>
        </Routes>
    </div>
  );
}

export default App;
