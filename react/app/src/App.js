
import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import SwitchPage from "./components/pages/SwitchPage";
import SwitchReduxPage from "./components/pages/SwitchReduxPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route  path='/main' element={<MainPageComponent />}/>
            <Route  path='/acсordions' element={<AсcordionPageComponent />}/>
            <Route exact path={'/switch'} element={<SwitchPage/>}/>
            <Route exact path={'/switch-redux'} element={<SwitchReduxPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
