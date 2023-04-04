import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AccordionPageComponent from "./components/pages/AccordionPageComponent";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<MainPageComponent />}/>
            <Route  path='/main' element={<MainPageComponent />}/>
            <Route  path='/accordions' element={<AccordionPageComponent />}/>
        </Routes>
    </div>
  );
}

export default App;
