import './AppStyle.scss'
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent";
import AсcordionPageComponent from "./components/pages/AсcordionPageComponent";
import NotificationPageComponent from "./components/pages/NotificationPageComponent";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<MainPageComponent/>}/>
          <Route path='/main' element={<MainPageComponent/>}/>
          <Route path='/acсordions' element={<AсcordionPageComponent/>}/>
          <Route path='/notifications' element={<NotificationPageComponent/>}/>
        </Routes>
      </div>
  );
}

export default App;
