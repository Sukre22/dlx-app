import React, {Component} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';
import AppMenuPages2 from '../app-menu-pages/app-menu-pages-2/app-menu-pages-2.js';
import AppMenuPages1 from '../app-menu-pages/app-menu-pages-1/app-menu-pages-1.js';

export default class App extends Component {

   render() {

       return(
           <>
               <Router>
                   <AppMenuTop/>
                   <AppMenu/>
                   <Routes>
                       <Route path='/' element={<AppMenuPages1/>}/>
                       <Route path="/firstpage" element={<AppMenuPages2/>}/>
                   </Routes>

               </Router>

           </>

       )
   }


}