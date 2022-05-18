import React, {Component} from 'react';
import './app.css';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';
import AppMenuPages2 from '../app-menu-pages/app-menu-pages-2/app-menu-pages-2.js';
import AppMenuPages1 from '../app-menu-pages/app-menu-pages-1/app-menu-pages-1.js';

export default class App extends Component {

   render() {

       return(
           <>
               <AppMenuTop/>
               <AppMenu/>
               {/*<AppMenuPages2/>*/}
               <AppMenuPages1/>

           </>

       )
   }


}