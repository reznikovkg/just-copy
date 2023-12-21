import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ModalWindowStore from "./store/ModalWindowStore";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={ModalWindowStore}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

