
import './AppStyle.scss'

import MainPageComponent from "./components/pages/mainPageComponent/MainPageComponent";
import {Route, Routes} from "react-router-dom";
import React from "react";
import AcordionsPageComponent from "./components/pages/acordionsPageComponent/AcordionsPageComponent";
function App() {
  return (
    <div className="App">
            <Routes>
                <Route exact path='/' element={<MainPageComponent />}/>
                <Route  path='/main' element={<MainPageComponent />}/>
                <Route  path='/acordions' element={<AcordionsPageComponent />}/>
            </Routes>
    </div>
  );
}

export default App;
