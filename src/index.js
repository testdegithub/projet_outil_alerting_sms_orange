import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component_interface/navbar';
import Interface_authentification from './component_interface/interface_authentification';
import Interface_success_authentification from './component_interface/Interface_success_authentification';
import App from './component_interface/app';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import footer from './component_interface/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>
  
    
);
/* <BrowserRouter>
        <Routes>
          <Route path='/a' element=/>
        </Routes>
    </BrowserRouter> */ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

