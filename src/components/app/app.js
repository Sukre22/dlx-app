import React, {Component} from 'react';
import './app.css';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';

export default class App extends Component {

   render() {

       return(
           <>
               <AppMenuTop/>
               <AppMenu/>
           </>

       )
   }


}